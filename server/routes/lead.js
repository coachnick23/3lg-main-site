import express from 'express';
import fetch from 'node-fetch';

const router = express.Router();

const STEPPER_WEBHOOK_URL =
  process.env.STEPPER_WEBHOOK_URL ||
  'https://hook.stepper.io/hook/9cc2f34666e3c60d9e51a47f739ea1d99f4247a15982372a2a30ffd3da4e42fe';

// Local fallback store when Airtable isn't configured yet — so launch day works.
const memoryLog = [];

async function writeAirtableLead(payload) {
  const { AIRTABLE_API_KEY, AIRTABLE_BASE_ID, AIRTABLE_LEADS_TABLE = 'Leads' } = process.env;
  if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID) return { configured: false };
  const res = await fetch(
    `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(AIRTABLE_LEADS_TABLE)}`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${AIRTABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        records: [
          {
            fields: {
              Email: payload.email,
              Name: payload.name || '',
              Tier: payload.tier || '',
              Source: payload.source || '',
              Extra: payload.extra ? JSON.stringify(payload.extra) : '',
              SubmittedAt: new Date().toISOString(),
            },
          },
        ],
      }),
    },
  );
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Airtable ${res.status}: ${body.slice(0, 200)}`);
  }
  return { configured: true, ok: true };
}

async function fireStepper(payload) {
  if (!STEPPER_WEBHOOK_URL) return { fired: false };
  try {
    const res = await fetch(STEPPER_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...payload, receivedAt: new Date().toISOString() }),
    });
    return { fired: true, status: res.status };
  } catch (err) {
    return { fired: false, error: err.message };
  }
}

// POST /api/lead — capture lead → Airtable + Stepper (parallel, non-blocking for the user)
router.post('/', async (req, res) => {
  try {
    const { email, name, tier, source, extra } = req.body || {};
    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return res.status(400).json({ error: 'Valid email is required.' });
    }
    const payload = { email, name, tier, source, extra };

    const [airtableResult, stepperResult] = await Promise.all([
      writeAirtableLead(payload).catch((err) => ({ configured: true, ok: false, error: err.message })),
      fireStepper(payload),
    ]);

    if (!airtableResult.configured) {
      memoryLog.push({ ...payload, at: new Date().toISOString() });
    }

    return res.json({
      ok: true,
      airtable: airtableResult,
      stepper: stepperResult,
      local: !airtableResult.configured,
    });
  } catch (err) {
    console.error('lead error:', err.message);
    return res.status(500).json({ error: err.message });
  }
});

// GET /api/lead/recent — quick debug: last 20 leads captured locally when Airtable isn't wired yet.
router.get('/recent', (_req, res) => {
  res.json({ count: memoryLog.length, leads: memoryLog.slice(-20) });
});

export default router;

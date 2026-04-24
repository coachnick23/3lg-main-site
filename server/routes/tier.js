import express from 'express';
import fetch from 'node-fetch';

const router = express.Router();

// POST /api/tier/check — body: { email } → { tier, allowed, plan }
// Used to gate downstream AI features based on the buyer's Airtable record.
router.post('/check', async (req, res) => {
  try {
    const { email } = req.body || {};
    if (!email) return res.status(400).json({ error: 'email is required' });

    const { AIRTABLE_API_KEY, AIRTABLE_BASE_ID, AIRTABLE_LEADS_TABLE = 'Leads' } = process.env;
    if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID) {
      // Open mode when Airtable isn't configured yet.
      return res.json({ tier: null, allowed: true, plan: null, source: 'unconfigured' });
    }

    const url = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(
      AIRTABLE_LEADS_TABLE,
    )}?filterByFormula=${encodeURIComponent(`LOWER({Email})='${email.toLowerCase().replace(/'/g, "\\'")}'`)}&maxRecords=1`;

    const response = await fetch(url, { headers: { Authorization: `Bearer ${AIRTABLE_API_KEY}` } });
    if (!response.ok) {
      return res.json({ tier: null, allowed: false, plan: null, source: 'airtable-error' });
    }
    const data = await response.json();
    const fields = data.records?.[0]?.fields || null;
    if (!fields) {
      return res.json({ tier: null, allowed: false, plan: null, source: 'not-found' });
    }
    const tier = fields.Tier || null;
    const plan = fields.Plan || null;
    const allowed = Boolean(tier);
    return res.json({ tier, allowed, plan, source: 'airtable' });
  } catch (err) {
    console.error('tier check error:', err.message);
    return res.status(500).json({ error: err.message });
  }
});

export default router;

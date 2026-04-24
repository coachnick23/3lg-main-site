import express from 'express';
import fetch from 'node-fetch';

const router = express.Router();

// GET /api/founding — returns { total, claimed, remaining, source }
router.get('/', async (_req, res) => {
  const {
    AIRTABLE_API_KEY,
    AIRTABLE_BASE_ID,
    AIRTABLE_FOUNDING_TABLE = 'Founding100',
    AIRTABLE_FOUNDING_TOTAL_FIELD = 'Total',
    AIRTABLE_FOUNDING_CLAIMED_FIELD = 'Claimed',
    AIRTABLE_LEADS_TABLE = 'Leads',
  } = process.env;

  // Default fallback so the page renders even before Airtable is wired.
  const fallback = { total: 100, claimed: 0, remaining: 100, source: 'default' };

  if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID) {
    return res.json({ ...fallback, source: 'unconfigured' });
  }

  try {
    // Primary strategy: a single-row counter table named AIRTABLE_FOUNDING_TABLE.
    const counterUrl = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(AIRTABLE_FOUNDING_TABLE)}?maxRecords=1`;
    const counterRes = await fetch(counterUrl, {
      headers: { Authorization: `Bearer ${AIRTABLE_API_KEY}` },
    });

    if (counterRes.ok) {
      const data = await counterRes.json();
      const fields = data.records?.[0]?.fields || null;
      if (fields) {
        const total = Number(fields[AIRTABLE_FOUNDING_TOTAL_FIELD] ?? 100);
        const claimed = Number(fields[AIRTABLE_FOUNDING_CLAIMED_FIELD] ?? 0);
        return res.json({
          total,
          claimed,
          remaining: Math.max(total - claimed, 0),
          source: 'airtable-counter',
        });
      }
    }

    // Secondary strategy: count leads with Source = 'founding-100' in the leads table.
    const countUrl = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(
      AIRTABLE_LEADS_TABLE,
    )}?filterByFormula=${encodeURIComponent("{Source}='founding-100'")}&fields[]=Email`;
    const countRes = await fetch(countUrl, {
      headers: { Authorization: `Bearer ${AIRTABLE_API_KEY}` },
    });
    if (countRes.ok) {
      const data = await countRes.json();
      const claimed = (data.records || []).length;
      return res.json({
        total: 100,
        claimed,
        remaining: Math.max(100 - claimed, 0),
        source: 'airtable-leads-count',
      });
    }

    return res.json({ ...fallback, source: 'airtable-error' });
  } catch (err) {
    console.error('founding error:', err.message);
    return res.json({ ...fallback, source: 'exception', error: err.message });
  }
});

export default router;

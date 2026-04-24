# HANDOFF — Claude Code → Manus

## What's delivered

The scaffold is functional and deployed on the Hetzner box. All 6 routes render, the Founding 100 counter fetches from the backend (falls back to 100/0 until Airtable is wired), the lead form submits to `/api/lead` which writes Airtable + fires the Stepper webhook in parallel, and tier gating (`/api/tier/check`) is stubbed.

**No inline styles** — everything is Tailwind class-based. **One file per section**. Framer Motion is installed but intentionally unused (Manus applies animations).

## Preview

- Live on Hetzner: see the URL in the chat thread
- GitHub repo: see the repo URL in the chat thread

## Manus scope (pick up from here)

1. **Final Tailwind styling** — refine spacing, type scale, card borders, shadows. Follow the section-by-section color map in the build prompt.
2. **Framer Motion** — add subtle scroll-in fades, hover lifts on the green CTAs, and a gentle pulse on the Founding 100 red counter.
3. **Typography rhythm** — tune `font-display` sizes, letter-spacing, and line-height for corporate calm.
4. **Responsive passes** — 375px / 768px / 1440px.
5. **Section bands** — alternate white / soft-gray / white where the spec calls for it.
6. **Hover states** — cards lift, borders brighten to `bright-blue`, links underline.
7. **Loading states** — the Founding 100 counter and Lead form currently show em-dashes / disabled button; upgrade to skeletons.

## Tailwind tokens (already in `client/tailwind.config.js`)

```js
'brand-blue':  '#1E3A8A'   // primary
'bright-blue': '#2563EB'   // links / hover
'brand-green': '#00A550'   // every CTA
'brand-red':   '#CC0000'   // Founding 100 counter only
'soft-gray':   '#F7F8FA'   // alt band
'body-dark':   '#1A1A1A'   // body text
'muted':       '#6B7280'   // muted text
```

## Component map

Homepage (`src/pages/Home.jsx`):
- `Hero` — white, black headline, blue sub-line, green CTA
- `PositioningStrip` — soft-gray band, 3 tier cards
- `BmsSection` — white band, 8 platform cards in 4×2 grid
- `FourteenSystems` — `brand-blue` band, white text
- `VerticalsGrid` — white band, 5 vertical cards
- `Pricing` — soft-gray band, 3 tier cards with blue tier numbers
- `Founding100` — `brand-blue` band, **red** counter (only red moment on the page), lead form

Vertical pages (`src/pages/*.jsx`) reuse `BmsSection`, `FourteenSystems`, `Pricing`, plus `VerticalHero`, `SocialProof`, `CtaFooter`.

Header + Footer are global in `App.jsx`.

## Stores

`src/store/useAppStore.js` — Zustand with persist middleware. Slices:
- `tier` + `setTier`
- `foundingTotal` / `foundingClaimed` + `fetchFounding()` (auto-called by `<Founding100 />`)
- `leadSubmitting` / `leadSubmitted` + `submitLead({ email, name, tier, source })`

## Backend wiring

`server/server.js` on port 3005. Routes:

- `POST /api/lead` — body `{ email, name?, tier?, source?, extra? }` → parallel Airtable write + Stepper webhook fire. Falls back to in-memory log when Airtable is not configured.
- `GET /api/founding` — reads single-row counter in `Founding100` table. Falls back to counting `Source='founding-100'` in `Leads` table. Falls back to `{total:100, claimed:0}`.
- `POST /api/tier/check` — body `{ email }` → looks up tier/plan in `Leads` table.

Stepper webhook URL is hardcoded as a fallback, overridable by `STEPPER_WEBHOOK_URL` env var.

## What I need from you (for 100% production)

1. **Airtable schema confirmation.** The code assumes:
   - Base: `AIRTABLE_BASE_ID` env var
   - Leads table: `Leads` with fields `Email`, `Name`, `Tier`, `Source`, `Extra`, `SubmittedAt`
   - Founding counter table: `Founding100` with fields `Total`, `Claimed` (one row)
   - Override any of those via env vars in `.env`
2. **Airtable API key** pasted into `/root/3lg-main-site/.env`
3. **DNS** — point `3levelsofgame.live` and `www.3levelsofgame.live` at `37.27.242.186`. Once that's done, run:
   ```bash
   ln -sf /etc/nginx/sites-available/3levelsofgame.live /etc/nginx/sites-enabled/3levelsofgame.live
   nginx -t && systemctl reload nginx
   certbot --nginx -d 3levelsofgame.live -d www.3levelsofgame.live
   ```
4. **Social image** — add `og.png` (1200×630) to `client/public/` for link previews.

Everything else is ready. Drop in the Airtable creds + DNS and it's live.

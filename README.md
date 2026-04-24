# 3LG Main Site

Main marketing site for 3 Levels of Game — homepage + 5 verticals, deployed to **3levelsofgame.live**.

**Tagline:** Strike The Rock Once, Then Speak.

## Stack

- React 19 + Vite + React Router
- Tailwind CSS 3 (utility-first, class-based only)
- Zustand (tier state, founding counter, lead capture)
- Framer Motion (installed — animations to be applied by Manus)
- Express backend (port 3005) for Airtable + Stepper webhook proxying
- PM2 process: `3lg-main-site`
- Nginx server name: `3levelsofgame.live`

## Structure

```
3lg-main-site/
├── client/              # React app
│   ├── src/
│   │   ├── components/  # One file per section
│   │   ├── pages/       # 6 routes: Home + 5 verticals
│   │   ├── store/       # Zustand
│   │   └── App.jsx      # Router
│   ├── public/          # robots.txt, sitemap.xml, favicon
│   ├── tailwind.config.js
│   └── vite.config.js
├── server/              # Express proxy + integrations
│   ├── server.js
│   └── routes/
│       ├── lead.js      # Airtable + Stepper webhook
│       ├── founding.js  # Founding 100 live counter
│       └── tier.js      # Tier gating check
├── nginx-3levelsofgame.live.conf
├── ecosystem.config.cjs # PM2
└── .env.example
```

## Routes

- `/` — Home
- `/home-services`
- `/real-estate`
- `/black-owned`
- `/ecommerce`
- `/food-water`

## Color Tokens (Tailwind)

| Token | Hex | Use |
|-------|-----|-----|
| `brand-blue` | `#1E3A8A` | Primary brand anchor |
| `bright-blue` | `#2563EB` | Links, secondary |
| `brand-green` | `#00A550` | All CTA buttons |
| `brand-red` | `#CC0000` | Founding 100 counter (only) |
| `soft-gray` | `#F7F8FA` | Alternating bands |
| `body-dark` | `#1A1A1A` | Body text |
| `muted` | `#6B7280` | Muted text |

## Handoff to Manus

This is the functional scaffold — wired and class-ready. Manus applies final Tailwind classes, Framer Motion animations, and aesthetic polish on top. See `HANDOFF.md` for what's stubbed vs. what needs styling.

## Local dev

```bash
# Install
cd client && npm install
cd ../server && npm install

# Dev (two terminals)
cd client && npm run dev        # Vite on :5173
cd server && npm run dev        # Express on :3005

# Production build
cd client && npm run build
pm2 restart 3lg-main-site
```

## Environment variables (see `.env.example`)

- `AIRTABLE_API_KEY`
- `AIRTABLE_BASE_ID`
- `AIRTABLE_LEADS_TABLE` (default: `Leads`)
- `AIRTABLE_FOUNDING_TABLE` (default: `Founding100`)
- `STEPPER_WEBHOOK_URL` (hardcoded fallback to the 3LG webhook)
- `ANTHROPIC_API_KEY` (for downstream AI-tier gating; optional at launch)
- `PORT` (default: 3005)

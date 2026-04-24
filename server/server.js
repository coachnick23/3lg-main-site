import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import leadRoutes from './routes/lead.js';
import foundingRoutes from './routes/founding.js';
import tierRoutes from './routes/tier.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3005;

app.use(cors());
app.use(express.json({ limit: '2mb' }));

// ─── Health ───
app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    service: '3lg-main-site',
    airtable: Boolean(process.env.AIRTABLE_API_KEY && process.env.AIRTABLE_BASE_ID),
    stepper: Boolean(process.env.STEPPER_WEBHOOK_URL),
    timestamp: new Date().toISOString(),
  });
});

// ─── API routes ───
app.use('/api/lead', leadRoutes);
app.use('/api/founding', foundingRoutes);
app.use('/api/tier', tierRoutes);

// ─── Static + SPA fallback ───
const distDir = join(__dirname, '..', 'client', 'dist');
app.use(express.static(distDir));
app.get('*', (_req, res) => {
  res.sendFile(join(distDir, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`\n  ╔══════════════════════════════════════╗`);
  console.log(`  ║   3LG Main Site — Server Active      ║`);
  console.log(`  ║   Port: ${PORT}                          ║`);
  console.log(`  ║   Domain: 3levelsofgame.live         ║`);
  console.log(`  ╚══════════════════════════════════════╝\n`);
});

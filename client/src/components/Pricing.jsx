import { useAppStore } from '../store/useAppStore';

const TIERS = [
  { id: 'L1', num: '1', name: 'Level 1', setup: '$500–$1,250', monthly: '$250–$1,000/mo' },
  { id: 'L2', num: '2', name: 'Level 2', setup: '$2K–$5K', monthly: '$1,500–$2,500/mo' },
  { id: 'L3', num: '3', name: 'Level 3', setup: '$5K–$20K', monthly: '$5,000+/mo' },
];

export default function Pricing() {
  const setTier = useAppStore((s) => s.setTier);

  return (
    <section id="pricing" className="bg-soft-gray section-pad">
      <div className="container-tight">
        <h2 className="font-display tracking-display text-3xl md:text-5xl text-body-dark text-center">
          Simple Tiers
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TIERS.map((t) => (
            <div key={t.id} className="card p-8 flex flex-col">
              <div className="font-display tracking-display text-7xl text-bright-blue leading-none">
                {t.num}
              </div>
              <div className="mt-4 font-display tracking-display text-2xl text-body-dark">{t.name}</div>
              <div className="mt-4 text-sm text-muted">
                <div>Setup: {t.setup}</div>
                <div>{t.monthly}</div>
              </div>
              <a
                href="#founding-100"
                onClick={() => setTier(t.id)}
                className="btn-green mt-8 text-sm self-start"
              >
                Start
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

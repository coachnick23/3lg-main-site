import { useAppStore } from '../store/useAppStore';

const TIERS = [
  { id: 'L1', label: 'Level 1' },
  { id: 'L2', label: 'Level 2' },
  { id: 'L3', label: 'Level 3' },
];

export default function PositioningStrip() {
  const setTier = useAppStore((s) => s.setTier);
  return (
    <section className="bg-soft-gray section-pad">
      <div className="container-tight text-center">
        <h2 className="font-display tracking-display text-3xl md:text-5xl text-body-dark">
          Built For Every Level.
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {TIERS.map((t) => (
            <div key={t.id} className="card card-hover p-8 flex flex-col items-center">
              <div className="font-display tracking-display text-2xl text-bright-blue">{t.label}</div>
              <a
                href="#pricing"
                onClick={() => setTier(t.id)}
                className="btn-green mt-6 text-sm"
              >
                Explore
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useEffect } from 'react';
import { useAppStore } from '../store/useAppStore';
import LeadForm from './LeadForm';

export default function Founding100() {
  const total = useAppStore((s) => s.foundingTotal);
  const claimed = useAppStore((s) => s.foundingClaimed);
  const loading = useAppStore((s) => s.foundingLoading);
  const fetchFounding = useAppStore((s) => s.fetchFounding);

  useEffect(() => {
    fetchFounding();
  }, [fetchFounding]);

  const remaining = Math.max(total - claimed, 0);

  return (
    <section id="founding-100" className="bg-brand-blue text-white section-pad">
      <div className="container-tight text-center">
        <div className="eyebrow text-white/70">The Offer</div>
        <h2 className="mt-3 font-display tracking-display text-4xl md:text-6xl text-white">
          Founding 100
        </h2>
        <div className="mt-8 font-display tracking-display text-7xl md:text-9xl text-brand-red leading-none">
          {loading ? '—' : remaining}
        </div>
        <p className="mt-3 font-display tracking-display text-xl text-white/80">
          of {total} Remaining · <span className="font-mono text-xs tracking-[0.2em] uppercase">Live</span>
        </p>

        <div className="mt-12 max-w-xl mx-auto">
          <LeadForm source="founding-100" ctaLabel="Claim Your Spot" />
        </div>
      </div>
    </section>
  );
}

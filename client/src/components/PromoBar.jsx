// Black Friday bar at the very top of the E-Commerce page: sends store owners into the
// Just Speak Studio funnel (no-login store builder demo). Copy and link are overridable at build time.
const BLACK_FRIDAY = new Date('2026-11-27T00:00:00');
const HREF = import.meta.env.VITE_PROMO_URL || 'https://studio.3levelsofgame.com/demo';
const TEXT = import.meta.env.VITE_PROMO_TEXT || 'Black Friday is Nov 27. Get your store built and ready to sell before it hits.';
const CTA = import.meta.env.VITE_PROMO_CTA || 'Build My Store Free';

function daysLeft(now = new Date()) {
  return Math.ceil((BLACK_FRIDAY - now) / 86_400_000);
}

export default function PromoBar() {
  const days = daysLeft();
  if (days < 0) return null;
  return (
    <div className="bg-body-dark text-white" data-testid="promo-bar">
      <div className="container-tight flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 py-2.5 text-sm text-center">
        <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-brand-green">
          {days === 0 ? 'Black Friday is today' : `${days} day${days === 1 ? '' : 's'} to Black Friday`}
        </span>
        <span>{TEXT}</span>
        <a href={HREF} className="inline-flex items-center px-4 py-1.5 rounded-md font-bold bg-brand-green hover:bg-[#008F45] transition-all">
          {CTA} →
        </a>
      </div>
    </div>
  );
}

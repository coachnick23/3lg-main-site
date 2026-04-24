import { Link } from 'react-router-dom';

const LINKS = [
  { to: '/home-services', label: 'Home Services' },
  { to: '/real-estate', label: 'Real Estate' },
  { to: '/black-owned', label: 'Black-Owned Businesses' },
  { to: '/ecommerce', label: 'E-Commerce' },
  { to: '/food-water', label: 'Food & Water' },
  { to: '/', label: 'Platform' },
];

export default function Footer() {
  return (
    <footer className="bg-body-dark text-white">
      <div className="container-tight py-14 grid gap-10 md:grid-cols-2">
        <div>
          <div className="flex items-center gap-2">
            <span className="font-display tracking-display text-3xl text-white">3LG</span>
            <span className="font-mono text-[10px] tracking-[0.2em] text-bright-blue uppercase">
              3 Levels of Game
            </span>
          </div>
          <p className="mt-4 font-display tracking-display text-xl text-white/90 max-w-sm">
            Strike The Rock Once, Then Speak.
          </p>
          <a href="#founding-100" className="btn-green mt-6 text-sm">
            Contact Front Desk
          </a>
        </div>
        <div>
          <div className="eyebrow text-bright-blue mb-4">Verticals & Platform</div>
          <ul className="grid grid-cols-2 gap-y-2">
            {LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-bright-blue hover:underline text-sm">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-tight py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <div className="font-mono text-[10px] tracking-[0.2em] text-white/40 uppercase">
            © 3 Levels of Game · All rights reserved
          </div>
          <div className="font-mono text-[10px] tracking-[0.2em] text-white/40 uppercase">
            3levelsofgame.live
          </div>
        </div>
      </div>
    </footer>
  );
}

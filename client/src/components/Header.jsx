import { Link, NavLink } from 'react-router-dom';

const VERTICALS = [
  { to: '/home-services', label: 'Home Services' },
  { to: '/real-estate', label: 'Real Estate' },
  { to: '/black-owned', label: 'Black-Owned Businesses' },
  { to: '/ecommerce', label: 'E-Commerce' },
  { to: '/food-water', label: 'Food & Water' },
  { to: '/tennis', label: 'Coaching & Academies' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-200">
      <div className="container-tight flex items-center h-16">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-display tracking-display text-2xl text-brand-blue">3LG</span>
          <span className="hidden md:inline font-mono text-[10px] tracking-[0.2em] text-muted uppercase">
            3 Levels of Game
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-5 ml-8">
          {VERTICALS.map((v) => (
            <NavLink
              key={v.to}
              to={v.to}
              className={({ isActive }) =>
                `text-[13px] whitespace-nowrap hover:text-bright-blue transition-colors ${isActive ? 'text-bright-blue font-semibold' : 'text-body-dark'}`
              }
            >
              {v.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex-1" />

        <a href="#founding-100" className="btn-green text-sm hidden sm:inline-flex whitespace-nowrap">
          Claim Your Spot
        </a>
      </div>
    </header>
  );
}

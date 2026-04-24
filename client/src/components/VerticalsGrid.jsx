import { Link } from 'react-router-dom';

const VERTICALS = [
  { to: '/home-services', name: 'Home Services' },
  { to: '/real-estate', name: 'Real Estate' },
  { to: '/black-owned', name: 'Black-Owned Businesses' },
  { to: '/ecommerce', name: 'E-Commerce' },
  { to: '/food-water', name: 'Food & Water' },
];

export default function VerticalsGrid() {
  return (
    <section className="bg-white section-pad">
      <div className="container-tight">
        <h2 className="font-display tracking-display text-3xl md:text-5xl text-body-dark text-center">
          Who We Serve
        </h2>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {VERTICALS.map((v) => (
            <Link
              key={v.to}
              to={v.to}
              className="card card-hover p-6 flex flex-col items-start group"
            >
              <h3 className="font-display tracking-display text-xl text-body-dark group-hover:text-bright-blue transition-colors">
                {v.name}
              </h3>
              <span className="btn-green mt-5 text-sm self-start">Enter</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

const SYSTEMS = [
  'Front Desk',
  'Financial Center',
  'Home Office',
  'Email & Text Center',
  'Command Center',
  'Squad',
  'Meet',
  'Vision',
  'Video Command',
  'Funnel Builder',
  'Lead Intake',
  'Calendar & Booking',
  'Knowledge Base',
  'Reputation',
];

export default function FourteenSystems() {
  return (
    <section className="bg-brand-blue text-white section-pad">
      <div className="container-tight text-center">
        <h2 className="font-display tracking-display text-3xl md:text-5xl text-white">
          14 Systems. Day 1.
        </h2>
        <ul className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-4 max-w-4xl mx-auto">
          {SYSTEMS.map((s, i) => (
            <li key={s} className="flex items-center">
              <span className="text-base md:text-lg text-white/90">{s}</span>
              {i < SYSTEMS.length - 1 && <span className="ml-8 text-white/20">·</span>}
            </li>
          ))}
        </ul>
        <div className="mt-12">
          <a href="#platform" className="btn-green-lg">See Every System</a>
        </div>
      </div>
    </section>
  );
}

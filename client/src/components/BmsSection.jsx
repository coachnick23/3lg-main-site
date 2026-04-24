const DEFAULT_CARDS = [
  { id: 'front-desk', name: '3LG Front Desk', blurb: 'Your AI assistant across all 14 systems.' },
  { id: 'financial', name: '3LG Financial Center', blurb: 'Money tracked. Money managed.' },
  { id: 'home-office', name: '3LG Home Office', blurb: 'The complete digital workspace.' },
  { id: 'email-text', name: 'Email & Text Center', blurb: 'Every message the business sends.' },
  { id: 'command', name: 'Command Center', blurb: 'Talk, type, upload to every system.' },
  { id: 'squad', name: '3LG Squad', blurb: 'Project management with AI execution.' },
  { id: 'meet', name: '3LG Meet', blurb: 'The meeting platform that thinks and acts.' },
  { id: 'vision', name: '3LG Vision', blurb: 'Where the dream becomes real.' },
];

export default function BmsSection({ heading = 'The Platform', cards = DEFAULT_CARDS }) {
  return (
    <section id="platform" className="bg-white section-pad">
      <div className="container-tight">
        <h2 className="font-display tracking-display text-3xl md:text-5xl text-body-dark text-center">
          {heading}
        </h2>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <article key={c.id} className="card card-hover p-6 flex flex-col h-full">
              <h3 className="font-display tracking-display text-xl text-body-dark">{c.name}</h3>
              <p className="mt-3 text-sm text-muted flex-1">{c.blurb}</p>
              <a href="#founding-100" className="btn-green mt-5 text-sm self-start">
                Learn More
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

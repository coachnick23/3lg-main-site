export default function VerticalHero({ headline, subline }) {
  return (
    <section className="bg-white section-pad">
      <div className="container-tight text-center">
        <h1 className="h-display text-body-dark">{headline}</h1>
        <p className="mt-6 text-lg md:text-xl text-bright-blue max-w-2xl mx-auto">{subline}</p>
        <div className="mt-10">
          <a href="#founding-100" className="btn-green-lg">Start 14-Day Trial</a>
        </div>
      </div>
    </section>
  );
}

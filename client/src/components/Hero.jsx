export default function Hero() {
  return (
    <section className="bg-white section-pad">
      <div className="container-tight text-center">
        <h1 className="h-display text-body-dark">
          Strike The Rock Once,
          <br className="hidden md:block" />
          <span>Then Speak.</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-bright-blue max-w-2xl mx-auto">
          The complete business infrastructure layer.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#founding-100" className="btn-green-lg">Start 14-Day Trial</a>
          <a href="#platform" className="btn-ghost">See The Platform</a>
        </div>
      </div>
    </section>
  );
}

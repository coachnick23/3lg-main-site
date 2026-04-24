export default function CtaFooter() {
  return (
    <section className="bg-brand-blue text-white section-pad">
      <div className="container-tight text-center">
        <h2 className="font-display tracking-display text-3xl md:text-5xl text-white">
          Ready to run your business like it's already winning?
        </h2>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#founding-100" className="btn-green-lg">Start Trial</a>
          <a href="#founding-100" className="btn-ghost border-white text-white hover:bg-white hover:text-brand-blue">
            Book Strategy Call
          </a>
        </div>
      </div>
    </section>
  );
}

export default function SocialProof() {
  return (
    <section className="bg-white section-pad">
      <div className="container-tight">
        <div className="eyebrow text-center">Results</div>
        <h2 className="mt-3 font-display tracking-display text-3xl md:text-5xl text-body-dark text-center">
          Proof Lives Here
        </h2>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <article key={i} className="card p-6 flex flex-col">
              <div className="eyebrow">Case study · placeholder {i}</div>
              <p className="mt-3 text-sm text-muted flex-1">
                Testimonials, case studies, and reputation data load here. Reserved for Manus styling + real content.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Testimonials() {
    return (
        <section id="testimonials-case-studies" className="py-28 border-b border-zinc-900">

        <div className="max-w-7xl mx-auto px-6">

          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Case Studies
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-6">
            Real Organizational Transformation
          </h2>

          <div className="grid lg:grid-cols-3 gap-8 mt-16">

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10">
              <h3 className="text-2xl font-bold">
                Leadership Transformation
              </h3>

              <p className="text-zinc-400 leading-relaxed mt-6">
                Improved executive alignment, stronger team culture, and
                mission-driven decision making through leadership
                transformation frameworks.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10">
              <h3 className="text-2xl font-bold">
                Business Reinvention
              </h3>

              <p className="text-zinc-400 leading-relaxed mt-6">
                Strategic reinvention guidance for organizations navigating
                digital disruption and AI transformation.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10">
              <h3 className="text-2xl font-bold">
                Ethical Framework
              </h3>

              <p className="text-zinc-400 leading-relaxed mt-6">
                Governance and accountability systems that strengthened trust,
                stewardship, and organizational credibility.
              </p>
            </div>

          </div>

        </div>

      </section>
    )
}
import Reveal from "../../../Components/Reveal"

export default function Testimonials() {
  return (
    <section id="testimonials-case-studies" className="py-16 sm:py-20 lg:py-24 border-b border-zinc-800/60 relative overflow-hidden scroll-mt-16">

      <img src="/media/casestudy.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />

      <div className="absolute inset-0 bg-linear-to-b from-zinc-950/95 via-black/85 to-zinc-950/95" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">

        <Reveal className="max-w-3xl">

          <span className="eyebrow">
            Case Studies
          </span>

          <h2 className="heading-2 mt-5">
            Real Organizational Transformation
          </h2>

        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mt-10 sm:mt-12">

          {[
            {
              title: "Leadership Transformation",
              desc: "Improved executive alignment, stronger team culture, and mission-driven decision making through leadership transformation frameworks.",
            },
            {
              title: "Business Reinvention",
              desc: "Strategic reinvention guidance for organizations navigating digital disruption and AI transformation.",
            },
            {
              title: "Ethical Framework",
              desc: "Governance and accountability systems that strengthened trust, stewardship, and organizational credibility.",
            },
          ].map((item, index) => (

            <Reveal key={item.title} delay={index * 0.08} className="h-full">

              <div className="group h-full rounded-2xl border border-zinc-800 bg-zinc-900/80 backdrop-blur-sm p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">

                <span className="font-display text-sm font-bold text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="text-lg font-semibold tracking-tight mt-3">
                  {item.title}
                </h3>

                <p className="text-sm text-zinc-400 leading-relaxed mt-3">
                  {item.desc}
                </p>

              </div>

            </Reveal>

          ))}

        </div>

      </div>

    </section>
  )
}

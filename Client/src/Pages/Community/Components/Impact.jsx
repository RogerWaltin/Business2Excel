import Reveal from "../../../Components/Reveal"

const impactStats = [
  {
    number: "500+",
    label: "Kingdom Leaders",
  },
  {
    number: "100+",
    label: "Strategic Partnerships",
  },
  {
    number: "50+",
    label: "Mission Initiatives",
  },
  {
    number: "200+",
    label: "Transformation Stories",
  },
]

export default function CommunityImpact() {
  return (
    <section
      id="impact"
      className="scroll-mt-16 py-16 sm:py-20 lg:py-24 border-b border-zinc-800/60"
    >

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left Side */}
          <Reveal>

            <span className="eyebrow">
              Our Impact
            </span>

            <h2 className="heading-2 mt-5">
              Connection That Leads to <span className="text-primary">Impact</span> & Transformation
            </h2>

            <p className="body-text mt-6">
              The Business2excel ecosystem exists to unite entrepreneurs,
              executives, consultants, investors, and ministry leaders around
              a shared vision of Kingdom-centered business transformation.
            </p>

            <p className="body-text mt-4">
              Through strategic relationships, collaboration opportunities,
              mission initiatives, and transformational stories, we are
              building a movement that influences industries, communities,
              and nations.
            </p>



          </Reveal>

          {/* Right Side */}
          <div className="grid grid-cols-2 gap-3.5 sm:gap-5">

            {impactStats.map((stat, index) => (

              <Reveal key={stat.label} delay={index * 0.07} className="h-full">

                <div
                  className="group card h-full p-5 sm:p-7 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
                >

                  <h3 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-primary">
                    {stat.number}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-400 mt-2.5 font-medium">
                    {stat.label}
                  </p>

                </div>

              </Reveal>

            ))}

          </div>

        </div>

      </div>

    </section>
  )
}

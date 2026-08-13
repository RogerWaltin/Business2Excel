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

export default function CommunityImpact({ color1, color2 }) {
  return (
    <section
      id="impact"
      className="scroll-mt-24 py-28 border-b border-zinc-900"
    >

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left Side */}
          <div>

            <h2 className="text-4xl md:text-5xl font-bold mt-6">
              Connection That Leads to <span className={`text-${color1}`}>Impact</span> & Transformation
            </h2>

            <p className="text-zinc-400 text-lg leading-relaxed mt-8">
              The Business2Excel ecosystem exists to unite entrepreneurs,
              executives, consultants, investors, and ministry leaders around
              a shared vision of Kingdom-centered business transformation.
            </p>

            <p className="text-zinc-400 text-lg leading-relaxed mt-6">
              Through strategic relationships, collaboration opportunities,
              mission initiatives, and transformational stories, we are
              building a movement that influences industries, communities,
              and nations.
            </p>



          </div>

          {/* Right Side */}
          <div className="grid md:grid-cols-2 gap-6">

            {impactStats.map((stat) => (

              <div
                key={stat.label}
                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 text-center"
              >

                <h3 className={`text-5xl font-bold text-${color1}`}>
                  {stat.number}
                </h3>

                <p className="text-zinc-400 mt-4">
                  {stat.label}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  )
}


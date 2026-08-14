export default function KingdomTransformationFramework({ color1, color2 }) {
  const serviceCards = [
    {
      title: "Kingdom Certification",
      description: "Ethical validation and accountability for Kingdom-centered organizations.",
      image: "/media/certificate.jpg"
    },
    {
      title: "Strategic Consulting",
      description: "Navigate disruption, innovation, growth, and AI-age transformation.",
      image: "/media/consulting.jpg"
    },
    {
      title: "Leadership Transformation",
      description: "Develop culture, governance, mission clarity, stewardship, and influence.",
      image: "/media/simu-lui-leader.webp"
    },
    {
      title: "Business as Mission",
      description: "Advance Kingdom impact through purpose-driven enterprise and marketplace ministry.",
      image: "/media/mission.jpg"
    },
  ]

  return (
    <section id="kingdom-transformation-framework" className="py-20 border-b border-zinc-900">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left Side */}
          <div>

            <h2 className="text-4xl md:text-5xl font-bold mt-6">
              A Kingdom Blueprint For
              <span className="text-primary block">
                Business Transformation
              </span>
            </h2>

            <p className="text-zinc-400 text-lg leading-relaxed mt-8">
              Our framework integrates wisdom, ethical leadership,
              strategic consulting, organizational transformation, and Kingdom
              impact into a practical pathway for leaders and organizations
              navigating modern challenges.
            </p>

            <p className="text-zinc-400 text-lg leading-relaxed mt-6">
              Rather than treating business, leadership, innovation, and
              mission as separate disciplines, we bring them together into a
              unified transformation model designed for long-term influence.
            </p>

            {/* <button className="mt-10 bg-secondary hover:bg-primary text-black font-semibold px-6 py-3 rounded-xl transition-all duration-300 cursor-pointer">
              Explore Framework
            </button> */}

          </div>

          {/* Right Side */}
          <div className="grid md:grid-cols-2 gap-6">

            {serviceCards.map((card) => (

              <div
                key={card.title}
                className="relative overflow-hidden bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-secondary/30 transition-all duration-300"
              >

                {/* Background Image */}

                <img
                  src={card.image}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Dark Overlay */}

                <div className="absolute inset-0 bg-black/70" />

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold">
                    {card.title}
                  </h3>
                  <p className="text-zinc-200 mt-4 leading-relaxed">
                    {card.description}
                  </p>
                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  )
}


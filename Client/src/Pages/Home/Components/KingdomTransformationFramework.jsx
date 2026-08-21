import Reveal from "../../../Components/Reveal"

export default function KingdomTransformationFramework() {
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
      image: "/media/leadership.jpg"
    },
    {
      title: "Business as Mission",
      description: "Advance Kingdom impact through purpose-driven enterprise and marketplace ministry.",
      image: "/media/mission.jpg"
    },
  ]

  return (
    <section id="kingdom-transformation-framework" className="py-16 sm:py-20 lg:py-24 border-b border-zinc-800/60">

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left Side */}
          <Reveal>

            <span className="eyebrow">
              Our Framework
            </span>

            <h2 className="heading-2 mt-5">
              A Kingdom Blueprint For
              <span className="text-primary block">
                Business Transformation
              </span>
            </h2>

            <p className="body-text mt-6">
              Our framework integrates wisdom, ethical leadership,
              strategic consulting, organizational transformation, and Kingdom
              impact into a practical pathway for leaders and organizations
              navigating modern challenges.
            </p>

            <p className="body-text mt-4">
              Rather than treating business, leadership, innovation, and
              mission as separate disciplines, we bring them together into a
              unified transformation model designed for long-term influence.
            </p>

            {/* <button className="mt-10 bg-secondary hover:bg-primary text-black font-semibold px-6 py-3 rounded-xl transition-all duration-300 cursor-pointer">
              Explore Framework
            </button> */}

          </Reveal>

          {/* Right Side */}
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">

            {serviceCards.map((card, index) => (

              <Reveal key={card.title} delay={index * 0.08} className="h-full">
                <div
                  className="image-card group h-full min-h-48 transition-colors duration-300 hover:border-secondary/40"
                >

                  {/* Background Image */}

                  <img
                    src={card.image}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Dark Overlay */}

                  <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/60 to-black/30" />

                  <div className="relative z-10 p-5 sm:p-6">
                    <h3 className="text-lg font-semibold tracking-tight">
                      {card.title}
                    </h3>
                    <p className="text-sm text-zinc-300 mt-2 leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                </div>
              </Reveal>

            ))}

          </div>

        </div>

      </div>

    </section>
  )
}

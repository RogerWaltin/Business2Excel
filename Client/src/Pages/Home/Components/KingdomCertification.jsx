import { Link } from "react-router-dom"

const certificationBenefit = [
  "Build Customer Trust",
  "Leadership Accountability",
  "Faith & Operations Alignment",
  "Community Recognition",
  "Governance Excellence",
  "Kingdom Impact",
]

const certificationJourney = [
  "Application",
  "Assessment",
  "Strategy Review",
  "Leadership Evaluation",
  "Certification",
  "Ongoing Governance",
]

export default function KingdomCertification() {
  return (
    <section id="kingdom-certification" className="py-16 border-b border-zinc-900">

      <div className="max-w-7xl mx-auto px-6">

        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-3xl md:text-5xl font-bold">
            The Kingdom Certification Framework
          </h2>

          <p className="text-zinc-400 text-base md:text-lg leading-relaxed mt-8">
            More than a credential, Kingdom Certification provides a pathway
            toward ethical excellence, leadership accountability,
            organizational trust, and Kingdom-centered impact.
          </p>

        </div>

        {/* Benefits & Journey */}

        <div className="grid lg:grid-cols-2 gap-8 mt-16 max-w-5xl mx-auto">

          {/* What You Gain */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

            <span className="text-primary uppercase tracking-wider text-sm">
              What You Gain
            </span>

            <div className="space-y-4 mt-8">

              {certificationBenefit.map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-4 border-b border-zinc-800 pb-4 last:border-0 last:pb-0"
                >

                  <span className="text-primary font-bold min-w-6">
                    ✓
                  </span>

                  <span className="font-medium">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </div>

          {/* Certification Journey */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

            <span className="text-primary uppercase tracking-wider text-sm">
              Certification Journey
            </span>

            <div className="space-y-4 mt-8">

              {certificationJourney.map((item, index) => (

                <div
                  key={item}
                  className="flex items-center gap-4 border-b border-zinc-800 pb-4 last:border-0 last:pb-0"
                >

                  <span className="text-primary font-bold min-w-6">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>

                  <span className="font-medium">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* CTA */}

        <div className="mt-12 bg-zinc-900 border border-zinc-800 rounded-3xl p-8 max-w-5xl mx-auto text-center">

          <h3 className="text-xl md:text-2xl font-bold">
            Ready To Pursue Kingdom Certification?
          </h3>

          <p className="text-zinc-400 mt-4 max-w-2xl mx-auto">
            Begin the journey toward ethical excellence, leadership
            accountability, organizational trust, and lasting Kingdom impact.
          </p>

          <Link to="/certification">
            <button className="mt-6 bg-secondary hover:bg-primary text-black font-semibold px-6 py-3 rounded-xl transition-all duration-300 cursor-pointer">
              Start Certification
            </button>
          </Link>

        </div>

      </div>

    </section>
  )
}
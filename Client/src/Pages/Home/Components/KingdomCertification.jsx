import { Link } from "react-router-dom"
import Reveal from "../../../Components/Reveal"

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
    <section id="kingdom-certification" className="py-16 sm:py-20 lg:py-24 border-b border-zinc-800/60">

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        <Reveal className="max-w-3xl mx-auto text-center">

          <span className="eyebrow">
            Kingdom Certification
          </span>

          <h2 className="heading-2 mt-5">
            The Kingdom Certification Framework
          </h2>

          <p className="body-text mt-5">
            More than a credential, Kingdom Certification provides a pathway
            toward ethical excellence, leadership accountability,
            organizational trust, and Kingdom-centered impact.
          </p>

        </Reveal>

        {/* Benefits & Journey */}

        <div className="grid lg:grid-cols-2 gap-5 sm:gap-6 mt-12 sm:mt-16 max-w-5xl mx-auto">

          {/* What You Gain */}
          <Reveal>
            <div className="card p-6 sm:p-8 h-full">

              <span className="eyebrow">
                What You Gain
              </span>

              <div className="mt-6">

                {certificationBenefit.map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-3.5 border-b border-zinc-800/70 py-3.5 last:border-0"
                  >

                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                      ✓
                    </span>

                    <span className="text-sm sm:text-base font-medium text-zinc-200">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

            </div>
          </Reveal>

          {/* Certification Journey */}
          <Reveal delay={0.1}>
            <div className="card p-6 sm:p-8 h-full">

              <span className="eyebrow">
                Certification Journey
              </span>

              <div className="mt-6">

                {certificationJourney.map((item, index) => (

                  <div
                    key={item}
                    className="flex items-center gap-3.5 border-b border-zinc-800/70 py-3.5 last:border-0"
                  >

                    <span className="w-7 shrink-0 font-display text-sm font-bold text-primary">
                      {(index + 1).toString().padStart(2, "0")}
                    </span>

                    <span className="text-sm sm:text-base font-medium text-zinc-200">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

            </div>
          </Reveal>

        </div>

        {/* CTA */}

        <Reveal delay={0.15}>
          <div className="relative overflow-hidden mt-8 sm:mt-10 rounded-2xl border border-zinc-800 bg-zinc-900 p-6 sm:p-8 max-w-5xl mx-auto text-center">

            <div className="glow -top-20 left-1/2 h-48 w-96 -translate-x-1/2 bg-primary/10" />

            <div className="relative">

              <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                Ready To Pursue Kingdom Certification?
              </h3>

              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed mt-3 max-w-2xl mx-auto">
                Begin the journey toward ethical excellence, leadership
                accountability, organizational trust, and lasting Kingdom impact.
              </p>

              <Link to="/certification">
                <button className="btn btn-primary mt-6">
                  Start Certification
                </button>
              </Link>

            </div>

          </div>
        </Reveal>

      </div>

    </section>
  )
}

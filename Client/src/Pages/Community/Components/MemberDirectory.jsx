import Reveal from "../../../Components/Reveal"

const memberTypes = [
  "Consultants",
  "Entrepreneurs",
  "Investors",
  "Service Providers",
  "Organizations",
  "Marketplace Leaders",
]

export default function MemberDirectory() {
  return (
    <section
      id="member-directory"
      className="scroll-mt-16 py-16 sm:py-20 lg:py-24 border-b border-zinc-800/60"
    >

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          <Reveal>

            <span className="eyebrow">
              Member Directory
            </span>

            <h2 className="heading-2 mt-5">
              Discover Trusted Kingdom Professionals
            </h2>

            <p className="body-text mt-6">
              Connect with entrepreneurs, consultants, advisors, ministries,
              service providers, and organizations committed to Kingdom
              values, ethical leadership, and business excellence.
            </p>

            <p className="body-text mt-4">
              The directory creates opportunities for collaboration,
              referrals, partnerships, and strategic growth while helping
              members identify trusted professionals within the ecosystem.
            </p>

            <button className="btn btn-primary mt-8">
              Browse Directory
            </button>

          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-5">

            {memberTypes.map((item, index) => (

              <Reveal key={item} delay={index * 0.06} className="h-full">

                <div
                  className="card h-full min-h-28 flex items-center justify-center text-center p-6 transition-colors duration-300 hover:border-primary/40"
                >

                  <h3 className="text-base font-semibold tracking-tight">
                    {item}
                  </h3>

                </div>

              </Reveal>

            ))}

          </div>

        </div>

      </div>

    </section>
  )
}

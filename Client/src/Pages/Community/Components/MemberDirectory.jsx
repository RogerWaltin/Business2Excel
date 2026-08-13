const memberTypes = [
  "Consultants",
  "Entrepreneurs",
  "Investors",
  "Service Providers",
  "Organizations",
  "Marketplace Leaders",
]

export default function MemberDirectory({ color1, color2 }) {
  return (
    <section
      id="member-directory"
      className="scroll-mt-24 py-28 border-b border-zinc-900"
    >

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <span className={`text-${color1} uppercase tracking-widest text-sm`}>
              Member Directory
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-6">
              Discover Trusted Kingdom Professionals
            </h2>

            <p className="text-zinc-400 text-lg leading-relaxed mt-8">
              Connect with entrepreneurs, consultants, advisors, ministries,
              service providers, and organizations committed to Kingdom
              values, ethical leadership, and business excellence.
            </p>

            <p className="text-zinc-400 text-lg leading-relaxed mt-6">
              The directory creates opportunities for collaboration,
              referrals, partnerships, and strategic growth while helping
              members identify trusted professionals within the ecosystem.
            </p>

            <button className={`mt-10 bg-${color2} hover:bg-${color1} text-black font-semibold px-8 py-4 rounded-2xl transition-all duration-300 cursor-pointer`}>
              Browse Directory
            </button>

          </div>

          <div className="grid md:grid-cols-2 gap-6">

            {memberTypes.map((item) => (

              <div
                key={item}
                className="bg-zinc-900 border border-zinc-800 rounded-3xl min-h-35 flex items-center justify-center text-center p-8"
              >

                <h3 className="text-xl font-semibold">
                  {item}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  )
}


import founder from "../../../Assets/Founder.png"

export default function FounderStory() {
  return (
    <section id="founder-story" className="py-16 border-b border-zinc-900">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Founder Image */}

          <div className="border border-zinc-800 rounded-3xl overflow-hidden max-w-md mx-auto w-full">

            <img
              className="w-full h-full object-cover"
              src={founder}
              alt="Founder"
            />

          </div>

          {/* Content */}

          <div>

            <span className="text-emerald-400 uppercase tracking-widest text-sm">
              Founder Story
            </span>

            <h2 className="text-3xl md:text-5xl font-bold mt-6">
              Why Business2Excel Exists
            </h2>

            <p className="text-zinc-400 text-base md:text-lg leading-relaxed mt-8">
              Business2Excel was founded from a conviction that business
              can be a force for transformation. Organizations should not
              have to choose between purpose and performance, faith and
              excellence, or impact and profitability.
            </p>

            <p className="text-zinc-400 text-base md:text-lg leading-relaxed mt-6">
              By integrating Kingdom principles with strategic leadership,
              innovation, and stewardship, organizations can create lasting
              value, meaningful impact, and enduring legacy.
            </p>

            <button className="mt-10 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-6 py-3 rounded-xl transition-all duration-300 cursor-pointer">
              Read Our Story
            </button>

          </div>

        </div>

      </div>

    </section>
  )
}
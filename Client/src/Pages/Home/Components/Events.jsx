import { Link } from "react-router-dom"

export default function Events({ color1, color2 }) {
  return (
    <section id="events" className="py-16 border-b border-zinc-900">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left Side */}

          <div>

            <span className={`text-${color1} uppercase tracking-widest text-sm`}>
              Training & Events
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-6">
              Equipping Leaders
              <span className={`text-${color1} block`}>
                For The Future
              </span>
            </h2>

            <p className="text-zinc-400 text-lg leading-relaxed mt-8">
              Practical learning experiences designed to help leaders
              navigate transformation, stewardship, innovation,
              organizational growth, and Kingdom influence in a
              rapidly changing world.
            </p>

            <Link to="/community">
              <button className={`mt-10 bg-${color2} hover:bg-${color1} text-black font-semibold px-6 py-3 rounded-xl transition-all duration-300 cursor-pointer`}>
                Explore Community
              </button>
            </Link>

          </div>

          {/* Right Side */}

          <div className="grid md:grid-cols-2 gap-6">

            <div className={`bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-${color2}/30 transition-all duration-300`}>

              <span className={`text-${color1} uppercase tracking-wider text-sm`}>
                Workshops
              </span>

              <h3 className="text-2xl font-bold mt-4">
                Practical Training
              </h3>

              <p className="text-zinc-400 leading-relaxed mt-4">
                Interactive sessions focused on implementation,
                stewardship, leadership, and innovation.
              </p>

            </div>

            <div className={`bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-${color2}/30 transition-all duration-300`}>

              <span className={`text-${color1} uppercase tracking-wider text-sm`}>
                Conferences
              </span>

              <h3 className="text-2xl font-bold mt-4">
                Kingdom Gatherings
              </h3>

              <p className="text-zinc-400 leading-relaxed mt-4">
                Connect with entrepreneurs, executives,
                consultants, investors, and innovators.
              </p>

            </div>

            <div className={`bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-${color2}/30 transition-all duration-300`}>

              <span className={`text-${color1} uppercase tracking-wider text-sm`}>
                Webinars
              </span>

              <h3 className="text-2xl font-bold mt-4">
                Learn Anywhere
              </h3>

              <p className="text-zinc-400 leading-relaxed mt-4">
                Online learning sessions covering certification,
                leadership, transformation, and future trends.
              </p>

            </div>

            <div className={`bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-${color2}/30 transition-all duration-300`}>

              <span className={`text-${color1} uppercase tracking-wider text-sm`}>
                Mentorship
              </span>

              <h3 className="text-2xl font-bold mt-4">
                Guided Growth
              </h3>

              <p className="text-zinc-400 leading-relaxed mt-4">
                Receive strategic guidance from experienced
                Kingdom leaders and practitioners.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

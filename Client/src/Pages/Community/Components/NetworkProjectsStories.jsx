export default function NetworkProjectsStories({ color1, color2 }) {
  return (
    <section
      id="network-projects-stories"
      className="scroll-mt-24 py-10 border-b border-zinc-900"
    >

      <div className="max-w-7xl mx-auto px-6">

        <span className={`inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm tracking-widest uppercase text-${color1}`}>
          Networks, Projects & Stories
        </span>

        <div className="grid lg:grid-cols-3 gap-8 mt-24">

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10">

            <span className={`text-${color1} uppercase tracking-wider text-sm`}>
              Kingdom Business Network
            </span>

            <h3 className="text-3xl font-bold mt-4">
              Build Strategic Relationships
            </h3>

            <p className="text-zinc-400 leading-relaxed mt-6">
              Connect with entrepreneurs, executives, consultants, investors,
              and Kingdom-minded leaders who share your vision for impact.
            </p>

            <button className={`mt-8 bg-${color2} hover:bg-${color1} text-black font-semibold px-6 py-3 rounded-xl transition-all duration-300 cursor-pointer`}>
              Join Network
            </button>

          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10">

            <span className={`text-${color1} uppercase tracking-wider text-sm`}>
              Mission Projects
            </span>

            <h3 className="text-3xl font-bold mt-4">
              Advance Meaningful Change
            </h3>

            <p className="text-zinc-400 leading-relaxed mt-6">
              Participate in initiatives focused on community development,
              economic empowerment, leadership formation, and Kingdom impact.
            </p>

            <button className={`mt-8 bg-${color2} hover:bg-${color1} text-black font-semibold px-6 py-3 rounded-xl transition-all duration-300 cursor-pointer`}>
              Explore Projects
            </button>

          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10">

            <span className={`text-${color1} uppercase tracking-wider text-sm`}>
              Transformation Stories
            </span>

            <h3 className="text-3xl font-bold mt-4">
              See Real Impact
            </h3>

            <p className="text-zinc-400 leading-relaxed mt-6">
              Discover stories of leaders, businesses, and organizations
              experiencing transformation through Kingdom-centered leadership.
            </p>

            <button className={`mt-8 bg-${color2} hover:bg-${color1} text-black font-semibold px-6 py-3 rounded-xl transition-all duration-300 cursor-pointer`}>
              Read Stories
            </button>

          </div>

        </div>

      </div>
    </section>
  )
}


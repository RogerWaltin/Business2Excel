export default function CommunityImpact() {
  return (
    <section id="community-impact" className="py-16 border-b border-zinc-900">

      <div className="max-w-7xl mx-auto px-6">

        <div className="max-w-4xl mx-auto text-center">

          <span className="text-emerald-400 uppercase tracking-widest text-sm">
            Community & Impact
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-6">
            A Movement Bigger Than Business
          </h2>

          <p className="text-zinc-400 text-lg leading-relaxed mt-8">
            Business2Excel is building a global ecosystem of leaders,
            entrepreneurs, consultants, investors, and organizations
            committed to Kingdom-centered transformation.
          </p>

        </div>

        {/* Community Cards */}

        <div className="grid lg:grid-cols-3 gap-6 mt-16">

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

            <span className="text-emerald-400 uppercase tracking-wider text-sm">
              Kingdom Business Network
            </span>

            <h3 className="text-2xl font-bold mt-4">
              Build Strategic Relationships
            </h3>

            <p className="text-zinc-400 leading-relaxed mt-6">
              Connect with entrepreneurs, executives, consultants,
              investors, and Kingdom-minded leaders who share
              your vision for impact.
            </p>

            <button className="mt-8 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-6 py-3 rounded-xl transition-all duration-300 cursor-pointer">
              Join Network
            </button>

          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

            <span className="text-emerald-400 uppercase tracking-wider text-sm">
              Mission Projects
            </span>

            <h3 className="text-2xl font-bold mt-4">
              Advance Meaningful Change
            </h3>

            <p className="text-zinc-400 leading-relaxed mt-6">
              Participate in initiatives focused on community
              development, economic empowerment, leadership
              formation, and Kingdom impact.
            </p>

            <button className="mt-8 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-6 py-3 rounded-xl transition-all duration-300 cursor-pointer">
              Explore Projects
            </button>

          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

            <span className="text-emerald-400 uppercase tracking-wider text-sm">
              Transformation Stories
            </span>

            <h3 className="text-2xl font-bold mt-4">
              See Real Impact
            </h3>

            <p className="text-zinc-400 leading-relaxed mt-6">
              Discover stories of leaders, businesses, and
              organizations experiencing transformation through
              Kingdom-centered leadership.
            </p>

            <button className="mt-8 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-6 py-3 rounded-xl transition-all duration-300 cursor-pointer">
              Read Stories
            </button>

          </div>

        </div>

      </div>

    </section>
  )
}

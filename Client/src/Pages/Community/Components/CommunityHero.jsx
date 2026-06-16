import { Link } from "react-router-dom";

export default function CommunityHero() {
  const scrollToEvents = () => {
    document.getElementById("training-events")?.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <section id="hero" className="relative overflow-hidden border-b border-zinc-900">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.15),transparent_35%)]" />

      <div className="max-w-7xl mx-auto px-6 py-17 relative z-10">

        <div className="max-w-5xl">
          <span className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm tracking-widest uppercase text-emerald-400">
            Community
          </span>
          <h1 className="text-5xl md:text-5xl font-bold leading-tight mt-8">
            Building a Global
            <span className="text-emerald-400 block">
              Kingdom Business
            </span>
            Movement
          </h1>

          <p className="text-zinc-400 text-lg md:text-xl leading-relaxed mt-8 max-w-4xl">
            Connecting leaders, equipping organizations, and creating lasting
            Kingdom impact through strategic relationships, leadership
            development, mentorship, collaboration, and transformational
            initiatives.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">

            <Link to="/network">
              <button className="bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-8 py-4 rounded-2xl transition-all duration-300 cursor-pointer">
                Join the Network
              </button>
            </Link>

            <button onClick={scrollToEvents} className="border border-zinc-700 hover:border-emerald-500 text-white px-8 py-4 rounded-2xl transition-all duration-300 cursor-pointer">
              Explore All Events
            </button>

          </div>

        </div>

      </div>

    </section>
  )
}

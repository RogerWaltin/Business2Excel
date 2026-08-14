import { Link } from "react-router-dom";

export default function CommunityHero() {
  const scrollToEvents = () => {
    document.getElementById("training-events")?.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <section id="hero" className="relative overflow-hidden border-b border-zinc-900">

      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.15),transparent_35%)]" /> */}

      <img src="/media/simu-lui.webp" alt="" className="absolute inset-0 h-full w-full object-cover" />

      <div className="absolute inset-0 bg-black/70" />

      <div className="max-w-7xl mx-auto px-6 pt-17 pb-40 relative z-10">

        <div className="max-w-5xl">
          <span className="inline-flex items-center rounded-full border border-secondary/75 px-4 py-2 text-sm tracking-widest uppercase text-primary bg-black/50 backdrop-blur-xs">
            Community
          </span>
          <h1 className="text-5xl md:text-5xl font-bold leading-tight mt-8">
            Building a Global
            <span className="text-primary block">
              Kingdom Business
            </span>
            Movement
          </h1>

          <p className="text-zinc-200 text-lg md:text-xl leading-relaxed mt-8 max-w-4xl">
            Connecting leaders, equipping organizations, and creating lasting
            Kingdom impact through strategic relationships, leadership
            development, mentorship, collaboration, and transformational
            initiatives.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">

            <Link to="/network">
              <button className="bg-secondary hover:bg-primary text-black font-semibold px-8 py-4 rounded-2xl transition-all duration-300 cursor-pointer">
                Join the Network
              </button>
            </Link>

            <button onClick={scrollToEvents} className="border border-zinc-700 hover:border-secondary text-white px-8 py-4 rounded-2xl transition-all duration-300 cursor-pointer bg-black/50 backdrop-blur-xs">
              Explore All Events
            </button>

          </div>

        </div>

      </div>

    </section>
  )
}

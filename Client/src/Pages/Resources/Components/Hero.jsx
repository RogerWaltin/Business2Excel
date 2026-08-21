import Reveal from "../../../Components/Reveal"

export default function Hero() {
  const scrollToResources = () => {
    document.getElementById("library")?.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <section className="relative overflow-hidden bg-black py-16 sm:py-20 lg:py-24 border-b border-zinc-800/60">

      <img src="/media/resourcesHero.jpg" alt="hero" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-linear-to-r from-zinc-950/95 via-black/80 to-zinc-950/50" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-black to-transparent" />

      {/* Ambient glow */}
      <div className="glow -top-24 right-[10%] h-72 w-72 bg-primary/10" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <span className="badge-pill">
            Resources
          </span>
          <h1 className="heading-1 mt-6 max-w-4xl">
            Insights, Frameworks, And Tools For Leaders Navigating A Changing World
          </h1>

          <p className="body-text mt-6 max-w-3xl text-zinc-300">
            Business leaders today face unprecedented challenges—from artificial
            intelligence and technological disruption to leadership burnout,
            ethical uncertainty, and cultural fragmentation.
          </p>

          <p className="body-text mt-4 max-w-3xl text-zinc-300">
            Business2excel provides research, insights, reports, frameworks, and
            practical resources designed to help leaders navigate complexity,
            make principled decisions, and create lasting Kingdom impact in an
            increasingly interconnected world.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">

            <button className="btn btn-primary" onClick={scrollToResources}>
              Explore Resources
            </button>

          </div>

        </Reveal>

      </div>

    </section>
  )
}

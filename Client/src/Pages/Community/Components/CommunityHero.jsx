import { Link } from "react-router-dom";
import Reveal from "../../../Components/Reveal";

export default function CommunityHero() {
  const scrollToEvents = () => {
    document.getElementById("training-events")?.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <section id="hero" className="relative overflow-hidden border-b border-zinc-800/60">

      <img src="/media/community.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />

      <div className="absolute inset-0 bg-linear-to-r from-zinc-950/95 via-black/80 to-zinc-950/50" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-zinc-950 to-transparent" />

      {/* Ambient glow */}
      <div className="glow -top-24 right-[15%] h-72 w-72 bg-primary/10" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-16 pb-20 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-32 relative z-10">

        <Reveal className="max-w-3xl">
          <span className="badge-pill">
            Community
          </span>
          <h1 className="heading-1 mt-6">
            Building a Global
            <span className="text-primary block italic">
              Kingdom Business
            </span>
            Movement
          </h1>

          <p className="body-text mt-6 max-w-2xl">
            Connecting leaders, equipping organizations, and creating lasting
            Kingdom impact through strategic relationships, leadership
            development, mentorship, collaboration, and transformational
            initiatives.
          </p>

          <div className="flex flex-wrap gap-3 mt-8">

            <Link to="/network">
              <button className="btn btn-primary">
                Join the Network
              </button>
            </Link>

            <button onClick={scrollToEvents} className="btn btn-ghost">
              Explore All Events
            </button>

          </div>

        </Reveal>

      </div>

    </section>
  )
}

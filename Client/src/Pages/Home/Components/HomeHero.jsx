import { Link } from "react-router-dom"
import { TypeAnimation } from 'react-type-animation';
import Reveal from "../../../Components/Reveal"
import conference from "../../../Assets/Conference.mp4"

const heroPillar = [
  {
    title: "Kingdom Certification",
    subtitle: "Ethical Validation",
  },
  {
    title: "Strategic Consulting",
    subtitle: "Reinvention & Growth",
  },
  {
    title: "Leadership Development",
    subtitle: "Culture & Governance",
  },
  {
    title: "Business as Mission",
    subtitle: "Kingdom Advancement",
  },
]

export default function HomeHero() {
  return (
    <section id="hero" className="relative overflow-hidden border-b border-zinc-800/60">

      <div className="absolute inset-y-0 right-0 w-full">
        <video src={conference} className="h-full w-full object-cover" autoPlay muted loop playsInline></video>
      </div>

      <div className="absolute inset-0 bg-linear-to-r from-zinc-950 via-zinc-950/60 to-zinc-950/20" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-zinc-950 to-transparent" />

      {/* Ambient glow */}
      <div className="glow -top-24 right-[10%] h-80 w-80 bg-primary/15" />

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-360 mx-auto px-5 sm:px-6 lg:px-8 pt-16 pb-24 sm:pt-20 sm:pb-28 lg:pt-24 lg:pb-36 relative z-10">

        {/* Left */}
        <Reveal>

          <h1 className="heading-1">

            Transforming Organizations

            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'For Lasting Kingdom Impact',
                1000,
                'For Kingdom Leadership',
                1000,
                'For Generational Influence',
                1000
              ]}
              wrapper="span"
              speed={50}
              className="block text-primary italic"
              repeat={Infinity}
            />

          </h1>

          <p className="body-text mt-5 max-w-xl">

            Business2excel equips leaders, entrepreneurs,
            and organizations to integrate Kingdom principles,
            ethical leadership, innovation, and AI-age
            transformation into modern business.

          </p>

          <div className="flex flex-wrap gap-3 mt-8">

            <Link to="/consultation">
              <button className="btn btn-primary">
                Book Consultation
              </button>
            </Link>

            <Link to="/certification">
              <button className="btn btn-ghost">
                Apply For Certification
              </button>
            </Link>

          </div>

        </Reveal>

        {/* Right */}
        <Reveal delay={0.15}>
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-md p-5 sm:p-7 shadow-[0_32px_64px_-24px_rgba(0,0,0,0.8)]">

            <div className="grid sm:grid-cols-2 gap-3.5">

              {heroPillar.map((item) => (

                <div
                  key={item.title}
                  className="group rounded-xl border border-zinc-800 bg-zinc-950/60 backdrop-blur-sm p-4 sm:p-5 transition-colors duration-300 hover:border-primary/40"
                >

                  <h3 className="text-base font-semibold tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-primary mt-1.5">
                    {item.subtitle}
                  </p>

                </div>

              ))}

            </div>

            <div className="mt-7 pt-7 border-t border-zinc-800">

              <p className="text-zinc-500 uppercase tracking-[0.22em] text-[11px] font-semibold">
                A Kingdom Blueprint For
              </p>

              <p className="font-display text-xl sm:text-2xl font-bold mt-1.5">
                Business Transformation
              </p>

            </div>

          </div>
        </Reveal>

      </div>

    </section>
  )
}

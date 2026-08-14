import { Link } from "react-router-dom"
import { TypeAnimation } from 'react-type-animation';
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

export default function HomeHero({ color1, color2 }) {
  return (
    <section id="hero" className="relative overflow-hidden border-b border-zinc-900">

      {/* <div id="right-corner-glow" className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.12),transparent_40%)]" /> */}

      <div className="absolute inset-y-0 right-0 w-full">
        <video src={conference} className="h-full w-full object-cover" autoPlay muted loop playsInline></video>
      </div>

      <div className="absolute inset-0 bg-linear-to-r from-zinc-950 via-zinc-950/50 to-zinc-950/20" />

      <div className="grid lg:grid-cols-2 gap-12 items-center max-w-360 mx-auto px-6 pt-20 pb-40 relative z-10">

        {/* Left */}
        <div>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">

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
              className="block text-primary"
              repeat={Infinity}
            />

          </h1>

          <p className="text-zinc-400 text-lg leading-relaxed mt-6 max-w-xl">

            Business2Excel equips leaders, entrepreneurs,
            and organizations to integrate Kingdom principles,
            ethical leadership, innovation, and AI-age
            transformation into modern business.

          </p>

          <div className="flex flex-wrap gap-4 mt-8">

            <Link to="/consultation">
              <button className="bg-secondary hover:bg-primary text-black font-semibold px-6 py-3 rounded-xl transition-all duration-300 cursor-pointer">
                Book Consultation
              </button>
            </Link>

            <Link to="/certification">
              <button className="border border-zinc-700 hover:border-secondary px-6 py-3 rounded-xl transition-all duration-300 cursor-pointer bg-black/50 backdrop-blur-xs">
                Apply For Certification
              </button>
            </Link>

          </div>

        </div>

        {/* Right */}
        <div className="bg-zinc-900/50 backdrop-blur-xs border border-zinc-800 rounded-4xl p-8">

          <div className="grid md:grid-cols-2 gap-4">

            {heroPillar.map((item) => (

              <div
                key={item.title}
                className="border border-zinc-800 rounded-2xl p-5 bg-zinc-950/50 backdrop-blur-xs"
              >

                <h3 className="text-lg font-bold">
                  {item.title}
                </h3>

                <p className="text-primary text-sm mt-2">
                  {item.subtitle}
                </p>

              </div>

            ))}

          </div>

          <div className="mt-8 pt-8 border-t border-zinc-800">

            <p className="text-zinc-500 uppercase tracking-widest text-xs">
              A Kingdom Blueprint For
            </p>

            <p className="text-2xl font-bold mt-2">
              Business Transformation
            </p>

          </div>

        </div>

      </div>

    </section>
  )
}


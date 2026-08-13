import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function FinalCTA({ color1, color2 }) {
  return (
    <section id="final-cta" className="py-24">

      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-4xl md:text-6xl font-bold">
          Build a Business That Creates
          <span className={`text-${color1} block`}>
            Lasting Kingdom Impact
          </span>
        </h2>

        <p className="text-zinc-400 text-lg leading-relaxed mt-8 max-w-3xl mx-auto">
          Join a growing ecosystem of leaders, organizations,
          entrepreneurs, and innovators committed to Kingdom-centered
          transformation.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-10">

          <Link to="/consultation">
            <button className={`bg-${color2} hover:bg-${color1} text-black font-semibold px-6 py-3 rounded-xl transition-all duration-300 cursor-pointer`}>
              Book Consultation
            </button>
          </Link>

          <HashLink to="community#training-events">
            <button className={`border border-zinc-700 hover:border-${color1} px-6 py-3 rounded-xl transition-all duration-300 cursor-pointer`}>
              Trainings & Events
            </button>
          </HashLink>

          <Link to="certification">
            <button className={`bg-${color2} hover:bg-${color1} text-black font-semibold px-6 py-3 rounded-xl transition-all duration-300 cursor-pointer`}>
              Explore Certifications
            </button>
          </Link>

        </div>

      </div>

    </section>
  )
}


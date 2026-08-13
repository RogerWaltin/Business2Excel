import { Link } from "react-router-dom";

export default function FinalCTA({ color1, color2 }) {
  return (
    <section id="final-cta" className="py-32">

      <div className="max-w-5xl mx-auto px-6 text-center">

        <div className="bg-zinc-900 border border-zinc-800 rounded-4xl p-12 md:p-16">

          <span className={`text-${color1} uppercase tracking-widest text-sm`}>
            Join the Movement
          </span>

          <h2 className="text-4xl md:text-6xl font-bold mt-6">
            Ready to Build Kingdom Impact Together?
          </h2>

          <p className="text-zinc-400 text-lg leading-relaxed mt-8 max-w-3xl mx-auto">
            Connect with leaders, accelerate your growth, strengthen your
            influence, and become part of a global Kingdom business
            transformation ecosystem.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">

            <Link to="/network">
              <button className={`bg-${color2} hover:bg-${color1} text-black font-semibold px-8 py-4 rounded-2xl transition-all duration-300 cursor-pointer`}>
                Join the Network
              </button>
            </Link>

            <Link to="/consultation">
              <button className={`border border-zinc-700 hover:border-${color1} px-8 py-4 rounded-2xl transition-all duration-300 cursor-pointer`}>
                Book a Consultation
              </button>
            </Link>

          </div>

        </div>

      </div>

    </section>
  )
}


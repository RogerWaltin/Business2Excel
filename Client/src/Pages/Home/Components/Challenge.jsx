import Reveal from "../../../Components/Reveal"
import citySkyline from "../../../Assets/city-skyline.mp4"

const businessChallenge = [
  "Ethical Confusion",
  "AI Disruption",
  "Leadership Burnout",
  "Profit Without Purpose",
  "Consumer Distrust",
  "Cultural Fragmentation",
]

export default function Challenge() {
  return (
    <section id="challenge" className="py-16 sm:py-20 lg:py-24 border-b border-zinc-800/60 relative overflow-hidden">

      <img src="/media/busy_city.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />

      <div className="absolute inset-0 bg-linear-to-b from-zinc-950/95 via-black/85 to-zinc-950/95" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">

        <Reveal className="max-w-3xl mx-auto text-center">

          <h2 className="heading-2">
            Modern Business Has Lost Its Compass
          </h2>

          <p className="body-text mt-5">
            Organizations today face unprecedented disruption.
            Technological acceleration, ethical uncertainty,
            leadership fatigue, and cultural fragmentation
            are challenging leaders at every level.
          </p>

        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 mt-10 sm:mt-12">

            {businessChallenge.map((problem) => (

              <div
                key={problem}
                className="rounded-xl border border-zinc-800 bg-zinc-950/60 backdrop-blur-sm px-5 py-5 flex items-center justify-center text-center transition-colors duration-300 hover:border-primary/40 hover:bg-zinc-900/60"
              >

                <h3 className="text-sm sm:text-base font-medium text-zinc-100">
                  {problem}
                </h3>

              </div>

            ))}

          </div>
        </Reveal>

        <Reveal delay={0.15} className="max-w-4xl mx-auto text-center mt-12 sm:mt-16">

          <p className="font-display text-xl sm:text-2xl lg:text-[1.7rem] font-bold leading-relaxed">

            The future belongs to organizations rooted in

            <span className="text-primary italic">
              {" "}truth, stewardship, integrity, and purpose.
            </span>

          </p>

        </Reveal>

      </div>

    </section>
  )
}

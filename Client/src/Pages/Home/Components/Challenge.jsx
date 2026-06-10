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
    <section id="challenge" className="py-16 border-b border-zinc-900">

      <div className="max-w-7xl mx-auto px-6">

        <div className="max-w-3xl mx-auto text-center">

          <h2 className="text-4xl md:text-5xl font-bold mt-6">
            Modern Business Has Lost Its Compass
          </h2>

          <p className="text-zinc-400 text-lg leading-relaxed mt-6">
            Organizations today face unprecedented disruption.
            Technological acceleration, ethical uncertainty,
            leadership fatigue, and cultural fragmentation
            are challenging leaders at every level.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">

          {businessChallenge.map((problem) => (

            <div
              key={problem}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl min-h-22.5 flex items-center justify-center text-center px-6"
            >

              <h3 className="font-medium">
                {problem}
              </h3>

            </div>

          ))}

        </div>

        <div className="max-w-4xl mx-auto text-center mt-12">

          <p className="text-xl md:text-2xl font-bold leading-relaxed">

            The future belongs to organizations rooted in

            <span className="text-emerald-400">
              {" "}truth, stewardship, integrity, and purpose.
            </span>

          </p>

        </div>

      </div>

    </section>
  )
}

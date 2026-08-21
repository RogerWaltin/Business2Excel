const trustItem = [
  { value: "12+", label: "Years Experience" },
  { value: "4", label: "Strategic Pillars" },
  { value: "AI", label: "Reinvention" },
  { value: "✓", label: "Certification" },
  { value: "Global", label: "Community" },
]

export default function TrustBar() {
  return (
    <section id="trust-bar" className="border-b border-zinc-800/60 bg-zinc-900/40">

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-7 sm:py-8">

        <div className="grid grid-cols-2 gap-y-6 sm:grid-cols-3 md:grid-cols-5 md:gap-0 md:divide-x md:divide-zinc-800/70">

          {trustItem.map((item) => (

            <div
              key={item.label}
              className="text-center px-2"
            >

              <div className="font-display text-2xl sm:text-3xl font-bold text-primary">
                {item.value}
              </div>

              <div className="text-zinc-500 text-[11px] uppercase tracking-[0.18em] mt-1.5 font-medium">
                {item.label}
              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}

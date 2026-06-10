const trustItem = [
  { value: "12+", label: "Years Experience" },
  { value: "4", label: "Strategic Pillars" },
  { value: "AI", label: "Reinvention" },
  { value: "✓", label: "Certification" },
  { value: "Global", label: "Community" },
]

export default function TrustBar() {
  return (
    <section id="trust-bar" className="border-b border-zinc-900">

      <div className="max-w-7xl mx-auto px-6 py-8">

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">

          {trustItem.map((item) => (

            <div
              key={item.label}
              className="text-center"
            >

              <div className="text-3xl font-bold text-emerald-400">
                {item.value}
              </div>

              <div className="text-zinc-500 text-xs uppercase tracking-widest mt-2">
                {item.label}
              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}

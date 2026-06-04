export default function KingdomWorldview() {
    const worldviewPrinciples = [
        "integrity",
        "accountability",
        "stewardship",
        "justice",
        "wisdom",
        "servant leadership",
        "generosity",
        "human dignity",
    ]

    return (
        <section id="kingdom-worldview" className="py-28 border-b border-zinc-900">

            <div className="max-w-7xl mx-auto px-6">

                <div className="max-w-3xl">

                    <span className="text-emerald-400 uppercase tracking-widest text-sm">
                        Kingdom Worldview
                    </span>

                    <h2 className="text-4xl md:text-5xl font-bold mt-6">
                        Business as a Platform for Stewardship and Transformation
                    </h2>

                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">

                    {worldviewPrinciples.map((item) => (

                        <div
                            key={item}
                            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8"
                        >

                            <h3 className="capitalize text-lg font-semibold">
                                {item}
                            </h3>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    )
}
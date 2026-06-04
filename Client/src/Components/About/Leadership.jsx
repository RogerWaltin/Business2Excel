export default function Leadership() {
    const leadershipAreas = [
        "business transformation",
        "leadership development",
        "marketplace ministry",
        "consulting and strategy",
        "organizational governance",
        "entrepreneurship",
        "digital innovation",
        "AI-age reinvention",
    ]

    const kingdomValues = [
        "integrity",
        "wisdom",
        "excellence",
        "Accountability",
        "servant leadership",
        "Kingdom centered",
    ]

    return (
        <section id="leadership" className="py-28 border-b border-zinc-900">

            <div className="max-w-7xl mx-auto px-6">

                <div className="max-w-3xl">

                    <span className="text-emerald-400 uppercase tracking-widest text-sm">
                        Leadership
                    </span>

                    <h2 className="text-4xl md:text-5xl font-bold mt-6">
                        Leadership Rooted in Stewardship and Vision
                    </h2>

                    <p className="text-zinc-400 text-lg leading-relaxed mt-8">
                        Our leadership team combines strategic excellence with Kingdom
                        values, ethical leadership, and long-term impact.
                    </p>

                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">

                    {leadershipAreas.map((item) => (

                        <div
                            key={item}
                            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-emerald-500/30 transition-all duration-300"
                        >

                            <h3 className="text-lg font-semibold capitalize text-center">
                                {item}
                            </h3>

                        </div>

                    ))}

                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-6 mt-10">

                    {kingdomValues.map((item) => (

                        <div
                            key={item}
                            className="bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-6 text-center"
                        >

                            <span className="capitalize text-emerald-400 font-medium">
                                {item}
                            </span>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    )
}
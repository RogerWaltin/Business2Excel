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
        "Accountability",
        "Kingdom centered",
    ]

    return (
        <section id="leadership" className="py-28 border-b border-zinc-900 relative overflow-hidden">

            <img src="/media/leadershipV2.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />

            <div className="absolute inset-0 bg-black/75" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                <div className="max-w-3xl">

                    <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                        Leadership
                    </span>

                    <h2 className="text-4xl md:text-5xl font-bold mt-6">
                        Leadership Rooted in Stewardship and Vision
                    </h2>

                    <p className="text-zinc-200 text-lg leading-relaxed mt-8">
                        Our leadership team combines strategic excellence with Kingdom
                        values, ethical leadership, and long-term impact.
                    </p>

                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">

                    {leadershipAreas.map((item) => (

                        <div
                            key={item}
                            className=" border border-zinc-800 rounded-3xl p-8 hover:border-secondary/30 transition-all duration-300 bg-zinc-900/70 backdrop-blur-xs"
                        >

                            <h3 className="text-lg font-semibold capitalize text-center">
                                {item}
                            </h3>

                        </div>

                    ))}

                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">

                    {kingdomValues.map((item) => (

                        <div
                            key={item}
                            className="border border-secondary/20 rounded-2xl p-6 text-center bg-zinc-900/70 backdrop-blur-xs"
                        >

                            <span className="capitalize text-primary font-medium">
                                {item}
                            </span>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    )
}
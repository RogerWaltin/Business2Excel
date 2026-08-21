import Reveal from "../../../Components/Reveal"

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
        <section id="leadership" className="py-16 sm:py-20 lg:py-24 border-b border-zinc-800/60 relative overflow-hidden scroll-mt-16">

            <img src="/media/leadershipV2.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />

            <div className="absolute inset-0 bg-linear-to-b from-zinc-950/90 via-black/85 to-zinc-950/95" />

            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">

                <Reveal className="max-w-3xl">

                    <span className="eyebrow">
                        Leadership
                    </span>

                    <h2 className="heading-2 mt-5">
                        Leadership Rooted in Stewardship and Vision
                    </h2>

                    <p className="text-zinc-300 text-base lg:text-lg leading-relaxed mt-5">
                        Our leadership team combines strategic excellence with Kingdom
                        values, ethical leadership, and long-term impact.
                    </p>

                </Reveal>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 mt-10 sm:mt-12">

                    {leadershipAreas.map((item, index) => (

                        <Reveal key={item} delay={(index % 4) * 0.06} className="h-full">

                            <div
                                className="group h-full rounded-xl border border-zinc-800 bg-zinc-900/70 backdrop-blur-sm px-6 py-6 flex items-center justify-center transition-colors duration-300 hover:border-primary/40 hover:bg-zinc-900"
                            >

                                <h3 className="text-sm sm:text-base font-medium capitalize text-center text-zinc-100">
                                    {item}
                                </h3>

                            </div>

                        </Reveal>

                    ))}

                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 mt-6 sm:mt-8 max-w-3xl lg:max-w-none mx-auto">

                    {kingdomValues.map((item, index) => (

                        <Reveal key={item} delay={index * 0.06}>

                            <div
                                className="rounded-full border border-primary/25 bg-primary/[0.06] px-5 py-2.5 text-center backdrop-blur-sm transition-colors duration-300 hover:border-primary/50"
                            >

                                <span className="text-xs sm:text-sm font-medium uppercase tracking-[0.14em] text-primary">
                                    {item}
                                </span>

                            </div>

                        </Reveal>

                    ))}

                </div>

            </div>

        </section>
    )
}

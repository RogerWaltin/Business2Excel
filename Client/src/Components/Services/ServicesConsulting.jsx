export default function ServicesConsulting() {
    const consultingAreas = [
        {
            id: "business-transformation",
            title: "Business Transformation",
            description:
                "Helping organizations adapt, innovate, and build sustainable growth strategies in an increasingly competitive and technology-driven marketplace.",
            points: [
                "Reinvention Strategy",
                "Digital Transition",
                "AI Integration",
                "Scaling Systems",
            ],
        },
        {
            id: "kingdom-leadership",
            title: "Kingdom Leadership",
            description:
                "Developing leaders and organizational cultures that align vision, values, and purpose while strengthening long-term effectiveness.",
            points: [
                "Culture Transformation",
                "Mission Clarity",
                "Governance",
                "Organizational Alignment",
            ],
        },
        {
            id: "stewardship-and-wealth",
            title: "Stewardship & Wealth",
            description:
                "Guiding individuals and organizations toward faithful stewardship, financial responsibility, and Kingdom-focused legacy planning.",
            points: [
                "Estate Planning",
                "Generosity Frameworks",
                "Kingdom Finance",
                "Legacy Planning",
            ],
        },
        {
            id: "business-as-mission",
            title: "Business as Mission",
            description:
                "Leveraging business as a platform for meaningful impact, community transformation, and long-term Kingdom influence.",
            points: [
                "Social Impact Strategy",
                "Marketplace Ministry",
                "Community Transformation",
            ],
        },
    ]
    
    return (
        <section
            id="consulting"
            className="bg-black py-32"
        >

            <div className="mx-auto max-w-7xl px-6">

                {/* Section Label */}
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
                    Consulting
                </p>

                {/* Heading */}
                <h2 className="mt-4 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
                    Strategic Consulting For Modern Organizations
                </h2>

                {/* Intro */}
                <p className="mt-8 max-w-3xl text-lg leading-relaxed text-zinc-400">
                    Organizations today face complex challenges that require more than
                    generic solutions. Our consulting services help leaders navigate
                    change, strengthen organizational culture, align strategy with
                    purpose, and build sustainable foundations for long-term impact.
                </p>

                {/* Consulting Areas */}
                <div className="mt-16 grid gap-8 lg:grid-cols-2">

                    {consultingAreas.map((area) => (

                        <div
                            key={area.id}
                            id={area.id}
                            className="rounded-3xl border border-zinc-800 bg-zinc-950 p-10 transition-all duration-300 hover:border-emerald-500/40"
                        >

                            <h3 className="text-3xl font-bold text-white">
                                {area.title}
                            </h3>

                            <p className="mt-5 leading-relaxed text-zinc-400">
                                {area.description}
                            </p>

                            <ul className="mt-8 space-y-3">

                                {area.points.map((point) => (

                                    <li
                                        key={point}
                                        className="flex items-center gap-3 text-zinc-300"
                                    >

                                        <span className="h-2 w-2 rounded-full bg-emerald-400" />

                                        <span>{point}</span>

                                    </li>

                                ))}

                            </ul>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    )
}
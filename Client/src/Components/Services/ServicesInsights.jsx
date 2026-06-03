export default function ServicesInsights() {
    const insights = [
        {
            title: "Ethical Confusion",
            description:
                "Organizations today operate in increasingly complex environments where the right decision is not always the easiest one. Competing priorities, cultural pressures, and short-term incentives often blur the line between what is profitable and what is principled.",
        },
        {
            title: "AI Disruption",
            description:
                "Artificial intelligence is transforming industries at an unprecedented pace. Many organizations struggle to understand how to adopt emerging technologies responsibly while maintaining human leadership, trust, and long-term strategic direction.",
        },
        {
            title: "Leadership Burnout",
            description:
                "Leaders are being asked to navigate constant change, growing uncertainty, and increasing expectations. Without clarity, support, and a sustainable leadership framework, even capable leaders can become overwhelmed and ineffective.",
        },
        {
            title: "Consumer Distrust",
            description:
                "Customers today expect more than quality products and services. They want transparency, integrity, and authentic purpose. Organizations that fail to build trust risk losing credibility, loyalty, and long-term influence.",
        },
        {
            title: "Profit Without Purpose",
            description:
                "Financial success alone is no longer enough to sustain a thriving organization. Many businesses struggle to connect profitability with a meaningful mission, resulting in growth that lacks direction, impact, and lasting significance.",
        },
        {
            title: "Cultural Fragmentation",
            description:
                "Diverse perspectives can strengthen an organization, but without a unifying vision they often create confusion and division. Many teams struggle to maintain alignment, shared values, and organizational cohesion in a rapidly changing world.",
        },
    ]

    return (
        <section className="bg-black py-32">

            <div className="mx-auto max-w-7xl px-6">

                {/* Section Label */}
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
                    Industry Insights
                </p>

                {/* Heading */}
                <h2 className="mt-4 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
                    Businesses Are Facing A Crisis Of Meaning
                </h2>

                {/* Paragraph */}
                <p className="mt-8 max-w-3xl text-lg leading-relaxed text-zinc-400">
                    Organizations today face unprecedented pressure to adapt. Rapid
                    technological change, shifting cultural expectations, and growing
                    demands for ethical leadership are reshaping the future of business.
                </p>
                {/*TODO improve the design of the cards. something feels off*/}
                {/* Grid */}
                <div className="mt-16 grid gap-6 md:grid-cols-2 lg:gap-8">

                    {insights.map((insight) => (

                        <div
                            key={insight.title}
                            className="group min-h-64 rounded-3xl border border-zinc-800 bg-zinc-950 p-10 transition-all duration-300 hover:border-emerald-500/40"
                        >

                            <h3 className="text-2xl font-semibold text-white">
                                {insight.title}
                            </h3>

                            <p className="mt-5 leading-relaxed text-zinc-400">
                                {insight.description}
                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    )
}
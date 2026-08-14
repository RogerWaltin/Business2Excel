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

    const imagePositions = [
        {
            mobile: "top-0",
            desktop: "md:top-0 md:left-0",
        },
        {
            mobile: "-top-[calc(100%+1.5rem)]",
            desktop: "md:top-0 md:-left-[calc(100%+1.5rem)]",
        },
        {
            mobile: "-top-[calc(200%+3rem)]",
            desktop: "md:-top-[calc(100%+1.5rem)] md:left-0",
        },
        {
            mobile: "-top-[calc(300%+4.5rem)]",
            desktop:
                "md:-top-[calc(100%+1.5rem)] md:-left-[calc(100%+1.5rem)]",
        },
        {
            mobile: "-top-[calc(400%+6rem)]",
            desktop: "md:-top-[calc(200%+3rem)] md:left-0",
        },
        {
            mobile: "-top-[calc(500%+7.5rem)]",
            desktop:
                "md:-top-[calc(200%+3rem)] md:-left-[calc(100%+1.5rem)]",
        },
    ]

    return (
        <section className="bg-black pt-20">
            <div className="mx-auto max-w-7xl px-6">

                {/* Section Label */}
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                    Industry Insights
                </p>

                {/* Heading */}
                <h2 className="mt-4 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
                    Businesses Are Facing A Crisis Of Meaning
                </h2>

                {/* Paragraph */}
                <p className="mt-8 max-w-3xl text-lg leading-relaxed text-zinc-400">
                    Organizations today face unprecedented pressure to adapt.
                    Rapid technological change, shifting cultural expectations,
                    and growing demands for ethical leadership are reshaping
                    the future of business.
                </p>

                {/* Insights Grid */}
                <div className="mt-16 grid gap-6 md:grid-cols-2 md:auto-rows-[20rem] lg:gap-8">

                    {insights.map((insight, index) => (
                        <div
                            key={insight.title}
                            className="group relative min-h-80 overflow-hidden rounded-3xl border border-zinc-800"
                        >

                            {/* Shared Image Cut-Out */}
                            <img
                                src="/media/insights.jpg"
                                alt=""
                                aria-hidden="true"
                                className={`absolute h-[calc(600%+7.5rem)] w-full max-w-none object-cover md:h-[calc(300%+3rem)] md:w-[calc(200%+1.5rem)] ${imagePositions[index].mobile} ${imagePositions[index].desktop}`}
                            />

                            {/* Dark Overlay */}
                            <div className="absolute inset-0 bg-black/65 transition-all duration-300 group-hover:bg-black/50" />

                            {/* Card Content */}
                            <div className="relative z-10 flex h-full flex-col justify-start p-8 md:p-10">
                                <h3 className="text-2xl font-semibold text-white">
                                    {insight.title}
                                </h3>

                                <p className="mt-5 leading-relaxed text-zinc-300">
                                    {insight.description}
                                </p>
                            </div>

                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}
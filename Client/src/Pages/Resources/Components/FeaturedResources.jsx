import Reveal from "../../../Components/Reveal"

export default function FeaturedResources() {
    const resources = [
        {
            type: "Framework",
            title: "7 Kingdom Principles For Business Transformation",
            description:
                "A practical framework for aligning leadership, culture, strategy, and organizational purpose through a Kingdom-centered lens.",
        },
        {
            type: "Report",
            title: "AI & Biblical Leadership",
            description:
                "Exploring how leaders can embrace technological innovation while maintaining ethical clarity, human dignity, and Kingdom-centered stewardship.",
        },
        {
            type: "Blueprint",
            title: "Kingdom Stewardship Blueprint",
            description:
                "Strategic guidance for faithful stewardship, wealth management, generosity, legacy planning, and long-term Kingdom impact.",
        },
        {
            type: "Guide",
            title: "Faith-Driven Business Reinvention Guide",
            description:
                "A roadmap for organizations navigating change, innovation, digital transformation, and sustainable growth in an increasingly complex marketplace.",
        },
    ]

    const imagePositions = [
        "top-0 left-0",
        "top-0 -left-[calc(100%+2rem)]",
        "-top-[calc(100%+2rem)] left-0",
        "-top-[calc(100%+2rem)] -left-[calc(100%+2rem)]",
    ]

    return (
        <section id="featured-resources" className="bg-black pt-16 sm:pt-20 scroll-mt-16">
            <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

                {/* Section Label */}
                <Reveal>
                    <span className="eyebrow">
                        Featured Resources
                    </span>

                    {/* Heading */}
                    <h2 className="heading-2 mt-5 max-w-4xl">
                        Practical Frameworks For Leaders Building With Purpose
                    </h2>

                    {/* Paragraph */}
                    <p className="body-text mt-5 max-w-3xl">
                        Explore Business2excel's flagship reports, guides, and
                        strategic frameworks designed to help leaders navigate
                        disruption, strengthen stewardship, and create lasting
                        Kingdom impact.
                    </p>
                </Reveal>

                {/* Resources Grid */}
                <div className="mt-12 sm:mt-16 grid gap-8 lg:grid-cols-2">

                    {resources.map((resource, index) => (
                        <Reveal key={resource.title} delay={(index % 2) * 0.1} className="h-full">
                            <div
                                className="group relative h-full min-h-64 overflow-hidden rounded-2xl border border-zinc-800 shadow-[0_24px_60px_-32px_rgba(0,0,0,0.9)]"
                            >

                                {/* Shared Image Cut-Out */}
                                <img
                                    src="/media/featuredResources1.jpg"
                                    alt=""
                                    aria-hidden="true"
                                    className={`absolute h-[calc(200%+2rem)] w-[calc(200%+2rem)] max-w-none object-cover transition-transform duration-500 group-hover:scale-[1.02] ${imagePositions[index]}`}
                                />

                                {/* Dark Overlay */}
                                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/70 to-black/50 transition-all duration-300 group-hover:from-black/85 group-hover:via-black/60 group-hover:to-black/40" />

                                {/* Card Content */}
                                <div className="relative z-10 flex h-full flex-col p-6 sm:p-10">

                                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
                                        {resource.type}
                                    </p>

                                    <h3 className="font-display mt-3.5 text-xl sm:text-2xl lg:text-[1.7rem] font-bold leading-snug text-white">
                                        {resource.title}
                                    </h3>

                                    <p className="mt-4 text-sm sm:text-base leading-relaxed text-zinc-300">
                                        {resource.description}
                                    </p>

                                </div>
                            </div>
                        </Reveal>
                    ))}

                </div>
            </div>
        </section>
    )
}

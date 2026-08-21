import Reveal from "../../../Components/Reveal"

function ConsultingArea({ id, image, title, children, topics, outcomes, first = false, threeCols = false }) {
    return (
        <Reveal className={first ? "mt-12 sm:mt-16" : "mt-6 sm:mt-8"}>
            <div
                id={id}
                className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 p-6 sm:p-10 shadow-[0_24px_60px_-32px_rgba(0,0,0,0.9)] scroll-mt-24"
            >
                <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" />

                <div className="absolute inset-0 bg-linear-to-br from-black/90 via-black/75 to-black/60" />

                <div className="relative z-10">
                    <span className="eyebrow">
                        Consulting Area
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mt-4">
                        {title}
                    </h3>
                    <div className="mt-5 max-w-3xl space-y-4 text-sm sm:text-base leading-relaxed text-zinc-300">
                        {children}
                    </div>
                    <div className={`mt-8 grid gap-3 sm:grid-cols-2 ${threeCols ? "lg:max-w-3xl lg:grid-cols-3" : "max-w-2xl"}`}>
                        {topics.map((topic) => (
                            <div
                                key={topic}
                                className="rounded-xl border border-zinc-800 bg-zinc-900/70 px-4 py-3.5 text-sm font-medium text-zinc-200 backdrop-blur-sm transition-colors duration-300 hover:border-primary/40"
                            >
                                {topic}
                            </div>
                        ))}
                    </div>
                    <div className="mt-8">
                        <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-white">
                            Expected Outcomes
                        </h4>
                        <ul className="mt-3.5 space-y-2 text-sm sm:text-base text-zinc-300">
                            {outcomes.map((outcome) => (
                                <li key={outcome}>{outcome}</li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>
        </Reveal>
    )
}

export default function ServicesConsulting() {
    return (
        <section
            id="consulting"
            className="bg-black pt-16 sm:pt-20 pb-16 sm:pb-20"
        >

            <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

                {/* Section Intro */}

                <Reveal>
                    <span className="eyebrow">
                        Consulting
                    </span>

                    <h2 className="heading-2 mt-5 max-w-4xl">
                        Strategic Consulting For Modern Organizations
                    </h2>

                    <p className="body-text mt-5 max-w-3xl">
                        Organizations today face complex challenges that require more than
                        generic solutions. Our consulting services help leaders navigate
                        change, strengthen organizational culture, align strategy with
                        purpose, and build sustainable foundations for long-term impact.
                    </p>
                </Reveal>

                {/* Business Transformation */}

                <ConsultingArea
                    id="business-transformation"
                    image="/media/transformation.jpg"
                    title="Business Transformation"
                    topics={["Reinvention Strategy", "Digital Transition", "AI Integration", "Scaling Systems"]}
                    outcomes={[
                        "• Stronger operational alignment",
                        "• Sustainable growth strategies",
                        "• Increased organizational agility",
                        "• Future-ready business systems",
                    ]}
                    first
                >
                    <p>
                        Organizations today face unprecedented levels of disruption,
                        technological change, and market uncertainty. Sustainable
                        transformation requires more than operational improvements—it
                        requires strategic clarity, organizational alignment, and a
                        roadmap for long-term growth.
                    </p>
                    <p>
                        Business2excel helps organizations navigate transformation
                        journeys while maintaining their values, strengthening
                        leadership, and building systems that enable sustainable
                        growth and innovation.
                    </p>
                </ConsultingArea>

                {/* Kingdom Leadership */}

                <ConsultingArea
                    id="kingdom-leadership"
                    image="/media/leadership.jpg"
                    title="Kingdom Leadership"
                    topics={["Culture Transformation", "Mission Clarity", "Governance", "Organizational Alignment"]}
                    outcomes={[
                        "• Stronger leadership pipelines",
                        "• Healthier organizational cultures",
                        "• Improved team alignment",
                        "• Clearer strategic direction",
                    ]}
                >
                    <p>
                        Organizations rise and fall on leadership. Effective leaders
                        must navigate complexity, inspire teams, and create cultures
                        that align purpose with performance.
                    </p>
                    <p>
                        Kingdom Leadership focuses on developing leaders who embody
                        integrity, vision, accountability, and stewardship while
                        creating environments where people and organizations thrive.
                    </p>
                </ConsultingArea>

                {/* Stewardship & Wealth */}

                <ConsultingArea
                    id="stewardship-and-wealth"
                    image="/media/wealth.jpg"
                    title="Stewardship & Wealth"
                    topics={["Estate Planning", "Generosity Frameworks", "Kingdom Finance", "Legacy Planning"]}
                    outcomes={[
                        "• Greater financial clarity",
                        "• Purpose-driven wealth management",
                        "• Sustainable legacy planning",
                        "• Increased Kingdom impact",
                    ]}
                >
                    <p>
                        Wealth is a powerful resource that carries both opportunity
                        and responsibility. Effective stewardship requires wisdom,
                        intentionality, and alignment with long-term purpose.
                    </p>
                    <p>
                        We help individuals, families, and organizations develop
                        frameworks for financial stewardship that balance growth,
                        generosity, sustainability, and legacy.
                    </p>
                </ConsultingArea>

                {/* Business as Mission */}

                <ConsultingArea
                    id="business-as-mission"
                    image="/media/mission.jpg"
                    title="Business as Mission"
                    topics={["Social Impact Strategy", "Marketplace Ministry", "Community Transformation"]}
                    threeCols
                    outcomes={[
                        "• Stronger community engagement",
                        "• Sustainable social impact",
                        "• Purpose-driven organizational growth",
                        "• Increased Kingdom influence",
                    ]}
                >
                    <p>
                        Business has the potential to be more than an economic engine.
                        It can become a platform for transformation, influence, and
                        meaningful impact within communities and industries.
                    </p>
                    <p>
                        We help organizations leverage their resources, leadership,
                        and operations to create lasting value while advancing
                        Kingdom principles and community flourishing.
                    </p>
                </ConsultingArea>

            </div>

        </section>
    )
}

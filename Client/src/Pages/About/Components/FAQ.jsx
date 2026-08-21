import Reveal from "../../../Components/Reveal"

export default function FAQ() {
    const faqItems = [
        {
            question: "What is Business2excel?",
            answer:
                "Business2excel is a Kingdom-centered business transformation ecosystem focused on consulting, leadership development, ethical certification, strategic reinvention, and marketplace impact.",
        },
        {
            question: "Who do you work with?",
            answer:
                "We work with entrepreneurs, executives, organizations, startups, ministries with business initiatives, and Kingdom-driven enterprises.",
        },
        {
            question: "What is Kingdom Certification?",
            answer:
                "Kingdom Certification is an ethical and leadership-based framework designed to align organizations with Kingdom principles and stewardship values.",
        },
        {
            question: "Is Business2excel only for Christian organizations?",
            answer:
                "No. Our worldview is biblically grounded, but our frameworks are globally relevant and professionally applicable.",
        },
    ]

    return (
        <section id="faq" className="py-16 sm:py-20 lg:py-24 scroll-mt-16">

            <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8">

                <Reveal>

                    <span className="eyebrow">
                        FAQ
                    </span>

                    <h2 className="heading-2 mt-5">
                        Frequently Asked Questions
                    </h2>

                </Reveal>

                <div className="space-y-4 mt-10 sm:mt-12">

                    {faqItems.map((item, index) => (

                        <Reveal key={item.question} delay={index * 0.06}>

                            <div
                                className="card p-6 transition-colors duration-300 hover:border-primary/30"
                            >

                                <h3 className="text-base sm:text-lg font-semibold tracking-tight">
                                    {item.question}
                                </h3>

                                <p className="text-sm leading-relaxed text-zinc-400 mt-2.5">
                                    {item.answer}
                                </p>

                            </div>

                        </Reveal>

                    ))}

                </div>

            </div>

        </section>
    )
}

export default function FAQ() {
    const faqItems = [
        {
            question: "What is Business2Excel?",
            answer:
                "Business2Excel is a Kingdom-centered business transformation ecosystem focused on consulting, leadership development, ethical certification, strategic reinvention, and marketplace impact.",
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
            question: "Is Business2Excel only for Christian organizations?",
            answer:
                "No. Our worldview is biblically grounded, but our frameworks are globally relevant and professionally applicable.",
        },
    ]

    return (
        <section id="faq" className="py-28">

            <div className="max-w-5xl mx-auto px-6">

                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                    FAQ
                </span>

                <h2 className="text-4xl md:text-5xl font-bold mt-6">
                    Frequently Asked Questions
                </h2>

                <div className="space-y-6 mt-16">

                    {faqItems.map((item) => (

                        <div
                            key={item.question}
                            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8"
                        >

                            <h3 className="text-2xl font-semibold">
                                {item.question}
                            </h3>

                            <p className="text-zinc-400 leading-relaxed mt-4">
                                {item.answer}
                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    )
}
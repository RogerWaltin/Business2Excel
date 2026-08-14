import { Link } from 'react-router-dom'

const service = [
    {
        title: "Business Transformation",
        desc: "Navigate change, growth, and organizational reinvention.",
        image: "/media/transformation.jpg"
    },
    {
        title: "Kingdom Leadership",
        desc: "Develop leaders grounded in stewardship and purpose.",
        image: "/media/simu-lui-leader.webp"
    },
    {
        title: "Stewardship & Wealth",
        desc: "Align resources, influence, and impact with Kingdom values.",
        image: "/media/wealth.jpg"
    },
    {
        title: "Business as Mission",
        desc: "Advance Kingdom influence through enterprise and innovation.",
        image: "/media/mission.jpg"
    },
]

export default function ServicesPreview() {

    return (
        <section id="services-preview" className="py-16 border-b border-zinc-900">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left Side */}
                    <div>
                        <span className="text-primary uppercase tracking-widest text-sm">
                            Services
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold mt-6">
                            Consulting For
                            <span className="text-primary block">
                                Sustainable Transformation
                            </span>
                        </h2>
                        <p className="text-zinc-400 text-lg leading-relaxed mt-8">
                            Practical solutions designed to help organizations
                            navigate complexity, drive innovation, strengthen
                            leadership, and build long-term Kingdom impact.
                        </p>
                        <Link to="/services">
                            <button className="mt-10 bg-secondary hover:bg-primary text-black font-semibold px-6 py-3 rounded-xl transition-all duration-300 cursor-pointer">
                                View All Services
                            </button>
                        </Link>
                    </div>
                    {/* Right Side */}
                    <div className="grid md:grid-cols-2 gap-6">
                        {service.map((item) => (
                            <div
                                key={item.title}
                                className="relative overflow-hidden bg-zinc-900 border border-zinc-800 rounded-3xl p-8"
                            >
                                <img
                                    src={item.image}
                                    alt=""
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/70" />

                                <div className="relative z-10">
                                    <h3 className="text-xl font-bold">
                                        {item.title}
                                    </h3>
                                    <p className="text-zinc-200 mt-4 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}


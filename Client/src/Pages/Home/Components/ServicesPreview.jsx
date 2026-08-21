import { Link } from 'react-router-dom'
import Reveal from "../../../Components/Reveal"

const service = [
    {
        title: "Business Transformation",
        desc: "Navigate change, growth, and organizational reinvention.",
        image: "/media/transformation.jpg"
    },
    {
        title: "Kingdom Leadership",
        desc: "Develop leaders grounded in stewardship and purpose.",
        image: "/media/leadership.jpg"
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
        <section id="services-preview" className="py-16 sm:py-20 lg:py-24 border-b border-zinc-800/60">
            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* Left Side */}
                    <Reveal>
                        <span className="eyebrow">
                            Services
                        </span>
                        <h2 className="heading-2 mt-5">
                            Consulting For
                            <span className="text-primary block">
                                Sustainable Transformation
                            </span>
                        </h2>
                        <p className="body-text mt-6">
                            Practical solutions designed to help organizations
                            navigate complexity, drive innovation, strengthen
                            leadership, and build long-term Kingdom impact.
                        </p>
                        <Link to="/services">
                            <button className="btn btn-primary mt-8">
                                View All Services
                            </button>
                        </Link>
                    </Reveal>
                    {/* Right Side */}
                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                        {service.map((item, index) => (
                            <Reveal key={item.title} delay={index * 0.08} className="h-full">
                                <div className="image-card group h-full min-h-44 transition-colors duration-300 hover:border-secondary/40">
                                    <img
                                        src={item.image}
                                        alt=""
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/60 to-black/30" />

                                    <div className="relative z-10 p-5 sm:p-6">
                                        <h3 className="text-lg font-semibold tracking-tight">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-zinc-300 mt-2 leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

import Reveal from "../../../Components/Reveal"

export default function AbourHero() {
    return (
        <section className="relative overflow-hidden border-b border-zinc-800/60">

            <img src="/media/about.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />

            <div className="absolute inset-0 bg-linear-to-r from-zinc-950/95 via-black/80 to-zinc-950/50" />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-zinc-950 to-transparent" />

            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32 relative z-10">

                <Reveal className="max-w-4xl">
                    <span className="badge-pill">
                        About
                    </span>
                    <h1 className="heading-1 mt-6">
                        Building a Global
                        <span className="text-primary block italic">
                            Kingdom Business
                        </span>
                        Transformation Ecosystem
                    </h1>

                    <p className="body-text mt-6 max-w-3xl">
                        Business2excel equips entrepreneurs, executives, and organizations
                        to integrate Kingdom principles, ethical leadership, strategic
                        innovation, and AI-age transformation into modern business.
                    </p>

                </Reveal>

            </div>

        </section>
    )
}

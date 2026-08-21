import Reveal from "../../../../Components/Reveal"

export default function LibraryPlaceholder({ title }) {
    return (
        <section className="bg-black text-white relative overflow-hidden">

            {/* Ambient glow */}
            <div className="glow top-1/3 left-1/2 h-72 w-[36rem] -translate-x-1/2 bg-primary/[0.07]" />

            <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40 relative">

                <Reveal>
                    <span className="eyebrow">
                        Resource Library
                    </span>

                    <h1 className="heading-1 mt-5">
                        {title}
                    </h1>

                    <p className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-primary/30 bg-primary/[0.06] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                        </span>
                        Coming soon
                    </p>
                </Reveal>

            </div>

        </section>
    )
}

import Reveal from "../../../Components/Reveal"

export default function NetworkProjectsStories() {
  return (
    <section
      id="network-projects-stories"
      className="scroll-mt-16 py-16 sm:py-20 border-b border-zinc-800/60"
    >

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        <Reveal>
          <span className="badge-pill">
            Networks, Projects & Stories
          </span>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mt-10 sm:mt-14">

          {[
            {
              label: "Kingdom Business Network",
              title: "Build Strategic Relationships",
              desc: "Connect with entrepreneurs, executives, consultants, investors, and Kingdom-minded leaders who share your vision for impact.",
              button: "Join Network",
            },
            {
              label: "Mission Projects",
              title: "Advance Meaningful Change",
              desc: "Participate in initiatives focused on community development, economic empowerment, leadership formation, and Kingdom impact.",
              button: "Explore Projects",
            },
            {
              label: "Transformation Stories",
              title: "See Real Impact",
              desc: "Discover stories of leaders, businesses, and organizations experiencing transformation through Kingdom-centered leadership.",
              button: "Read Stories",
            },
          ].map((item, index) => (

            <Reveal key={item.label} delay={index * 0.08} className="h-full">

              <div className="card group flex h-full flex-col p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">

                <span className="eyebrow">
                  {item.label}
                </span>

                <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight mt-4">
                  {item.title}
                </h3>

                <p className="text-sm text-zinc-400 leading-relaxed mt-3.5">
                  {item.desc}
                </p>

                <div className="mt-auto pt-7">

                  <button className="btn btn-primary">
                    {item.button}
                  </button>

                </div>

              </div>

            </Reveal>

          ))}

        </div>

      </div>
    </section>
  )
}

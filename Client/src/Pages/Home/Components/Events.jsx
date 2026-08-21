import { Link } from "react-router-dom"
import Reveal from "../../../Components/Reveal"

export default function Events() {
  const eventCards = [
    {
      label: "Workshops",
      title: "Practical Training",
      description: "Interactive sessions focused on implementation, stewardship, leadership, and innovation.",
      image: "/media/workshop.jpg",
    },
    {
      label: "Conferences",
      title: "Kingdom Gatherings",
      description: "Connect with entrepreneurs, executives, consultants, investors, and innovators.",
      image: "/media/conference.jpg",
    },
    {
      label: "Webinars",
      title: "Learn Anywhere",
      description: "Online learning sessions covering certification, leadership, transformation, and future trends.",
      image: "/media/webinar.jpg",
    },
    {
      label: "Mentorship",
      title: "Guided Growth",
      description: "Receive strategic guidance from experienced Kingdom leaders and practitioners.",
      image: "/media/mentorship.jpg",
    },
  ]

  return (
    <section id="events" className="py-16 sm:py-20 lg:py-24 border-b border-zinc-800/60">

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left Side */}

          <Reveal>

            <span className="eyebrow">
              Training & Events
            </span>

            <h2 className="heading-2 mt-5">
              Equipping Leaders
              <span className="text-primary block">
                For The Future
              </span>
            </h2>

            <p className="body-text mt-6">
              Practical learning experiences designed to help leaders
              navigate transformation, stewardship, innovation,
              organizational growth, and Kingdom influence in a
              rapidly changing world.
            </p>

            <Link to="/community">
              <button className="btn btn-primary mt-8">
                Explore Community
              </button>
            </Link>

          </Reveal>

          {/* Right Side */}

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">

            {eventCards.map((card, index) => (

              <Reveal key={card.label} delay={index * 0.08} className="h-full">

                <div
                  className={"image-card group h-full min-h-48 transition-colors duration-300 hover:border-secondary/40"}
                >

                  {/* Background Image */}

                  <img
                    src={card.image}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Dark Overlay */}

                  <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/60 to-black/30" />

                  {/* Content */}

                  <div className="relative z-10 p-5 sm:p-6">

                    <span className={"text-[11px] font-semibold uppercase tracking-[0.18em] text-primary"}>
                      {card.label}
                    </span>

                    <h3 className="text-lg font-semibold tracking-tight mt-2">
                      {card.title}
                    </h3>

                    <p className="text-sm text-zinc-300 leading-relaxed mt-2">
                      {card.description}
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

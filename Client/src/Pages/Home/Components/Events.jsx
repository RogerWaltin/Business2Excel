import { Link } from "react-router-dom"

export default function Events({ color1, color2 }) {
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
    <section id="events" className="py-16 border-b border-zinc-900">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left Side */}

          <div>

            <span className="text-primary uppercase tracking-widest text-sm">
              Training & Events
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-6">
              Equipping Leaders
              <span className="text-primary block">
                For The Future
              </span>
            </h2>

            <p className="text-zinc-400 text-lg leading-relaxed mt-8">
              Practical learning experiences designed to help leaders
              navigate transformation, stewardship, innovation,
              organizational growth, and Kingdom influence in a
              rapidly changing world.
            </p>

            <Link to="/community">
              <button className="mt-10 bg-secondary hover:bg-primary text-black font-semibold px-6 py-3 rounded-xl transition-all duration-300 cursor-pointer">
                Explore Community
              </button>
            </Link>

          </div>

          {/* Right Side */}

          <div className="grid md:grid-cols-2 gap-6">

            {eventCards.map((card) => (

              <div
                key={card.label}
                className={"relative overflow-hidden bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-secondary/30 transition-all duration-300"}
              >

                {/* Background Image */}

                <img
                  src={card.image}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Dark Overlay */}

                <div className="absolute inset-0 bg-black/70" />

                {/* Content */}

                <div className="relative z-10">

                  <span className={"text-primary uppercase tracking-wider text-sm"}>
                    {card.label}
                  </span>

                  <h3 className="text-2xl font-bold mt-4">
                    {card.title}
                  </h3>

                  <p className="text-zinc-200 leading-relaxed mt-4">
                    {card.description}
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

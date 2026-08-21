import { Link } from "react-router-dom"
import Reveal from "../../../Components/Reveal"

const trainingEvents = [
  {
    id: "workshops",
    category: "Workshops",
    title: "Practical Kingdom Leadership Training",
    description:
      "Interactive learning experiences focused on implementation, helping leaders apply biblical principles and strategic frameworks inside their organizations.",
    topics: [
      "Ethical Leadership",
      "AI & Faith",
      "Kingdom Stewardship",
      "Innovation",
    ],
    buttonText: "Register For Workshops",
    image: "/media/workshop.jpg"
  },
  {
    id: "conferences",
    category: "Conferences",
    title: "Gather with Kingdom Innovators",
    description:
      "Annual flagship events that bring together entrepreneurs, executives, consultants, investors, and marketplace leaders around strategy, innovation, and Kingdom impact.",
    topics: [],
    buttonText: "Register For Conferences",
    image: "/media/conference.jpg"
  },
  {
    id: "webinars",
    category: "Webinars",
    title: "Learn from Anywhere",
    description:
      "Monthly online learning sessions that provide practical insights into leadership, business transformation, Kingdom certification, and emerging trends.",
    topics: [
      "Leadership",
      "Transformation",
      "Certification",
      "Future Trends",
    ],
    buttonText: "Register For Webinars",
    image: "/media/webinar.jpg"
  },
  {
    id: "mentorship",
    category: "Mentorship",
    title: "Grow with Experienced Leaders",
    description:
      "Receive guidance, accountability, and strategic insight from experienced Kingdom practitioners who have navigated growth, leadership, and organizational transformation.",
    topics: [
      "Leadership Development",
      "Entrepreneurship",
      "Strategic Planning",
      "Stewardship",
    ],
    buttonText: "Register For Mentorship",
    image: "/media/mentorship.jpg"
  },
]

export default function TrainingEvents() {
  return (
    <section id="training-events" className="scroll-mt-16 py-16 sm:py-20 lg:py-24 border-b border-zinc-800/60">

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        <Reveal className="max-w-3xl">

          <span className="eyebrow">
            Training & Events
          </span>

          <h2 className="heading-2 mt-5">
            Equipping Leaders for the Future
          </h2>

          <p className="body-text mt-5">
            Practical learning experiences designed to help leaders navigate
            transformation, stewardship, innovation, organizational growth,
            and Kingdom influence in a rapidly changing world.
          </p>

        </Reveal>

        <div className="grid lg:grid-cols-2 gap-5 sm:gap-6 mt-12 sm:mt-16">

          {trainingEvents.map((item, index) => (

            <Reveal key={item.id} delay={(index % 2) * 0.1} className="h-full">

              <div
                id={item.id}
                className="image-card group h-full scroll-mt-24 transition-colors duration-300 hover:border-secondary/40"
              >

                <img src={item.image} alt="" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/65 to-black/40" />

                <div className="relative z-10 flex h-full flex-col p-6 sm:p-8">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
                    {item.category}
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight mt-3">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mt-3.5">
                    {item.description}
                  </p>
                  {item.topics.length > 0 && (
                    <div className="flex flex-wrap gap-2.5 mt-6">
                      {item.topics.map((topic) => (
                        <span
                          key={topic}
                          className="chip"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="mt-auto pt-7">
                    <Link to="/training-events">
                      <button className="btn btn-primary">
                        {item.buttonText}
                      </button>
                    </Link>
                  </div>
                </div>

              </div>

            </Reveal>

          ))}

        </div>

      </div>

    </section>
  )
}

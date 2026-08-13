import { Link } from "react-router-dom"

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
  },
  {
    id: "conferences",
    category: "Conferences",
    title: "Gather with Kingdom Innovators",
    description:
      "Annual flagship events that bring together entrepreneurs, executives, consultants, investors, and marketplace leaders around strategy, innovation, and Kingdom impact.",
    topics: [],
    buttonText: "Register For Conferences",
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
  },
]

export default function TrainingEvents() {
  return (
    <section id="training-events" className="scroll-mt-24 py-28 border-b border-zinc-900">

      <div className="max-w-7xl mx-auto px-6">

        <div className="max-w-4xl">

          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Training & Events
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-6">
            Equipping Leaders for the Future
          </h2>

          <p className="text-zinc-400 text-lg leading-relaxed mt-8">
            Practical learning experiences designed to help leaders navigate
            transformation, stewardship, innovation, organizational growth,
            and Kingdom influence in a rapidly changing world.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-8 mt-20">

          {trainingEvents.map((item) => (

            <div
              key={item.id}
              id={item.id}
              className="scroll-mt-24 bg-zinc-900 border border-zinc-800 rounded-3xl p-10 hover:border-secondary/30 transition-all duration-300"
            >

              <span className="text-sm uppercase tracking-[0.2em] text-primary">
                {item.category}
              </span>

              <h3 className="text-3xl font-bold mt-4">
                {item.title}
              </h3>

              <p className="text-zinc-400 leading-relaxed mt-6">
                {item.description}
              </p>

              {item.topics.length > 0 && (

                <div className="flex flex-wrap gap-3 mt-8">

                  {item.topics.map((topic) => (

                    <span
                      key={topic}
                      className="bg-zinc-950 border border-zinc-800 rounded-full px-4 py-2 text-sm"
                    >
                      {topic}
                    </span>

                  ))}

                </div>

              )}

              <Link to="/training-events">
                <button className="mt-8 bg-secondary hover:bg-primary text-black font-semibold px-6 py-3 rounded-xl transition-all duration-300 cursor-pointer">
                  {item.buttonText}
                </button>
              </Link>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}

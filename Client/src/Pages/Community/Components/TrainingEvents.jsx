const workshopTopics = [
  "Ethical Leadership",
  "AI & Faith",
  "Kingdom Stewardship",
  "Innovation",
]

const webinarTopics = [
  "Leadership",
  "Transformation",
  "Certification",
  "Future Trends",
]

const mentorshipTopics = [
  "Leadership Development",
  "Entrepreneurship",
  "Strategic Planning",
  "Stewardship",
]

export default function TrainingEvents() {
  return (
    <section
      id="training-events"
      className="scroll-mt-24 py-28 border-b border-zinc-900"
    >

      <div className="max-w-7xl mx-auto px-6">

        <div className="max-w-4xl">

          <span className="text-emerald-400 uppercase tracking-widest text-sm">
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

          {/* Workshops */}
          <div id="workshops" className="scroll-mt-24 bg-zinc-900 border border-zinc-800 rounded-3xl p-10 hover:border-emerald-500/30 transition-all duration-300">

            <span className="text-emerald-400 uppercase tracking-wider text-sm">
              Workshops
            </span>

            <h3 className="text-3xl font-bold mt-4">
              Practical Kingdom Leadership Training
            </h3>

            <p className="text-zinc-400 leading-relaxed mt-6">
              Interactive learning experiences focused on implementation,
              helping leaders apply biblical principles and strategic
              frameworks inside their organizations.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">

              {workshopTopics.map((item) => (

                <span
                  key={item}
                  className="bg-zinc-950 border border-zinc-800 rounded-full px-4 py-2 text-sm"
                >

                  {item}

                </span>

              ))}

            </div>

            <button className="mt-8 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-6 py-3 rounded-xl transition-all duration-300 cursor-pointer">
              View Workshops
            </button>

          </div>

          {/* Conferences */}
          <div id="conferences" className="scroll-mt-24 bg-zinc-900 border border-zinc-800 rounded-3xl p-10 hover:border-emerald-500/30 transition-all duration-300">

            <span className="text-emerald-400 uppercase tracking-wider text-sm">
              Conferences
            </span>

            <h3 className="text-3xl font-bold mt-4">
              Gather with Kingdom Innovators
            </h3>

            <p className="text-zinc-400 leading-relaxed mt-6">
              Annual flagship events that bring together entrepreneurs,
              executives, consultants, investors, and marketplace leaders
              around strategy, innovation, and Kingdom impact.
            </p>

            <button className="mt-8 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-6 py-3 rounded-xl transition-all duration-300 cursor-pointer">
              View Conferences
            </button>

          </div>

          {/* Webinars */}
          <div id="webinars" className="scroll-mt-24 bg-zinc-900 border border-zinc-800 rounded-3xl p-10 hover:border-emerald-500/30 transition-all duration-300">

            <span className="text-emerald-400 uppercase tracking-wider text-sm">
              Webinars
            </span>

            <h3 className="text-3xl font-bold mt-4">
              Learn from Anywhere
            </h3>

            <p className="text-zinc-400 leading-relaxed mt-6">
              Monthly online learning sessions that provide practical
              insights into leadership, business transformation, Kingdom
              certification, and emerging trends.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">

              {webinarTopics.map((item) => (

                <span
                  key={item}
                  className="bg-zinc-950 border border-zinc-800 rounded-full px-4 py-2 text-sm"
                >

                  {item}

                </span>

              ))}

            </div>

            <button className="mt-8 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-6 py-3 rounded-xl transition-all duration-300 cursor-pointer">
              View Webinars
            </button>

          </div>

          {/* Mentorship */}
          <div id="mentorship" className="scroll-mt-24 bg-zinc-900 border border-zinc-800 rounded-3xl p-10 hover:border-emerald-500/30 transition-all duration-300">

            <span className="text-emerald-400 uppercase tracking-wider text-sm">
              Mentorship
            </span>

            <h3 className="text-3xl font-bold mt-4">
              Grow with Experienced Leaders
            </h3>

            <p className="text-zinc-400 leading-relaxed mt-6">
              Receive guidance, accountability, and strategic insight from
              experienced Kingdom practitioners who have navigated growth,
              leadership, and organizational transformation.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">

              {mentorshipTopics.map((item) => (

                <span
                  key={item}
                  className="bg-zinc-950 border border-zinc-800 rounded-full px-4 py-2 text-sm"
                >

                  {item}

                </span>

              ))}

            </div>

            <button className="mt-8 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-6 py-3 rounded-xl transition-all duration-300 cursor-pointer">
              Apply for Mentorship
            </button>

          </div>

        </div>

      </div>

    </section>
  )
}

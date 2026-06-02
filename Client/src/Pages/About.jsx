export default function About() {

  const leadershipAreas = [
    "business transformation",
    "leadership development",
    "marketplace ministry",
    "consulting and strategy",
    "organizational governance",
    "entrepreneurship",
    "digital innovation",
    "AI-age reinvention",
  ]

  const kingdomValues = [
    "integrity",
    "wisdom",
    "excellence",
    "Accountability",
    "servant leadership",
    "Kingdom centered",
  ]

  const worldviewPrinciples = [
    "integrity",
    "accountability",
    "stewardship",
    "justice",
    "wisdom",
    "servant leadership",
    "generosity",
    "human dignity",
  ]

  const challenges = [
    "AI disruption",
    "ethical uncertainty",
    "leadership burnout",
    "cultural fragmentation",
    "consumer distrust",
    "mission drift",
    "rapid digital transformation",
  ]

  const frameworks = [
    "strategic excellence",
    "ethical clarity",
    "leadership wisdom",
    "innovation",
    "long-term purpose",
  ]

  const faqItems = [
    {
      question: "What is Business2Excel?",
      answer:
        "Business2Excel is a Kingdom-centered business transformation ecosystem focused on consulting, leadership development, ethical certification, strategic reinvention, and marketplace impact.",
    },
    {
      question: "Who do you work with?",
      answer:
        "We work with entrepreneurs, executives, organizations, startups, ministries with business initiatives, and Kingdom-driven enterprises.",
    },
    {
      question: "What is Kingdom Certification?",
      answer:
        "Kingdom Certification is an ethical and leadership-based framework designed to align organizations with Kingdom principles and stewardship values.",
    },
    {
      question: "Is Business2Excel only for Christian organizations?",
      answer:
        "No. Our worldview is biblically grounded, but our frameworks are globally relevant and professionally applicable.",
    },
  ]

  return (
    <div id="about" className="bg-zinc-950 text-white">

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-zinc-900">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.15),transparent_35%)]" />

        <div className="max-w-7xl mx-auto px-6 py-32 relative z-10">

          <div className="max-w-4xl">

            <span className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm tracking-widest uppercase text-emerald-400">
              About Business2Excel
            </span>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mt-8">
              Building a Global
              <span className="text-emerald-400 block">
                Kingdom Business
              </span>
              Transformation Ecosystem
            </h1>

            <p className="text-zinc-400 text-lg md:text-xl leading-relaxed mt-8 max-w-3xl">
              Business2Excel equips entrepreneurs, executives, and organizations
              to integrate Kingdom principles, ethical leadership, strategic
              innovation, and AI-age transformation into modern business.
            </p>

          </div>

        </div>

      </section>

      {/* OUR STORY */}
      <section id="our-story" className="py-28 border-b border-zinc-900">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

          <div>

            <span className="text-emerald-400 uppercase tracking-widest text-sm">
              Our Story
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-6">
              Restoring Purpose, Integrity, and Leadership to Modern Business
            </h2>

          </div>

          <div className="space-y-8 text-zinc-400 leading-relaxed text-lg">

            <p>
              Business2Excel was born from a growing realization that modern
              business is facing more than economic disruption — it is facing a
              crisis of purpose, integrity, and leadership.
            </p>

            <p>
              Founded with a vision to bridge biblical wisdom and modern
              business excellence, Business2Excel equips entrepreneurs,
              executives, organizations, and marketplace leaders to build
              businesses that are profitable, ethical, impactful, and eternally
              significant.
            </p>

            <p>
              More than a consulting organization, Business2Excel is building a
              global movement where faith-driven leadership, strategic
              innovation, stewardship, and Kingdom impact converge to transform
              industries, communities, and nations.
            </p>

          </div>

        </div>

      </section>

      {/* LEADERSHIP */}
      <section id="leadership" className="py-28 border-b border-zinc-900">

        <div className="max-w-7xl mx-auto px-6">

          <div className="max-w-3xl">

            <span className="text-emerald-400 uppercase tracking-widest text-sm">
              Leadership
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-6">
              Leadership Rooted in Stewardship and Vision
            </h2>

            <p className="text-zinc-400 text-lg leading-relaxed mt-8">
              Our leadership team combines strategic excellence with Kingdom
              values, ethical leadership, and long-term impact.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">

            {leadershipAreas.map((item) => (

              <div
                key={item}
                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-emerald-500/30 transition-all duration-300"
              >

                <h3 className="text-lg font-semibold capitalize text-center">
                  {item}
                </h3>

              </div>

            ))}

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-6 mt-10">

            {kingdomValues.map((item) => (

              <div
                key={item}
                className="bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-6 text-center"
              >

                <span className="capitalize text-emerald-400 font-medium">
                  {item}
                </span>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* FOUNDER STORY */}
      <section id="founder-story" className="py-28 border-b border-zinc-900">

        <div className="max-w-5xl mx-auto px-6">

          <span className="text-emerald-400 uppercase tracking-widest text-sm">
            Founder Story
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-6">
            A Vision for Kingdom-Centered Transformation
          </h2>

          <div className="space-y-8 text-zinc-400 leading-relaxed text-lg mt-12">

            <p>
              Business2Excel began with a burden to see business reclaimed as a
              platform for transformation, stewardship, and Kingdom impact.
            </p>

            <p>
              What started as a vision for business consulting evolved into a
              much larger mission: to build a Kingdom business transformation
              ecosystem capable of influencing leaders, organizations,
              industries, and nations.
            </p>

            <p>
              Today, Business2Excel continues to expand as a platform for
              leadership transformation, ethical certification, strategic
              consulting, and Kingdom-centered innovation.
            </p>

          </div>

        </div>

      </section>

      {/* VISION & MISSION */}
      <section id="vision-mission" className="py-28 border-b border-zinc-900">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-8">

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10">

            <span className="text-emerald-400 uppercase tracking-widest text-sm">
              Our Vision
            </span>

            <p className="text-2xl leading-relaxed mt-6">
              To see businesses, leaders, and organizations transformed through
              Kingdom principles, ethical leadership, strategic innovation, and
              biblical stewardship.
            </p>

          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10">

            <span className="text-emerald-400 uppercase tracking-widest text-sm">
              Our Mission
            </span>

            <p className="text-zinc-400 leading-relaxed text-lg mt-6">
              Business2Excel exists to equip entrepreneurs, executives, and
              organizations with Kingdom-centered transformation, leadership
              development, ethical certification systems, strategic consulting,
              and AI-age reinvention.
            </p>

          </div>

        </div>

      </section>

      {/* KINGDOM WORLDVIEW */}
      <section id="kingdom-worldview" className="py-28 border-b border-zinc-900">

        <div className="max-w-7xl mx-auto px-6">

          <div className="max-w-3xl">

            <span className="text-emerald-400 uppercase tracking-widest text-sm">
              Kingdom Worldview
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-6">
              Business as a Platform for Stewardship and Transformation
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">

            {worldviewPrinciples.map((item) => (

              <div
                key={item}
                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8"
              >

                <h3 className="capitalize text-lg font-semibold">
                  {item}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* WHY BUSINESS2EXCEL EXISTS */}
      <section id="why-business2excel-exists" className="py-28 border-b border-zinc-900">

        <div className="max-w-7xl mx-auto px-6">

          <div className="max-w-3xl">

            <span className="text-emerald-400 uppercase tracking-widest text-sm">
              Why Business2Excel Exists
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-6">
              Future-Ready Businesses Need More Than Technical Expertise
            </h2>

          </div>

          <div className="grid lg:grid-cols-2 gap-12 mt-16">

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10">

              <h3 className="text-2xl font-bold mb-8">
                Modern Challenges
              </h3>

              <div className="space-y-4">

                {challenges.map((item) => (

                  <div
                    key={item}
                    className="bg-zinc-950 border border-zinc-800 rounded-2xl px-5 py-4"
                  >

                    <span className="capitalize text-zinc-300">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10">

              <h3 className="text-2xl font-bold mb-8">
                Our Framework
              </h3>

              <div className="space-y-4">

                {frameworks.map((item) => (

                  <div
                    key={item}
                    className="bg-emerald-500/5 border border-emerald-500/20 rounded-2xl px-5 py-4"
                  >

                    <span className="capitalize text-emerald-400">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials-case-studies" className="py-28 border-b border-zinc-900">

        <div className="max-w-7xl mx-auto px-6">

          <span className="text-emerald-400 uppercase tracking-widest text-sm">
            Case Studies
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-6">
            Real Organizational Transformation
          </h2>

          <div className="grid lg:grid-cols-3 gap-8 mt-16">

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10">
              <h3 className="text-2xl font-bold">
                Leadership Transformation
              </h3>

              <p className="text-zinc-400 leading-relaxed mt-6">
                Improved executive alignment, stronger team culture, and
                mission-driven decision making through leadership
                transformation frameworks.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10">
              <h3 className="text-2xl font-bold">
                Business Reinvention
              </h3>

              <p className="text-zinc-400 leading-relaxed mt-6">
                Strategic reinvention guidance for organizations navigating
                digital disruption and AI transformation.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10">
              <h3 className="text-2xl font-bold">
                Ethical Framework
              </h3>

              <p className="text-zinc-400 leading-relaxed mt-6">
                Governance and accountability systems that strengthened trust,
                stewardship, and organizational credibility.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* FAQ */}
      <section id="faq" className="py-28">

        <div className="max-w-5xl mx-auto px-6">

          <span className="text-emerald-400 uppercase tracking-widest text-sm">
            FAQ
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6 mt-16">

            {faqItems.map((item) => (

              <div
                key={item.question}
                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8"
              >

                <h3 className="text-2xl font-semibold">
                  {item.question}
                </h3>

                <p className="text-zinc-400 leading-relaxed mt-4">
                  {item.answer}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

    </div>
  )
}
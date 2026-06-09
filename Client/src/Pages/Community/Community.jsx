export default function Community() {

  const networkFeatures = [
    "Strategic Relationships",
    "Business Referrals",
    "Collaboration Opportunities",
    "Peer Learning Groups",
    "Global Networking",
    "Marketplace Connections",
  ]

  const impactStats = [
    {
      number: "500+",
      label: "Kingdom Leaders",
    },
    {
      number: "100+",
      label: "Strategic Partnerships",
    },
    {
      number: "50+",
      label: "Mission Initiatives",
    },
    {
      number: "200+",
      label: "Transformation Stories",
    },
  ]

  return (
    <div className="bg-zinc-950 text-white">

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-zinc-900">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.15),transparent_35%)]" />

        <div className="max-w-7xl mx-auto px-6 py-17 relative z-10">

          <div className="max-w-5xl">

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mt-8">
              Building a Global
              <span className="text-emerald-400 block">
                Kingdom Business
              </span>
              Movement
            </h1>

            <p className="text-zinc-400 text-lg md:text-xl leading-relaxed mt-8 max-w-4xl">
              Connecting leaders, equipping organizations, and creating lasting
              Kingdom impact through strategic relationships, leadership
              development, mentorship, collaboration, and transformational
              initiatives.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <button className="bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-8 py-4 rounded-2xl transition-all duration-300 cursor-pointer">
                Join the Network
              </button>

              <button className="border border-zinc-700 hover:border-emerald-500 text-white px-8 py-4 rounded-2xl transition-all duration-300 cursor-pointer">
                Explore Opportunities
              </button>

            </div>

          </div>

        </div>

      </section>

      {/* COMMUNITY & IMPACT */}
      <section
        id="community-impact"
        className="scroll-mt-24 py-28 border-b border-zinc-900"
      >

        <div className="max-w-7xl mx-auto px-6">

          <span className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm tracking-widest uppercase text-emerald-400">
            Community & Impact
          </span>

          <div className="grid lg:grid-cols-2 gap-16 items-start mt-12">

            {/* Left Side */}
            <div>



              <h2 className="text-4xl md:text-5xl font-bold mt-6">
                Connection That Leads to Transformation
              </h2>

              <p className="text-zinc-400 text-lg leading-relaxed mt-8">
                The Business2Excel ecosystem exists to unite entrepreneurs,
                executives, consultants, investors, and ministry leaders around
                a shared vision of Kingdom-centered business transformation.
              </p>

              <p className="text-zinc-400 text-lg leading-relaxed mt-6">
                Through strategic relationships, collaboration opportunities,
                mission initiatives, and transformational stories, we are
                building a movement that influences industries, communities,
                and nations.
              </p>



            </div>

            {/* Right Side */}
            <div className="grid md:grid-cols-2 gap-6">

              {impactStats.map((stat) => (

                <div
                  key={stat.label}
                  className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 text-center"
                >

                  <h3 className="text-5xl font-bold text-emerald-400">
                    {stat.number}
                  </h3>

                  <p className="text-zinc-400 mt-4">
                    {stat.label}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* Feature Cards */}
      <section
        id="network-projects-stories"
        className="scroll-mt-24 py-10 border-b border-zinc-900"
      >

        <div className="max-w-7xl mx-auto px-6">

          <span className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm tracking-widest uppercase text-emerald-400">
            Networks, Projects & Stories
          </span>

          <div className="grid lg:grid-cols-3 gap-8 mt-24">

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10">

              <span className="text-emerald-400 uppercase tracking-wider text-sm">
                Kingdom Business Network
              </span>

              <h3 className="text-3xl font-bold mt-4">
                Build Strategic Relationships
              </h3>

              <p className="text-zinc-400 leading-relaxed mt-6">
                Connect with entrepreneurs, executives, consultants, investors,
                and Kingdom-minded leaders who share your vision for impact.
              </p>

              <button className="mt-8 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-6 py-3 rounded-xl transition-all duration-300 cursor-pointer">
                Join Network
              </button>

            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10">

              <span className="text-emerald-400 uppercase tracking-wider text-sm">
                Mission Projects
              </span>

              <h3 className="text-3xl font-bold mt-4">
                Advance Meaningful Change
              </h3>

              <p className="text-zinc-400 leading-relaxed mt-6">
                Participate in initiatives focused on community development,
                economic empowerment, leadership formation, and Kingdom impact.
              </p>

              <button className="mt-8 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-6 py-3 rounded-xl transition-all duration-300 cursor-pointer">
                Explore Projects
              </button>

            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10">

              <span className="text-emerald-400 uppercase tracking-wider text-sm">
                Transformation Stories
              </span>

              <h3 className="text-3xl font-bold mt-4">
                See Real Impact
              </h3>

              <p className="text-zinc-400 leading-relaxed mt-6">
                Discover stories of leaders, businesses, and organizations
                experiencing transformation through Kingdom-centered leadership.
              </p>

              <button className="mt-8 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-6 py-3 rounded-xl transition-all duration-300 cursor-pointer">
                Read Stories
              </button>

            </div>

          </div>

        </div>
      </section>

      {/* LEADERSHIP DEVELOPMENT */}
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

                {[
                  "Ethical Leadership",
                  "AI & Faith",
                  "Kingdom Stewardship",
                  "Innovation",
                ].map((item) => (

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

                {[
                  "Leadership",
                  "Transformation",
                  "Certification",
                  "Future Trends",
                ].map((item) => (

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

                {[
                  "Leadership Development",
                  "Entrepreneurship",
                  "Strategic Planning",
                  "Stewardship",
                ].map((item) => (

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

      {/* MEMBER DIRECTORY */}
      <section
        id="member-directory"
        className="scroll-mt-24 py-28 border-b border-zinc-900"
      >

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <span className="text-emerald-400 uppercase tracking-widest text-sm">
                Member Directory
              </span>

              <h2 className="text-4xl md:text-5xl font-bold mt-6">
                Discover Trusted Kingdom Professionals
              </h2>

              <p className="text-zinc-400 text-lg leading-relaxed mt-8">
                Connect with entrepreneurs, consultants, advisors, ministries,
                service providers, and organizations committed to Kingdom
                values, ethical leadership, and business excellence.
              </p>

              <p className="text-zinc-400 text-lg leading-relaxed mt-6">
                The directory creates opportunities for collaboration,
                referrals, partnerships, and strategic growth while helping
                members identify trusted professionals within the ecosystem.
              </p>

              <button className="mt-10 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-8 py-4 rounded-2xl transition-all duration-300 cursor-pointer">
                Browse Directory
              </button>

            </div>

            <div className="grid md:grid-cols-2 gap-6">

              {[
                "Consultants",
                "Entrepreneurs",
                "Investors",
                "Service Providers",
                "Organizations",
                "Marketplace Leaders",
              ].map((item) => (

                <div
                  key={item}
                  className="bg-zinc-900 border border-zinc-800 rounded-3xl min-h-35 flex items-center justify-center text-center p-8"
                >

                  <h3 className="text-xl font-semibold">
                    {item}
                  </h3>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* FINAL CTA */}
      <section className="py-32">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <div className="bg-zinc-900 border border-zinc-800 rounded-4xl p-12 md:p-16">

            <span className="text-emerald-400 uppercase tracking-widest text-sm">
              Join the Movement
            </span>

            <h2 className="text-4xl md:text-6xl font-bold mt-6">
              Ready to Build Kingdom Impact Together?
            </h2>

            <p className="text-zinc-400 text-lg leading-relaxed mt-8 max-w-3xl mx-auto">
              Connect with leaders, accelerate your growth, strengthen your
              influence, and become part of a global Kingdom business
              transformation ecosystem.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-10">

              <button className="bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-8 py-4 rounded-2xl transition-all duration-300 cursor-pointer">
                Join the Network
              </button>

              <button className="border border-zinc-700 hover:border-emerald-500 px-8 py-4 rounded-2xl transition-all duration-300 cursor-pointer">
                Book a Consultation
              </button>

            </div>

          </div>

        </div>

      </section>

    </div>
  )
}

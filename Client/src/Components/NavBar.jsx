import { useState } from "react"
import { HashLink } from "react-router-hash-link"
//BUG fix hamburger menu of mobile (delay in closing is one problem)
//BUG fix dropdown menus of mobile

const navSections = [
  {
    label: "Home",
    to: "/"
  },
  {
    label: "Services", to: "/services",
    dropdownGroups: [
      {
        title: "Consulting",
        links: [
          {
            label: "Business Transformation", to: "/services#business-transformation",
          },

          {
            label: "Kingdom Leadership", to: "/services#kingdom-leadership",
          },

          {
            label: "Stewardship & Wealth", to: "/services#stewardship-and-wealth",
          },

          {
            label: "Business as Mission", to: "/services#business-as-mission",
          }
        ]
      },
      {
        title: "Certification",
        links: [
          {
            label: "Kingdom Certification", to: "/services#kingdom-certification",
          }
        ]
      }
    ],
  },
  {
    label: "Resources", to: "/resources",
    dropdownGroups: [
      {
        title: "Featured",
        links: [
          {
            label: "Featured Insight", to: "/resources#featured-insight",
          },
          {
            label: "Featured Resources", to: "/resources#featured-resources",
          },
        ],
      },
      {
        title: "Resource Library",
        links: [
          {
            label: "Articles", to: "/resources/articles",
          },
          {
            label: "Whitepapers", to: "/resources/whitepapers",
          },
          {
            label: "Videos", to: "/resources/videos",
          },
          {
            label: "Podcasts", to: "/resources/podcasts",
          },
          {
            label: "AI + Ethics Reports", to: "/resources/ai-ethics-reports",
          },
          {
            label: "Biblical Business Insights", to: "/resources/biblical-business-insights",
          },
          {
            label: "Leadership Devotionals", to: "/resources/leadership-devotionals",
          },
          {
            label: "Downloadable Frameworks", to: "/resources/frameworks",
          },
          {
            label: "Case Studies", to: "/resources/case-studies",
          },
        ],
      },
    ]
  },
  {
    label: "Community", to: "/community",
    dropdownGroups: [
      {
        title: "Community",
        links: [
          {
            label: "Community & Impact", to: "/community#community-impact",
          },
          {
            label: "Networks, Projects & Stories", to: "/community#network-projects-stories",
          },
          {
            label: "Training & Events", to: "/community#training-events",
          },
          {
            label: "Member Directory", to: "/community#member-directory",
          },
        ],
      },
      {
        title: "Training & Events",
        links: [
          {
            label: "Workshops", to: "/community#workshops",
          },
          {
            label: "Conferences", to: "/community#conferences",
          },
          {
            label: "Webinars", to: "/community#webinars",
          },
          {
            label: "Mentorship", to: "/community#mentorship",
          },
        ],
      },

    ],
  },
  {
    label: "About", to: "/about",

    dropdownGroups: [
      {
        title: "About Us",

        links: [
          {
            label: "Our Story", to: "/about#our-story",
          },
          {
            label: "Leadership", to: "/about#leadership",
          },
          {
            label: "Founder Story", to: "/about#founder-story",
          },
          {
            label: "FAQ", to: "/about#faq",
          },
        ],
      },
      {
        title: "Identity",

        links: [
          {
            label: "Vision & Mission", to: "/about#vision-mission",
          },
          {
            label: "Kingdom Worldview", to: "/about#kingdom-worldview",
          },
          {
            label: "Case Studies", to: "/about#testimonials-case-studies",
          },
        ],
      },
    ],
  },
  {
    label: "Contact",
    to: "/contact"
  },

]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openSection, setOpenSection] = useState(null)

  function toggleSection(label) {
    setOpenSection((prev) =>
      prev === label ? null : label
    )
  }

  return (
    <div className="sticky top-0 z-50 overflow-x-clip">

      <div className="relative">

        {/* Navbar */}
        <nav className="bg-zinc-900/75 backdrop-blur-md border-b border-zinc-800">

          <div className="max-w-7xl mx-auto px-6 h-18 flex items-center">

            {/* Logo */}
            <HashLink
              smooth
              to="/"
              className="mr-auto text-2xl font-bold tracking-tight group text-white hover:text-emerald-400 transition-colors duration-300"
            >

              Business
              <span className="text-emerald-400 group-hover:text-white transition-colors duration-300">
                2
              </span>
              Excel

            </HashLink>

            {/* Hamburger */}
            <button
              onClick={() => {
                setMenuOpen((prev) => !prev)

                if (menuOpen) {
                  setOpenSection(null)
                }
              }}
              className="lg:hidden ml-auto text-white hover:text-emerald-400 transition-colors duration-300 cursor-pointer"
            >

              {menuOpen ? (

                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >

                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />

                </svg>

              ) : (

                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >

                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />

                </svg>

              )}

            </button>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center justify-center flex-1 h-full">

              {navSections.map((section) => (

                <div
                  key={section.label}
                  className="relative group h-full flex items-center"
                >

                  {/* Main Nav Link */}
                  <HashLink
                    smooth
                    to={section.to}
                    className="h-fit w-fit flex items-center gap-2 mx-7 text-white hover:text-emerald-400 transition-all duration-300"
                  >

                    <span className="font-medium">
                      {section.label}
                    </span>

                    {section.dropdownGroups && (

                      <svg
                        className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >

                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />

                      </svg>

                    )}

                  </HashLink>

                  {/* Desktop Dropdown */}
                  {section.dropdownGroups && (

                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">

                      <div className={`w-225 bg-zinc-900/95 backdrop-blur-xl border border-zinc-800 rounded-3xl p-6 shadow-2xl grid grid-cols-2 gap-12 `}>

                        {section.dropdownGroups.map((group) => (

                          <div key={group.title}>

                            {/* Group Title */}
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
                              {group.title}
                            </p>

                            {/* Divider */}
                            <div className="mt-3 h-px bg-zinc-800" />

                            {/* Links */}
                            <div className="mt-5 flex flex-col">

                              {group.links.map((link) => (

                                <HashLink
                                  key={link.label}
                                  smooth
                                  to={link.to}
                                  className="rounded-xl px-4 py-3 text-zinc-300 transition-all duration-300 hover:bg-zinc-800 hover:text-emerald-400"
                                >
                                  {link.label}
                                </HashLink>

                              ))}

                            </div>

                          </div>

                        ))}

                      </div>

                    </div>

                  )}

                </div>

              ))}

            </div>

          </div>

        </nav>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden bg-zinc-900 border-b border-zinc-800 transition-all duration-300 ${menuOpen ? "max-h-500" : "max-h-0"
            }`}
        >

          <div className="px-6 py-4 flex flex-col gap-2">

            {navSections.map((section) => {

              const hasDropdown = !!section.dropdownGroups
              const isOpen = openSection === section.label

              return (

                <div
                  key={section.label}
                  className="rounded-2xl bg-zinc-950 overflow-hidden"
                >

                  {/* Main Row */}
                  <div
                    className={`flex items-center justify-between px-4 py-4 transition-colors duration-300 ${hasDropdown
                      ? "cursor-pointer hover:bg-emerald-500/10"
                      : ""
                      }`}
                    onClick={() => {
                      if (hasDropdown) {
                        toggleSection(section.label)
                      }
                    }}
                  >

                    <HashLink
                      smooth
                      to={section.to}
                      onClick={(e) => {
                        e.stopPropagation()

                        setMenuOpen(false)
                        setOpenSection(null)
                      }}
                      className="text-lg font-medium text-white hover:text-emerald-400 transition-colors duration-300"
                    >
                      {section.label}
                    </HashLink>

                    {hasDropdown && (

                      <svg
                        className={`w-5 h-5 text-white transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                          }`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >

                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />

                      </svg>

                    )}

                  </div>

                  {/* Accordion */}
                  {hasDropdown && (

                    <div
                      className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-250" : "max-h-0"
                        }`}
                    >

                      <div className="pb-4">

                        {section.dropdownGroups.map((group) => (

                          <div
                            key={group.title}
                            className="px-4 pt-4"
                          >

                            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
                              {group.title}
                            </p>

                            <div className="space-y-1">

                              {group.links.map((link) => (

                                <HashLink
                                  key={link.label}
                                  smooth
                                  to={link.to}
                                  onClick={() => {
                                    setMenuOpen(false)
                                    setOpenSection(null)
                                  }}
                                  className="block rounded-xl px-4 py-3 text-zinc-400 hover:bg-zinc-900 hover:text-emerald-400 transition-all duration-300"
                                >

                                  {link.label}

                                </HashLink>

                              ))}

                            </div>

                          </div>

                        ))}

                      </div>

                    </div>

                  )}

                </div>

              )

            })}

          </div>

        </div>

      </div>

    </div>
  )
}

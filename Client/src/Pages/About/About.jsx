import AbourHero from "./Components/AboutHero"
import FAQ from "./Components/FAQ"
import FounderStory from "./Components/FounderStory"
import KingdomWorldview from "./Components/KingdomWorldview"
import Leadership from "./Components/Leadership"
import OurStory from "./Components/OurStory"
import Testimonials from "./Components/Testimonials"
import VisionMission from "./Components/VisionMission"
import WhyB2E from "./Components/WhyB2E"

export default function About() {

  return (
    <div id="about" className="bg-zinc-950 text-white">
      <AbourHero />
      <OurStory />
      <Leadership />
      <FounderStory />
      <VisionMission />
      <KingdomWorldview />
      <WhyB2E />
      <Testimonials />
      <FAQ />
    </div>
  )
}
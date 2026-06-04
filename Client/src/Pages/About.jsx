import AbourHero from "../Components/About/AboutHero"
import FAQ from "../Components/About/FAQ"
import FounderStory from "../Components/About/FounderStory"
import KingdomWorldview from "../Components/About/KingdomWorldview"
import Leadership from "../Components/About/Leadership"
import OurStory from "../Components/About/OurStory"
import Testimonials from "../Components/About/Testimonials"
import VisionMission from "../Components/About/VisionMission"
import WhyB2E from "../Components/About/WhyB2E"

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
import AbourHero from "./Components/AboutHero"
import FAQ from "./Components/FAQ"
import FounderStory from "./Components/FounderStory"
import KingdomWorldview from "./Components/KingdomWorldview"
import Leadership from "./Components/Leadership"
import OurStory from "./Components/OurStory"
import Testimonials from "./Components/Testimonials"
import VisionMission from "./Components/VisionMission"
import { color1, color2 } from "../../Data/colors.js"

export default function About() {

  return (
    <div id="about" className="bg-zinc-950 text-white">
      <AbourHero color1={color1} color2={color2} />
      <OurStory color1={color1} color2={color2} />
      <Leadership color1={color1} color2={color2} />
      <FounderStory color1={color1} color2={color2} />
      <VisionMission color1={color1} color2={color2} />
      <KingdomWorldview color1={color1} color2={color2} />
      <Testimonials color1={color1} color2={color2} />
      <FAQ color1={color1} color2={color2} />
    </div>
  )
}
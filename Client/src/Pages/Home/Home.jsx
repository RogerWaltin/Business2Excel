import HomeHero from "./Components/HomeHero.jsx"
import TrustBar from "./Components/TrustBar.jsx"
import Challenge from "./Components/Challenge.jsx"
import KingdomTransformationFramework from "./Components/KingdomTransformationFramework.jsx"
import KingdomCertification from "./Components/KingdomCertification.jsx"
import Events from "./Components/Events.jsx"
import ResourcesPreview from "./Components/ResourcesPreview.jsx"
import WhoAreWe from "./Components/WhoAreWe.jsx"
import FinalCTA from "./Components/FinalCTA.jsx"
import ServicesPreview from "./Components/ServicesPreview.jsx"
import { color1, color2 } from "../../Data/colors.js"

export default function Home() {
  return (
    <div className="bg-zinc-950 text-white">
      <HomeHero color1={color1} color2={color2} />
      <TrustBar color1={color1} color2={color2} />
      <Challenge color1={color1} color2={color2} />
      <KingdomTransformationFramework color1={color1} color2={color2} />
      <KingdomCertification color1={color1} color2={color2} />
      <Events color1={color1} color2={color2} />
      <ServicesPreview color1={color1} color2={color2} />
      <ResourcesPreview color1={color1} color2={color2} />
      <WhoAreWe color1={color1} color2={color2} />
      <FinalCTA color1={color1} color2={color2} />
    </div>
  )
}

import HomeHero from "./Components/HomeHero.jsx"
import TrustBar from "./Components/TrustBar.jsx"
import Challenge from "./Components/Challenge.jsx"
import KingdomTransformationFramework from "./Components/KingdomTransformationFramework.jsx"
import KingdomCertification from "./Components/KingdomCertification.jsx"
import Events from "./Components/Events.jsx"
import ResourcesPreview from "./Components/ResourcesPreview.jsx"
import FounderStory from "./Components/FounderStory.jsx"
import FinalCTA from "./Components/FinalCTA.jsx"
import ServicesPreview from "./Components/ServicesPreview.jsx"

export default function Home() {
  return (
    <div className="bg-zinc-950 text-white">
      <HomeHero />
      <TrustBar />
      <Challenge />
      <KingdomTransformationFramework />
      <KingdomCertification />
      <Events />
      <ServicesPreview />
      <ResourcesPreview />
      <FounderStory />
      <FinalCTA />
    </div>
  )
}

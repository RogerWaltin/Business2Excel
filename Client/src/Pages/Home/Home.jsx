import HomeHero from "./Components/HomeHero.jsx"
import TrustBar from "./Components/TrustBar.jsx"
import Challenge from "./Components/Challenge.jsx"
import KingdomTransformationFramework from "./Components/KingdomTransformationFramework.jsx"
import KingdomCertification from "./Components/KingdomCertification.jsx"
import CommunityImpact from "./Components/CommunityImpact.jsx"
import Resources from "./Components/Resources.jsx"
import FounderStory from "./Components/FounderStory.jsx"
import FinalCta from "./Components/FinalCta.jsx"

export default function Home() {
  return (
    <div className="bg-zinc-950 text-white">
      <HomeHero />
      <TrustBar />
      <Challenge />
      <KingdomTransformationFramework />
      <KingdomCertification />
      <CommunityImpact />
      <Resources />
      <FounderStory />
      <FinalCta />
    </div>
  )
}

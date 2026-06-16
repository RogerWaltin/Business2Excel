import CommunityHero from "./Components/CommunityHero.jsx"
import Impact from "./Components/Impact.jsx"
import NetworkProjectsStories from "./Components/NetworkProjectsStories.jsx"
import TrainingEvents from "./Components/TrainingEvents.jsx"
import MemberDirectory from "./Components/MemberDirectory.jsx"
import FinalCTA from "./Components/FinalCTA.jsx"

export default function Community() {
  return (
    <div className="bg-zinc-950 text-white">
      <CommunityHero />
      <Impact />
      {/* <NetworkProjectsStories /> */}
      <TrainingEvents />
      {/* <MemberDirectory /> */}
      <FinalCTA />
    </div>
  )
}
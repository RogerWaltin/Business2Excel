import CommunityHero from "./Components/CommunityHero.jsx"
import Impact from "./Components/Impact.jsx"
import NetworkProjectsStories from "./Components/NetworkProjectsStories.jsx"
import TrainingEvents from "./Components/TrainingEvents.jsx"
import MemberDirectory from "./Components/MemberDirectory.jsx"
import FinalCTA from "./Components/FinalCTA.jsx"
import { color1, color2 } from "../../Data/colors.js"

export default function Community() {
  return (
    <div className="bg-zinc-950 text-white">
      <CommunityHero color1={color1} color2={color2} />
      <Impact color1={color1} color2={color2} />
      {/* <NetworkProjectsStories color1={color1} color2={color2} /> */}
      <TrainingEvents color1={color1} color2={color2} />
      {/* <MemberDirectory color1={color1} color2={color2} /> */}
      <FinalCTA color1={color1} color2={color2} />
    </div>
  )
}
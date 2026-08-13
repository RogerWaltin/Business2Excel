import FeaturedInsights from "./Components/FeaturedInsights";
import FeaturedResources from "./Components/FeaturedResources";
import Hero from "./Components/Hero";
import Library from "./Components/Library";
import { color1, color2 } from "../../Data/colors.js";

export default function Resources() {
  return (
    <div>
      <Hero color1={color1} color2={color2} />
      <FeaturedInsights color1={color1} color2={color2} />
      <FeaturedResources color1={color1} color2={color2} />
      <Library color1={color1} color2={color2} />
    </div>
  )
}

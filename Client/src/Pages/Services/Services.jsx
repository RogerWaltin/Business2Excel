import ServicesCertification from "./Components/ServicesCertification"
import ServicesConsulting from "./Components/ServicesConsulting"
import ServicesCTA from "./Components/ServicesCTA"
import ServicesFramework from "./Components/ServicesFramework"
import ServicesHero from "./Components/ServicesHero"
import ServicesInsights from "./Components/ServicesInsights"
import { color1, color2 } from "../../Data/colors.js"

function Services() {
    return (
        <div>
            <ServicesHero color1={color1} color2={color2} />
            <ServicesInsights color1={color1} color2={color2} />
            <ServicesFramework color1={color1} color2={color2} />
            <ServicesConsulting color1={color1} color2={color2} />
            <ServicesCertification color1={color1} color2={color2} />
            <ServicesCTA color1={color1} color2={color2} />
        </div>
    )
}

export default Services
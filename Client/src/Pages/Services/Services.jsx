import ServicesCertification from "./Components/ServicesCertification"
import ServicesConsulting from "./Components/ServicesConsulting"
import ServicesCTA from "./Components/ServicesCTA"
import ServicesFramework from "./Components/ServicesFramework"
import ServicesHero from "./Components/ServicesHero"
import ServicesInsights from "./Components/ServicesInsights"

function Services() {
    return (
        <div>
            <ServicesHero />
            <ServicesInsights />
            <ServicesFramework />
            <ServicesConsulting />
            <ServicesCertification />
            <ServicesCTA />
        </div>
    )
}

export default Services
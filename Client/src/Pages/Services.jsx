import ServicesCertification from "../Components/Services/ServicesCertification"
import ServicesConsulting from "../Components/Services/ServicesConsulting"
import ServicesCTA from "../Components/Services/ServicesCTA"
import ServicesFramework from "../Components/Services/ServicesFramework"
import ServicesHero from "../Components/Services/ServicesHero"
import ServicesInsights from "../Components/Services/ServicesInsights"

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
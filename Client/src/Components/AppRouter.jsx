import { Route, Routes } from "react-router-dom"
import Contact from "../Pages/Contact/Contact.jsx"
import Home from "../Pages/Home/Home.jsx"
import About from "../Pages/About/About.jsx"
import Services from "../Pages/Services/Services.jsx"
import Resources from "../Pages/Resources/Resources.jsx"
import Community from "../Pages/Community/Community.jsx"
import Articles from "../Pages/Resources/Components/LibraryComponents/Articles.jsx"
import Whitepapers from "../Pages/Resources/Components/LibraryComponents/Whitepapers.jsx"
import AiEthicsReports from "../Pages/Resources/Components/LibraryComponents/AiEthicsReports.jsx"
import BiblicalBusinessInsights from "../Pages/Resources/Components/LibraryComponents/BiblicalBusinessInsights.jsx"
import LeadershipDevotionals from "../Pages/Resources/Components/LibraryComponents/LeadershipDevotionals.jsx"
import Videos from "../Pages/Resources/Components/LibraryComponents/Videos.jsx"
import Podcasts from "../Pages/Resources/Components/LibraryComponents/Podcasts.jsx"
import Frameworks from "../Pages/Resources/Components/LibraryComponents/Frameworks.jsx"
import CaseStudies from "../Pages/Resources/Components/LibraryComponents/CaseStudies.jsx"
import Consultation from "../Pages/Consultation.jsx"
import Certification from "../Pages/Certification.jsx"
import Network from "../Pages/Network.jsx"
import TrainingEventsHub from "../Pages/TrainingEventsHub.jsx"

export default function AppRouter() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Resources" element={<Resources />} />
        <Route path="/Community" element={<Community />} />

        <Route path="/consultation" element={<Consultation />} />
        <Route path="/certification" element={<Certification />} />
        <Route path="/network" element={<Network />} />
        <Route path="/training-events" element={<TrainingEventsHub />} />

        <Route path="/resources/articles" element={<Articles />} />
        <Route path="/resources/whitepapers" element={<Whitepapers />} />
        <Route path="/resources/ai-ethics-reports" element={<AiEthicsReports />} />
        <Route path="/resources/biblical-business-insights" element={<BiblicalBusinessInsights />} />
        <Route path="/resources/leadership-devotionals" element={<LeadershipDevotionals />} />
        <Route path="/resources/videos" element={<Videos />} />
        <Route path="/resources/podcasts" element={<Podcasts />} />
        <Route path="/resources/frameworks" element={<Frameworks />} />
        <Route path="/resources/case-studies" element={<CaseStudies />} />
      </Routes>
    </div>
  )
}

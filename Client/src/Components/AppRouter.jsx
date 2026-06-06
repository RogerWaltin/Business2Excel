import { Route, Routes } from "react-router-dom"
import Contact from "../Pages/Contact/Contact.jsx"
import Home from "../Pages/Home/Home.jsx"
import About from "../Pages/About/About.jsx"
import Services from "../Pages/Services/Services.jsx"
import Resources from "../Pages/Resources/Resources.jsx"
import Community from "../Pages/Community/Community.jsx"
import Articles from "../Pages/Resources/Components/Library stuff/Articles.jsx"
import Whitepapers from "../Pages/Resources/Components/Library stuff/Whitepapers.jsx"
import AiEthicsReports from "../Pages/Resources/Components/Library stuff/AiEthicsReports.jsx"
import BiblicalBusinessInsights from "../Pages/Resources/Components/Library stuff/BiblicalBusinessInsights.jsx"
import LeadershipDevotionals from "../Pages/Resources/Components/Library stuff/LeadershipDevotionals.jsx"
import Videos from "../Pages/Resources/Components/Library stuff/Videos.jsx"
import Podcasts from "../Pages/Resources/Components/Library stuff/Podcasts.jsx"
import MediaArchive from "../Pages/Resources/Components/Library stuff/MediaArchive.jsx"
import Frameworks from "../Pages/Resources/Components/Library stuff/Frameworks.jsx"
import CaseStudies from "../Pages/Resources/Components/Library stuff/CaseStudies.jsx"

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

        <Route path="/resources/articles" element={<Articles />} />
        <Route path="/resources/whitepapers" element={<Whitepapers />} />
        <Route path="/resources/ai-ethics-reports" element={<AiEthicsReports />} />
        <Route path="/resources/biblical-business-insights" element={<BiblicalBusinessInsights />} />
        <Route path="/resources/leadership-devotionals" element={<LeadershipDevotionals />} />
        <Route path="/resources/videos" element={<Videos />} />
        <Route path="/resources/podcasts" element={<Podcasts />} />
        <Route path="/resources/media-archive" element={<MediaArchive />} />
        <Route path="/resources/frameworks" element={<Frameworks />} />
        <Route path="/resources/case-studies" element={<CaseStudies />} />
      </Routes>
    </div>
  )
}

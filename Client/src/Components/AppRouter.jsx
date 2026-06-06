import { Route, Routes } from "react-router-dom"
import Contact from "../Pages/Contact/Contact.jsx"
import Home from "../Pages/Home/Home.jsx"
import About from "../Pages/About/About.jsx"
import Services from "../Pages/Services/Services.jsx"
import Resources from "../Pages/Resources/Resources.jsx"
import Community from "../Pages/Community/Community.jsx"

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
      </Routes>
    </div>
  )
}

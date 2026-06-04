import Navbar from "./Components/NavBar.jsx"
import { Route, Routes } from "react-router-dom"
import Contact from "./Pages/Contact.jsx"
import Home from "./Pages/Home.jsx"
import About from "./Pages/About.jsx"
import Footer from "./Components/Footer.jsx"
import Services from "./Pages/Services.jsx"
import Resources from "./Pages/Resources.jsx"

export default function App() {

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Resources" element={<Resources />}/>
        
        <Route path="/about/leadership" element={<About />} />
        <Route path="/about/founder-story" element={<About />} />
        <Route path="/about/vision-mission" element={<About />} />
        <Route path="/about/kingdom-worldview" element={<About />} />
        <Route path="/about/why-business2excel-exists" element={<About />} />
        <Route path="/about/testimonials-case-studies" element={<About />} />
        <Route path="/about/faq" element={<About />} />
      </Routes>
      <Footer />
    </div>
  )
}

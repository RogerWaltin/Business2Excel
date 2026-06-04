import Navbar from "./Components/NavBar.jsx"
import { Route, Routes } from "react-router-dom"
import Contact from "./Pages/Contact.jsx"
import Home from "./Pages/Home.jsx"
import About from "./Pages/About.jsx"
import Footer from "./Components/Footer.jsx"
import Services from "./Pages/Services.jsx"

export default function App() {

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Services" element={<Services />} />
      </Routes>
      <Footer />
    </div>
  )
}

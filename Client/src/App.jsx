import Navbar from "./NavBar.jsx"
import { Route, Routes } from "react-router-dom"
import Contact from "./Pages/Contact.jsx"
import Home from "./Pages/Home.jsx"
import About from "./Pages/About.jsx"

 export default function App() {

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Navbar />
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/About" element = {<About />} />
        <Route path="/Contact" element = {<Contact />} />
      </Routes>
    </div>
  )
}

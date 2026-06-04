import React from 'react'
import AppRouter from './Components/AppRouter'
import Navbar from './Components/NavBar'
import Footer from './Components/Footer'

export default function App() {
    return (
        <div className="min-h-screen bg-zinc-950 text-white">
            <Navbar />
            <AppRouter />
            <Footer />
        </div>
    )
}

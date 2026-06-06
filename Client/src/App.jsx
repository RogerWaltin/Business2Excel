import AppRouter from './Components/AppRouter'
import Navbar from './Components/NavBar'
import Footer from './Components/Footer'
import ScrollToTop from './Components/ScrollToTop'

export default function App() {
    return (
        <div className="min-h-screen bg-zinc-950 text-white">
            <Navbar />
            <AppRouter />
            <Footer />
            <ScrollToTop />
        </div>
    )
}

import AppRouter from './Components/AppRouter'
import Footer from './Components/Footer'
import ScrollToTop from './Components/ScrollToTop'
import ResetSCroll from './Components/ResetScroll'
import Navbar from './Components/NavBar'
import { color1, color2 } from './Data/colors'

export default function App() {
    return (
        <div className="min-h-screen bg-zinc-950 text-white">
            <ResetSCroll />
            <Navbar color1={color1} color2={color2} />
            <AppRouter />
            <Footer color1={color1} color2={color2} />
            <ScrollToTop color1={color1} color2={color2} />
        </div>
    )
}

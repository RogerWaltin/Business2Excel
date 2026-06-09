import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export default function ScrollToTop() {
    const { hash } = useLocation()

    if (hash) return

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    })

    return null
}
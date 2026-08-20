import { useRef, useState } from "react"

export default function useFormSubmission(endpoint) {

    const [turnstileToken, setTurnstileToken] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState(null)

    const turnstileRef = useRef(null)

    const handleSubmit = async (e, formData, onSuccess) => {
        e.preventDefault()

        if (!turnstileToken) {
            setSubmitStatus("verification")
            return
        }

        setIsSubmitting(true)
        setSubmitStatus(null)

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}${endpoint}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    ...formData,
                    turnstileToken
                })
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.message || "Something went wrong")
            }

            setTurnstileToken("")
            turnstileRef.current?.reset()
            setSubmitStatus("success")

            if (onSuccess) {
                onSuccess()
            }

        } catch (error) {
            console.error("Error submitting form:", error)
            setSubmitStatus("error")

        } finally {
            setIsSubmitting(false)
        }
    }

    return {
        turnstileToken,
        setTurnstileToken,
        turnstileRef,
        isSubmitting,
        submitStatus,
        setSubmitStatus,
        handleSubmit
    }
}
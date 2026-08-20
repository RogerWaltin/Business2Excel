export default function FormSubmissionModal({
    isSubmitting,
    submitStatus,
    successTitle = "Inquiry Sent!",
    successMessage = "Thank you for contacting us. We'll get back to you soon.",
    errorTitle = "Unable to Send",
    errorMessage = "Something went wrong while sending your inquiry. Please try again.",
    verificationTitle = "Verification Required",
    verificationMessage = "Please complete the verification before submitting your inquiry.",
    onClose
}) {

    if (isSubmitting) {
        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
                <div className="bg-zinc-900 border border-zinc-800 rounded-2xl px-8 py-6 shadow-2xl flex items-center gap-4">
                    <div className="w-6 h-6 border-4 border-zinc-700 border-t-primary rounded-full animate-spin" />

                    <p className="text-lg text-zinc-100">
                        Sending Inquiry...
                    </p>
                </div>
            </div>
        )
    }

    if (!submitStatus) {
        return null
    }

    const isSuccess = submitStatus === "success"
    const isVerification = submitStatus === "verification"

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl px-8 py-7 shadow-2xl text-center max-w-sm mx-6">

                <div className={`text-4xl mb-4 ${isSuccess
                    ? "text-primary"
                    : isVerification
                        ? "text-yellow-500"
                        : "text-red-500"
                    }`}>
                    {isSuccess ? "✓" : "!"}
                </div>

                <h2 className="text-2xl font-semibold text-zinc-100 mb-2">
                    {isSuccess
                        ? successTitle
                        : isVerification
                            ? verificationTitle
                            : errorTitle}
                </h2>

                <p className="text-zinc-400 mb-6">
                    {isSuccess
                        ? successMessage
                        : isVerification
                            ? verificationMessage
                            : errorMessage}
                </p>

                <button
                    type="button"
                    onClick={onClose}
                    className="bg-primary text-black font-semibold px-6 py-2.5 rounded-xl hover:bg-secondary active:translate-y-1 transition-all duration-150 cursor-pointer"
                >
                    Close
                </button>

            </div>
        </div>
    )
}
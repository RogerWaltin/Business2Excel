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
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-5">
                <div className="bg-zinc-900 border border-zinc-800 rounded-2xl px-7 py-6 shadow-[0_32px_64px_-24px_rgba(0,0,0,0.8)] flex items-center gap-4">
                    <div className="w-5 h-5 border-[3px] border-zinc-700 border-t-primary rounded-full animate-spin" />

                    <p className="text-sm font-medium text-zinc-100">
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl px-7 py-8 shadow-[0_32px_64px_-24px_rgba(0,0,0,0.8)] text-center max-w-sm mx-5">

                <div className={`mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full border text-xl font-bold ${isSuccess
                    ? "border-primary/40 bg-primary/10 text-primary"
                    : isVerification
                        ? "border-yellow-500/40 bg-yellow-500/10 text-yellow-500"
                        : "border-red-500/40 bg-red-500/10 text-red-500"
                    }`}>
                    {isSuccess ? "✓" : "!"}
                </div>

                <h2 className="text-lg font-semibold text-zinc-100 mb-2">
                    {isSuccess
                        ? successTitle
                        : isVerification
                            ? verificationTitle
                            : errorTitle}
                </h2>

                <p className="text-sm leading-relaxed text-zinc-400 mb-6">
                    {isSuccess
                        ? successMessage
                        : isVerification
                            ? verificationMessage
                            : errorMessage}
                </p>

                <button
                    type="button"
                    onClick={onClose}
                    className="inline-flex cursor-pointer items-center justify-center rounded-xl bg-secondary px-6 py-2.5 text-sm font-semibold text-black transition-all duration-200 hover:bg-primary active:translate-y-0"
                >
                    Close
                </button>

            </div>
        </div>
    )
}

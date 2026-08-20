import { forwardRef } from "react"
import { Turnstile } from "@marsidev/react-turnstile"

const FormTurnstile = forwardRef(({ onSuccess, onExpire }, ref) => {
    return (
        <Turnstile
            ref={ref}
            siteKey="0x4AAAAAAETuJq8fVZb_4Q_P"
            onSuccess={onSuccess}
            onExpire={onExpire}
        />
    )
})

export default FormTurnstile
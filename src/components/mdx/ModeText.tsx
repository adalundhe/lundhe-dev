import { ReactElement, useCallback } from "react"
import { useSiteSettings } from "~/utils/store"

export const ModeText = ({
    children
}: {
    children: ReactElement
}) => {

    const {
        mode
    } = useSiteSettings(
        useCallback((state) => ({
            mode: state.visibilityMode
        }), [])
    )
    
    return (
        <div className={`font-serif text-[3vmin] ${mode === 'light' ? 'text-[#212121]' : 'text-[#BDBDBD]'}`}>
            {children}
        </div>
    )
}
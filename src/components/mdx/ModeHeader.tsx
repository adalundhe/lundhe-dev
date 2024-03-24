// ${mode === 'light' ? 'text-[#212121]' : 'text-[#F5F5F5]'}


import { ReactElement, useCallback } from "react"
import { useSiteSettings } from "~/utils/store"

export const ModeHeader = ({
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
        <div className={`text-[4.5vmin] ${mode === 'light' ? 'text-[#212121]' : 'text-[#F5F5F5]'}`}>
            {children}
        </div>
    )
}
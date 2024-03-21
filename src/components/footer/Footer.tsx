import { useSiteSettings } from "~/utils/store"
import { useCallback } from "react"


export const Footer = () => {

    const {
        mode
      } = useSiteSettings(
        useCallback((state) => ({
            mode: state.visibilityMode
        }), [])
      )

    const currentYear = new Date().getFullYear()

    return (
        <footer 
            className={
                `row-span-2 font-sans text-[2.5vmin] col-span-1 ${mode === 'light' ? ' bg-[#212121]' : 'bg-[#BDBDBD]'} flex items-center`
            }
        >
            <p
                className={`w-full text-center ${mode === 'light' ? 'text-[#BDBDBD]' : 'text-[#212121]'}`}
            >
                © Ada Lündhé {currentYear}
            </p>
        </footer>
    )
}
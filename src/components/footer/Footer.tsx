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
                `row-span-2 w-full font-sans text-[2.5vmin] flex`
            }
        >
            <div
                className={`h-[60px] ${mode === 'light' ? ' bg-[#212121]' : 'bg-[#171717]'} flex items-center w-full self-end`}
            >
                <p
                    className={`w-full text-center ${mode === 'light' ? 'text-[#BDBDBD]' : 'text-[#eeeeee]'}`}
                >
                    © Ada Lündhé {currentYear}
                </p>
            </div>
        </footer>
    )
}
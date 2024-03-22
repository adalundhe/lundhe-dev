import { useScrollSettings, useSiteSettings } from "~/utils/store"
import { useCallback, useEffect } from "react"
import { useAnimate } from "framer-motion"


export const Footer = () => {

    const {
        mode
      } = useSiteSettings(
        useCallback((state) => ({
            mode: state.visibilityMode
        }), [])
      )

    const currentYear = new Date().getFullYear()

    const {
        scrollDir,
        animationState
    } = useScrollSettings((state) => ({
        scrollDir: state.scrollDirection,
        animationState: state.animationState
    }))


    const [scope, animate] = useAnimate()

    useEffect(() => {

        if (scrollDir === 'stable'){
            animate(scope.current, {
                y: 0,
                opacity: 1
            }, {
                duration: 0.25,
            })
        } else {
            animate(scope.current, {
                y: 100,
                opacity: 0
            }, {
                duration: 0.25
            })
        }

    }, [scrollDir, animate, scope])

    return (
        <footer 
            className={
                `row-span-2 w-full font-sans text-[2.5vmin] flex`
            }
            ref={scope}
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
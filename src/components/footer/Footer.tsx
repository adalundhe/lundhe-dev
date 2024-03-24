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
        scrollDir
    } = useScrollSettings((state) => ({
        scrollDir: state.scrollDirection,
        animationState: state.animationState
    }))


    const [scope, animate] = useAnimate()

    useEffect(() => {

        if (scrollDir === 'stable'){
            animate(scope.current, {
                height: '60px'
            }, {
                duration: 0.25,
            })
        } else {
            animate(scope.current, {
                height: 0,
            }, {
                duration: 0.25
            })
        }

    }, [scrollDir, animate, scope])

    return (
        <footer 
            className={
                `row-span-2 w-full font-sans text-[2.75vmin] grid grid-cols-12 ${mode === 'light' ? ' bg-[#212121]' : 'bg-[#171717]'}`
            }
            ref={scope}
        >   
            <div className="col-span-4"></div>
            <div
                className="col-span-4"
            >
                <svg className="w-full text-center" width="100%" height="60px" >
                    <pattern 
                        id="diagonalHatch" 
                        width="30" 
                        height="10" 
                        patternTransform="rotate(55)" 
                        patternUnits="userSpaceOnUse"
                    >
                        <rect width="100%" height="100%" fill="#F3E5F5"></rect>
                        <line 
                            x1="5" 
                            x2="5" 
                            y2="10" 
                            stroke="#4FC3F7"
                            strokeWidth={10}
                        />
                        <line 
                            x1="15" 
                            x2="15" 
                            y2="10" 
                            stroke="#F06292"
                            strokeWidth={10}
                        />
                    </pattern>
                    <text textAnchor="middle" x="50%" y="55%" width="100%" height="100%" fill="url(#diagonalHatch)"> © Ada Lündhé {currentYear}</text>
                </svg>
            </div>
            <div className="col-span-4"></div>
        </footer>
    )
}
import React, { LegacyRef, useCallback, useEffect, useRef } from "react"
import { motion, useAnimation } from "framer-motion"
import { useSiteSettings } from "~/utils/store"

export const HighlightedHeader = ({
    text
}: {
    text: string
}) => {
    const controls = useAnimation()
    const textRef = useRef<Element>(null)

    useEffect(() => {
        controls.start("hidden")
        const observer = new IntersectionObserver(async ([entry]) => {
            if (entry?.isIntersecting) {
                await new Promise((resolve) =>
                    setTimeout(resolve, 0.1 * 1000)
                ) // delay before animation starts
                controls.start("visible")
            }
        })

        textRef.current && observer.observe(textRef.current)

        return () => observer.disconnect()
    }, [controls])

    const {
        mode
    } = useSiteSettings(
        useCallback((state) => ({
            mode: state.visibilityMode
        }), [])
    )

    return (
        <div
            className={`whitespace-nowrap w-full font-sans flex justify-center text-[5vmin] ${ mode === 'light' ? 'text-[#E0E0E0]' : 'text-[#BDBDBD]'}`}
            ref={textRef as LegacyRef<HTMLDivElement>}
        >
            <span 
                className="relative inline-block w-fit px-4 text-center"
            >
                {text}
                <motion.span
                    className={`absolute px-4 overflow-hidden top-0 left-0 whitespace-nowrap w-[0%] font-sans ${mode === 'light' ? 'text-[#212121]' : 'text-[#BDBDBD]'}`}
                    animate={controls}
                    initial={{ width: "0%" }}
                    variants={{
                        visible: { width: "100%" },
                        hidden: { width: "0%" },
                    }}
                    transition={{ duration: 1 }}
                >
                    {text}
                </motion.span>
            </span>
        </div>
    )
}

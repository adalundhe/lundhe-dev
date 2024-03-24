import React, { LegacyRef, useCallback, useEffect, useRef } from "react"
import { motion, useAnimation } from "framer-motion"
import { useSiteSettings } from "~/utils/store"

export const ColoredHighlightedHeader = ({
    text,
    size,
    onInView
}: {
    text: string,
    size: string,
    onInView: boolean
}) => {
    const controls = useAnimation()
    const textRef = useRef<Element>(null)

    useEffect(() => {

        controls.start("visible")
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
            className={`whitespace-nowrap w-full font-sans flex justify-center ${size}`}
            ref={textRef as LegacyRef<HTMLDivElement>}
        >
            <span 
                className="relative inline-block w-full text-center"
            >
                <svg className="w-full" width="100%" height="60px" >
                    <text x="0%" y="50%" width="100%" height="10%" fill={mode === 'light' ? '#D0D0D0' : 'rgb(189, 189, 189, 0.25)'}>{text}</text>
                </svg>
                <motion.span
                    className={`absolute overflow-hidden top-0 left-0 whitespace-nowrap w-[0%] font-sans`}
                    animate={controls}
                    initial={{ width: "0%" }}
                    variants={{
                        visible: { width: "100%" },
                        hidden: { width: "0%" },
                    }}
                    transition={{ duration: 4 }}
                    whileInView={onInView ? "visible" : ""}
                >
                    <svg className="w-full" height="60px" >
                        <pattern 
                            id="diagonalColoredHatch" 
                            width="30" 
                            height="10" 
                            patternTransform="rotate(55)" 
                            patternUnits="userSpaceOnUse"
                        >
                            <rect 
                                width="100%" 
                                height="100%" 
                                fill={mode === 'light' ? '#7B1FA2' : '#F3E5F5'}
                            />
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
                            <line 
                                x1="25" 
                                x2="25" 
                                y2="10" 
                                stroke={mode === 'light' ? '#7B1FA2' : '#F3E5F5'}
                                strokeWidth={10}
                            />
                        </pattern>
                        <text x="0%" y="50%" height="10%" fill="url(#diagonalColoredHatch)">{text}</text>
                    </svg>
                </motion.span>
            </span>
        </div>
    )
}

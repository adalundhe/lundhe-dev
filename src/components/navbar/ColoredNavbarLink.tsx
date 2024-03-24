import React, { LegacyRef, ReactNode, useCallback, useEffect, useRef } from "react"
import { motion, useAnimation } from "framer-motion"
import { useSiteSettings } from "~/utils/store"
import Link from "next/link"

export const ColoredNavbarLink = ({
    title,
    size,
    onInView,
    link
}: {
    title: string | ReactNode,
    size: string,
    onInView: boolean,
    link: string
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
                className="relative inline-block w-fit text-center"
            >
                <Link href={`/${link}`} scroll={false} className="w-fit">
                    <svg width="100%" height="60px" >
                        <pattern 
                            id="emptyHatch" 
                            width="10" 
                            height="10" 
                            patternTransform="rotate(55)" 
                            patternUnits="userSpaceOnUse"
                        >
                            <rect 
                                width="100%" 
                                height="100%" 
                                fill='transparent'
                            />
                            <line
                                width="100%" 
                                height="100%" 
                                stroke={mode === 'light' ? '#D0D0D0' : 'rgb(189, 189, 189, 0.25)'}
                                strokeWidth={10}
                            />
                        </pattern>
                        <text alignmentBaseline="middle" x="5px" y="0%" fill="url(#emptyHatch)">{title}</text>
                    </svg>
                </Link>
                <motion.span
                    className={`absolute overflow-hidden top-0 left-0 whitespace-nowrap w-[0%] font-sans`}
                    animate={controls}
                    initial={{ width: "0%" }}
                    variants={{
                        visible: { width: "100%" },
                        hidden: { width: "0%" },
                    }}
                    transition={{ duration: 4 }}
                >
                    <Link href={`/${link}`} scroll={false} className="w-fit">
                        <svg width="100%" height="60px" >
                            <pattern 
                                id="linkColoredHatch" 
                                width="30" 
                                height="10" 
                                patternTransform="rotate(55)" 
                                patternUnits="userSpaceOnUse"
                            >
                                <rect 
                                    width="100%" 
                                    height="100%" 
                                    fill='transparent'
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
                            <text alignmentBaseline="middle" x="5px" y="50%" fill="url(#linkColoredHatch)">{title}</text>
                        </svg>
                    </Link>
                </motion.span>
            </span>
        </div>
    )
}

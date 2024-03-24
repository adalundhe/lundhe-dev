import React, { useCallback } from "react"
import { useSiteSettings } from "~/utils/store"
import { DiagonalStripe } from "./DiagonalStripe"

export const DiagonalStripeFill = ({
    hovering
}: {
    hovering: boolean
}) => {

    const {
        mode
    } = useSiteSettings(
        useCallback((state) => ({
            mode: state.visibilityMode
        }), [])
    )

    return (
        <div className="w-full h-full">
            <svg className="w-full text-center" width="100%" height="100%" >
       
                <pattern 
                    id="diagonalStripeFillHatch" 
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
                    <DiagonalStripe 
                        hovering={hovering}
                        colors={[
                            '#F06292',
                            '#4FC3F7',
                            '#F3E5F5'
                        ]}
                        steps={[
                            [1, 0, 0, 1],
                            [0, 1, 0, 0],
                            [0, 0, 1, 0]
                        ]}
                        duration={2}
                        delay={0}
                        x1="5" 
                        x2="5" 
                        y2="10" 
                        width={10}
                    />
                    <DiagonalStripe 
                        hovering={hovering}
                        colors={[
                            '#4FC3F7',
                            '#F3E5F5',
                            '#F06292'
                        ]}
                        steps={[
                            [1, 0, 0, 1],
                            [0, 1, 0, 0],
                            [0, 0, 1, 0]
                        ]}
                        duration={2}
                        delay={2}
                        x1="15" 
                        x2="15" 
                        y2="10" 
                        width={10}
                    />
                    <DiagonalStripe 
                        hovering={hovering}
                        colors={[
                            mode === 'light' ? '#7B1FA2' : '#F3E5F5',
                            '#F06292',
                            '#4FC3F7'
                        ]}
                        steps={[
                            [1, 0, 0, 1],
                            [0, 1, 0, 0],
                            [0, 0, 1, 0]
                        ]}
                        duration={2}
                        delay={4}
                        x1="25" 
                        x2="25" 
                        y2="10" 
                        width={10}
                    />
                </pattern>
                <rect clipPath="polygon(100% 0, 0 100%, 100% 100%)" x="0%" y="0%" width="100%" height="100%" fill="url(#diagonalStripeFillHatch)"/>
            </svg>
        </div>
    )
}
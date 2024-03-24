import { motion, useAnimation } from 'framer-motion'
import React, { useEffect } from 'react'


export const DiagonalStripe = ({
    colors,
    steps,
    x1,
    x2,
    y2,
    width,
    duration,
    delay,
    hovering
}:{
    colors: Array<string>,
    steps: Array<Array<number>>,
    x1: string,
    x2: string,
    y2: string,
    width: number
    duration: number,
    delay: number,
    hovering: boolean
}) => {

    const controls = useAnimation()
    useEffect(() => {
        controls.start("hidden")

        
        if (hovering){
            controls.start("animate")
        }

    }, [controls, hovering])

    return (
        <>
        {
            colors.map((color, idx) => 
            <motion.line 
                key={`face-${idx}`}
                animate={controls}
                variants={{
                    animate: {
                        opacity: steps[idx],
                        transition: {
                            delay: delay,
                            duration: duration,
                            repeat: Infinity,
                        }
                    },
                    hidden: {
                        opacity: 1
                    }
                }}
                stroke={color}
                x1={x1}
                x2={x2}
                y2={y2}
                strokeWidth={width}
            />
            )
        }
        </>
    )
}
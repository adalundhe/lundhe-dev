import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'


export const DynamicCubeFace = ({
    colors,
    steps,
    drawLine,
    duration,
    delay,
    hovering
}:{
    colors: Array<string>,
    steps: Array<Array<number>>,
    drawLine: string,
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
            <motion.path 
                key={`face-${idx}`}
                animate={controls}
                variants={{
                    animate: {
                        opacity: steps[idx],
                        transition: {
                            delay: delay,
                            duration: duration,
                            repeat: Infinity,
                        },
                    },
                    hidden: {
                        opacity: 1
                    }
                }}
                className={color} d={drawLine} 
            />
            )
        }
        </>
    )
}
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'


export const CubeFace = ({
    colors,
    steps,
    drawLine,
    duration,
    delay,
}:{
    colors: Array<string>,
    steps: Array<Array<number>>,
    drawLine: string,
    duration: number,
    delay: number
}) => {

    const controls = useAnimation()
    useEffect(() => {
        controls.start("animate")
    }, [controls])

    return (
        <>
        {
            colors.map((color, idx) => 
            <motion.path 
                key={`face-${idx}`}
                animate={controls}
                transition={{
                    delay: delay,
                    duration: duration,
                    repeat: Infinity
                }}
                variants={{
                    animate: {
                        opacity: steps[idx]
                    }
                }}
                className={color} d={drawLine} 
            />
            )
        }
        </>
    )
}
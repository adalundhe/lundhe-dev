import { motion } from 'framer-motion'


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

    return (
        <>
        {
            colors.map((color, idx) => 
            <motion.path 
                key={`face-${idx}`}
                animate={
                    hovering ? "animateDynamicCube" : "hideCube"
                }
                initial={{opacity: 1}}
                variants={{
                    animateDynamicCube: {
                        opacity: steps[idx],
                        transition: {
                            delay: delay,
                            duration: duration,
                            repeat: Infinity,
                        },
                    },
                    hideCube: {
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
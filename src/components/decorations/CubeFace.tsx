import { motion } from 'framer-motion'


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


    return (
        <>
        {
            colors.map((color, idx) => 
            <motion.path 
                animate={{opacity: steps[idx]}}
                transition={{
                    delay: delay,
                    duration: duration,
                    repeat: Infinity
                }}
                className={`fill-[${color}]`} d={drawLine} 
            />
            )
        }
        </>
    )
}
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { CubeFace } from './CubeFace'


type Circle = {
    x: number,
    y: number
    radius: number
}

const calculatePostition = ({
    height,
    width
}: {
    height: number,
    width: number
}): Circle => ({
    x: width/2,
    y: height/4,
    radius: height/2.5
})


export const Cubes = () => {

    const sizeRef = useRef<SVGSVGElement>(null)
    const [circle, setCircle] = useState<Circle>({
        x: 0,
        y: 0,
        radius: 0
    });

    useEffect(() => {
        // runAnimation()
        setCircle(calculatePostition({ 
            width: (sizeRef.current?.clientWidth ?? 100), 
            height: (sizeRef.current?.clientHeight ?? 100)
        }))
    
        window.addEventListener(
            'resize',
            () => setCircle(calculatePostition({ 
                width: (sizeRef.current?.clientWidth ?? 100), 
                height: (sizeRef.current?.clientHeight ?? 100)
            }))
        )
    
      }, [sizeRef]);

    return (
        <div className="w-full h-[25vw] flex items-center justify-center">
            <motion.svg
                ref={sizeRef}
                className="flex items-center justify-center"
                width="100%"
                height="100%"
            >
                <defs>
                    <g id="cube"
                    >
                        <CubeFace
                            colors={[
                                '#E91E63',
                                '#4FC3F7',
                                '#F3E5F5'
                            ]}
                            steps={[
                                [1, 0, 0, 1],
                                [0, 1, 0, 0],
                                [0, 0, 1, 0]
                            ]}
                            drawLine='M0,0 l5,3 v5 l-5,-3 z'
                            delay={4}
                            duration={2}
                        />
                        <CubeFace
                            colors={[
                                '#4FC3F7',
                                '#F3E5F5',
                                '#E91E63'
                            ]}
                            steps={[
                                [1, 0, 0, 1],
                                [0, 1, 0, 0],
                                [0, 0, 1, 0]
                            ]}
                            drawLine='M10,0 l-5,3 v5 l5,-3 z'
                            delay={5}
                            duration={3}
                        />
                        <CubeFace
                            colors={[
                                '#F3E5F5',
                                '#E91E63',
                                '#4FC3F7',
                            ]}
                            steps={[
                                [1, 0, 0, 1],
                                [0, 1, 0, 0],
                                [0, 0, 1, 0]
                            ]}
                            drawLine='M0,0 l5,3 5,-3 -5,-3 -5,3 M0,5 l5,3 -5,3 -5,-3 M10,5 l5,3 -5,3 -5,-3 5,-3'
                            delay={6}
                            duration={4}
                        />
                    </g>
                    <pattern id="pattern-cubes" patternUnits="userSpaceOnUse" width="40" height="64" viewBox="0 0 10 16">
                        <use x="0" y="0" href="#cube"/>
                        <use x="5" y="8" href="#cube"/>
                        <use x="-5" y="8" href="#cube"/>
                    </pattern>
                </defs>
                <motion.circle
                    cx={circle.x}
                    cy={circle.y}
                    r={circle.radius}
                    animate={{ y: 20 }}
                    transition={{ 
                        type: "spring", 
                        bounce: 1,
                        stiffness: 750,
                        mass: 2
                    }}
                    className="focus:outline-none"
                    fillOpacity={0.75}
                    stroke={'transparent'}
                    strokeWidth={0}
                    id="canvas" 
                    fill="url(#pattern-cubes)"
                />
            </motion.svg>

        </div>
    )
}
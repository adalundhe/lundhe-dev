import { motion } from 'framer-motion'
import { CubeFace } from './CubeFace'

export const Cubes = () => {

    return (
        <div className="w-full h-[25vw] flex items-center justify-center">
            <motion.svg
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
                    cx={'50%'}
                    cy={'35%'}
                    r={'15%'}
                    animate={{ y: '15%' }}
                    transition={{ 
                        type: "spring", 
                        bounce: 1,
                        stiffness: 750,
                        mass: 3
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
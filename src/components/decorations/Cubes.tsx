import { motion, useAnimation } from 'framer-motion'
import { CubeFace } from './CubeFace'
import { useCallback, useEffect, useMemo, useRef } from 'react'
import { useSiteSettings } from '~/utils/store'

const createRandomOffset = (range: number, base: number) => {
    const slack = Math.random() * Math.round(Math.random()) ? 1 : -1
    return (Math.random() * range) + base + slack
}

export const Cubes = () => {

    const controls = useAnimation()
    useEffect(() => {
        controls.start("animateCircle")
    }, [controls])

    const offsets = useMemo(() => [
        {
            delay: createRandomOffset(
                1,
                4
            ),
            duration: createRandomOffset(
                4,
                2
            )
        },
        {
            delay: createRandomOffset(
                2,
                5
            ),
            duration: createRandomOffset(
                5,
                2
            )
        },
        {
            delay: createRandomOffset(
                3,
                6
            ),
            duration: createRandomOffset(
                6,
                2
            )
        }
    ], [])  
    
    const {
        mode
    } = useSiteSettings(
        useCallback((state) => ({
            mode: state.visibilityMode
        }), [])
    )
    
    return (
        <div className="w-full h-fit flex items-center justify-center">
            <motion.svg
                className="flex items-center justify-center"
                width="100%"
                height="50vmin"
            >
                <defs>
                    <g id="cube"
                    >
                        <CubeFace
                            key={'face-l'}
                            colors={[
                                'fill-[#F06292]',
                                'fill-[#4FC3F7]',
                                mode === 'light' ? 'fill-[#7B1FA2]' : 'fill-[#F3E5F5]',
                            ]}
                            steps={[
                                [1, 0, 0, 1],
                                [0, 1, 0, 0],
                                [0, 0, 1, 0]
                            ]}
                            drawLine='M0,0 l5,3 v5 l-5,-3 z'
                            delay={offsets[Math.floor(
                                Math.random() * offsets.length
                            )]?.delay as number}
                            duration={offsets[Math.floor(
                                Math.random() * offsets.length
                            )]?.duration as number}
                        />
                        <CubeFace
                            key={'face-r'}
                            colors={[
                                'fill-[#4FC3F7]',
                                mode === 'light' ? 'fill-[#7B1FA2]' : 'fill-[#F3E5F5]',
                                'fill-[#F06292]'
                            ]}
                            steps={[
                                [1, 0, 0, 1],
                                [0, 1, 0, 0],
                                [0, 0, 1, 0]
                            ]}
                            drawLine='M10,0 l-5,3 v5 l5,-3 z'
                            delay={offsets[Math.floor(
                                Math.random() * offsets.length
                            )]?.delay as number}
                            duration={offsets[Math.floor(
                                Math.random() * offsets.length
                            )]?.duration as number}
                        />
                        <CubeFace
                            key={'face-t'}
                            colors={[
                                mode === 'light' ? 'fill-[#7B1FA2]' : 'fill-[#F3E5F5]',
                                'fill-[#F06292]',
                                'fill-[#4FC3F7]',
                            ]}
                            steps={[
                                [1, 0, 0, 1],
                                [0, 1, 0, 0],
                                [0, 0, 1, 0]
                            ]}
                            drawLine='M0,0 l5,3 5,-3 -5,-3 -5,3 M0,5 l5,3 -5,3 -5,-3 M10,5 l5,3 -5,3 -5,-3 5,-3'
                            delay={offsets[Math.floor(
                                Math.random() * offsets.length
                            )]?.delay as number}
                            duration={offsets[Math.floor(
                                Math.random() * offsets.length
                            )]?.delay as number}
                        />
                    </g>
                    <pattern id="pattern-cubes" patternUnits="userSpaceOnUse" width="40" height="64" viewBox="0 0 10 16">
                        <use x="0" y="0" href="#cube"/>
                        <use x="5" y="8" href="#cube"/>
                        <use x="-5" y="8" href="#cube"/>
                    </pattern>
                </defs>
                <motion.circle
                    alignmentBaseline="central"
                    cx={'50%'}
                    cy={'38%'}
                    r={'20vmin'}
                    initial={{y: '0%'}}
                    animate={controls}
                    transition={{ 
                        type: "spring", 
                        bounce: 2,
                        stiffness: 750,
                        mass: 4
                    }}
                    variants={{
                        animateCircle: {
                            y: '12%'
                        }
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
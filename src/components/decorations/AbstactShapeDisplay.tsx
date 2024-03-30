import { useCallback } from "react"
import { useSiteSettings } from "~/utils/store"
import { motion } from 'framer-motion'

export const AbstractShapeDisplay = () => {

    const {
        mode
    } = useSiteSettings(
        useCallback((state) => ({
            mode: state.visibilityMode
        }), [])
    )

    return (
        <div 
            className="absolute -z-100 top-0 left-0 h-full w-full"
        >
            <svg viewBox="0 0 100% 100%" className="w-full h-full">
                <defs>
                    <motion.linearGradient 
                        id="gradient-1"
                        whileInView={"animate"} 
                        viewport={{ once: true }}
                        variants={{
                            animate: {
                                gradientTransform: [
                                    "rotate(45)", 
                                    "rotate(-45)", 
                                    "rotate(135)",
                                    "rotate(-135)",
                                    "rotate(225)",
                                    "rotate(-225)",
                                    "rotate(315)",
                                    "rotate(-315)"
                                ],
                                transition: {
                                    duration: 60,
                                    repeat: Infinity,
                                }
                            }
                        }}
                    >
                        <motion.stop 
                            stopColor="#4FC3F7"  
                            whileInView={"animate"} 
                            viewport={{ once: true }}  
                            offset={"0%"}
                            variants={{
                                animate: {
                                    stopOpacity: ["90%", "100%"],
                                    transition: {
                                        duration: Math.random() * 10 + 10,
                                        delay: Math.random() * 10,
                                        repeat: Infinity
                                    }
                                }
                            }}
                        />
                        <motion.stop 
                            stopColor="#F06292" 
                            whileInView={"animate"} 
                            viewport={{ once: true }}     
                            offset={"45%"}
                            variants={{
                                animate: {
                                    stopOpacity: ["95%", "75%"],
                                    transition: {
                                        duration: Math.random() * 10 + 10,
                                        delay: Math.random() * 10,
                                        repeat: Infinity
                                    }
                                }
                            }}
                        />
                        <motion.stop 
                            stopColor={ mode === 'light' ? '#7B1FA2' : '#F3E5F5'}             
                            whileInView={"animate"} 
                            viewport={{ once: true }}      
                            offset={"90%"}
                            variants={{
                                animate: {
                                    stopOpacity: ["95%", "100%"],
                                    transition: {
                                        duration: Math.random() * 10 + 10,
                                        delay: Math.random() * 10,
                                        repeat: Infinity
                                    }
                                }
                            }}
                        />
                    </motion.linearGradient>
                    <linearGradient id="gradient-2" gradientTransform="rotate(45)">
                        <motion.stop
                            stopColor="#FFF" 
                            offset="5%"     
                            stopOpacity={0.25}
                            whileInView={"animate"} 
                            viewport={{ once: true }}  
                            variants={{
                                animate: {
                                    rotate: [0, 180],
                                    stopOpacity: [0.25, 0.1, 0.01, 0.25],
                                    transition: {
                                        duration: 4,
                                        repeat: Infinity
                                    }
                                }
                            }}
                        />
                        <motion.stop 
                            stopColor="#FFF" 
                            offset="95%" 
                            stopOpacity={0.01}
                            whileInView={"animate"} 
                            viewport={{ once: true }}   
                            variants={{
                                animate: {
                                    rotate: [0, 180],
                                    stopOpacity: [0.01, 0.1, 0.25, 0.01],
                                    transition: {
                                        duration: 4,
                                        repeat: Infinity
                                    }
                                }
                            }}
                        />
                    </linearGradient>
                    <motion.linearGradient 
                        id="gradient-3"
                        whileInView={"animate"} 
                        viewport={{ once: true }} 
                        variants={{
                            animate: {
                                gradientTransform: [
                                    "rotate(45)", 
                                    "rotate(-45)", 
                                    "rotate(135)",
                                    "rotate(-135)",
                                    "rotate(225)",
                                    "rotate(-225)",
                                    "rotate(315)",
                                    "rotate(-315)"
                                ],
                                transition: {
                                    duration: 60,
                                    repeat: Infinity,
                                }
                            }
                        }}
                    >
                        <motion.stop 
                            stopColor={ mode === 'light' ? '#7B1FA2' : '#F3E5F5'}     
                            whileInView={"animate"} 
                            viewport={{ once: true }}   
                            offset={"0%"}
                            variants={{
                                animate: {
                                    stopOpacity: ["95%", "100%"],
                                    transition: {
                                        duration: Math.random() * 10 + 10,
                                        delay: Math.random() * 10,
                                        repeat: Infinity
                                    }
                                }
                            }}
                        />
                        <motion.stop 
                            stopColor="#F06292" 
                            whileInView={"animate"} 
                            viewport={{ once: true }}      
                            offset={"45%"}
                            variants={{
                                animate: {
                                    stopOpacity: ["95%", "75%"],
                                    transition: {
                                        duration: Math.random() * 10 + 10,
                                        delay: Math.random() * 10,
                                        repeat: Infinity
                                    }
                                }
                            }}
                        />
                        <motion.stop 
                            stopColor="#4FC3F7" 
                            whileInView={"animate"} 
                            viewport={{ once: true }}    
                            offset={"95%"}
                            variants={{
                                animate: {
                                    stopOpacity: ["90%", "100%"],
                                    transition: {
                                        duration: Math.random() * 10 + 10,
                                        delay: Math.random() * 10,
                                        repeat: Infinity
                                    }
                                }
                            }}
                        />
                    </motion.linearGradient>

                    <filter className="flex" id="displacement-filter">
                        <feTurbulence
                            type="turbulence"
                            baseFrequency="0.2"
                            numOctaves="2"
                            result="turbulence" 
                        />
                        <feDisplacementMap
                            in2="turbulence"
                            in="SourceGraphic"
                            scale="5"
                            xChannelSelector="R"
                            yChannelSelector="G" 
                        />
                    </filter>
                    <filter className="flex" id="displacement-filter-2">
                        <feTurbulence
                            type="turbulence"
                            baseFrequency="0.2"
                            numOctaves="2"
                            result="turbulence" 
                        />
                        <feDisplacementMap
                            in2="turbulence"
                            in="SourceGraphic"
                            xChannelSelector="R"
                            yChannelSelector="G"
                            scale="5"
                        />
                    </filter>
                    
                </defs>
                <motion.circle
                    cx={'50%'}
                    cy={'50%'}
                    r={'40vmin'}
                    whileInView={"animateCircle"} 
                    viewport={{ once: true }}
                    filter={"url(#displacement-filter-2)"}
                    stroke={'transparent'}
                    strokeWidth={0}
                    id="canvas" 
                    fill="url(#gradient-3)"
                    fillOpacity={.55}
                    className="focus:outline-none"
                    variants={{
                        animateCircle: {
                            scale: [1, 1.05, 1, .95, 1],
                            fillOpacity: [0, .5 , .25, .5, .75, 1, .75, .5, .25, .5, .25, 0],
                            transition: {
                                duration: 120,
                                repeat: Infinity
                            }
                        }
                    }}
                />
                <motion.circle     
                    cx={'50%'}
                    cy={'50%'}
                    r={'40vmin'}
                    filter={"url(#displacement-filter)"}
                    stroke={'transparent'}
                    strokeWidth={0}
                    id="canvas" 
                    fill="url(#gradient-2)"
                    fillOpacity={0.75}
                    className="focus:outline-none"
                    whileInView={"animateCircle"} 
                    viewport={{ once: true }}
                    variants={{
                        animateCircle: {
                            scale: [1, 1.05, 1, .95, 1],
                            fillOpacity: [0, .5 , .25, .5, .75, 1, .75, .5, .25, .5, .25, 0],
                            transition: {
                                duration: 120,
                                repeat: Infinity
                            }
                        }
                    }}
                />
                <motion.circle     
                    cx={'50%'}
                    cy={'50%'}
                    r={'40vmin'}
                    filter={"url(#displacement-filter)"}
                    stroke={'transparent'}
                    strokeWidth={0}
                    id="canvas" 
                    fill="url(#gradient-1)"
                    fillOpacity={0.85}
                    className="focus:outline-none"
                    whileInView={"animateCircle"} 
                    viewport={{ once: true }}
                    variants={{
                        animateCircle: {
                            scale: [1, 1.05, 1, .95, 1],
                            fillOpacity: [1, .5 , 0.75, .5, .25, 0, .25, .5, .25, .5, .75, 1],
                            transition: {
                                duration: 120,
                                repeat: Infinity
                            }
                        }
                    }}
                />
            </svg>
        </div>
    )
}
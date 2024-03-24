import { motion, useAnimation } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';
import { number } from 'zod';

export type DotData = {
    id: string;
    radius: number;
    x: number;
    y: number;
  }

export type BoundarySet = {
    top: number,
    bottom: number,
    left: number,
    right: number
}

const generateNextCoordinates = (boundaries: BoundarySet) => ({
    top: Math.random() * boundaries.top,
    bottom: Math.random() * boundaries.bottom,
    left: Math.random() * boundaries.left,
    right: Math.random() * boundaries.right
})

export const Dot = ({
    id,
    radius,
    x,
    y,
    canvasHeight,
    canvasWidth,
    color,
    idx
}: DotData & {
    canvasHeight: number,
    canvasWidth: number,
    color: string,
    idx: number
}) => {

    const controls = useAnimation()

    const boundaries: BoundarySet = useMemo(() => ({
        top: 0 - y + (radius * 2),
        bottom: canvasHeight - y - (radius * 2),
        left: 0 - x + (radius * 2),
        right: canvasWidth - x - (radius * 2)
    }), [canvasHeight, canvasWidth, x, y])


    useEffect(() => {
        controls.start("animateDot")

    }, [controls])

    
    return (
        <motion.circle
            whileHover={{
                x: ((Math.random() * 10) + 1) * (Math.round(Math.random()) > 0 ? 1 : -1),
                y: ((Math.random() * 10) + 1) * (Math.round(Math.random()) > 0 ? 1 : -1),
                scale: 1.5,
                fillOpacity: 0.9,
                transition: { 

                    type: "spring",
                    bounce: (Math.random() * 10) + 1,
                    stiffness: (Math.random() * idx) + 50,
                    mass: (Math.random() * 10) + 1,
                    repeat: Infinity
                },
            }}

            animate={controls}
            variants={{
                animateDot: {
                    x: ((Math.random() * 10) + 1) * (Math.round(Math.random()) > 0 ? 1 : -1),
                    y: ((Math.random() * 10) + 1) * (Math.round(Math.random()) > 0 ? 1 : -1),
                    transition: { 
                        type: "spring",
                        bounce: (Math.random() * 10) + 1,
                        stiffness: (Math.random() * idx) + 50,
                        mass: (Math.random() * 10) + 1
                    },
                }
            }}

            className="focus:outline-none cursor-pointer"
            key={`dot-${id}`}
            cx={x}
            cy={y}
            r={radius}
            fill={color}

            fillOpacity={0.75}
            stroke={'transparent'}
            strokeWidth={0}
            drag
            whileDrag={{ scale: 1.5 }}
            whileTap={{ scale: 1.5 }}
            dragElastic={0.2}
            dragConstraints={{ 
                left: boundaries.left, 
                right: boundaries.right,
                top: boundaries.top, 
                bottom: boundaries.bottom
            }}
            dragTransition={{ bounceStiffness: 1000, bounceDamping: 10 }}
        />
    )
}
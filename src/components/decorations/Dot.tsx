import { motion } from 'framer-motion';
import { useMemo } from 'react';

export type DotData = {
    id: string;
    radius: number;
    x: number;
    y: number;
  }



export const Dot = ({
    id,
    radius,
    x,
    y,
    canvasHeight,
    canvasWidth,
    color
}: DotData & {
    canvasHeight: number,
    canvasWidth: number,
    color: string
}) => {

    const boundaries: {
        top: number,
        bottom: number,
        left: number,
        right: number
      } = useMemo(() => ({
        top: 0 - y + (radius * 2),
        bottom: canvasHeight - y - (radius * 2),
        left: 0 - x + (radius * 2),
        right: canvasWidth - x - (radius * 2)
    }), [canvasHeight, canvasWidth, x, y])

    return (
        <motion.circle
            whileHover={{
                scale: 1.5,
                fillOpacity: 0.9,
                transition: { duration: 0.5 },
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
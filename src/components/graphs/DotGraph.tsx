import React, { useMemo, useState, useEffect, useRef } from 'react';
import { scaleOrdinal } from '@visx/scale';
import { getSeededRandom } from '@visx/mock-data';
import { motion, useAnimate } from 'framer-motion';
import { DotData, Dot } from './Dot'


const generateCircles = ({ width, height }: { width: number; height: number }) => {
  const radiusRandom = getSeededRandom(Math.random());
  const xRandom = getSeededRandom(Math.random());
  const yRandom = getSeededRandom(Math.random());



  return new Array(
    Math.round(
        Math.sqrt(Math.abs(width - height))
       ) * 3
  ).fill(1).map((_, i) => {
    const radius = 25 - radiusRandom() * 20;
    return {
      id: `${i}`,
      radius,
      x: Math.round(xRandom() * (width - radius * 2) + radius),
      y: Math.round(yRandom() * (height - radius * 2) + radius),
    };
  });
};


const colors = [
  '#025aac',
  '#02cff9',
  '#02efff',
  '#03aeed',
  '#0384d7',
  '#edfdff',
  '#ab31ff',
  '#5924d7',
  '#d145ff',
  '#1a02b1',
  '#e582ff',
  '#ff00d4',
  '#270eff',
  '#827ce2',
];

export type DragIProps = {
  width: number;
  height: number;
};

export const DragDots = () => {
  const [draggingItems, setDraggingItems] = useState<DotData[]>([]);

  const sizeRef = useRef<HTMLDivElement>(null)


  useEffect(() => {
    setDraggingItems(generateCircles({ 
        width: (sizeRef.current?.clientWidth ?? 100), 
        height: (sizeRef.current?.clientHeight ?? 100)
    }))

    window.addEventListener(
        'resize',
        () => setDraggingItems(generateCircles({ 
            width: (sizeRef.current?.clientWidth ?? 100), 
            height: (sizeRef.current?.clientHeight ?? 100)
        }))
    )

  }, [sizeRef]);

  const colorScale = useMemo(
    () =>
      scaleOrdinal({
        range: colors,
        domain: draggingItems.map((d) => d.id),
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [sizeRef.current?.clientWidth , sizeRef.current?.clientHeight],
  );

  return (
    <motion.div 
        layout
        className="flex flex-col items-center justify-center select-none h-[20vmin] w-full touch-none" 
        ref={sizeRef}
    >
        <motion.svg 
            layout
            viewBox={
                `0 0 ${sizeRef.current?.clientWidth ?? 100} ${sizeRef.current?.clientHeight ?? 100}`}  className='m-1'
        >
        {draggingItems.map((d, i) => {
            return (
                <Dot 
                    key={d.id}
                    {...d}
                    canvasHeight={
                        sizeRef.current?.clientHeight ?? 100
                    }
                    canvasWidth={
                        sizeRef.current?.clientWidth ?? 100
                    }
                    color={colorScale(d.id)}
                />
            )
        })}
      </motion.svg>
    </motion.div>
  );
}
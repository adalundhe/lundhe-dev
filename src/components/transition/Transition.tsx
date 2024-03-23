import React, { forwardRef } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'

type PageTransitionProps = HTMLMotionProps<'div'>
type PageTransitionRef = React.ForwardedRef<HTMLDivElement>

const PageTransition = ({ children, ...rest }: PageTransitionProps, ref: PageTransitionRef) => {

	const transition = { duration: 0.4, ease: 'easeIn' }

	return (
		<motion.div
			ref={ref}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
			transition={transition}
			{...rest}
            className='flex flex-col'
		>
			{children}
		</motion.div>
	)
}

export const Transition = forwardRef(PageTransition)
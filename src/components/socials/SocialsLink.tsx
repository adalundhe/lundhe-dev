import { ReactElement } from "react"
import { motion } from 'framer-motion'
import Link from "next/link"

export const SocialsLink = ({
    link,
    icon
}: {
    link: string
    icon: ReactElement
}) => {
    return (
        <Link
            href={link}
            className="text-[4vmin]"
            rel="noopener noreferrer" 
            target="_blank"
        >
            <motion.p
                transition={{
                    duration: 0.3
                }}
                whileHover={{
                    scale: 1.25
                }}
            >{
                icon
            }</motion.p>
        </Link>
    )
}
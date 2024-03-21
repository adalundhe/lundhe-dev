import { ReactElement } from "react"
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
            {icon}
        </Link>
    )
}
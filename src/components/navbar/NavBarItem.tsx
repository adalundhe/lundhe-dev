import Link from "next/link";
import { ReactNode } from "react";

export const NavBarItem = ({
    link,
    title,
    textType
}: {
    link: string,
    title: string | ReactNode,
    textType?: string
}) => <Link 
href={`/${link}`}
className="my-6 text-center align-center h-full"
>{ 
    title
}</Link>
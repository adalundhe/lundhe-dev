import Link from "next/link";
import { ReactNode } from "react";

export const NavBarItem = ({
    link,
    title
}: {
    link: string,
    title: string | ReactNode
}) => <Link 
    href={`/${link}`}
    className="text-center h-full w-full"
    scroll={false}
>{ 
    title
}</Link>
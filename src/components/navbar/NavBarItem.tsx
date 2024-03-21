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
className="my-6 text-center h-full w-full"
>{ 
    title
}</Link>
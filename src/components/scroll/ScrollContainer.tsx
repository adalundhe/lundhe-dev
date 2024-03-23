import { ReactElement } from "react";

export const ScrollContainer = ({
    children
}: {
    children: ReactElement
}) => {
    return (
        <div className="row-span-full w-full h-full flex flex-col">
            {children}
        </div>
    )
}
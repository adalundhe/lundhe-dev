
import { useScrollSettings } from "~/utils/store";
import { useAnimate } from "framer-motion";
import { ReactElement, useEffect } from "react";



export const ScrollContainer = ({
    children
}: {
    children: ReactElement
}) => {

    const {
        scrollDir,
        setScrollDirection
    } = useScrollSettings((state) => ({
        scrollDir: state.scrollDirection,
        setScrollDirection: state.setScrollDirection
    }))

    const [scope, animate] = useAnimate()

    useEffect(() => {

        if (scrollDir === 'stable'){
            animate(scope.current, {
                height: '79.85vh',
            }, {
                duration: 0.25,
            })

        } else {
            animate(scope.current, {
                height: '90vh',
            }, {
                duration: 0.25
            })
        }

    }, [scrollDir, animate, scope])

    return (
        <div className="row-span-full overflow-hidden w-full">
            <div 
                className="overflow-y-scroll"
                onScroll={() => {
                    scope.current && setScrollDirection(
                        scope.current.scrollTop + scope.current.clientHeight
                    ) 
                }}
                ref={scope}
            >
            {children}
            </div>
        </div>
    )
}
import { useCallback } from "react";
import { useSiteSettings } from "~/utils/store";
import { useAnimate } from "framer-motion"



export const BlogSummaryTag = ({ tag }: {
    tag: string
}) => {

    const [tagScope, animateTag] = useAnimate()
    const {
        mode
    } = useSiteSettings(
        useCallback((state) => ({
            mode: state.visibilityMode
        }), [])
    )


    return (
        <p 
            ref={tagScope}
            onMouseEnter={() => {
                animateTag(
                    tagScope.current,
                    {
                        color: mode === 'light' ? '#18181B' : '#E5E5E5'
                    },
                    {
                        duration: 0.1
                    }
                )
            }}
            onMouseLeave={() => {
                animateTag(
                    tagScope.current,
                    {
                        color: mode === 'light' ? '#A9A39F' : '#737373'
                    },
                    {
                        duration: 0.1
                    }
                )
            }}
            className={`cursor-pointer mr-2 ${mode === 'light' ? 'text-[#A9A39F]' : 'text-[#737373]'}`}
        >#{
            tag
        }
        </p>

    )
}
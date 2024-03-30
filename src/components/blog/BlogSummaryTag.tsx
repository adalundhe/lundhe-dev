import { useCallback, useEffect, useMemo, useState } from "react";
import { useBlogStore, useSiteSettings, BlogTag } from "~/utils/store";
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

    const {
        tags,
        filter,
        filterMethod,
        sortMethod,
        sortOrder,
        setTagState
    } = useBlogStore((state) => ({
        tags: state.postTags,
        filterMethod: state.filterMethod,
        sortMethod: state.sortMethod,
        sortOrder: state.sortOrder,
        filter: state.filterSummaries,
        setTagState: state.setPostTagState
    }))

    const tagIdx = tags.map(postTag => postTag.tag).indexOf(tag)
    const tagState = tags.at(tagIdx)?.state || 'ready'

    const styles: {
        animationStyle: string,
        tailwindStyle: string
    } = useMemo(() => {

        const activeStyle = mode ===  'light' ? '#18181B' : '#E5E5E5';
        const readyStyle = mode === 'light' ? '#A9A39F' : '#737373';
        const activeTailwindStyle = mode ===  'light' ? 'text-[#18181B]' : 'text-[#E5E5E5]';
        const readyTailwindStyle = mode === 'light' ? 'text-[#A9A39F]' : 'text-[#737373]';

        return ({
            animationStyle: tagState === 'active' ? activeStyle : readyStyle,
            tailwindStyle: tagState === 'active' ? activeTailwindStyle : readyTailwindStyle
        })


    }, [tagState])

    useEffect(() => {

        tagState === 'active' ?
        animateTag(
            tagScope.current,
            {
                color:  mode ===  'light' ? '#18181B' : '#E5E5E5'
            },
            {
                duration: 0.1
            }
        ):
        animateTag(
            tagScope.current,
            {
                color: mode === 'light' ? '#A9A39F' : '#737373'
            },
            {
                duration: 0.1
            }
        )

    }, [tagState])

    return (
        <p 
            ref={tagScope}
            onClick={() => {

                if (tagState === 'ready'){
                    filter(
                        tag,
                        filterMethod,
                        sortMethod,
                        sortOrder
                    )
                    setTagState({
                        ...tags.at(tagIdx) as BlogTag,
                        state: 'active'
                    })
                    
                } else {
                    filter(
                        '',
                        filterMethod,
                        sortMethod,
                        sortOrder
                    )
                    setTagState({
                        ...tags.at(tagIdx) as BlogTag,
                        state: 'ready'
                    })
                }


            }}
            onMouseEnter={() => {
                animateTag(
                    tagScope.current,
                    {
                        color:  mode ===  'light' ? '#18181B' : '#E5E5E5'
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
                        color: styles.animationStyle
                    },
                    {
                        duration: 0.1
                    }
                )
            }}
            className={
                `cursor-pointer mr-2 ${styles.tailwindStyle}`
            }
        >#{
            tag
        }
        </p>

    )
}
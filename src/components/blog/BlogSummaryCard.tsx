import { useCallback, useRef, useState } from "react";
import { useSiteSettings } from "~/utils/store";
import { useAnimate } from "framer-motion"
import { BlogSummaryTag } from "./BlogSummaryTag";
import { DiagonalCubeFill } from '~/components/decorations'

import Link from "next/link";

export type BlogSummary = {
    date: Date;
    summary: string;
    title: string;
    tags: Array<string>
    slug: string
}


export const BlogSummaryCard = ({
    date,
    summary,
    title,
    tags,
    postIdx,
    slug
}: BlogSummary & {postIdx: number}) => {

    const [scope, animate] = useAnimate()
    const [titleScope, animateTitle] = useAnimate()

    const {
        mode
    } = useSiteSettings(
        useCallback((state) => ({
            mode: state.visibilityMode
        }), [])
    )

    const [hovering, setHovering] = useState(false)

    return (
        <div 
            onMouseEnter={() => {
                setHovering(true)
                animate(scope.current, {
                    scale: 1.05,
                }, {duration: 0.25})
            }}
            onMouseLeave={() => {
                setHovering(false)
                animate(scope.current, {
                    scale: 1,
                }, {duration: 0.25})
            }}
            className={`w-4/5 shadow ${mode === 'light' ? '' : 'shadow-[#374151] bg-[#27272A]'} grid grid-cols-12`}
            ref={scope}
        >
            <div className="col-span-8 py-2 pl-2 mb-4">
                <div>
                    <h1 
                        onMouseEnter={() => {
                            animateTitle(
                                titleScope.current,
                                {
                                    color: mode === 'light' ? '#111111' : '#E5E5E5'
                                },
                                {
                                    duration: 0.1
                                }
                            )
                        }}
                        onMouseLeave={() => {
                            animateTitle(
                                titleScope.current,
                                {
                                    color: mode === 'light' ? '#424242' : '#BDBDBD'
                                },
                                {
                                    duration: 0.1
                                }
                            )
                        }}
                        ref={titleScope}
                        className={`${ mode === 'light' ? 'text-[#424242]' : 'text-[#BDBDBD]'} w-fit cursor-pointer text-[5.75vmin] font-mono`}
                    >
                        <Link href={`/blog/${slug}`}>{
                            title
                        }</Link>
                    </h1>
                    <h2 className={`font-sans text-[2.1vmin] my-2 ${mode === 'light' ? 'text-[#52525B]' : 'text-[#82828B]'}`}>{date.toDateString()}</h2>
                </div>
                <p className={`${mode === 'light' ? 'text-[#535353]' : 'text-[#BDBDBD] shadow-[#374151] bg-[#27272A]'} text-wrap text-[3vmin]`}>
                    {summary}
                </p>
                <div className="flex flex-wrap w-full my-2 text-[2vmin] w-1/2 font-sans">
                    {
                        tags.map((tag, idx) => 
                            <div
                                key={`post-tag-${postIdx}-${idx}`}
                            >
                                <BlogSummaryTag tag={tag} />
                            </div>
                        )
                    }
                </div>
            </div>
            <div className="col-span-4">
                <DiagonalCubeFill hovering={hovering} />
            </div>
        </div>
    )
}
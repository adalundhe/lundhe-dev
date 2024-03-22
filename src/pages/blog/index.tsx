import React, { forwardRef } from 'react'
import {
    Transition,
    ScrollContainer,
    BlogSummaryList
  } from '~/components'

type BlogPageProps = {}
type BlogPageRef = React.ForwardedRef<HTMLDivElement>

const Blog = (_: BlogPageProps, ref: BlogPageRef) => {

    return (
        <Transition ref={ref}>
            <ScrollContainer>
                <BlogSummaryList/>
            </ScrollContainer>
        </Transition>
    )
}



export default forwardRef(Blog)
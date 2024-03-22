
import { useCallback } from "react";
import React, { forwardRef } from 'react'
import {
    Transition,
    ScrollContainer,
    BlogSummaryList
  } from '~/components'
import { useSiteSettings } from "~/utils/store";

type BlogPageProps = {}
type BlogPageRef = React.ForwardedRef<HTMLDivElement>

const Blog = (_: BlogPageProps, ref: BlogPageRef) => {

    const {
        mode
      } = useSiteSettings(
        useCallback((state) => ({
            mode: state.visibilityMode
        }), [])
      )

    return (
        <Transition ref={ref}>
            <ScrollContainer>
                <BlogSummaryList/>
            </ScrollContainer>
        </Transition>
    )
}



export default forwardRef(Blog)
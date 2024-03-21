
import { useCallback } from "react";
import React, { forwardRef } from 'react'
import {
    Transition
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
            <div className={`row-span-full flex justify-center overflow-y-none`}>
                <div className="overflow-y-scroll">

                </div>
            </div>
        </Transition>
    )
}



export default forwardRef(Blog)
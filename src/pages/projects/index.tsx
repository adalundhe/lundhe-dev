
import { useCallback } from "react";
import React, { forwardRef } from 'react'
import {
    Transition
  } from '~/components'
import { useSiteSettings } from "~/utils/store";

type ProjectsPageProps = {}
type ProjectsPageRef = React.ForwardedRef<HTMLDivElement>

const Projects = (_: ProjectsPageProps, ref: ProjectsPageRef) => {

    const {
        mode
      } = useSiteSettings(
        useCallback((state) => ({
            mode: state.visibilityMode
        }), [])
      )

    return (
        <Transition ref={ref}>
          <></>
        </Transition>
    )
}



export default forwardRef(Projects)
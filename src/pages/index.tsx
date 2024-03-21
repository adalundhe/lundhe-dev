
import { useSiteSettings } from '~/utils/store'
import {
  AboutTerminal,
  SocialsNav,
  Transition
} from '~/components'
import React, { forwardRef, useCallback } from 'react'


type IndexPageProps = {}
type IndexPageRef = React.ForwardedRef<HTMLDivElement>

const Home = (_: IndexPageProps, ref: IndexPageRef) => {

  const {
    mode
  } = useSiteSettings(
    useCallback((state) => ({
        mode: state.visibilityMode
    }), [])
  )

  return (
    <Transition ref={ref}>
      <div className={`px-8 row-span-6 ${mode === 'light' ? 'text-[#212121]' : 'text-[#eeeeee]'} w-full grid grid-cols-12`}>
        <AboutTerminal />
      </div>
      <div className='px-8 text-[4vmin] row-span-4 text-center flex justify-center items-center'>
        <div className={`w-full font-sans ${mode === 'light' ? 'text-[#212121]' : 'text-[#eeeeee]'}`}>
          <p>Let's build together!</p>
        </div>
      </div>
      <SocialsNav/>
    </Transition>
  );
}


export default forwardRef(Home)

import { useSiteSettings } from '~/utils/store'
import {
  AboutTerminal,
  SocialsNav,
  Transition,
  DragDots
} from '~/components'
import React, { forwardRef, useCallback, useRef } from 'react'


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
      <div className='flex flex-col'>
        <div className={`px-8 my-2 ${mode === 'light' ? 'text-[#212121]' : 'text-[#eeeeee]'} w-full grid grid-cols-12`}>
          <AboutTerminal />
        </div>
        <div className='my-2 w-full h-full'>
            <DragDots />
        </div>
        <div className='px-8 text-[4vmin] my-2 text-center flex justify-center items-center'>
          <div className={`text-[5vmin] w-full font-sans ${mode === 'light' ? 'text-[#212121]' : 'text-[#eeeeee]'}`}>
            <p>Let&apos;s build together!</p>
          </div>
        </div>
        <div className='my-2 w-full h-full'>
            <DragDots />
        </div>
        <div className='my-2 py-6 w-full'>
          <SocialsNav/>
        </div>
      </div>
    </Transition>
  );
}


export default forwardRef(Home)
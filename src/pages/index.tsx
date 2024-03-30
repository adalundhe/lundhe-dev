
import { useSiteSettings } from '~/utils/store'
import {
  AboutTerminal,
  SocialsNav,
  Transition,
  DragDots,
  HighlightedHeader,
  AbstractShapeDisplay
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
      <div className='flex flex-col'>
        <div className={`px-8 h-[100vmin] mb-6 ${mode === 'light' ? 'text-[#212121]' : 'text-[#eeeeee]'} w-full relative`}>
          <div className='flex w-full h-full items-center justify-center'>
            <AbstractShapeDisplay />
            <AboutTerminal />
          </div>
        </div>
        <div className='my-6 w-full'>
            <DragDots />
        </div>
        <div className='px-8 text-[4vmin] my-2 text-center flex justify-center items-center'>
          <div className={`text-[5vmin] w-full font-sans ${mode === 'light' ? 'text-[#212121]' : 'text-[#eeeeee]'}`}>
            <HighlightedHeader text='Let&apos;s build together!' onInView={true}/>
          </div>
        </div>
        <div className='my-6 w-full'>
            <DragDots />
        </div>
        <div className='my-6 py-6 w-full'>
          <SocialsNav/>
        </div>
      </div>
    </Transition>
  );
}


export default forwardRef(Home)
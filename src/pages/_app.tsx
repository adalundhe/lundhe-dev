import "~/styles/highlight-js/github-dark.css"
import "~/styles/globals.css";
import { type AppType } from "next/app";
import localFont from 'next/font/local'

import { api } from "~/utils/api";
import { useCallback, useEffect } from "react";
import { AnimatePresence, useAnimate } from 'framer-motion'
import {
  Footer,
  NavBar,
} from '~/components'
import { useScrollSettings, useSiteSettings } from "~/utils/store";
import Head from "next/head";


const trirongFont = localFont({
  src: [
    {
      path: '../../public/fonts/trirong/Trirong-Light.ttf',
      weight: '300'
    },
    {
      path: '../../public/fonts/trirong/Trirong-Regular.ttf',
      weight: '400'
    },
    {
      path: '../../public/fonts/trirong/Trirong-Bold.ttf',
      weight: '700'
    }
  ],
  display: "swap",
  variable: '--font-trirong'
})

const marckScript = localFont({
  src: [
    {
      path: '../../public/fonts/marck_script/MarckScript-Regular.ttf',
      weight: '700'
    },
  ],
  display: "swap",
  variable: '--font-marck-script'
})


const zenTokyoZoo = localFont({
  src: [
    {
      path: '../../public/fonts/cookie/Cookie-Regular.ttf',
      weight: '700'
    },
  ],
  display: "swap",
  variable: '--font-cookie'
})

const MyApp: AppType = ({ Component, pageProps, router }) => {

  const onExitComplete = useCallback(() => {
      window.scrollTo({ top: 0 })
    }
  , [])  


  const {
    mode
  } = useSiteSettings(
    useCallback((state) => ({
        mode: state.visibilityMode
    }), [])
  )

  const {
      scrollDir,
      setDirection
  } = useScrollSettings(useCallback((state) => ({
      scrollDir: state.scrollDirection,
      setDirection: state.setScrollDirection
  }), []))

  const [scope, animate] = useAnimate()

  useEffect(() => {

      if (scrollDir === 'stable'){
          animate(scope.current, {
              height: '100%',
          }, {
              duration: 0.25,
          })

      } else {
          animate(scope.current, {
              height: '100vh',
          }, {
              duration: 0.25
          })
      }

  }, [scrollDir, animate, scope])

  return (
   <main className={`overflow-hidden ${zenTokyoZoo.variable} ${trirongFont.variable} ${marckScript.variable} w-screen h-screen ${mode === 'light' ? 'bg-[#eeeeee]' : 'bg-[#212121]'}`}>
      <Head>
        <title>Ada Lündhé</title>
      </Head>
      <div className="w-full flex flex-col h-full">
        <NavBar/>
        <div 
          ref={scope}
          onScroll={() => {
            scope.current && setDirection(
                scope.current.scrollTop + scope.current.clientHeight
            ) 
          }}
          className="overflow-y-scroll flex justify-center scroll-smooth h-full w-full font-serif"
          >
          <AnimatePresence
            onExitComplete={onExitComplete}
            mode="wait" 
            initial={false}
          >
            <Component {...pageProps} key={router.asPath} />
          </AnimatePresence>
        </div>
        <Footer/>
      </div>
    </main>
  );
};

export default api.withTRPC(MyApp);

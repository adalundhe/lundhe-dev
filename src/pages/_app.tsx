
import "~/styles/globals.css";
import { type AppType } from "next/app";
import localFont from 'next/font/local'

import { api } from "~/utils/api";
import { useCallback } from "react";
import { AnimatePresence } from 'framer-motion'
import {
  Header,
  Footer,
  NavBar,
} from '~/components'
import { useScrollSettings, useSiteSettings } from "~/utils/store";


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
      scrollDir
  } = useScrollSettings(useCallback((state) => ({
      scrollDir: state.scrollDirection
  }), []))

  return (
   <main className={`overflow-hidden ${zenTokyoZoo.variable} ${trirongFont.variable} ${marckScript.variable} w-screen h-screen ${mode === 'light' ? 'bg-[#eeeeee]' : 'bg-[#212121]'}`}>

      <Header/>
      <div className="w-full grid grid-rows-16 h-full">
        <NavBar/>
        <div className={`${ scrollDir === 'stable' ? '' : 'row-span-14' } w-full font-serif`}>
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

import Head from "next/head";
import { useSiteSettings } from '~/utils/store'
import {
  AboutTerminal,
  Footer,
  NavBar,
  SocialsNav
} from '~/components'
import { useCallback } from "react";

export default function Home() {

  const {
    mode
  } = useSiteSettings(
    useCallback((state) => ({
        mode: state.visibilityMode
    }), [])
  )

  return (
    <>
      <Head>
        <title>Ada Lündhé</title>
        <meta name="description" content="Ada Lundhe's blog." />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
        <link rel="icon" type="image/png" sizes="any" href="/favicon.ico"/>
        <link rel="manifest" href="/favicon/site.webmanifest"/>
      </Head>
      <main 
        className={`grid grid-rows-16 w-screen h-screen font-serif ${mode === 'light' ? 'bg-[#eeeeee]' : 'bg-[#212121]'}`}
      >
        <NavBar/>
        <div className={`px-8 row-span-6 ${mode === 'light' ? 'text-[#212121]' : 'text-[#eeeeee]'} w-full grid grid-cols-12`}>
          <AboutTerminal />
        </div>
        <SocialsNav/>
        <Footer/>
      </main>
    </>
  );
}

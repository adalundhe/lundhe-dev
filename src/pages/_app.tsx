
import "~/styles/globals.css";
import { type AppType } from "next/app";
import localFont from 'next/font/local'

import { api } from "~/utils/api";
import { useSiteSettings } from "~/utils/store";
import { useCallback } from "react";


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

const MyApp: AppType = ({ Component, pageProps }) => {

  const {
    mode
  } = useSiteSettings(
    useCallback((state) => ({
        mode: state.visibilityMode
    }), [])
  )

  return (
    <main className={`overscroll-none ${trirongFont.variable} ${marckScript.variable}`}>
      <Component {...pageProps} />
    </main>
  );
};

export default api.withTRPC(MyApp);

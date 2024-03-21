
import "~/styles/globals.css";
import { type AppType } from "next/app";
import localFont from '@next/font/local'

import { api } from "~/utils/api";


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
  return (
    <main className={`${trirongFont.variable} ${marckScript.variable}`}>
      <Component {...pageProps} />
    </main>
  );
};

export default api.withTRPC(MyApp);

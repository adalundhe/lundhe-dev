import Head from "next/head";
import { NavBar } from '~/components/navbar'




export default function Home() {
  return (
    <>
      <Head>
        <title>Ada Lündhé</title>
        <meta name="description" content="Ada Lundhe's blog." />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
        <link rel="manifest" href="/favicon/site.webmanifest"/>
      </Head>
      <main className={`w-screen h-screen font-serif`}>
        <NavBar/>
      </main>
    </>
  );
}

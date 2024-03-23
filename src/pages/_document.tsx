import { Html, Head, Main, NextScript } from 'next/document'

 
export default function Document() {
  return (
    <Html>
        <Head>
            <meta name="description" content="Ada Lundhe's blog." />
            <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
            <link rel="icon" type="image/png" sizes="any" href="/favicon.ico"/>
            <link rel="manifest" href="/favicon/site.webmanifest"/>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous'/>
            <link href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
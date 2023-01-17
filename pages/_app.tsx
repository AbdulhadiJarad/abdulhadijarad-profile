import '../styles/fonts.css'
import "../styles/recommendation.css";
import "../styles/globals.css";
import type { AppProps } from 'next/app'
import Cursor from '../shared/Cursor';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {

  return <>
    <Head>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <meta name="robots" content="index, follow" />
      <meta name="keywords" content="software engineer, software engineering, abdulhadi jarad,  blockchain, frontend, backend, fullstack, developer, damascus university "></meta>
      <meta property="og:image" content="/publicImage.png" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:alt" content="/publicImage.png" />
      <meta property="thumbnail" content="/publicImage.png" />
      <meta property="image" content={'/publicImage.png'} />
      <meta property="og:title" content={'Abdulhadi Jarad'} />
      <meta property="og:image:secure" content={'/publicImage.png'} />
      <meta property="og:image:url" content={'/publicImage.png'} />
      <meta property="og:site_name" content="Abdulhadi Jarad" />
      <meta property="og:description" content="Diligent software full-stack engineer with four years of experience. I Developed and maintained Web Applications with React" />
      <meta property="og:type" content="website" />
      <link rel="shortcut icon" href="/mm-fav.svg" />
      <link rel="shortcut icon" href="/mindmovers-logo.svg" />
      <link rel="mask-icon" href="mm-fav.svg" color="red" />
    </Head>
    <Cursor />
    <Component {...pageProps} />
  </>
}

export default MyApp

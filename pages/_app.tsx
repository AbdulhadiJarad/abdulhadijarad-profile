import '../styles/fonts.css'
import "../styles/recommendation.css";
import "../styles/globals.css";
import type { AppProps } from 'next/app'
import Cursor from '../shared/Cursor';

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Cursor/>
    <Component {...pageProps} />
    </>
}

export default MyApp

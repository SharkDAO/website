import '../styles/globals.css'
import { AppProps } from 'next/app';

export default function SharkApp({ Component, pageProps } : AppProps) {
  return <Component {...pageProps} />
}


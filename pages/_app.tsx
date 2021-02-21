import { AppProps } from 'next/app';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { Global } from '@emotion/react';

import {global} from '../theme/themes';

import '../styles/reset.css';
import '../styles/font.css';

const DynamicThemeProvider = dynamic(
  () => import('../theme/provider'),
  { ssr: false }
)

export default function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head>
        <title>Tyler Stewart</title>
      </Head>

      <Global styles={global} />

      <DynamicThemeProvider>
        <Component {...pageProps} />
      </DynamicThemeProvider>
    </>
  );
}

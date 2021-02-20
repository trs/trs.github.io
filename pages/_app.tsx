import { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import { Global } from '@emotion/react';

import {global} from '../theme/themes';

import '../styles/reset.css';

const DynamicThemeProvider = dynamic(
  () => import('../theme/provider'),
  { ssr: false }
)

export default function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <Global styles={global} />

      <DynamicThemeProvider>
        <Component {...pageProps} />
      </DynamicThemeProvider>
    </>
  );
}

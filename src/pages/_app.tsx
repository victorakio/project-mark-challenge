import type { AppProps } from 'next/app';
import { CSSReset } from '@stlyes/reset';
import Head from 'next/head';
import { StyleSheetManager } from 'styled-components';
import { SelectedOptionProvider } from '@hooks/useSelectedOption';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StyleSheetManager enableVendorPrefixes>
      <Head>
        <title>Project Mark Challenge</title>

        <meta name="description" content="Frontend code challenge" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="/favicon.ico" />

        <link rel="shortcut icon" href="/icon-512.png" />

        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>

      <CSSReset />

      <SelectedOptionProvider>
        <Component {...pageProps} />
      </SelectedOptionProvider>
    </StyleSheetManager>
  );
}

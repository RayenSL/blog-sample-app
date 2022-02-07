import { AppProps } from 'next/app';

import '@/styles/globals.css';
import '@/styles/colors.css';

import Layout from '@/components/layout/Layout';
import { Toaster } from 'react-hot-toast';
import { SWRConfig } from 'swr';
import { get } from '@/utils/helpers';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <SWRConfig
        value={{
          refreshInterval: 10_000,
          fetcher: get,
        }}
      >
        <Toaster
          toastOptions={{
            className: 'bg-white text-toxicOrange border border-toxicOrange',
          }}
        />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SWRConfig>
    </>
  );
}

export default MyApp;

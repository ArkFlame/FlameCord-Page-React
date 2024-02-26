import { ChakraProvider } from '@chakra-ui/react';
import { Analytics } from '@vercel/analytics/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

// Components.
import Layout from '@/components/layout';
import theme from '@/theme';
import '../theme/globals.css';

// Libraries CSS.
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo(0, 0);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>FlameCord</title>
        <meta
          name="description"
          content="Enhance your Minecraft server with FlameCord: advanced security, top performance, seamless compatibility. Elevate your experience!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/flame.png" />
      </Head>

      {process.env.NODE_ENV === 'production' && <Analytics />}
      <ToastContainer />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

//import { Analytics } from '@vercel/analytics/react';
import type { AppProps } from 'next/app';
import dynamic from "next/dynamic";
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';

// Components.
import Layout from '@/components/layout';
import theme from '@/theme';
import '../theme/globals.css';

// Libraries CSS.
import 'react-toastify/dist/ReactToastify.css';

const ChakraProvider = dynamic(() => import("@chakra-ui/provider").then(
    (mod) => mod.ChakraProvider)
);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>FlameCord - Enhance Your Minecraft Server Performance</title>
        <meta
          name="description"
          content="Optimize your Minecraft server with FlameCord's advanced security, top performance, and seamless compatibility. Elevate your gaming experience today!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow"/>
        <meta name="language" content="English"/>
        <meta name="author" content="ArkFlame Development"/>
        <meta name="keywords" content="FlameCord, Minecraft server, optimization, performance, security, compatibility" />

        <meta property="og:title" content="FlameCord: Enhance Your Minecraft Server Performance"/>
        <meta property="og:description" content="Optimize your Minecraft server with FlameCord's advanced security, top performance, and seamless compatibility. Elevate your gaming experience today!"/>
        <meta property="og:image" content="https://www.flamecord.com/banner.jpg"/>
        <meta property="og:url" content="https://www.flamecord.com"/>
        <meta property="og:type" content="website"/>
        <meta property="og:site_name" content="FlameCord"/>

        <link rel="canonical" href="https://www.flamecord.com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/*process.env.NODE_ENV === 'production' && <Analytics />*/}
      <ToastContainer />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

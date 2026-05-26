// pages/_app.js

import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="C0S0tB8-hwxtGAqpCez6GHVOB5XyDvE7E9jFYJfvf-Y"
        />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
export default MyApp;

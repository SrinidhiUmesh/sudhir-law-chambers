// pages/_app.js
import '../styles/globals.css';   // ✅ Global CSS goes here

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;

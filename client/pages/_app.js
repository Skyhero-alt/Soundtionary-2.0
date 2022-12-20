import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} data-theme="dark" />;
}

export default MyApp;

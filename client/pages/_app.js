import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div data-theme="dark">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

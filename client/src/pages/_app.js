import { GlobalContextProvider } from "@/Provider/Providers";
import "../app/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <GlobalContextProvider>
      <Component {...pageProps} />
    </GlobalContextProvider>
  );
}

export default MyApp;

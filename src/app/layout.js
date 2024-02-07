import Head from "next/head";
import { GlobalContextProvider } from "@/Provider/Providers";
import { UserProvider } from '@/Provider/Providers';
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });

const roboto_init = Roboto({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-roboto',
})

export const metadata = {
  title: {
    default: "Liston Rosa",
    template: "%s | Liston Rosa",
  },
  description: "Campaña de concientizacion del cancer de mama",
  url: "https://example.com", // replace
  image: "https://example.com/og-image.jpg", //replace
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:image" content={metadata.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.image} />
        {/* SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="your, keywords, here" />
        <script
          src="https://apis.google.com/js/platform.js"
          async
          defer
        ></script>
      </Head>
      <body className={roboto_init.variable}>
          {/* <UserProvider> */}
            <Header />
            <GlobalContextProvider>{children}</GlobalContextProvider>
            <Footer />
          {/* </UserProvider> */}
      </body>
    </html>
  );
}

import { GlobalContextProvider } from "@/Provider/Providers";
import { Inter } from "next/font/google";
import './globals.css'
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Liston Rosa",
  description: "Campaña de concientizacion del cancer de mama",
};

export default function RootLayout({ children }) {
  return (
    // <html lang="en">
    //   <body className={inter.className}>
    //     <GlobalContextProvider>{children}</GlobalContextProvider>
    //   </body>
    // </html>
    <html lang="en">
    <body className={inter.className}>
      {children}
    </body>
  </html>
  );
}

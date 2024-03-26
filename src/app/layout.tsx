import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layoutes/Header";
import { NextScript } from "next/document";
import Script from "next/script";
import Footer from "@/components/layoutes/Footer";
import StoreProvider from "@/providers/StoreProvider";
import { ToastContainer } from "react-toastify";
import MessageProvider from "@/providers/MessageProvider";
import 'react-toastify/dist/ReactToastify.css';
import UserProvider from "@/providers/UserProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/images/favicon.png" />
        <link rel="stylesheet" href="/css/all.min.css" />
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/slick.css" />
        <link rel="stylesheet" href="/css/venobox.min.css" />
        <link rel="stylesheet" href="/css/scroll_button.css" />
        <link rel="stylesheet" href="/css/custom_spacing.css" />
        <link rel="stylesheet" href="/css/jquery.exzoom.css" />
        <link rel="stylesheet" href="/css/nice-select.css" />
        <link rel="stylesheet" href="/css/percircle.css" />
        <link rel="stylesheet" href="/css/ranger_slider.css" />
        <link rel="stylesheet" href="/css/select2.min.css" />
        <link rel="stylesheet" href="/css/animate.css" />
        <link rel="stylesheet" href="/css/mobile_menu.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/responsive.css" />
      </head>
      <body className={inter.className}>
        <StoreProvider>
          <UserProvider>


            <MessageProvider>

              <Header />
              {children}
              <Footer />
              <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
              />
            </MessageProvider>
          </UserProvider>
        </StoreProvider>

        <Script src="js/jquery-3.7.0.min.js" strategy="beforeInteractive" />
        <Script src="js/bootstrap.bundle.min.js" strategy="lazyOnload" />
        <Script src="js/Font-Awesome.js" strategy="lazyOnload" />
        <Script src="js/slick.min.js" strategy="lazyOnload" />
        <Script src="js/isotope.pkgd.min.js" strategy="lazyOnload" />
        <Script src="js/venobox.min.js" strategy="lazyOnload" />
        <Script src="js/jquery.marquee.min.js" strategy="beforeInteractive" />
        <Script src="js/simplyCountdown.js" strategy="lazyOnload" />
        <Script src="js/scroll_button.js" strategy="lazyOnload" />
        <Script src="js/jquery.waypoints.min.js" strategy="lazyOnload" />
        <Script src="js/jquery.countup.min.js" strategy="lazyOnload" />
        <Script src="js/jquery.exzoom.js" strategy="lazyOnload" />
        <Script src="js/jquery.nice-select.min.js" strategy="lazyOnload" />
        <Script src="js/percircle.js" strategy="lazyOnload" />
        <Script src="js/ranger_jquery-ui.min.js" strategy="lazyOnload" />
        <Script src="js/ranger_slider.js" strategy="lazyOnload" />
        <Script src="js/select2.min.js" strategy="lazyOnload" />
        <Script src="js/sticky_sidebar.js" strategy="lazyOnload" />
        <Script src="js/wow.min.js" strategy="lazyOnload" />
        <Script src="js/main.js" strategy="lazyOnload" />

      </body>
    </html>
  );
}

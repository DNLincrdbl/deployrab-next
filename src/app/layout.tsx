import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AnimationWrapper from './components/sections/AnimationWrapper';
import ScrollToTop from './components/sections/ScrollToTop';
import Footer from './components/sections/Footer';
import CookieConsent from './components/CookieConsent';

const inter = Inter({ subsets: ["latin"] });

import "../i18n/i18n";

export const metadata: Metadata = {
  title: "Villa Laki",
  description: "Villa Laki - Modern apartmanház Rab szigetén",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hu">
      <head>
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} overscroll-y-none`}>
        <AnimationWrapper>
          <main>
            {children}
          </main>
          <Footer />
          <ScrollToTop />
          <CookieConsent />
        </AnimationWrapper>
      </body>
    </html>
  );
}
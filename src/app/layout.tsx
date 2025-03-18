import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AnimationWrapper from './components/sections/AnimationWrapper';
import ScrollToTop from './components/sections/ScrollToTop';
import Footer from './components/sections/Footer';

const inter = Inter({ subsets: ["latin"] });

import "../i18n/i18n";

export const metadata: Metadata = {
  title: "Villa Laki",
  description: "Luxury accommodation in Rab, Croatia"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hu">
      <head>
        <meta 
          name="viewport" 
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" 
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <AnimationWrapper>
          <main>
            {children}
            <ScrollToTop />
          </main>
          <Footer />
        </AnimationWrapper>
      </body>
    </html>
  );
}
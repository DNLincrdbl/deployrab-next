import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AnimationWrapper from './components/sections/AnimationWrapper';
import ScrollToTop from './components/sections/ScrollToTop';
import Navbar from './components/navigation/Navbar';
import Footer from './components/sections/Footer';

const inter = Inter({ subsets: ["latin"] });

import "../i18n/i18n";

export const metadata: Metadata = {
  title: "Villa Laki",
  description: "Luxury accommodation in Rab, Croatia",
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
      </head>
      <body className={inter.className}>
        <Navbar />
        <main>
          <AnimationWrapper>
            {children}
            <ScrollToTop />
          </AnimationWrapper>
        </main>
        <Footer />
      </body>
    </html>
  );
}
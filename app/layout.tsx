import type { Metadata } from "next";
import { Roboto_Mono, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import StylingDropdown from "@/components/styling-dropdown";
import Preloader from "@/components/preloader";
import { MenuProvider } from "@/components/menu-context";

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Jason Okoh",
  description: "Jason Okoh Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoMono.variable} ${cormorantGaramond.variable} antialiased`}
      >
        <MenuProvider>
          <Preloader />
          <Header />
          <StylingDropdown />
          {children}
        </MenuProvider>
      </body>
    </html>
  );
}

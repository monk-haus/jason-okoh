import type { Metadata } from "next";
import localFont from "next/font/local";
import { PT_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import StylingDropdown from "@/components/styling-dropdown";
import Preloader from "@/components/preloader";
import { MenuProvider } from "@/components/menu-context";

const ptMono = PT_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pt-mono",
});

const nimbusSans = localFont({
  src: [
    { path: "../fonts/NimbusSanL-Reg.otf", weight: "400", style: "normal" },
    { path: "../fonts/NimbusSanL-RegIta.otf", weight: "400", style: "italic" },
    { path: "../fonts/NimbusSanL-Bol.otf", weight: "700", style: "normal" },
    { path: "../fonts/NimbusSanL-BolIta.otf", weight: "700", style: "italic" },
  ],
  variable: "--font-nimbus-sans",
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
        className={`${nimbusSans.variable} ${ptMono.variable} antialiased`}
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

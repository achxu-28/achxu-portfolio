import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./_layout/Header";
import Footer from "./_layout/Footer";
import Image from "next/image";
import screensaver from "../../public/images/vintage-abstract-black-white-wave-background-free-video.jpg"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "achxu",
  description: "achxu's portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

            <Header/>
            {children}
            {/* <Footer/> */}


      </body>
    </html>
  );
}

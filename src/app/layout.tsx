import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./_layout/Header";
import { ThemeProvider } from "@/context/ThemeContext";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/////////////////////////////////////////////////////////////////
export const metadata: Metadata = {
  title: "achxu",
  description: "achxu's portfolio website showcasing modern web development skills",
  keywords: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Portfolio", "Web Developer", "achxu"],
  authors: [{ name: "Akash Mamenholy", url: "https://github.com/achxu" }],
  creator: "Akash Mamenholy",
  openGraph: {
    title: "achxu | Web Developer Portfolio",
    description: "Explore Akash's modern web projects built with Next.js, React, and Tailwind CSS.",
    url: "https://achxu-portfolio.vercel.app/",
    siteName: "achxu portfolio",
    images: [
      {
        
        url: "https://achxu-portfolio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fme2.3eaf612c.jpg&w=1920&q=75",
        width: 1200,
        height: 630,
        alt: "achxu portfolio preview",
      },
    ],
    locale: "en_US",
    type: "website",
  }
};
/////////////////////////////////////////////////////////////////



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
        
        <ThemeProvider>
          <Header />
          {children}</ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import  Navbar  from "./components/footer";
import  Footer from "./components/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",

  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Lynx Bridge",
  description: "A streamlined TNVS assistance.",
  icons: {
    icon: [
      {
        rel: "icon",
        type: "image/ico",
        url: "./favicon.ico",
      }]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <head>
        <link rel="icon" href="./favicon.ico" sizes="any" />
      </head>
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}

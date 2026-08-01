import { Cormorant_Garamond, Manrope } from "next/font/google";
import {heading, body} from "@/libs/fonts"

import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar";

import StartProject from "@/components/StartProject";

import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AtNexus Tech",
  description: "Placeholder description for AtNexus Tech.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en"
     className={`${heading.variable} ${body.variable}`} >
      <body className="font-body">
        <Navbar />
        <main>{children}</main>
       
        <StartProject/>
        <Footer />
      </body>
    </html>
  );
}

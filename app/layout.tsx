import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import Nav from "@/components/Nav";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rachel McCarthy",
  description: "Personal site of Rachel McCarthy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistMono.variable}`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}

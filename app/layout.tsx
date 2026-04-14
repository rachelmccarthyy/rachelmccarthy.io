import type { Metadata } from "next";
import {
  Inter,
  Montserrat,
  Raleway,
  Syne,
  Figtree,
  Outfit,
  Barlow,
  Bebas_Neue,
  Oswald,
  Anton,
  DM_Sans,
  Hanken_Grotesk,
  Plus_Jakarta_Sans,
  Space_Grotesk,
  Geist_Mono,
} from "next/font/google";
import Nav from "@/components/Nav";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], weight: ["800", "900"] });
const montserrat = Montserrat({ variable: "--font-montserrat", subsets: ["latin"], weight: ["800", "900"] });
const raleway = Raleway({ variable: "--font-raleway", subsets: ["latin"], weight: ["800", "900"] });
const syne = Syne({ variable: "--font-syne", subsets: ["latin"], weight: ["700", "800"] });
const figtree = Figtree({ variable: "--font-figtree", subsets: ["latin"], weight: ["800", "900"] });
const outfit = Outfit({ variable: "--font-outfit", subsets: ["latin"], weight: ["800", "900"] });
const barlow = Barlow({ variable: "--font-barlow", subsets: ["latin"], weight: ["800", "900"] });
const bebasNeue = Bebas_Neue({ variable: "--font-bebas", subsets: ["latin"], weight: "400" });
const oswald = Oswald({ variable: "--font-oswald", subsets: ["latin"], weight: ["600", "700"] });
const anton = Anton({ variable: "--font-anton", subsets: ["latin"], weight: "400" });
const dmSans = DM_Sans({ variable: "--font-dm-sans", subsets: ["latin"], weight: ["400", "500"] });
const hankenGrotesk = Hanken_Grotesk({ variable: "--font-hanken", subsets: ["latin"], weight: ["400", "500"] });
const plusJakarta = Plus_Jakarta_Sans({ variable: "--font-plus-jakarta", subsets: ["latin"], weight: ["400", "500"] });
const spaceGrotesk = Space_Grotesk({ variable: "--font-space-grotesk", subsets: ["latin"], weight: ["400", "500"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rachel McCarthy",
  description: "Personal site of Rachel McCarthy",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${montserrat.variable} ${raleway.variable} ${syne.variable} ${figtree.variable} ${outfit.variable} ${barlow.variable} ${bebasNeue.variable} ${oswald.variable} ${anton.variable} ${dmSans.variable} ${hankenGrotesk.variable} ${plusJakarta.variable} ${spaceGrotesk.variable} ${geistMono.variable}`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}

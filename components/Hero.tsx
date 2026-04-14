"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const fonts = [
  "var(--font-inter)",
  "var(--font-montserrat)",
  "var(--font-figtree)",
  "var(--font-outfit)",
  "var(--font-barlow)",
];

export default function Hero() {
  const [fontIndex, setFontIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFontIndex((i) => (i + 1) % fonts.length);
    }, 250);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex h-dvh min-h-0 overflow-hidden">

      {/* Full-screen image */}
      <Image src="/hero1.png" alt="" fill className="object-cover object-center" style={{ filter: "contrast(0.65) brightness(1.05)" }} priority />

      {/* Text panel — right side, overlaid */}
      <div className="relative z-10 ml-auto w-full md:w-[38%] md:max-w-[600px] flex flex-col justify-end md:justify-center items-end pl-6 pr-6 md:pl-12 md:pr-10 pb-16 pt-32 md:pt-64 md:pb-32 text-right">

        <h1
          className="leading-[0.88] tracking-tight transition-all duration-100"
          style={{ fontSize: "clamp(56px, 14vw, 172px)", fontFamily: fonts[fontIndex], fontWeight: 800, textShadow: "0 1px 3px rgba(0,0,0,0.35)" }}
        >
          <span className="block" style={{ color: "#FFE033" }}>Rachel</span>
          <span className="block" style={{ color: "#FFE033" }}>McCarthy</span>
        </h1>


        <p className="mt-18 italic font-semibold tracking-[-0.02em] whitespace-nowrap" style={{ color: "#FFE033", fontSize: "clamp(11px, 1.8vw, 22px)", textShadow: "0 1px 3px rgba(0,0,0,0.4)" }}>
          Product Manager | Brooklyn, NY | {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}
        </p>

      </div>
    </section>
  );
}

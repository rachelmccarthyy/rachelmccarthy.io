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
    <section className="relative flex min-h-screen">

      {/* Full-screen image */}
      <Image src="/hero1.png" alt="" fill className="object-cover object-center" style={{ filter: "contrast(0.65) brightness(1.05)" }} priority />

      {/* Text panel — right side, overlaid */}
      <div className="relative z-10 ml-auto w-full md:w-[38%] flex flex-col justify-center items-end pl-12 pr-10 py-32 text-right">

        <h1
          className="leading-[0.88] tracking-tight transition-all duration-100"
          style={{ fontSize: "clamp(96px, 10vw, 172px)", fontFamily: fonts[fontIndex], fontWeight: 800 }}
        >
          <span className="block" style={{ color: "#FFE033" }}>Rachel</span>
          <span className="block" style={{ color: "#FFE033" }}>McCarthy</span>
        </h1>

        <div className="mt-6 mb-12 h-px w-8 bg-white/60 self-end" />

        <p className="text-sm font-medium leading-snug tracking-[0.02em] whitespace-nowrap italic text-white">
          human first product manager.
        </p>

        <p className="mt-4 text-xl font-medium tracking-normal" style={{ color: "#FFE033" }}>
          Brooklyn, NY | {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}
        </p>

      </div>
    </section>
  );
}

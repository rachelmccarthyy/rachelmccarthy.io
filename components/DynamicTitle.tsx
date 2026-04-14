"use client";

import { useEffect, useState } from "react";

const fonts = [
  { family: "var(--font-hanken)",       weight: 400 },
  { family: "var(--font-dm-sans)",      weight: 400 },
  { family: "var(--font-plus-jakarta)", weight: 400 },
  { family: "var(--font-space-grotesk)",weight: 400 },
  { family: "var(--font-hanken)",       weight: 500 },
];

export default function DynamicTitle({ children, color = "#000000" }: { children: React.ReactNode; color?: string }) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIdx((i) => (i + 1) % fonts.length);
    }, 250);
    return () => clearInterval(interval);
  }, []);

  return (
    <h1
      className="leading-none tracking-normal transition-all duration-100"
      style={{
        fontSize: "clamp(48px, 5.5vw, 72px)",
        color,
        fontFamily: fonts[idx].family,
        fontWeight: fonts[idx].weight,
      }}
    >
      {children}
    </h1>
  );
}

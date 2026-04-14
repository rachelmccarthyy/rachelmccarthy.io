"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

type Artwork = {
  src: string;
  artist: string;
  title: string;
  year: string;
};

export default function ArtGrid({ artworks }: { artworks: Artwork[] }) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const close = useCallback(() => setExpandedIndex(null), []);
  const navigate = useCallback((dir: 1 | -1) => {
    setExpandedIndex((i) => i === null ? null : (i + dir + artworks.length) % artworks.length);
  }, [artworks.length]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") navigate(1);
      if (e.key === "ArrowLeft") navigate(-1);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [close, navigate]);

  const buddha = artworks[0];
  const others = artworks.slice(1);

  function imageStyle(i: number) {
    return {
      opacity: hoveredIndex === null ? 0.78 : hoveredIndex === i ? 1 : 0.72,
      transform: hoveredIndex === i ? "scale(1.22)" : "scale(1)",
      filter: hoveredIndex === i ? "drop-shadow(0 0 7px rgba(255,255,255,0.95))" : "none",
      transition: "transform 0.18s ease, opacity 0.18s, filter 0.18s",
    };
  }

  function Caption({ work }: { work: Artwork }) {
    return (
      <div className="mt-2">
        <p className="text-[10px] uppercase tracking-[0.08em] font-normal text-fg">{work.artist}</p>
        <p className="text-xs font-semibold text-fg leading-snug mt-0.5">{work.title}</p>
        <p className="text-[10px] font-normal text-fg mt-0.5">{work.year}</p>
      </div>
    );
  }

  return (
    <>
      <div className="grid gap-3" style={{ gridTemplateColumns: "1.6fr 1fr 1fr 1fr" }}>

        {/* Buddha — spans 2 rows */}
        <div className="row-span-2 flex flex-col">
          <div
            className="relative flex-1 overflow-hidden cursor-zoom-in min-h-0"
            onClick={() => setExpandedIndex(0)}
            onMouseEnter={() => setHoveredIndex(0)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Image src={buddha.src} alt={buddha.title} fill className="object-cover object-center" style={imageStyle(0)} />
          </div>
          <Caption work={buddha} />
        </div>

        {/* 6 others — 3 cols × 2 rows */}
        {others.map((work, i) => {
          const idx = i + 1;
          return (
            <div key={i} className="flex flex-col">
              <div
                className="relative overflow-hidden cursor-zoom-in"
                style={{ aspectRatio: "1" }}
                onClick={() => setExpandedIndex(idx)}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Image src={work.src} alt={work.title} fill className="object-cover object-top" style={imageStyle(idx)} />
              </div>
              <Caption work={work} />
            </div>
          );
        })}

      </div>

      {expandedIndex !== null && (() => {
        const work = artworks[expandedIndex];
        return (
          <div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/85 backdrop-blur-sm"
            onClick={close}
          >
            <p className="text-white/60 text-[11px] uppercase tracking-[0.25em] font-medium mb-4">{work.artist}</p>
            <div
              className="relative flex items-center gap-6 px-16"
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => navigate(-1)} className="text-white/50 hover:text-white text-3xl leading-none transition-colors select-none">←</button>
              <Image
                src={work.src}
                alt={work.title}
                width={1200}
                height={900}
                className="max-h-[80vh] max-w-[80vw] w-auto h-auto object-contain"
              />
              <button onClick={() => navigate(1)} className="text-white/50 hover:text-white text-3xl leading-none transition-colors select-none">→</button>
            </div>
            <p className="text-white/70 text-xs font-semibold mt-4">{work.title}</p>
            <p className="text-white/40 text-[10px] tracking-widest mt-1">{work.year} · {expandedIndex + 1} / {artworks.length}</p>
            <button onClick={close} className="absolute top-6 right-8 text-white/40 hover:text-white text-2xl leading-none transition-colors">×</button>
          </div>
        );
      })()}
    </>
  );
}

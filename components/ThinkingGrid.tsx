"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { track } from "@/lib/track";

export type Thought = {
  slug: string;
  title: string;
  date: string;
  tag: string;
  body: string;
  sources?: { label: string; url: string }[];
};

export default function ThinkingGrid({ thoughts }: { thoughts: Thought[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 1);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  const scroll = (dir: 1 | -1) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = window.innerWidth < 768 ? el.offsetWidth * 0.85 + 24 : el.offsetWidth / 3;
    el.scrollBy({ left: dir * cardWidth, behavior: "smooth" });
  };

  return (
    <div className="relative">
      {canScrollLeft && (
        <button
          onClick={() => scroll(-1)}
          className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 text-fg hover:text-[#FFE033] text-2xl transition-colors select-none hidden md:block"
          aria-label="Scroll left"
        >
          ←
        </button>
      )}
      {canScrollRight && (
        <button
          onClick={() => scroll(1)}
          className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 text-fg hover:text-[#FFE033] text-2xl transition-colors select-none hidden md:block"
          aria-label="Scroll right"
        >
          →
        </button>
      )}

      {/* Mobile scroll arrows */}
      <div className="flex md:hidden items-center justify-end gap-4 mt-3">
        {canScrollLeft && (
          <button onClick={() => scroll(-1)} className="text-fg text-lg transition-colors select-none" aria-label="Scroll left">←</button>
        )}
        {canScrollRight && (
          <button onClick={() => scroll(1)} className="text-fg text-lg transition-colors select-none" aria-label="Scroll right">→</button>
        )}
      </div>

      <div
        ref={scrollRef}
        data-thinking-scroll
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory"
        style={{ scrollbarWidth: "none" }}
      >
        <style>{`[data-thinking-scroll]::-webkit-scrollbar { display: none; }`}</style>
        {thoughts.map((thought) => (
          <Link
            key={thought.slug}
            href={`/thinking/${thought.slug}`}
            onClick={() => track("thought_open", { title: thought.title })}
            className="flex-none w-[85vw] md:w-[calc((100%-3rem)/3)] snap-start text-left group cursor-pointer transition-all duration-200 hover:scale-[1.03]"
          >
            <div className="border-t border-fg/[0.07] pt-5">
              <div className="flex items-baseline gap-3 text-[10px] uppercase tracking-[0.08em] font-normal mb-2 text-fg group-hover:text-[#FFE033] transition-colors">
                <span>{thought.tag}</span>
                <span className="opacity-40">·</span>
                <span className="opacity-40">{thought.date}</span>
              </div>
              <h3 className="text-sm font-semibold text-fg mb-2 group-hover:text-[#FFE033] transition-colors underline decoration-fg/20 group-hover:decoration-[#FFE033]/40 underline-offset-2">
                {thought.title} <span className="text-xs">↗</span>
              </h3>
              <p className="text-sm text-fg leading-normal font-normal line-clamp-3 text-justify group-hover:text-[#FFE033] transition-colors">
                {thought.body}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

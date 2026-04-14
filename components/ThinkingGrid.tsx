"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export type Thought = {
  title: string;
  date: string;
  tag: string;
  body: string;
  sources?: { label: string; url: string }[];
};

export default function ThinkingGrid({ thoughts }: { thoughts: Thought[] }) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const close = useCallback(() => setExpandedIndex(null), []);
  const navigate = useCallback(
    (dir: 1 | -1) => {
      setExpandedIndex((i) =>
        i === null ? null : (i + dir + thoughts.length) % thoughts.length
      );
    },
    [thoughts.length]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") navigate(1);
      if (e.key === "ArrowLeft") navigate(-1);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [close, navigate]);

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
    <>
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
          {thoughts.map((thought, i) => (
            <button
              key={thought.title}
              onClick={() => setExpandedIndex(i)}
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
            </button>
          ))}
        </div>

      </div>

      {expandedIndex !== null &&
        (() => {
          const thought = thoughts[expandedIndex];
          return (
            <div
              className="fixed inset-0 z-50 flex flex-col items-center justify-start md:justify-center pt-16 md:pt-0 bg-black/90 backdrop-blur-sm"
              onClick={close}
            >
              <div
                className="relative flex items-start gap-4 md:gap-8 px-5 md:px-16 max-w-2xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => navigate(-1)}
                  className="hidden md:block text-white/70 hover:text-white text-2xl leading-none transition-colors select-none flex-none mt-2"
                >
                  ←
                </button>

                <div className="flex flex-col flex-1 text-white max-h-[65vh] md:max-h-[70vh] overflow-y-auto pr-1 md:pr-2">
                  <div className="flex items-baseline gap-3 text-[11px] uppercase tracking-[0.08em] font-medium mb-3 text-white/70">
                    <span>{thought.tag}</span>
                    <span>·</span>
                    <span>{thought.date}</span>
                  </div>
                  <h2 className="text-base md:text-xl font-semibold text-white mb-3 md:mb-4">
                    {thought.title}
                  </h2>
                  <p className="text-sm leading-relaxed font-normal text-white/75">
                    {thought.body}
                  </p>
                  {thought.sources && thought.sources.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                      {thought.sources.map((s) => (
                        <a
                          key={s.url}
                          href={s.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#FFE033] hover:underline"
                        >
                          {s.label} ↗
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                <button
                  onClick={() => navigate(1)}
                  className="hidden md:block text-white/70 hover:text-white text-2xl leading-none transition-colors select-none flex-none mt-2"
                >
                  →
                </button>
              </div>

              <div className="flex md:hidden gap-8 mt-8">
                <button
                  onClick={() => navigate(-1)}
                  className="text-white/70 hover:text-white text-2xl transition-colors select-none"
                >
                  ←
                </button>
                <button
                  onClick={() => navigate(1)}
                  className="text-white/70 hover:text-white text-2xl transition-colors select-none"
                >
                  →
                </button>
              </div>

              <p className="text-white/75 text-[11px] tracking-widest mt-4 font-medium">
                {expandedIndex + 1} / {thoughts.length}
              </p>
              <button
                onClick={close}
                className="absolute top-6 right-8 text-white/40 hover:text-white text-2xl leading-none transition-colors"
              >
                ×
              </button>
            </div>
          );
        })()}
    </>
  );
}

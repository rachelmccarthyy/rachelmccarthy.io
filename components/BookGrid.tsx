"use client";

import Image from "next/image";
import { track } from "@vercel/analytics";
import { useCallback, useEffect, useState } from "react";

export type Book = {
  title: string;
  author: string;
  tag: string;
  isbn: string;
  cover?: string;
  link: string;
  summary: string;
};

function CoverImage({ isbn, cover, title }: { isbn: string; cover?: string; title: string }) {
  const [errored, setErrored] = useState(false);
  const src = cover ?? `https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg`;

  if (errored) {
    return (
      <div className="w-36 md:w-44 flex-none bg-white/10 flex items-center justify-center text-white/30 text-xs text-center p-4" style={{ aspectRatio: "2/3" }}>
        {title}
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={title}
      width={176}
      height={264}
      className="w-36 md:w-44 flex-none h-auto object-contain shadow-2xl"
      onError={() => setErrored(true)}
    />
  );
}

export default function BookGrid({ books }: { books: Book[] }) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const close = useCallback(() => setExpandedIndex(null), []);
  const navigate = useCallback((dir: 1 | -1) => {
    setExpandedIndex((i) => i === null ? null : (i + dir + books.length) % books.length);
  }, [books.length]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") navigate(1);
      if (e.key === "ArrowLeft") navigate(-1);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [close, navigate]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-4 md:grid-flow-col md:gap-x-16">
        {books.map((book, i) => (
          <button
            key={book.title}
            onClick={() => { track("book_open", { title: book.title }); setExpandedIndex(i); }}
            className="grid grid-cols-[2rem_1fr_auto] gap-4 items-baseline py-3.5 border-b border-fg/[0.04] text-left w-full group cursor-pointer transition-all duration-200 hover:text-[#FFE033] hover:scale-[1.03]"
          >
            <span className="text-[10px] tabular-nums font-normal text-fg group-hover:text-[#FFE033] transition-colors">{String(i + 1).padStart(2, "0")}</span>
            <div>
              <span className="text-sm font-semibold text-fg group-hover:text-[#FFE033] transition-colors">{book.title}</span>
              <span className="text-xs italic font-normal text-fg ml-2.5 group-hover:text-[#FFE033] transition-colors">{book.author}</span>
            </div>
            <span className="text-[9px] uppercase tracking-[0.2em] text-fg font-normal group-hover:text-[#FFE033] transition-colors">{book.tag}</span>
          </button>
        ))}
      </div>

      {expandedIndex !== null && (() => {
        const book = books[expandedIndex];
        return (
          <div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={close}
          >
            <div
              className="relative flex flex-col md:flex-row items-center md:items-start gap-8 px-4 md:px-16 max-w-2xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => navigate(-1)} className="hidden md:block text-white/40 hover:text-white text-2xl leading-none transition-colors select-none flex-none">←</button>

              <CoverImage isbn={book.isbn} cover={book.cover} title={book.title} />

              <div className="flex flex-col flex-1 text-white">
                <p className="text-[9px] uppercase tracking-[0.3em] font-medium text-white/40 mb-3">{book.tag}</p>
                <h2 className="text-xl font-semibold leading-snug">{book.title}</h2>
                <p className="text-sm italic text-white/50 mt-1 mb-5">{book.author}</p>
                <p className="text-sm leading-relaxed text-white/75">{book.summary}</p>
                <a
                  href={book.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => track("book_goodreads_click", { title: book.title })}
                  className="mt-6 inline-block text-[10px] uppercase tracking-[0.2em] font-medium text-[#FFE033] hover:underline"
                >
                  View on Goodreads ↗
                </a>
              </div>

              <button onClick={() => navigate(1)} className="hidden md:block text-white/40 hover:text-white text-2xl leading-none transition-colors select-none flex-none">→</button>
            </div>

            <div className="flex md:hidden gap-8 mt-8">
              <button onClick={() => navigate(-1)} className="text-white/40 hover:text-white text-2xl transition-colors select-none">←</button>
              <button onClick={() => navigate(1)} className="text-white/40 hover:text-white text-2xl transition-colors select-none">→</button>
            </div>

            <p className="text-white/25 text-[10px] tracking-widest mt-4">{expandedIndex + 1} / {books.length}</p>
            <button onClick={close} className="absolute top-6 right-8 text-white/40 hover:text-white text-2xl leading-none transition-colors">×</button>
          </div>
        );
      })()}
    </>
  );
}

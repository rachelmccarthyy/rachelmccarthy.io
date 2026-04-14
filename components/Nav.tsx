"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#work", label: "Work" },
  { href: "/#photos", label: "Photos" },
  { href: "/#books", label: "Books" },
  { href: "/#art", label: "Art" },
  { href: "/#playlists", label: "Music" },
];

export default function Nav() {
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > window.innerHeight * 0.85);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pastHero) return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-8 right-8 z-50 w-10 h-10 flex items-center justify-center rounded-full bg-neutral-200/90 backdrop-blur-sm shadow-xl text-gray-500 hover:bg-[#FFE033] hover:text-black hover:scale-110 transition-all duration-200"
      style={{ filter: "grayscale(20%)" }}
      aria-label="Back to top"
    >
      ↑
    </button>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-start justify-between px-10 py-6">
      <Link
        href="/"
        className="inline-block text-lg italic text-white no-underline font-[family-name:var(--font-display)] font-semibold tracking-[-0.02em] hover:text-[#FFE033] hover:scale-110 transition-all duration-200 origin-left"
      >
        Rachel McCarthy
      </Link>
      <ul className="flex flex-col items-end gap-2 text-sm font-medium text-white tracking-[-0.01em]">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link href={href} className="inline-block hover:text-[#FFE033] hover:scale-110 transition-all duration-200 origin-right">
              {label} <span className="text-xs">↗</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

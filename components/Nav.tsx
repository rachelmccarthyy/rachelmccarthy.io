"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#thinking", label: "Thinking" },
  { href: "/#photos", label: "Photos" },
  { href: "/#books", label: "Books" },
  { href: "/#art", label: "Art" },
  { href: "/#playlists", label: "Music" },
];

export default function Nav() {
  const [pastHero, setPastHero] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > window.innerHeight * 0.85);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on scroll past hero
  useEffect(() => {
    if (pastHero) setMenuOpen(false);
  }, [pastHero]);

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
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-start justify-start px-5 md:px-10 py-5 md:py-6">
        {/* Desktop nav */}
        <ul className="hidden md:flex md:flex-col md:items-start md:gap-2 text-sm font-medium text-[#FFE033] tracking-[-0.01em]" style={{ textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}>
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className="inline-block hover:text-white hover:scale-110 transition-all duration-200 origin-left">
                {label} <span className="text-xs">↗</span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px]"
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-[1.5px] bg-white transition-all duration-200 ${menuOpen ? "translate-y-[6.5px] rotate-45" : ""}`} />
          <span className={`block w-5 h-[1.5px] bg-white transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-[1.5px] bg-white transition-all duration-200 ${menuOpen ? "-translate-y-[6.5px] -rotate-45" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-sm md:hidden flex flex-col items-center justify-center">
          <ul className="flex flex-col items-center gap-6 text-lg font-medium text-[#FFE033]">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="inline-block hover:text-white transition-colors duration-200"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

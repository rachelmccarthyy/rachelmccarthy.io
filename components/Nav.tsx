import Link from "next/link";

const links = [
  { href: "/about", label: "About" },
  { href: "/photos", label: "Photos" },
  { href: "/books", label: "Books" },
  { href: "/art", label: "Art" },
  { href: "/playlists", label: "Playlists" },
  { href: "/work", label: "Work" },
];

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-white/75 backdrop-blur-md border-b border-white/40">
      <Link
        href="/"
        className="font-medium text-[#1a1a1a] tracking-tight font-[family-name:var(--font-geist-mono)]"
      >
        rachel<span className="text-primary">mccarthy</span>.io
      </Link>
      <ul className="flex gap-6 text-sm font-normal text-gray-500">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link href={href} className="hover:text-primary transition-colors duration-200">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

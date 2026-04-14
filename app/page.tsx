import Hero from "@/components/Hero";
import Image from "next/image";
import PhotoMap from "@/components/PhotoMap";
import DynamicTitle from "@/components/DynamicTitle";
import ArtGrid from "@/components/ArtGrid";
import BookGrid from "@/components/BookGrid";
import type { Book } from "@/components/BookGrid";

const PLAYLISTS = [
  { title: "Instrumental", id: "5UM4ZrEJs2PkyM0zkw3NdZ" },
  { title: "That's Life", id: "44fBGGYaLRrQrIgAeXBuor" },
  { title: "Happy Morning", id: "5Qs79BpWkT3zEhnpXBzIGj" },
];

const ARTWORKS = [
  {
    src: "/Bamiyan Buddha .png",
    artist: "Unknown",
    title: "Bamiyan Buddhas",
    year: "6th century",
  },
  {
    src: "/Rosso Fiorentino Nude Study.png",
    artist: "Rosso Fiorentino",
    title: "Nude Study",
    year: "c. 1520s",
  },
  {
    src: "/Caravaggio-Michelangelo_Merisi_da-The_Calling_of_Saint_Matthew.webp",
    artist: "Caravaggio",
    title: "The Calling of Saint Matthew",
    year: "1599–1600",
  },
  {
    src: "/Luca Signorelli.png",
    artist: "Luca Signorelli",
    title: "Capella Nova Fresco Cycle, Orvieto",
    year: "1499–1502",
  },
  {
    src: "/adoration-of-the-mystic-lamb-ghent-altarpiece.jpg",
    artist: "Jan van Eyck",
    title: "Adoration of the Mystic Lamb",
    year: "c. 1432",
  },
  {
    src: "/Artemisia_Gentileschi_-_Giuditta_decapita_Oloferne_-_Google_Art_Project-Adjust.jpg",
    artist: "Artemisia Gentileschi",
    title: "Judith Slaying Holofernes",
    year: "c. 1620",
  },
  {
    src: "/Jan Van Eyck.jpg",
    artist: "Jan van Eyck",
    title: "The Arnolfini Portrait",
    year: "1434",
  },
];

const BOOKS: Book[] = [
  {
    title: "The Twin",
    author: "Gerbrand Bakker",
    tag: "Fiction",
    isbn: "9781933372389",
    cover: "/The twin.jpg",
    link: "https://www.goodreads.com/book/show/3241879-the-twin",
    summary: "A quiet, almost airless Dutch novel. A man returns to his father's farm after his twin brother dies young and lives out a deliberately small life. Bakker writes absence better than almost anyone — what remains when you've given up.",
  },
  {
    title: "The Remains of the Day",
    author: "Kazuo Ishiguro",
    tag: "Fiction",
    isbn: "9780679731726",
    cover: "/kazuo.jpg",
    link: "https://www.goodreads.com/book/show/28921.The_Remains_of_the_Day",
    summary: "Stevens, an aging English butler, drives through the countryside telling himself his life of service was worth it. Every sentence is a small act of repression. Ishiguro makes you ache for a man who can't.",
  },
  {
    title: "A Month in the Country",
    author: "J.L. Carr",
    tag: "Fiction",
    isbn: "9781590173534",
    cover: "/JL CARR.jpg",
    link: "https://www.goodreads.com/book/show/376247.A_Month_in_the_Country",
    summary: "A WWI survivor spends a summer in a Yorkshire village uncovering a medieval mural. Luminous and brief — the kind of book that makes you want to be somewhere very still and very present.",
  },
  {
    title: "Frankenstein",
    author: "Mary Shelley",
    tag: "Fiction",
    isbn: "9780141439471",
    cover: "/frankenstein.webp",
    link: "https://www.goodreads.com/book/show/35031085-frankenstein",
    summary: "Less a monster story than a meditation on creation, rejection, and what we owe the things we make. Shelley wrote it at nineteen. The creature is far more sympathetic than his maker.",
  },
  {
    title: "Six Records of a Floating Life",
    author: "Shen Fu",
    tag: "Memoir",
    isbn: "9780140443623",
    cover: "/shen fu.jpg",
    link: "https://www.goodreads.com/book/show/303484.Six_Records_of_a_Floating_Life",
    summary: "A 19th-century Chinese memoir of a modest, tender marriage. Shen Fu describes small domestic pleasures with such precision and care that the losses hit harder for it.",
  },
  {
    title: "All the Beauty in the World",
    author: "Patrick Bringley",
    tag: "Memoir",
    isbn: "9781982197056",
    cover: "/all the beauty in the world.jpg",
    link: "https://www.goodreads.com/book/show/62039892-all-the-beauty-in-the-world",
    summary: "Patrick Bringley takes a job as a Met guard after his brother dies and spends eight years thinking about art and grief. Quietly one of the best books I've read about what museums are actually for.",
  },
  {
    title: "How to Murder Your Life",
    author: "Cat Marnell",
    tag: "Memoir",
    isbn: "9781476739533",
    cover: "/cat marnell.jpg",
    link: "https://www.goodreads.com/book/show/25429193-how-to-murder-your-life",
    summary: "Cat Marnell's memoir about addiction and New York's beauty world is chaotic, compulsive, and oddly honest. Not a redemption story. Better for it.",
  },
  {
    title: "Dancing on My Grave",
    author: "Gelsey Kirkland",
    tag: "Memoir",
    isbn: "9780385042635",
    cover: "/dancing on my grave.jpg",
    link: "https://www.goodreads.com/book/show/362600.Dancing_on_My_Grave",
    summary: "Gelsey Kirkland writes about training under Balanchine and Baryshnikov with unflinching clarity. Ballet at its most brutal — physically and psychologically. Hard to put down.",
  },
];

function SectionHead({
  title,
  subtitle,
  index,
}: {
  title: string;
  subtitle: string;
  index: string;
}) {
  return (
    <div className="mb-10">
      <div className="flex items-end justify-between">
        <DynamicTitle>{title}</DynamicTitle>
        <span className="text-[9px] uppercase tracking-[0.3em] text-fg font-medium pb-3">{index}</span>
      </div>
      <p className="mt-3 text-[10px] uppercase tracking-[0.12em] text-fg font-normal">{subtitle}</p>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <Hero />

      {/* About */}
      <section id="about" className="px-5 md:px-10 pt-14 pb-14 scroll-mt-20 border-t border-fg/[0.04]">
        {/* Title sits above the two-column content */}
        <DynamicTitle>About</DynamicTitle>

        <div className="grid grid-cols-1 md:grid-cols-[2.5fr_3fr] gap-8 md:gap-12 items-stretch mt-6">

          {/* Col 1: text */}
          <div className="text-sm text-fg leading-normal font-normal text-justify space-y-4">
            <p>
              I&apos;m Rachel — a product manager living in Brooklyn. I build things people actually get to see, touch, and use every day, and I think that&apos;s one of the most human things you can do with a career.
            </p>
            <p>
              I studied economics and spent years training in classical ballet and competitive dance — which sounds like a strange combination until you realize both are just different ways of understanding systems, people, and what makes something work. That&apos;s the lens I bring to product: analytically grounded, visually inclined, and genuinely interested in the human on the other end. I&apos;ve shipped marketplaces, explored AI-powered tools, and spent more hours in Figma than I&apos;d like to admit. The throughline is always the same — technology that actually serves people, not the other way around.
            </p>
            <p>
              Outside of work: art history rabbit holes, and a corner of the internet that&apos;s mine (10k of you, apparently).
            </p>
          </div>

          {/* Col 2: image + contact */}
          <div className="flex flex-col">
            <div className="relative overflow-hidden min-h-[320px] md:flex-1 md:min-h-0">
              <Image
                src="/profile3.png"
                alt="Rachel McCarthy"
                fill
                className="object-contain object-left-bottom"
              />
              <Image
                src="/name-seal.png"
                alt="Name seal"
                width={100}
                height={100}
                className="absolute bottom-0 right-3 opacity-90"
              />
            </div>
            <div className="divide-y divide-fg/[0.04] text-[12px] mt-3">
              <a href="https://www.linkedin.com/in/rachelmccarthyy/" target="_blank" rel="noopener noreferrer"
                className="py-2 flex justify-start gap-3 items-baseline hover:text-[#FFE033] hover:scale-[1.03] transition-all duration-200">
                <span className="uppercase tracking-[0.08em] font-medium">LinkedIn</span>
                <span className="font-medium">↗</span>
              </a>
              <a href="https://github.com/rachelmccarthyy" target="_blank" rel="noopener noreferrer"
                className="py-2 flex justify-start gap-3 items-baseline hover:text-[#FFE033] hover:scale-[1.03] transition-all duration-200">
                <span className="uppercase tracking-[0.08em] font-medium">GitHub</span>
                <span className="font-medium">↗</span>
              </a>
              <a href="mailto:rachelmccarthyyy@gmail.com"
                className="py-2 flex justify-start gap-3 items-baseline hover:text-[#FFE033] hover:scale-[1.03] transition-all duration-200">
                <span className="uppercase tracking-[0.08em] font-medium">Email</span>
                <span className="font-medium">↗</span>
              </a>
              <a href="/Rachel_McCarthy_Resume.pdf" target="_blank" rel="noopener noreferrer"
                className="py-2 flex justify-start gap-3 items-baseline hover:text-[#FFE033] hover:scale-[1.03] transition-all duration-200">
                <span className="uppercase tracking-[0.08em] font-medium">Résumé</span>
                <span className="font-medium">↗</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Work */}
      <section id="work" className="px-5 md:px-10 pt-14 pb-14 scroll-mt-20 border-t border-fg/[0.04] bg-black text-white" style={{ "--fg": "#ffffff", "--color-fg": "#ffffff" } as React.CSSProperties}>
        <SectionHead title="Work" subtitle="Projects, side experiments, and things I've shipped" index="02 — 06" />

        {/* Project: Diary */}
        <div className="grid grid-cols-1 md:grid-cols-[180px_1fr_1fr] gap-6 md:gap-12 pt-6 border-t border-fg/[0.04]">

          {/* Left: name + metadata */}
          <div>
            <a href="https://wondrous-custard-bb7156.netlify.app/" target="_blank" rel="noopener noreferrer"
              className="text-sm font-semibold text-fg underline hover:text-[#FFE033] hover:scale-110 transition-all duration-200 origin-right inline-block">
              Diary ↗
            </a>
            <div className="mt-3 divide-y divide-fg/[0.07] text-[10px]">
              <div className="py-2 flex justify-between">
                <span className="uppercase tracking-[0.08em] font-normal">Year</span>
                <span className="font-medium">2026</span>
              </div>
              <a href="https://wondrous-custard-bb7156.netlify.app/" target="_blank" rel="noopener noreferrer"
                className="py-2 flex justify-between items-baseline hover:text-[#FFE033] hover:scale-110 transition-all duration-200 origin-right">
                <span className="uppercase tracking-[0.08em] font-normal">Live</span>
                <span className="font-medium">↗</span>
              </a>
              <div className="py-2 flex justify-between">
                <span className="uppercase tracking-[0.08em] font-normal">Type</span>
                <span className="font-medium">Side project</span>
              </div>
              <div className="py-2 flex justify-between">
                <span className="uppercase tracking-[0.08em] font-normal">Stack</span>
                <span className="font-medium">Next.js · TS</span>
              </div>
            </div>
          </div>

          {/* Middle: what it is */}
          <div className="text-sm text-fg leading-normal font-normal text-justify">
            <p>
              A privacy-first personal diary app that runs entirely in the browser — no accounts, no backend, no data leaving your device. Built to explore what a genuinely private journaling experience looks like when you design around the constraint of zero infrastructure. Features mood tracking, rich markdown editing, Spotify embeds, image uploads with automatic compression, and tag-based filtering, all persisted locally.
            </p>
          </div>

          {/* Right: product thinking */}
          <div className="text-sm text-fg leading-normal font-normal text-justify">
            <p>
              The decision to go offline-first wasn&apos;t a technical shortcut — it was the product stance. Your most personal writing shouldn&apos;t require trusting a third party. Every feature was scoped through that lens: what does this need to be useful, and what does it need to leave out to stay honest about what it is.
            </p>
          </div>

        </div>
      </section>

      {/* Photos */}
      <section id="photos" className="pt-14 pb-14 scroll-mt-20 border-t border-fg/[0.04]">
        <div className="px-5 md:px-10 mb-6">
          <SectionHead title="Photos" subtitle="Shot on film" index="03 — 06" />
        </div>
        <div className="pl-5 md:pl-10">
          <PhotoMap />
        </div>
      </section>

      {/* Books */}
      <section id="books" className="px-5 md:px-10 pt-14 pb-14 scroll-mt-20 border-t border-fg/[0.04] bg-black text-white" style={{ "--fg": "#ffffff", "--color-fg": "#ffffff" } as React.CSSProperties}>
        <SectionHead title="Books" subtitle="Things I've read and loved" index="04 — 06" />
        <BookGrid books={BOOKS} />
      </section>

      {/* Art */}
      <section id="art" className="px-5 md:px-10 pt-14 pb-14 scroll-mt-20 border-t border-fg/[0.04]">
        <SectionHead title="Art" subtitle="Works that have stayed with me" index="05 — 06" />
        <ArtGrid artworks={ARTWORKS} />
      </section>

      {/* Music */}
      <section id="playlists" className="px-5 md:px-10 pt-14 pb-14 scroll-mt-20 border-t border-fg/[0.04] bg-black text-white" style={{ "--fg": "#ffffff", "--color-fg": "#ffffff" } as React.CSSProperties}>
        <SectionHead title="Music" subtitle="What I'm listening to" index="06 — 06" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PLAYLISTS.map((playlist) => (
            <div key={playlist.id}>
              <iframe
                src={`https://open.spotify.com/embed/playlist/${playlist.id}?utm_source=generator`}
                width="100%"
                height="200"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                style={{ borderRadius: "0", border: "none" }}
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

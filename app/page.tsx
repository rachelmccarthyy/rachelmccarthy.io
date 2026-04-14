import Hero from "@/components/Hero";
import Image from "next/image";
import PhotoMap from "@/components/PhotoMap";
import DynamicTitle from "@/components/DynamicTitle";
import ArtGrid from "@/components/ArtGrid";
import BookGrid from "@/components/BookGrid";
import type { Book } from "@/components/BookGrid";
import ThinkingGrid from "@/components/ThinkingGrid";
import { thoughts as THOUGHTS } from "@/lib/thoughts";
import TrackedLink from "@/components/TrackedLink";

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
    title: "The Lean Startup",
    author: "Eric Ries",
    tag: "Business",
    isbn: "9780307887894",
    cover: "/lean startup.jpg",
    link: "https://www.goodreads.com/book/show/10127019-the-lean-startup",
    summary: "Ries makes the case for building only what you need to learn, then iterating. It's less about startups than about the discipline of not falling in love with your solution before you've understood the problem.",
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
    title: "Competing Against Luck",
    author: "Clayton Christensen",
    tag: "Business",
    isbn: "9780062435613",
    cover: "/Competing Against Luck.jpg",
    link: "https://www.goodreads.com/book/show/28820024-competing-against-luck",
    summary: "Christensen makes the case that people don't buy products — they hire them to make progress in their lives. It's the clearest framework I've found for building things that actually serve the person on the other end, not just the roadmap.",
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
  titleColor,
}: {
  title: string;
  subtitle: string;
  index: string;
  titleColor?: string;
}) {
  return (
    <div className="mb-10">
      <div className="flex items-end justify-between gap-4">
        <DynamicTitle color={titleColor}>{title}</DynamicTitle>
        <span className="text-[8px] md:text-[9px] uppercase tracking-[0.2em] md:tracking-[0.3em] text-fg font-medium pb-2 md:pb-3 whitespace-nowrap">{index}</span>
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
        <div className="max-w-[1400px] mx-auto">
        {/* Title sits above the two-column content */}
        <DynamicTitle>About</DynamicTitle>

        <div className="grid grid-cols-1 md:grid-cols-[2.5fr_3fr] gap-8 md:gap-12 items-stretch mt-6">

          {/* Col 1: text */}
          <div className="text-sm text-fg leading-normal font-normal text-justify space-y-4">
            <p>
              <span className="font-semibold">I&apos;m Rachel — a product manager living in Brooklyn.</span> I build things people actually get to see, touch, and use every day, and I think that&apos;s one of the most human things you can do with a career.
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
              <TrackedLink event="contact_click" properties={{ type: "linkedin" }} href="https://www.linkedin.com/in/rachelmccarthyy/" target="_blank" rel="noopener noreferrer"
                className="py-2 flex justify-start gap-3 items-baseline hover:text-[#FFE033] hover:scale-[1.03] transition-all duration-200">
                <span className="uppercase tracking-[0.08em] font-medium underline decoration-fg/20 hover:decoration-[#FFE033]/40 underline-offset-2">LinkedIn</span>
                <span className="font-medium">↗</span>
              </TrackedLink>
              <TrackedLink event="contact_click" properties={{ type: "github" }} href="https://github.com/rachelmccarthyy" target="_blank" rel="noopener noreferrer"
                className="py-2 flex justify-start gap-3 items-baseline hover:text-[#FFE033] hover:scale-[1.03] transition-all duration-200">
                <span className="uppercase tracking-[0.08em] font-medium underline decoration-fg/20 hover:decoration-[#FFE033]/40 underline-offset-2">GitHub</span>
                <span className="font-medium">↗</span>
              </TrackedLink>
              <TrackedLink event="contact_click" properties={{ type: "email" }} href="mailto:rachelmccarthyyy@gmail.com"
                className="py-2 flex justify-start gap-3 items-baseline hover:text-[#FFE033] hover:scale-[1.03] transition-all duration-200">
                <span className="uppercase tracking-[0.08em] font-medium underline decoration-fg/20 hover:decoration-[#FFE033]/40 underline-offset-2">Email</span>
                <span className="font-medium">↗</span>
              </TrackedLink>
              <TrackedLink event="contact_click" properties={{ type: "resume" }} href="/Rachel_McCarthy_Resume.pdf" target="_blank" rel="noopener noreferrer"
                className="py-2 flex justify-start gap-3 items-baseline hover:text-[#FFE033] hover:scale-[1.03] transition-all duration-200">
                <span className="uppercase tracking-[0.08em] font-medium underline decoration-fg/20 hover:decoration-[#FFE033]/40 underline-offset-2">Résumé</span>
                <span className="font-medium">↗</span>
              </TrackedLink>
            </div>
          </div>

        </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-5 md:px-10 pt-14 pb-8 scroll-mt-20 border-t border-fg/[0.04] bg-black text-white" style={{ "--fg": "#ffffff", "--color-fg": "#ffffff" } as React.CSSProperties}>
        <div className="max-w-[1400px] mx-auto">
        <SectionHead title="Projects" subtitle="Projects, side experiments, and things I've shipped" index="02 — 07" titleColor="#FFE033" />

        {/* Project: Fynds */}
        <div className="grid grid-cols-1 md:grid-cols-[2rem_2.5fr_5fr] gap-6 md:gap-12 pt-6 border-t border-fg/[0.04]">

          {/* Number */}
          <span className="hidden md:block text-[10px] tabular-nums font-normal text-fg pt-0.5">01</span>

          {/* Left: name + metadata */}
          <div>
            <TrackedLink event="project_click" properties={{ project: "fynds" }} href="https://fynds-app-eta.vercel.app" target="_blank" rel="noopener noreferrer"
              className="text-sm font-semibold text-fg underline hover:text-[#FFE033] hover:scale-110 transition-all duration-200 origin-right inline-block">
              Fynds ↗
            </TrackedLink>
            <div className="mt-12 divide-y divide-fg/[0.07] text-[10px]">
              <div className="py-2.5 flex justify-between">
                <span className="uppercase tracking-[0.08em] font-normal">Year</span>
                <span className="font-medium">2026</span>
              </div>
              <a href="https://fynds-app-eta.vercel.app" target="_blank" rel="noopener noreferrer"
                className="py-2.5 flex justify-between items-baseline hover:text-[#FFE033] hover:scale-110 transition-all duration-200 origin-right">
                <span className="uppercase tracking-[0.08em] font-normal">Live</span>
                <span className="font-medium">↗</span>
              </a>
              <div className="py-2.5 flex justify-between">
                <span className="uppercase tracking-[0.08em] font-normal">Type</span>
                <span className="font-medium">Side project</span>
              </div>
              <div className="py-2.5 flex justify-between">
                <span className="uppercase tracking-[0.08em] font-normal">Stack</span>
                <span className="font-medium">Next.js · TS · Claude API</span>
              </div>
            </div>
          </div>

          {/* Right: description */}
          <div className="text-sm text-fg leading-normal font-normal text-justify space-y-4">
            <p>
              An AI-powered personal shopping stylist. Describe what you&apos;re looking for in plain English — a specific item or an outfit for an occasion — and Fynds returns real, shoppable product recommendations from across the web. It starts with a style profile quiz that captures your aesthetic, budget, and sizing, then uses Claude to translate natural-language requests into targeted product searches.
            </p>
            <p>
              The interesting product problem was bridging intent and inventory. People don&apos;t think in search keywords — they think in contexts: &ldquo;something for a rooftop dinner in July&rdquo; or &ldquo;comfortable but not frumpy.&rdquo; Fynds treats the AI layer as a translation service between how people actually describe what they want and what&apos;s actually available to buy.
            </p>
          </div>

        </div>

        <div className="my-12" />

        {/* Project: Diary */}
        <div className="grid grid-cols-1 md:grid-cols-[2rem_2.5fr_5fr] gap-6 md:gap-12 pt-6 border-t border-fg/[0.04]">

          {/* Number */}
          <span className="hidden md:block text-[10px] tabular-nums font-normal text-fg pt-0.5">02</span>

          {/* Left: name + metadata */}
          <div>
            <TrackedLink event="project_click" properties={{ project: "diary" }} href="https://diary-app-azure.vercel.app/" target="_blank" rel="noopener noreferrer"
              className="text-sm font-semibold text-fg underline hover:text-[#FFE033] hover:scale-110 transition-all duration-200 origin-right inline-block">
              Diary ↗
            </TrackedLink>
            <div className="mt-12 divide-y divide-fg/[0.07] text-[10px]">
              <div className="py-2.5 flex justify-between">
                <span className="uppercase tracking-[0.08em] font-normal">Year</span>
                <span className="font-medium">2026</span>
              </div>
              <a href="https://diary-app-azure.vercel.app/" target="_blank" rel="noopener noreferrer"
                className="py-2.5 flex justify-between items-baseline hover:text-[#FFE033] hover:scale-110 transition-all duration-200 origin-right">
                <span className="uppercase tracking-[0.08em] font-normal">Live</span>
                <span className="font-medium">↗</span>
              </a>
              <div className="py-2.5 flex justify-between">
                <span className="uppercase tracking-[0.08em] font-normal">Type</span>
                <span className="font-medium">Side project</span>
              </div>
              <div className="py-2.5 flex justify-between">
                <span className="uppercase tracking-[0.08em] font-normal">Stack</span>
                <span className="font-medium">Next.js · Supabase · TS</span>
              </div>
            </div>
          </div>

          {/* Right: description */}
          <div className="text-sm text-fg leading-normal font-normal text-justify space-y-4">
            <p>
              A personal diary app designed around the question: what would journaling look like if it actually knew you? Built with Next.js 16 and Supabase, it layers mood tracking, rich markdown entries, Spotify embeds, and image uploads with a set of features that turn a journal into something more contextual — a birth chart engine using real astronomical calculations, moon-phase-aware writing prompts, time capsule letters you seal until a future date, and a media tracker that links the books, shows, and music you&apos;re consuming to the entries you write about them.
            </p>
            <p>
              The astrology system isn&apos;t decorative — it computes accurate natal charts from birth time and location, tracks Mercury retrograde periods, and generates journaling prompts that shift with the lunar cycle. The time capsule mechanic lets you write letters to your future self that stay sealed until their reveal date. The goal was to build a journaling tool that rewards sustained use: the longer you write, the richer the connections it surfaces.
            </p>
          </div>

        </div>
        </div>
      </section>

      {/* Thinking */}
      <section id="thinking" className="px-5 md:px-10 pt-8 pb-14 scroll-mt-20 border-t border-fg/[0.04] bg-black text-white" style={{ "--fg": "#ffffff", "--color-fg": "#ffffff" } as React.CSSProperties}>
        <div className="max-w-[1400px] mx-auto">
        <SectionHead title="Thinking" subtitle="I'm thinking thoughts" index="03 — 07" titleColor="#FFE033" />
        <ThinkingGrid thoughts={THOUGHTS} />
        </div>
      </section>

      {/* Photos */}
      <section id="photos" className="pt-14 pb-14 scroll-mt-20 border-t border-fg/[0.04]">
        <div className="max-w-[1400px] mx-auto">
        <div className="px-5 md:px-10 mb-6">
          <SectionHead title="Photos" subtitle="Shot on film" index="04 — 07" />
        </div>
        <div className="pl-5 md:pl-10">
          <PhotoMap />
        </div>
        </div>
      </section>

      {/* Books */}
      <section id="books" className="px-5 md:px-10 pt-14 pb-14 scroll-mt-20 border-t border-fg/[0.04] bg-black text-white" style={{ "--fg": "#ffffff", "--color-fg": "#ffffff" } as React.CSSProperties}>
        <div className="max-w-[1400px] mx-auto">
        <SectionHead title="Books" subtitle="Things I've read and loved" index="05 — 07" titleColor="#FFE033" />
        <BookGrid books={BOOKS} />
        </div>
      </section>

      {/* Art */}
      <section id="art" className="px-5 md:px-10 pt-14 pb-14 scroll-mt-20 border-t border-fg/[0.04]">
        <div className="max-w-[1400px] mx-auto">
        <SectionHead title="Art" subtitle="Works that have stayed with me" index="06 — 07" />
        <ArtGrid artworks={ARTWORKS} />
        </div>
      </section>

      {/* Music */}
      <section id="playlists" className="px-5 md:px-10 pt-14 pb-14 scroll-mt-20 border-t border-fg/[0.04] bg-black text-white" style={{ "--fg": "#ffffff", "--color-fg": "#ffffff" } as React.CSSProperties}>
        <div className="max-w-[1400px] mx-auto">
        <SectionHead title="Music" subtitle="What I'm listening to" index="07 — 07" titleColor="#FFE033" />
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
        </div>
      </section>
    </main>
  );
}

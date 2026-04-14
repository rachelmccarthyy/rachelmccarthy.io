export default function Hero() {
  return (
    <section className="gradient-hero flex min-h-screen flex-col items-center justify-center px-8 text-center">
      <p className="mb-3 text-xs uppercase tracking-[0.2em] text-white/70 font-normal">
        Hi, I&apos;m
      </p>
      <h1 className="text-6xl font-medium tracking-tight text-white sm:text-7xl drop-shadow-sm">
        Rachel McCarthy
      </h1>
      <p className="mt-5 max-w-lg text-xl text-white/80 leading-relaxed font-light">
        I build products with people at the center.
      </p>
      <div className="mt-10 flex gap-4">
        <a
          href="/work"
          className="rounded-full bg-white px-7 py-3 text-sm font-medium text-primary hover:bg-white/90 transition-colors shadow-sm"
        >
          View my work
        </a>
        <a
          href="/about"
          className="rounded-full border border-white/50 px-7 py-3 text-sm font-medium text-white hover:bg-white/10 transition-colors"
        >
          About me
        </a>
      </div>
    </section>
  );
}

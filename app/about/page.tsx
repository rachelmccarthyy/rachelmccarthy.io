import PageShell from "@/components/PageShell";

export default function AboutPage() {
  return (
    <PageShell title="About" subtitle="A little about me.">
      <div className="space-y-5 text-base text-fg/70 leading-relaxed font-light">
        <p>
          Hi, I&apos;m Rachel — a product manager who loves building things
          people actually want to use.
        </p>
        <p>
          {/* Add more about yourself */}
        </p>
      </div>
    </PageShell>
  );
}

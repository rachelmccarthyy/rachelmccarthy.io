import Link from "next/link";
import { notFound } from "next/navigation";
import PageShell from "@/components/PageShell";
import { getThought, thoughts } from "@/lib/thoughts";

export function generateStaticParams() {
  return thoughts.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const thought = getThought(slug);
  if (!thought) return {};
  return { title: thought.title };
}

export default async function ThoughtPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const thought = getThought(slug);
  if (!thought) notFound();

  return (
    <PageShell title="Thinking" subtitle="I'm thinking thoughts.">
      <div className="mb-8">
        <Link
          href="/thinking"
          className="text-[10px] uppercase tracking-[0.2em] font-medium text-fg/60 hover:text-[#FFE033]"
        >
          ← Back to Thinking
        </Link>
      </div>
      <div className="py-8 first:pt-0">
        <div className="flex items-baseline gap-3 text-[10px] uppercase tracking-[0.08em] text-fg/50 font-normal mb-2">
          <span>{thought.tag}</span>
          <span>·</span>
          <span>{thought.date}</span>
        </div>
        <h2 className="text-lg font-semibold text-fg mb-3">{thought.title}</h2>
        <p className="text-sm text-fg/70 leading-relaxed font-normal">{thought.body}</p>
        {thought.sources && thought.sources.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
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
    </PageShell>
  );
}

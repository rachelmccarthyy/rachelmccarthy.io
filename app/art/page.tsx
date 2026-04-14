import PageShell from "@/components/PageShell";

const artworks: { title: string; artist: string; year?: string; note?: string }[] = [
  // { title: "Work Title", artist: "Artist Name", year: "1889", note: "Why this one stays with you." },
];

export default function ArtPage() {
  return (
    <PageShell title="Art" subtitle="Works that have stayed with me.">
      {artworks.length === 0 ? (
        <p className="text-muted font-light italic text-sm">Coming soon.</p>
      ) : (
        <ul className="space-y-6">
          {artworks.map((work) => (
            <li key={work.title} className="border-b border-border pb-6">
              <p className="font-medium text-fg">{work.title}</p>
              <p className="text-xs uppercase tracking-widest text-muted mt-1">
                {work.artist}{work.year ? ` · ${work.year}` : ""}
              </p>
              {work.note && (
                <p className="mt-2 text-sm text-fg/50 font-light">{work.note}</p>
              )}
            </li>
          ))}
        </ul>
      )}
    </PageShell>
  );
}

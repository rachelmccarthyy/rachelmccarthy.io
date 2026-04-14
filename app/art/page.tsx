import PageShell from "@/components/PageShell";

const artworks: { title: string; artist: string; year?: string; note?: string }[] = [
  // { title: "Work Title", artist: "Artist Name", year: "1889", note: "Why this one stays with you." },
];

export default function ArtPage() {
  return (
    <PageShell title="Art" subtitle="Works that have stayed with me.">
      {artworks.length === 0 ? (
        <p className="text-gray-300 font-light italic">Coming soon.</p>
      ) : (
        <ul className="space-y-6">
          {artworks.map((work) => (
            <li key={work.title} className="border-b border-gray-100 pb-6">
              <p className="font-medium text-[#1a1a1a]">{work.title}</p>
              <p className="text-sm text-gray-400 font-light mt-0.5">
                {work.artist}{work.year ? `, ${work.year}` : ""}
              </p>
              {work.note && (
                <p className="mt-2 text-sm text-gray-500 font-light">{work.note}</p>
              )}
            </li>
          ))}
        </ul>
      )}
    </PageShell>
  );
}

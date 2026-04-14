import PageShell from "@/components/PageShell";

export default function PhotosPage() {
  return (
    <PageShell title="Photos" subtitle="Shot on film.">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={i}
            className="aspect-square rounded-sm bg-surface"
          />
        ))}
      </div>
    </PageShell>
  );
}

import PageShell from "@/components/PageShell";

export default function PhotosPage() {
  return (
    <PageShell title="Photos" subtitle="Shot on film.">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {/* Replace these placeholders with your images */}
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={i}
            className="aspect-square rounded-2xl bg-gradient-to-br from-sage/30 to-mauve/30"
          />
        ))}
      </div>
    </PageShell>
  );
}

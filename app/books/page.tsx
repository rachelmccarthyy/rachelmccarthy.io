import PageShell from "@/components/PageShell";

const books: { title: string; author: string; note?: string }[] = [
  // { title: "Example Book", author: "Author Name", note: "Why you loved it." },
];

export default function BooksPage() {
  return (
    <PageShell title="Books" subtitle="Things I've read and loved.">
      {books.length === 0 ? (
        <p className="text-muted font-light italic text-sm">Coming soon.</p>
      ) : (
        <ul className="space-y-6">
          {books.map((book) => (
            <li key={book.title} className="border-b border-border pb-6">
              <p className="font-medium text-fg">{book.title}</p>
              <p className="text-xs uppercase tracking-widest text-muted mt-1">{book.author}</p>
              {book.note && (
                <p className="mt-2 text-sm text-fg/50 font-light">{book.note}</p>
              )}
            </li>
          ))}
        </ul>
      )}
    </PageShell>
  );
}

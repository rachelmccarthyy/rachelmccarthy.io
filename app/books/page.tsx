import PageShell from "@/components/PageShell";

const books: { title: string; author: string; note?: string }[] = [
  // { title: "Example Book", author: "Author Name", note: "Why you loved it." },
];

export default function BooksPage() {
  return (
    <PageShell title="Books" subtitle="Things I've read and loved.">
      {books.length === 0 ? (
        <p className="text-gray-300 font-light italic">Coming soon.</p>
      ) : (
        <ul className="space-y-6">
          {books.map((book) => (
            <li key={book.title} className="border-b border-gray-100 pb-6">
              <p className="font-medium text-[#1a1a1a]">{book.title}</p>
              <p className="text-sm text-gray-400 font-light mt-0.5">{book.author}</p>
              {book.note && (
                <p className="mt-2 text-sm text-gray-500 font-light">{book.note}</p>
              )}
            </li>
          ))}
        </ul>
      )}
    </PageShell>
  );
}

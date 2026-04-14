export default function PageShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <main className="mx-auto max-w-3xl px-8 pt-32 pb-24">
      <div className="mb-10">
        <h1 className="text-4xl font-medium text-[#1a1a1a]">{title}</h1>
        {subtitle && <p className="mt-2 text-gray-400 text-base font-light">{subtitle}</p>}
        <div className="mt-4 h-1 w-12 rounded-full bg-primary" />
      </div>
      {children}
    </main>
  );
}

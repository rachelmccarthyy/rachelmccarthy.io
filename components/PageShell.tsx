export default function PageShell({
  title,
  subtitle,
  id,
  children,
}: {
  title: string;
  subtitle?: string;
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <main id={id} className="px-10 pt-52 pb-28 scroll-mt-20">
      <div className="mb-14">
        <h1
          className="font-[family-name:var(--font-bebas)] leading-none tracking-wide"
          style={{ fontSize: "clamp(52px, 6vw, 80px)", color: "#FFE033" }}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 text-[12px] uppercase tracking-[0.25em] text-fg/50 font-medium">{subtitle}</p>
        )}
        <div className="mt-8 h-px w-full bg-border" />
      </div>
      {children}
    </main>
  );
}

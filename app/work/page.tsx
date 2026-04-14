import PageShell from "@/components/PageShell";

const projects: { title: string; description: string; tags: string[]; href: string }[] = [
  // { title: "Project Name", description: "What it does.", tags: ["Tag"], href: "https://github.com/..." },
];

export default function WorkPage() {
  return (
    <PageShell title="Work" subtitle="Projects, side experiments, and things I've shipped.">
      {projects.length === 0 ? (
        <p className="text-muted font-light italic text-sm mb-16">Coming soon.</p>
      ) : (
        <ul className="divide-y divide-border mb-16">
          {projects.map((project) => (
            <li key={project.title}>
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start justify-between py-6 hover:text-primary transition-colors duration-300"
              >
                <div>
                  <h3 className="font-medium text-fg group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted font-light leading-relaxed max-w-md">
                    {project.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[10px] uppercase tracking-widest text-muted/60">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="text-muted group-hover:text-primary transition-colors mt-0.5 ml-8">↗</span>
              </a>
            </li>
          ))}
        </ul>
      )}

      <div className="flex gap-6 text-xs uppercase tracking-[0.18em] text-muted">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition-colors duration-300"
        >
          GitHub ↗
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition-colors duration-300"
        >
          LinkedIn ↗
        </a>
      </div>
    </PageShell>
  );
}

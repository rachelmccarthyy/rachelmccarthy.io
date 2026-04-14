import PageShell from "@/components/PageShell";

const projects: { title: string; description: string; tags: string[]; href: string }[] = [
  // { title: "Project Name", description: "What it does.", tags: ["Tag"], href: "https://github.com/..." },
];

export default function WorkPage() {
  return (
    <PageShell title="Work" subtitle="Projects, side experiments, and things I've shipped.">
      {projects.length === 0 ? (
        <p className="text-gray-300 font-light italic mb-12">Coming soon.</p>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 mb-12">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-gray-100 p-6 hover:border-primary/30 hover:shadow-md transition-all duration-200"
            >
              <h3 className="font-medium text-[#1a1a1a] group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed font-light">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      )}

      <div className="flex gap-3">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-[#1a1a1a] px-6 py-3 text-sm font-medium text-white hover:bg-[#333] transition-colors"
        >
          GitHub ↗
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-gray-200 px-6 py-3 text-sm font-medium text-gray-600 hover:border-primary hover:text-primary transition-colors"
        >
          LinkedIn ↗
        </a>
      </div>
    </PageShell>
  );
}

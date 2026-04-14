const projects = [
  {
    title: "Project One",
    description: "A short description of what this project does and the problem it solves.",
    tags: ["Next.js", "TypeScript"],
    href: "#",
  },
  {
    title: "Project Two",
    description: "A short description of what this project does and the problem it solves.",
    tags: ["React", "Node.js"],
    href: "#",
  },
  {
    title: "Project Three",
    description: "A short description of what this project does and the problem it solves.",
    tags: ["Python", "PostgreSQL"],
    href: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-50 px-8 py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold text-gray-900">Projects</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

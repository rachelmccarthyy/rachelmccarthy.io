export default function About() {
  return (
    <section id="about" className="mx-auto max-w-3xl px-8 py-24">
      <h2 className="text-3xl font-bold text-gray-900">About</h2>
      <div className="mt-6 space-y-4 text-lg text-gray-600 leading-relaxed">
        <p>
          {/* Replace with your own bio */}
          I&apos;m a software engineer passionate about creating clean, accessible,
          and delightful user experiences. I love working across the full stack
          but have a soft spot for frontend and design systems.
        </p>
        <p>
          When I&apos;m not coding I&apos;m usually reading, hiking, or experimenting
          with new recipes.
        </p>
      </div>
      <div className="mt-8 flex flex-wrap gap-2">
        {["TypeScript", "React", "Next.js", "Node.js", "Tailwind CSS", "PostgreSQL"].map(
          (skill) => (
            <span
              key={skill}
              className="rounded-full bg-gray-100 px-4 py-1.5 text-sm font-medium text-gray-700"
            >
              {skill}
            </span>
          )
        )}
      </div>
    </section>
  );
}

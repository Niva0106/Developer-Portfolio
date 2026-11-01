const skillGroups = [
  {
    title: "Programming Languages",
    skills: ["Python", "JavaScript", "TypeScript"],
  },
  {
    title: "Frontend Development",
    skills: ["HTML", "CSS", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend Development",
    skills: ["Flask", "REST APIs", "SQLite"],
  },
  {
    title: "Tools & Technologies",
    skills: ["Git", "GitHub", "VS Code", "PySide6", "MediaPipe"],
  },
];

export default function Skills() {
  return (
    <main className="flex-1 px-6 pb-20 pt-32">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-[var(--primary)]">
          Technologies I work with
        </p>

        <h1 className="text-4xl font-bold sm:text-5xl">
          My Skills<span className="text-[var(--primary)]">.</span>
        </h1>

        <p className="mt-5 max-w-2xl leading-8 text-[var(--muted)]">
          Technologies and tools I've explored through coursework,
          personal projects and hands-on experimentation. I'm always
          learning and expanding my toolkit.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <section
              key={group.title}
              className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6"
            >
              <h2 className="text-lg font-semibold">{group.title}</h2>

              <div className="mt-5 flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-[var(--border)] px-4 py-2 text-sm text-[var(--muted)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="mt-14 border-t border-[var(--border)] pt-10">
        <h2 className="text-2xl font-semibold">μLearn</h2>

        <p className="mt-3 leading-7 text-[var(--muted)]">
            Connect with me on μLearn and explore my learning journey,
            activities and contributions to the developer community.
        </p>

        <a
            href="https://app.mulearn.org/profile/nivedithan@mulearn"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 flex flex-col gap-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-colors hover:border-[var(--primary)] sm:flex-row sm:items-center sm:justify-between"
        >
            <div>
            <p className="text-lg font-semibold">Niveditha N</p>
            <p className="mt-1 text-sm text-[var(--muted)]">
                View my μLearn profile
            </p>
            </div>

            <span className="font-medium text-[var(--primary)]">
            Visit Profile ↗
            </span>
        </a>
        </section>
      </div>
    </main>
  );
}
import Link from "next/link";

type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
  liveLink?: string;
  githubLink?: string;
};

export default function ProjectCard({
  title,
  description,
  technologies,
  liveLink,
  githubLink,
}: ProjectCardProps) {
  return (
    <article className="flex flex-col rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
      <h2 className="text-xl font-semibold">{title}</h2>

      <p className="mt-3 flex-1 text-sm leading-7 text-[var(--muted)]">
        {description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--muted)]"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-6 flex gap-5 text-sm font-medium text-[var(--primary)]">
        {liveLink && (
          <Link href={liveLink} target="_blank" rel="noopener noreferrer">
            Live Demo ↗
          </Link>
        )}

        {githubLink && (
          <Link href={githubLink} target="_blank" rel="noopener noreferrer">
            GitHub ↗
          </Link>
        )}
      </div>
    </article>
  );
}
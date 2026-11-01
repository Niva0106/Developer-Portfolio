import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "Smart Gesture Assistance System",
    description:
      "A gesture-based assistance system that uses hand gesture recognition to help patients communicate their needs. Includes a nurse dashboard for viewing and responding to patient requests.",
    technologies: ["Python", "Flask", "MediaPipe", "Machine Learning", "SQLite"],
    liveLink: "https://smart-gesture-assistance-system.onrender.com",
    githubLink: "https://github.com/Niva0106/Smart-Gesture-Assistance-System",
  },
  {
    title: "NexEvent — Smart Event Planning Platform",
    description:
      "A full-stack event planning platform designed to manage event resources, registrations, vendors, tasks and expenses through a centralized dashboard.",
    technologies: ["React", "Python", "Flask", "SQLite"],
    liveLink: "https://nexevent-7kek.onrender.com",
    githubLink: "https://github.com/Niva0106/NexEvent-Smart-Event-Planning-Platform",
  },
  {
    title: "Smart Sorter",
    description:
      "A desktop application that helps organize files by automatically sorting them into categories based on their file types, with options to scan, select and move files.",
    technologies: ["Python", "PySide6"],
    githubLink: "https://github.com/Niva0106/smart-file-sorter",
  },
];

export default function Projects() {
  return (
    <main className="flex-1 px-6 pb-20 pt-32">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-[var(--primary)]">
          What I've been building
        </p>

        <h1 className="text-4xl font-bold sm:text-5xl">
          My Projects<span className="text-[var(--primary)]">.</span>
        </h1>

        <p className="mt-5 max-w-2xl leading-8 text-[var(--muted)]">
          A collection of projects I've worked on while exploring software
          development, learning new technologies and turning ideas into
          functional applications.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </main>
  );
}

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-1 items-center pt-24">
      <section className="mx-auto flex w-full max-w-7xl flex-col-reverse items-center justify-between gap-12 px-6 py-16 md:flex-row md:px-12 lg:px-20">

        {/* Introduction */}
        <div className="flex-1 text-center md:text-left">
          <p className="mb-3 text-lg text-[var(--muted)]">
            Hello, I'm
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Niveditha N<span className="text-[var(--primary)]">.</span>
          </h1>

          <h2 className="mt-4 text-xl font-medium text-[var(--primary)] sm:text-2xl">
            Computer Science Student
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-[var(--muted)] md:mx-0">
            I'm interested in software development, particularly
            building applications that bring together thoughtful
            design and functionality. Currently exploring frontend
            and full-stack development while working on projects
            that help me learn by building.
          </p>

          {/* Navigation buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
            <Link
              href="/projects"
              className="rounded-lg bg-[var(--primary)] px-6 py-3 font-medium text-white transition-transform hover:-translate-y-1"
            >
              View Projects
            </Link>

            <Link
              href="/contact"
              className="rounded-lg border border-[var(--primary)] px-6 py-3 font-medium text-[var(--primary)] transition-colors hover:bg-[var(--surface)]"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* Profile image */}
        <div className="flex shrink-0 justify-center">
          <div className="flex shrink-0 justify-center">
            <Image
              src="Niveditha.jpg"
              alt="Niveditha"
              width={280}
              height={280}
              priority
              className="h-56 w-56 rounded-full border-4 border-[var(--primary)] object-cover object-[center_20%] shadow-xl sm:h-72 sm:w-72"
            />
          </div>
        </div>

      </section>
    </main>
  );
}

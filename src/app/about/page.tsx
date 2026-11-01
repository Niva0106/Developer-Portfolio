
export default function About() {
  return (
    <main className="flex-1 px-6 pb-20 pt-32">
      <div className="mx-auto max-w-4xl">

        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-[var(--primary)]">
          Get to know me
        </p>

        <h1 className="text-4xl font-bold sm:text-5xl">
          About Me<span className="text-[var(--primary)]">.</span>
        </h1>

        <div className="mt-10 space-y-6 text-base leading-8 text-[var(--muted)]">
          <p>
            I'm Niveditha, a Computer Science and Engineering student
            interested in software development and building useful
            applications.
          </p>

          <p>
            I'm particularly interested in frontend and full-stack
            development. I enjoy working on the different parts of
            an application, from designing its interface to
            understanding the logic and functionality behind it.
          </p>

          <p>
            Most of my learning happens through hands-on projects.
            I've worked with technologies such as Python, JavaScript,
            React and Flask, and I'm continuing to strengthen my
            understanding of software development.
          </p>

          <p>
            I'm currently looking for opportunities where I can
            learn from experienced developers, contribute to
            meaningful work and grow through practical experience.
          </p>
        </div>

        <div className="mt-14 border-t border-[var(--border)] pt-8">
          <h2 className="text-2xl font-semibold">
            A little more about my journey
          </h2>

          <div className="mt-6 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
            <h3 className="font-semibold text-[var(--foreground)]">
              B.Tech — Computer Science and Engineering
            </h3>

            <p className="mt-2 text-sm text-[var(--muted)]">
              Jyothi Engineering College, Thrissur
            </p>

            <p className="mt-1 text-sm text-[var(--muted)]">
              2024 – Present
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}

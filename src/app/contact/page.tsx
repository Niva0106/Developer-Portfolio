import Link from "next/link";

const contactMethods = [
  {
    label: "Email",
    value: "nivedithan2006@gmail.com",
    href: "mailto:nivedithan2006@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/Niva0106",
    href: "https://github.com/Niva0106",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/niveditha-n-91a5b2324",
    href: "https://www.linkedin.com/in/niveditha-n-91a5b2324/",
  },
];

export default function Contact() {
  return (
    <main className="flex flex-1 items-center px-6 pb-20 pt-32">
      <div className="mx-auto w-full max-w-4xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-[var(--primary)]">
          Let's connect
        </p>

        <h1 className="text-4xl font-bold sm:text-5xl">
          Get in Touch<span className="text-[var(--primary)]">.</span>
        </h1>

        <p className="mt-5 max-w-2xl leading-8 text-[var(--muted)]">
          I'm open to internship opportunities, collaborations and
          conversations about software development. Feel free to reach
          out!
        </p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {contactMethods.map((method) => (
            <Link
              key={method.label}
              href={method.href}
              target={method.label === "Email" ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-all hover:-translate-y-1 hover:border-[var(--primary)]"
            >
              <p className="text-sm text-[var(--muted)]">
                {method.label}
              </p>

              <p className="mt-2 break-all font-medium text-[var(--primary)]">
                {method.value}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
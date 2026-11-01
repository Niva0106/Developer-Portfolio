
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-[var(--border)] px-6 py-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-sm text-[var(--muted)] sm:flex-row">
        <p>© 2026 Niveditha N. All rights reserved.</p>

        <div className="flex gap-5">
          <Link
            href="https://github.com/Niva0106"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[var(--primary)]"
          >
            GitHub
          </Link>

          <Link
            href="https://www.linkedin.com/in/niveditha-n-91a5b2324/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[var(--primary)]"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
}

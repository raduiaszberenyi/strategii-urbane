import Link from "next/link";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-8">
        <div className="flex h-24 items-center justify-between border-b border-zinc-200">
          <Logo />

          <nav className="hidden items-center gap-10 text-sm tracking-[0.12em] text-zinc-600 md:flex">
            <Link
              href="/despre"
              className="soft-link hover:text-black"
            >
              DESPRE
            </Link>

            <Link
              href="/servicii"
              className="soft-link hover:text-black"
            >
              SERVICII
            </Link>

            <Link
              href="/portofoliu"
              className="soft-link hover:text-black"
            >
              PROIECTE
            </Link>

            <Link
              href="/studii"
              className="soft-link hover:text-black"
            >
              STUDII
            </Link>

            <Link
              href="/contact"
              className="rounded-full border border-zinc-300 px-5 py-2 transition hover:border-black hover:bg-black hover:text-white"
            >
              CONTACT
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
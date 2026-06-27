"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="flex h-24 items-center justify-between border-b border-zinc-200">
            <Logo />

            <nav className="hidden items-center gap-10 text-sm tracking-[0.12em] text-zinc-600 md:flex">
              <Link href="/despre" className="soft-link hover:text-black">
                DESPRE
              </Link>

              <Link href="/servicii" className="soft-link hover:text-black">
                SERVICII
              </Link>

              <Link href="/portofolio" className="soft-link hover:text-black">
                PROIECTE
              </Link>

              <Link href="/harta" className="soft-link hover:text-black">
                HARTĂ
              </Link>

              <Link href="/studii" className="soft-link hover:text-black">
                STUDII
              </Link>

              <Link
                href="/contact"
                className="rounded-full border border-zinc-300 px-5 py-2 transition hover:border-black hover:bg-black hover:text-white"
              >
                CONTACT
              </Link>
            </nav>

            <button
              type="button"
              onClick={() => setOpen(true)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-300 text-xl text-zinc-700 md:hidden"
              aria-label="Deschide meniul"
            >
              ≡
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-[100] bg-white px-8 py-8 md:hidden">
          <div className="flex items-center justify-between">
            <Logo />

            <button
              type="button"
              onClick={() => setOpen(false)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-300 text-3xl font-light text-zinc-700"
              aria-label="Închide meniul"
            >
              ×
            </button>
          </div>

          <nav className="mt-20 grid gap-8 text-4xl font-light tracking-tight text-zinc-950">
            <Link href="/despre" onClick={() => setOpen(false)}>
              Despre
            </Link>

            <Link href="/servicii" onClick={() => setOpen(false)}>
              Servicii
            </Link>

            <Link href="/portofolio" onClick={() => setOpen(false)}>
              Proiecte
            </Link>

            <Link href="/harta" onClick={() => setOpen(false)}>
              Hartă
            </Link>

            <Link href="/studii" onClick={() => setOpen(false)}>
              Studii
            </Link>

            <Link href="/contact" onClick={() => setOpen(false)}>
              Contact
            </Link>
          </nav>

          <div className="absolute bottom-8 left-8 right-8 border-t border-zinc-200 pt-6">
            <p className="text-sm uppercase tracking-[0.25em] text-zinc-400">
              Strategii Urbane
            </p>
          </div>
        </div>
      )}
    </>
  );
}
import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 px-8 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="mb-8 inline-block rounded-3xl bg-white p-4">
              <Logo />
            </div>

            <p className="max-w-xl text-2xl font-light leading-relaxed text-zinc-300">
              Urbanism, strategii teritoriale și GIS pentru comunități și
              teritorii în transformare.
            </p>
          </div>

          <div>
            <p className="mb-6 text-sm uppercase tracking-[0.3em] text-zinc-500">
              Navigare
            </p>

            <div className="space-y-3 text-zinc-300">
              <Link href="/despre" className="block hover:text-white">
                Despre
              </Link>
              <Link href="/servicii" className="block hover:text-white">
                Servicii
              </Link>
              <Link href="/portofoliu" className="block hover:text-white">
                Proiecte
              </Link>
              <Link href="/studii" className="block hover:text-white">
                Studii
              </Link>
              <Link href="/contact" className="block hover:text-white">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <p className="mb-6 text-sm uppercase tracking-[0.3em] text-zinc-500">
              Contact
            </p>

            <div className="space-y-3 text-zinc-300">
              <p>Baia Mare, România</p>
              <p>strategiiurbane@gmail.com</p>
              <p>0754 390 400</p>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 STRATEGII URBANE. Toate drepturile rezervate.</p>

          <p>Planificare • Reglementare • Dezvoltare</p>
        </div>
      </div>
    </footer>
  );
}
import Image from "next/image";
import Link from "next/link";

export default function PmudUlmeniPage() {
  return (
    <main className="bg-white pt-32">
      <section className="px-8 py-20">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/portofolio"
            className="mb-12 inline-block text-sm uppercase tracking-[0.25em] text-zinc-500 transition hover:text-zinc-950"
          >
            ← Înapoi la portofoliu
          </Link>

          <p className="mb-6 text-sm uppercase tracking-[0.4em] text-sky-700">
            Plan de Mobilitate Urbană Durabilă
          </p>

          <h1 className="mb-10 max-w-5xl text-6xl font-light leading-tight text-zinc-950 md:text-7xl">
            PMUD Ulmeni
          </h1>

          <p className="max-w-4xl text-2xl leading-relaxed text-zinc-600">
            Plan de Mobilitate Urbană Durabilă pentru orașul Ulmeni, orientat
            spre îmbunătățirea accesibilității, siguranței circulației și
            dezvoltarea unui sistem de mobilitate eficient și sustenabil.
          </p>
        </div>
      </section>

      <section className="px-8 pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="relative h-[640px] overflow-hidden rounded-[44px] bg-zinc-100">
            <Image
              src="/images/portofolio/pmud-ulmeni/pmud-ulmeni.jpg"
              alt="PMUD Ulmeni"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="px-8 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-zinc-400">
              Date proiect
            </p>

            <div className="space-y-5 text-zinc-600">
              <p>
                <span className="text-zinc-950">Localizare:</span> Orașul
                Ulmeni, județul Maramureș
              </p>

              <p>
                <span className="text-zinc-950">Beneficiar:</span> UAT Orașul
                Ulmeni
              </p>

              <p>
                <span className="text-zinc-950">Tip documentație:</span> Plan
                de Mobilitate Urbană Durabilă
              </p>
            </div>
          </div>

          <div>
            <h2 className="mb-8 text-4xl font-light text-zinc-950">
              Direcții de lucru
            </h2>

            <p className="mb-6 text-lg leading-relaxed text-zinc-600">
              Documentația analizează structura deplasărilor și funcționarea
              sistemului de transport la nivelul orașului Ulmeni, urmărind
              îmbunătățirea conectivității și accesibilității teritoriului.
            </p>

            <p className="text-lg leading-relaxed text-zinc-600">
              Direcțiile de intervenție vizează optimizarea circulației,
              creșterea siguranței rutiere, dezvoltarea infrastructurii pentru
              deplasări pietonale și velo și susținerea unor forme de
              mobilitate durabilă.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
import Image from "next/image";
import Link from "next/link";

export default function PudCentruPaliativPage() {
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

          <p className="mb-6 text-sm uppercase tracking-[0.4em] text-violet-700">
            Plan Urbanistic de Detaliu
          </p>

          <h1 className="mb-10 max-w-5xl text-6xl font-light leading-tight text-zinc-950 md:text-7xl">
            PUD Centru paliativ
          </h1>

          <p className="max-w-4xl text-2xl leading-relaxed text-zinc-600">
            Documentație de urbanism pentru detalierea condițiilor de construire
            și organizarea urbanistică a amplasamentului destinat unui centru
            paliativ în comuna Groși.
          </p>
        </div>
      </section>

      <section className="px-8 pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="relative h-[640px] overflow-hidden rounded-[44px] bg-zinc-100">
            <Image
              src="/images/portofolio/pud/locuinta-individuala.jpg"
              alt="PUD Centru paliativ Groși"
              fill
              priority
              sizes="100vw"
              className="object-contain"
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
                <span className="text-zinc-950">Localizare:</span> Comuna Groși,
                județul Maramureș
              </p>

              <p>
                <span className="text-zinc-950">Tip documentație:</span> Plan
                Urbanistic de Detaliu
              </p>

              <p>
                <span className="text-zinc-950">Funcțiune:</span> Centru
                paliativ
              </p>
            </div>
          </div>

          <div>
            <h2 className="mb-8 text-4xl font-light text-zinc-950">
              Direcții de lucru
            </h2>

            <p className="mb-6 text-lg leading-relaxed text-zinc-600">
              Documentația detaliază modul de amplasare a construcției pe
              parcelă, organizarea acceselor și circulațiilor și relația
              obiectivului propus cu vecinătățile și spațiul public.
            </p>

            <p className="text-lg leading-relaxed text-zinc-600">
              Reglementările urmăresc integrarea coerentă a investiției în
              contextul construit și stabilirea condițiilor urbanistice necesare
              dezvoltării amplasamentului.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
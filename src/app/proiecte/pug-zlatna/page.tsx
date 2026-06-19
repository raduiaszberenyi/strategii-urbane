import Image from "next/image";
import Link from "next/link";

const gallery = [
  "/images/portofoliu/zlatna/zlatna-cover.jpg",
  "/images/portofoliu/zlatna/zlatna-fenes.jpg",
  "/images/portofoliu/zlatna/zlatna-incadrare.jpg",
  "/images/portofoliu/zlatna/zlatna-reglementari.jpg",
  "/images/portofoliu/zlatna/zlatna-strategie.jpg",
];

export default function PugZlatnaPage() {
  return (
    <main className="bg-white pt-32">
      <section className="px-8 py-20">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/portofoliu"
            className="mb-12 inline-block text-sm uppercase tracking-[0.25em] text-zinc-500"
          >
            ← Înapoi la portofoliu
          </Link>

          <p className="mb-6 text-sm uppercase tracking-[0.4em] text-zinc-500">
            Plan Urbanistic General
          </p>

          <h1 className="mb-10 max-w-5xl text-6xl font-light leading-tight text-zinc-950 md:text-7xl">
            PUG Zlatna
          </h1>

          <p className="max-w-4xl text-2xl leading-relaxed text-zinc-600">
            Documentație de urbanism pentru actualizarea direcțiilor de
            dezvoltare ale orașului Zlatna, cu integrarea analizelor teritoriale,
            a reglementărilor urbanistice și a obiectivelor strategice de
            dezvoltare locală.
          </p>
        </div>
      </section>

      <section className="px-8 pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="relative h-[640px] overflow-hidden rounded-[44px]">
            <Image
              src="/images/portofoliu/zlatna/zlatna-cover.jpg"
              alt="PUG Zlatna"
              fill
              priority
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
                Zlatna, județul Alba
              </p>
              <p>
                <span className="text-zinc-950">Beneficiar:</span> UAT Orașul
                Zlatna
              </p>
              <p>
                <span className="text-zinc-950">Tip documentație:</span> Plan
                Urbanistic General
              </p>
              <p>
                <span className="text-zinc-950">Stadiu:</span> documentație în
                curs de avizare
              </p>
            </div>
          </div>

          <div>
            <h2 className="mb-8 text-4xl font-light text-zinc-950">
              Direcții de lucru
            </h2>

            <p className="mb-6 text-lg leading-relaxed text-zinc-600">
              Proiectul urmărește corelarea dezvoltării urbane cu specificul
              teritorial al orașului Zlatna, valorificarea cadrului natural și
              cultural, restructurarea zonelor cu potențial de regenerare urbană
              și consolidarea relației dintre localitățile componente.
            </p>

            <p className="text-lg leading-relaxed text-zinc-600">
              Documentația include analize de fundamentare, reglementări
              urbanistice, propuneri de dezvoltare spațială și măsuri pentru
              îmbunătățirea infrastructurii, mobilității, locuirii, economiei
              locale și calității mediului.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl">
          <p className="mb-8 text-sm uppercase tracking-[0.25em] text-zinc-400">
            Galerie proiect
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            {gallery.map((image, index) => (
              <div
                key={image}
                className="relative h-[420px] overflow-hidden rounded-[36px] bg-zinc-100"
              >
                <Image
                  src={image}
                  alt={`PUG Zlatna imagine ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
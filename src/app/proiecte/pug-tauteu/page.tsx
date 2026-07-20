import Image from "next/image";
import Link from "next/link";

const gallery = [
  "/images/portofolio/tauteu/tauteu-cover.jpg",
  "/images/portofolio/tauteu/plansa-01.jpg",
  "/images/portofolio/tauteu/plansa-02.jpg",
  "/images/portofolio/tauteu/plansa-03.jpg",
  "/images/portofolio/tauteu/plansa-04.jpg",
  "/images/portofolio/tauteu/plansa-05.jpg",
];

export default function PugTauteuPage() {
  return (
    <main className="bg-white pt-32">
      <section className="px-8 py-20">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/portofolio"
            className="mb-12 inline-block text-sm uppercase tracking-[0.25em] text-zinc-500"
          >
            ← Înapoi la portofoliu
          </Link>

          <p className="mb-6 text-sm uppercase tracking-[0.4em] text-zinc-500">
            Plan Urbanistic General
          </p>

          <h1 className="mb-10 max-w-5xl text-6xl font-light leading-tight text-zinc-950 md:text-7xl">
            PUG Tăuteu
          </h1>

          <p className="max-w-4xl text-2xl leading-relaxed text-zinc-600">
            Planul Urbanistic General al comunei Tăuteu urmărește dezvoltarea
            echilibrată a localităților componente, protejarea patrimoniului
            construit și natural, dezvoltarea infrastructurii și valorificarea
            potențialului economic și turistic al comunei.
          </p>
        </div>
      </section>

      <section className="px-8 pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="relative h-[640px] overflow-hidden rounded-[44px]">
            <Image
              src="/images/portofolio/tauteu/tauteu-cover.jpg"
              alt="PUG Tăuteu"
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
                <span className="text-zinc-950">Localizare:</span> Comuna Tăuteu,
                județul Bihor
              </p>

              <p>
                <span className="text-zinc-950">Beneficiar:</span> UAT Comuna
                Tăuteu
              </p>

              <p>
                <span className="text-zinc-950">Tip documentație:</span> Plan
                Urbanistic General
              </p>

              <p>
                <span className="text-zinc-950">Categorie:</span> Urbanism,
                patrimoniu și dezvoltare teritorială
              </p>
            </div>
          </div>

          <div>
            <h2 className="mb-8 text-4xl font-light text-zinc-950">
              Direcții de lucru
            </h2>

            <p className="mb-6 text-lg leading-relaxed text-zinc-600">
              Documentația urmărește corelarea dezvoltării localităților
              componente cu infrastructura existentă, protejarea patrimoniului
              construit și natural și organizarea coerentă a zonelor de
              dezvoltare.
            </p>

            <p className="text-lg leading-relaxed text-zinc-600">
              Propunerile includ reglementări privind dezvoltarea zonelor de
              locuire și activități economice, protejarea elementelor de
              patrimoniu, îmbunătățirea infrastructurii și valorificarea
              potențialului economic, cultural și turistic al comunei.
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
                  alt={`PUG Tăuteu imagine ${index + 1}`}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
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
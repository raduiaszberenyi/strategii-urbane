import Image from "next/image";
import Link from "next/link";

const gallery = [
  "/images/portofolio/bistra/bistra-cover.jpg",
  "/images/portofolio/bistra/plansa-01.jpg",
  "/images/portofolio/bistra/plansa-02.jpg",
  "/images/portofolio/bistra/plansa-03.jpg",
  "/images/portofolio/bistra/plansa-04.jpg",
];

export default function PugBistraPage() {
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
            PUG Bistra
          </h1>

          <p className="max-w-4xl text-2xl leading-relaxed text-zinc-600">
            Documentație de urbanism general pentru stabilirea direcțiilor de
            dezvoltare ale comunei Bistra și reglementarea dezvoltării
            teritoriale.
          </p>
        </div>
      </section>

      <section className="px-8 pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="relative h-[640px] overflow-hidden rounded-[44px]">
            <Image
              src="/images/portofolio/bistra/bistra-cover.jpg"
              alt="PUG Bistra"
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
                <span className="text-zinc-950">Localizare:</span> Comuna
                Bistra, județul Maramureș
              </p>

              <p>
                <span className="text-zinc-950">Beneficiar:</span> UAT Comuna
                Bistra
              </p>

              <p>
                <span className="text-zinc-950">Tip documentație:</span> Plan
                Urbanistic General
              </p>

              <p>
                <span className="text-zinc-950">Categorie:</span> Urbanism,
                dezvoltare teritorială și reglementare urbanistică
              </p>
            </div>
          </div>

          <div>
            <h2 className="mb-8 text-4xl font-light text-zinc-950">
              Direcții de lucru
            </h2>

            <p className="mb-6 text-lg leading-relaxed text-zinc-600">
              Documentația urmărește actualizarea cadrului de dezvoltare
              teritorială al comunei Bistra și corelarea reglementărilor
              urbanistice cu structura localităților componente, infrastructura
              existentă și particularitățile cadrului natural.
            </p>

            <p className="text-lg leading-relaxed text-zinc-600">
              Propunerile vizează organizarea coerentă a zonelor construite,
              dezvoltarea infrastructurii și a serviciilor, protejarea
              elementelor valoroase ale teritoriului și stabilirea condițiilor
              pentru dezvoltarea viitoare a comunei.
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
                  alt={`PUG Bistra imagine ${index + 1}`}
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
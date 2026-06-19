import Image from "next/image";
import Link from "next/link";

const gallery = [
  "/imagesportofolio/grosi/grosi-cover.jpg",
  "/imagesportofolio/grosi/grosi-01.jpg",
  "/imagesportofolio/grosi/grosi-02.jpg",
];

export default function PugGrosiPage() {
  return (
    <main className="bg-white pt-32">
      <section className="px-8 py-20">
        <div className="mx-auto max-w-7xl">
          <Link
            href="portofolio"
            className="mb-12 inline-block text-sm uppercase tracking-[0.25em] text-zinc-500"
          >
            ← Înapoi la portofoliu
          </Link>

          <p className="mb-6 text-sm uppercase tracking-[0.4em] text-zinc-500">
            Plan Urbanistic General
          </p>

          <h1 className="mb-10 max-w-5xl text-6xl font-light leading-tight text-zinc-950 md:text-7xl">
            PUG Groși
          </h1>

          <p className="max-w-4xl text-2xl leading-relaxed text-zinc-600">
            Documentație strategică de urbanism pentru dezvoltarea comunei
            Groși în contextul expansiunii zonei metropolitane Baia Mare.
          </p>
        </div>
      </section>

      <section className="px-8 pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="relative h-[640px] overflow-hidden rounded-[44px]">
            <Image
              src="/imagesportofolio/grosi/grosi-cover.jpg"
              alt="PUG Groși"
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
                <span className="text-zinc-950">Localizare:</span> Comuna
                Groși, județul Maramureș
              </p>

              <p>
                <span className="text-zinc-950">Beneficiar:</span> UAT Comuna
                Groși
              </p>

              <p>
                <span className="text-zinc-950">Tip documentație:</span> Plan
                Urbanistic General
              </p>

              <p>
                <span className="text-zinc-950">Specific:</span> zonă
                periurbană a municipiului Baia Mare
              </p>
            </div>
          </div>

          <div>
            <h2 className="mb-8 text-4xl font-light text-zinc-950">
              Viziune de dezvoltare
            </h2>

            <p className="mb-6 text-lg leading-relaxed text-zinc-600">
              Documentația urmărește consolidarea rolului comunei Groși în
              cadrul zonei metropolitane Baia Mare și gestionarea dezvoltării
              accelerate a locuirii și serviciilor.
            </p>

            <p className="text-lg leading-relaxed text-zinc-600">
              Propunerile includ dezvoltarea infrastructurii de mobilitate,
              crearea unui nou centru comunitar, extinderea zonelor de servicii,
              îmbunătățirea spațiilor publice și corelarea dezvoltării
              teritoriale cu dinamica economică regională.
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
                  alt={`PUG Groși imagine ${index + 1}`}
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
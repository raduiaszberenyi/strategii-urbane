import Image from "next/image";
import Link from "next/link";

const gallery = [
  "/images/portofolio/coltau/coltau-cover.jpg",
  "/images/portofolio/coltau/coltau-01.jpg",
  "/images/portofolio/coltau/coltau-02.jpg",
  "/images/portofolio/coltau/coltau-03.jpg",
];

export default function PugColtauPage() {
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
            PUG Coltău
          </h1>

          <p className="max-w-4xl text-2xl leading-relaxed text-zinc-600">
            Documentație de urbanism pentru coordonarea dezvoltării comunei
            Coltău și valorificarea patrimoniului construit și peisagistic
            reprezentat de domeniul Castelului Teleki.
          </p>
        </div>
      </section>

      <section className="px-8 pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="relative h-[640px] overflow-hidden rounded-[44px]">
            <Image
              src="/images/portofolio/coltau/coltau-cover.jpg"
              alt="PUG Coltău"
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
                <span className="text-zinc-950">Localizare:</span>
                {" "}Comuna Coltău, județul Maramureș
              </p>

              <p>
                <span className="text-zinc-950">Beneficiar:</span>
                {" "}UAT Comuna Coltău
              </p>

              <p>
                <span className="text-zinc-950">Tip documentație:</span>
                {" "}Plan Urbanistic General
              </p>

              <p>
                <span className="text-zinc-950">Element strategic:</span>
                {" "}Castelul Teleki și dezvoltarea funcțiunilor publice și economice
              </p>
            </div>
          </div>

          <div>
            <h2 className="mb-8 text-4xl font-light text-zinc-950">
              Obiective de dezvoltare
            </h2>

            <p className="mb-6 text-lg leading-relaxed text-zinc-600">
              Documentația urmărește dezvoltarea echilibrată a comunei,
              extinderea controlată a intravilanului și crearea condițiilor
              necesare pentru investiții publice și private.
            </p>

            <p className="text-lg leading-relaxed text-zinc-600">
              Printre direcțiile principale se regăsesc dezvoltarea unei zone
              industriale, realizarea unui parc fotovoltaic, dezvoltarea
              serviciilor medicale și punerea în valoare a patrimoniului
              cultural și a cadrului natural local.
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
                  alt={`PUG Coltău imagine ${index + 1}`}
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
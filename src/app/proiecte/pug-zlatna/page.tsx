import Image from "next/image";
import Navbar from "../../../components/Navbar";

const documents = [
  {
    title: "Încadrarea în teritoriu",
    image: "/uploads/zlatna-incadrare.jpg.png",
    pdf: "/uploads/1.-incadrarea-in-teritoriu.pdf",
  },
  {
    title: "Strategia de dezvoltare spațială",
    image: "/uploads/zlatna-strategie.jpg.png",
    pdf: "/uploads/5.-strategia-de-dezvoltare-spaial..pdf",
  },
  {
    title: "Reglementări urbanistice propuse și UTR – Zlatna",
    image: "/uploads/zlatna-reglementari.jpg.png",
    pdf: "/uploads/6.1-reglementri-urbanistice-propuse-i-utr.-zlatna.pdf",
  },
  {
    title: "Reglementări urbanistice propuse și UTR – Sat Feneș",
    image: "/uploads/zlatna-fenes.jpg.png",
    pdf: "/uploads/6.2-reglementri-urbanistice-propuse-i-utr.-sat-fene.pdf",
  },
];

export default function PugZlatnaPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white pt-32">
        <section className="px-8 py-24">
          <div className="mx-auto max-w-7xl">
            <p className="mb-6 text-sm uppercase tracking-[0.4em] text-zinc-500">
              Studiu de caz
            </p>

            <h1 className="mb-8 max-w-5xl text-7xl font-light leading-tight text-zinc-950">
              Plan Urbanistic General
              <br />
              Orașul Zlatna
            </h1>

            <p className="max-w-3xl text-2xl leading-relaxed text-zinc-600">
              Strategie urbană pentru un teritoriu montan cu identitate
              industrială, patrimoniu cultural, potențial turistic și relații
              teritoriale complexe.
            </p>
          </div>
        </section>

        <section className="px-8 pb-24">
          <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-4">
            <div className="rounded-[28px] bg-zinc-100 p-8">
              <p className="mb-3 text-sm uppercase tracking-[0.25em] text-zinc-500">
                Localizare
              </p>
              <p className="text-2xl font-light">Alba</p>
            </div>

            <div className="rounded-[28px] bg-zinc-100 p-8">
              <p className="mb-3 text-sm uppercase tracking-[0.25em] text-zinc-500">
                Tip proiect
              </p>
              <p className="text-2xl font-light">PUG</p>
            </div>

            <div className="rounded-[28px] bg-zinc-100 p-8">
              <p className="mb-3 text-sm uppercase tracking-[0.25em] text-zinc-500">
                Tematici
              </p>
              <p className="text-2xl font-light">Mobilitate · Turism</p>
            </div>

            <div className="rounded-[28px] bg-zinc-100 p-8">
              <p className="mb-3 text-sm uppercase tracking-[0.25em] text-zinc-500">
                Statut
              </p>
              <p className="text-2xl font-light">În elaborare</p>
            </div>
          </div>
        </section>

        <section className="bg-zinc-950 px-8 py-32 text-white">
          <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
            <div>
              <p className="mb-6 text-sm uppercase tracking-[0.4em] text-zinc-500">
                Viziune strategică
              </p>

              <h2 className="text-5xl font-light leading-tight">
                O viziune urbană pentru un oraș aflat între patrimoniu,
                industrie și peisaj.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-relaxed text-zinc-300">
              <p>
                Documentația urmărește actualizarea direcțiilor de dezvoltare
                urbană, consolidarea relațiilor teritoriale și valorificarea
                resurselor locale.
              </p>

              <p>
                Strategia propusă integrează mobilitatea durabilă, regenerarea
                zonelor construite, protejarea patrimoniului și dezvoltarea
                funcțiunilor economice compatibile cu specificul local.
              </p>
            </div>
          </div>
        </section>

        <section className="px-8 py-32">
          <div className="mx-auto max-w-7xl">
            <p className="mb-6 text-sm uppercase tracking-[0.4em] text-zinc-500">
              Planșe
            </p>

            <h2 className="mb-16 text-5xl font-light">
              Documentații vizuale și planșe urbanistice
            </h2>

            <div className="grid gap-8 md:grid-cols-2">
              {documents.map((doc) => (
                <article
                  key={doc.title}
                  className="overflow-hidden rounded-[36px] border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <a href={doc.pdf} target="_blank">
                    <div className="relative h-[420px] bg-white">
                      <Image
                        src={doc.image}
                        alt={doc.title}
                        fill
                        className="object-contain bg-white"
                      />
                    </div>
                  </a>

                  <div className="p-8">
                    <p className="mb-4 text-sm uppercase tracking-[0.25em] text-zinc-400">
                      Planșă PUG Zlatna
                    </p>

                    <h3 className="mb-6 text-2xl font-light text-zinc-950">
                      {doc.title}
                    </h3>

                    <a
                      href={doc.pdf}
                      target="_blank"
                      className="text-sm uppercase tracking-[0.25em] text-zinc-950"
                    >
                      Deschide PDF →
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
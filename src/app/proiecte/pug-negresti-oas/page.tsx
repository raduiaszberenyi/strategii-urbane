import Image from "next/image";
import Link from "next/link";

export default function PugNegrestiOasPage() {
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

          <p className="mb-6 text-sm uppercase tracking-[0.4em] text-zinc-500">
            Plan Urbanistic General
          </p>

          <h1 className="mb-10 max-w-5xl text-6xl font-light leading-tight text-zinc-950 md:text-7xl">
            PUG Negrești-Oaș
          </h1>

          <p className="max-w-4xl text-2xl leading-relaxed text-zinc-600">
            Documentație de urbanism pentru actualizarea direcțiilor de
            dezvoltare ale orașului Negrești-Oaș, în contextul rolului său de
            oraș-poartă al Țării Oașului și al relațiilor teritoriale din nordul
            județului Satu Mare.
          </p>
        </div>
      </section>

      <section className="px-8 pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="relative h-[640px] overflow-hidden rounded-[44px] bg-zinc-100">
            <Image
              src="/images/portofolio/negresti-oas/negresti-oas-cover.jpg"
              alt="PUG Negrești-Oaș"
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
                Negrești-Oaș, județul Satu Mare
              </p>

              <p>
                <span className="text-zinc-950">Tip documentație:</span> Plan
                Urbanistic General
              </p>

              <p>
                <span className="text-zinc-950">Categorie:</span> Urbanism,
                strategie teritorială și reglementare urbanistică
              </p>

              <p>
                <span className="text-zinc-950">Specific teritorial:</span>{" "}
                oraș-poartă al Țării Oașului
              </p>
            </div>
          </div>

          <div>
            <h2 className="mb-8 text-4xl font-light text-zinc-950">
              Direcții de lucru
            </h2>

            <p className="mb-6 text-lg leading-relaxed text-zinc-600">
              Proiectul urmărește actualizarea cadrului urbanistic general al
              orașului Negrești-Oaș, prin corelarea dezvoltării urbane cu
              dinamica demografică, infrastructura existentă, resursele
              teritoriale și rolul localității în cadrul Țării Oașului.
            </p>

            <p className="mb-6 text-lg leading-relaxed text-zinc-600">
              Documentația integrează analize privind structura urbană,
              locuirea, mobilitatea, echiparea edilitară, dezvoltarea
              economică, patrimoniul natural și cultural, precum și relațiile
              funcționale cu localitățile învecinate.
            </p>

            <p className="text-lg leading-relaxed text-zinc-600">
              Propunerile urmăresc consolidarea orașului ca centru urban local,
              valorificarea potențialului turistic și cultural al zonei,
              îmbunătățirea calității locuirii și orientarea dezvoltării către
              un model urban coerent și sustenabil.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
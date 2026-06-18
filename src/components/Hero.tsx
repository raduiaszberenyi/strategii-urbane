export default function Hero() {
  return (
    <section className="bg-white pt-32 pb-20">
      <div className="mx-auto max-w-7xl px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-6 text-sm uppercase tracking-[0.4em] text-zinc-500">
              Planificare • Reglementare • Dezvoltare
            </p>

            <h1 className="mb-8 text-7xl font-light leading-[0.95] text-zinc-950">
              Strategii
              <br />
              teritoriale.
              <br />
              Urbanism.
              <br />
              GIS.
            </h1>

            <p className="mb-10 max-w-xl text-xl leading-relaxed text-zinc-600">
              Planificare teritorială, urbanism și analiză GIS pentru
              dezvoltarea sustenabilă a comunităților și transformarea
              teritoriilor.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="/portofoliu"
                className="rounded-full bg-black px-8 py-4 text-white transition hover:bg-zinc-800"
              >
                Vezi proiectele
              </a>

              <a
                href="/contact"
                className="rounded-full border border-zinc-300 px-8 py-4 transition hover:border-black"
              >
                Contact
              </a>
            </div>
          </div>

          <div className="flex h-[600px] items-center justify-center rounded-[40px] bg-zinc-100 shadow-2xl">
            <p className="text-sm uppercase tracking-[0.4em] text-zinc-400">
              Video hero
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
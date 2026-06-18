export default function PortofoliuPage() {
  return (
    <main className="bg-white pt-32">
      <section className="px-8 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-sm uppercase tracking-[0.4em] text-zinc-500">
            Portofoliu
          </p>

          <h1 className="mb-10 max-w-5xl text-7xl font-light leading-tight text-zinc-950">
            Proiecte de urbanism,
            <br />
            strategie teritorială
            <br />
            și analiză GIS.
          </h1>

          <p className="max-w-3xl text-2xl leading-relaxed text-zinc-600">
            O selecție de documentații și studii dezvoltate pentru orașe,
            comune și teritorii aflate în transformare.
          </p>
        </div>
      </section>

      <section className="px-8 pb-32">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
          {[
            "PUG Zlatna",
            "PUG Groși",
            "PUG Coltău",
            "PUG Negrești-Oaș",
            "PUG Tăuteu",
            "PUG Limanu",
          ].map((project) => (
            <div
              key={project}
              className="rounded-[36px] border border-zinc-200 bg-white p-10"
            >
              <p className="mb-4 text-sm uppercase tracking-[0.25em] text-zinc-400">
                Plan Urbanistic General
              </p>

              <h2 className="mb-5 text-4xl font-light text-zinc-950">
                {project}
              </h2>

              <p className="leading-relaxed text-zinc-600">
                Studiu de caz în curs de completare.
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
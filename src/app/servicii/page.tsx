import Navbar from "../../components/Navbar";

const services = [
  {
    title: "Planuri Urbanistice Generale",
    text: "Elaborarea și actualizarea PUG-urilor pentru orașe și comune, inclusiv studii de fundamentare, strategie și regulament local de urbanism.",
  },
  {
    title: "Planuri Urbanistice Zonale",
    text: "Documentații pentru dezvoltări rezidențiale, industriale, turistice, comerciale și zone cu reglementări speciale.",
  },
  {
    title: "Planuri Urbanistice de Detaliu",
    text: "Reglementări punctuale pentru investiții și intervenții asupra terenurilor și construcțiilor.",
  },
  {
    title: "Strategii de dezvoltare",
    text: "Strategii locale și teritoriale pentru dezvoltarea sustenabilă a comunităților și atragerea investițiilor.",
  },
  {
    title: "GIS și cartografie",
    text: "Baze de date spațiale, hărți tematice, analize GIS și suport pentru fundamentarea deciziilor.",
  },
  {
    title: "Studii de fundamentare",
    text: "Studii privind mobilitatea, mediul, patrimoniul, demografia, economia și relațiile teritoriale.",
  },
];

export default function ServiciiPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white pt-32">
        <section className="px-8 py-24">
          <div className="mx-auto max-w-7xl">
            <p className="mb-6 text-sm uppercase tracking-[0.4em] text-zinc-500">
              Servicii
            </p>

            <h1 className="mb-10 max-w-5xl text-7xl font-light leading-tight text-zinc-950">
              Servicii de urbanism,
              <br />
              planificare teritorială
              <br />
              și analiză GIS.
            </h1>

            <p className="max-w-3xl text-2xl leading-relaxed text-zinc-600">
              Oferim servicii integrate pentru administrații publice,
              investitori și comunități locale, de la analiză și strategie
              până la reglementare și implementare.
            </p>
          </div>
        </section>

        <section className="px-8 pb-32">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="rounded-[32px] border border-zinc-200 p-8 transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <h2 className="mb-5 text-3xl font-light">
                    {service.title}
                  </h2>

                  <p className="leading-relaxed text-zinc-600">
                    {service.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
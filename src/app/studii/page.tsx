import Navbar from "../../components/Navbar";

const studies = [
  "Studii de fundamentare pentru PUG",
  "Studii de mobilitate și accesibilitate",
  "Studii de patrimoniu construit și peisaj",
  "Studii demografice și socio-economice",
  "Studii privind riscurile naturale și antropice",
  "Analize GIS și cartografie tematică",
  "Studii de relații periurbane și teritoriale",
  "Strategii de dezvoltare locală",
];

export default function StudiiPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white pt-32">
        <section className="px-8 py-24">
          <div className="mx-auto max-w-7xl">
            <p className="mb-6 text-sm uppercase tracking-[0.4em] text-zinc-500">
              Studii
            </p>

            <h1 className="mb-10 max-w-5xl text-7xl font-light leading-tight text-zinc-950">
              Analize și studii
              <br />
              pentru fundamentarea
              <br />
              deciziilor urbane.
            </h1>

            <p className="max-w-3xl text-2xl leading-relaxed text-zinc-600">
              Dezvoltăm studii tehnice și strategice care susțin documentațiile
              de urbanism, planificarea teritorială și politicile publice locale.
            </p>
          </div>
        </section>

        <section className="bg-zinc-100 px-8 py-32">
          <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
            {studies.map((study) => (
              <div
                key={study}
                className="rounded-[32px] bg-white p-8 text-2xl font-light shadow-sm"
              >
                {study}
              </div>
            ))}
          </div>
        </section>

        <section className="bg-zinc-950 px-8 py-32 text-white">
          <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
            <h2 className="text-5xl font-light leading-tight">
              Fiecare strategie începe cu o înțelegere clară a teritoriului.
            </h2>

            <div className="space-y-6 text-lg leading-relaxed text-zinc-300">
              <p>
                Studiile de fundamentare permit identificarea disfuncționalităților,
                resurselor, riscurilor și oportunităților care influențează
                dezvoltarea locală.
              </p>

              <p>
                Prin date, hărți, observații de teren și analiză spațială,
                construim o bază coerentă pentru decizii urbanistice și
                strategice.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
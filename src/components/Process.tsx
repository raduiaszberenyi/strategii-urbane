const steps = [
  {
    number: "01",
    title: "Analiză",
    text: "Colectăm date, studiem teritoriul, identificăm disfuncționalități, resurse și direcții de dezvoltare.",
  },
  {
    number: "02",
    title: "Strategie",
    text: "Construim o viziune coerentă, corelată cu nevoile comunității, cadrul legal și obiectivele administrației.",
  },
  {
    number: "03",
    title: "Reglementare",
    text: "Transpunem strategia în documentații urbanistice, reguli, zonificări și propuneri spațiale clare.",
  },
  {
    number: "04",
    title: "Implementare",
    text: "Sprijinim administrațiile și investitorii în înțelegerea etapelor, avizelor și priorităților de dezvoltare.",
  },
];

export default function Process() {
  return (
    <section className="bg-white px-8 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 grid gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-6 text-sm uppercase tracking-[0.4em] text-zinc-500">
              Proces
            </p>

            <h2 className="text-6xl font-light leading-tight text-zinc-950">
              De la analiză la viziune implementabilă.
            </h2>
          </div>

          <p className="max-w-xl text-xl leading-relaxed text-zinc-600">
            Abordăm fiecare proiect ca pe un proces complet: analiză
            teritorială, strategie, reglementare și prioritizare pentru
            implementare.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          {steps.map((step) => (
            <article
              key={step.number}
              className="rounded-[32px] border border-zinc-200 p-8"
            >
              <p className="mb-8 text-sm tracking-[0.3em] text-zinc-400">
                {step.number}
              </p>

              <h3 className="mb-5 text-2xl font-light">
                {step.title}
              </h3>

              <p className="leading-relaxed text-zinc-600">
                {step.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
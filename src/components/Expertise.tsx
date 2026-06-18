const expertise = [
  {
    title: "Planuri urbanistice",
    details: "PUG · PUZ · PUD · RLU",
    text: "Documentații urbanistice integrate, corelate cu legislația, teritoriul și obiectivele de dezvoltare locală.",
  },
  {
    title: "Strategii teritoriale",
    details: "dezvoltare locală · periurban · metropolitan",
    text: "Viziuni de dezvoltare pentru orașe, comune și zone aflate în transformare.",
  },
  {
    title: "GIS și analiză spațială",
    details: "baze de date · hărți · analiză teritorială",
    text: "Instrumente digitale pentru înțelegerea, structurarea și fundamentarea deciziilor urbanistice.",
  },
  {
    title: "Mobilitate și infrastructură",
    details: "accesibilitate · transport · rețele",
    text: "Analize privind conectivitatea, circulațiile, infrastructura edilitară și relațiile teritoriale.",
  },
  {
    title: "Patrimoniu și peisaj",
    details: "zone protejate · identitate locală",
    text: "Integrarea valorilor culturale, naturale și peisagistice în strategiile de dezvoltare urbană.",
  },
  {
    title: "Regenerare urbană",
    details: "revitalizare · reconversie · spațiu public",
    text: "Soluții pentru transformarea zonelor degradate, neutilizate sau insuficient valorificate.",
  },
];

export default function Expertise() {
  return (
    <section className="bg-zinc-100 px-8 py-32">
      <div className="mx-auto max-w-7xl">
        <p className="mb-6 text-sm uppercase tracking-[0.4em] text-zinc-500">
          Expertiză
        </p>

        <div className="mb-20 grid gap-12 lg:grid-cols-2">
          <h2 className="text-6xl font-light leading-tight text-zinc-950">
            Abordare integrată pentru teritorii în transformare.
          </h2>

          <p className="max-w-xl text-xl leading-relaxed text-zinc-600">
            Lucrăm la intersecția dintre urbanism, analiză spațială,
            strategie locală și dezvoltare sustenabilă, pentru proiecte
            publice și private cu impact teritorial.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {expertise.map((item) => (
            <article
              key={item.title}
              className="rounded-[32px] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <p className="mb-5 text-xs uppercase tracking-[0.3em] text-zinc-400">
                {item.details}
              </p>

              <h3 className="mb-5 text-2xl font-light text-zinc-950">
                {item.title}
              </h3>

              <p className="leading-relaxed text-zinc-600">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
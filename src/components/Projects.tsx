import Image from "next/image";

const projects = [
  {
    title: "PUG Negrești-Oaș",
    type: "Plan Urbanistic General",
    location: "Satu Mare",
    image: "/images/negresti.jpg.jpg",
    text: "Planificare urbană integrată pentru dezvoltarea unui oraș-poartă al Țării Oașului.",
  },
  {
    title: "PUG Zlatna",
    type: "Plan Urbanistic General",
    location: "Alba",
    image: "/images/zlatna.jpg.jpg",
    text: "Strategie urbană, mobilitate, turism și reconversie economică într-un teritoriu cu patrimoniu industrial.",
  },
  {
    title: "PUG Groși",
    type: "Plan Urbanistic General",
    location: "Maramureș",
    image: "/images/grosi.jpg.jpg",
    text: "Viziune periurbană pentru o comună aflată în relație directă cu municipiul Baia Mare.",
  },
  {
    title: "PUG Coltău",
    type: "Plan Urbanistic General",
    location: "Maramureș",
    image: "/images/coltau.jpg.jpg",
    text: "Reglementare urbanistică, protecția patrimoniului și dezvoltare strategică locală.",
  },
];

export default function Projects() {
  return (
    <section className="bg-zinc-950 px-8 py-32 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-zinc-500">
            Portofoliu
          </p>

          <h2 className="text-5xl font-light">
            Proiecte reprezentative
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-[32px] border border-white/10 bg-white/5"
            >
              <div className="relative h-[360px] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-8">
                <p className="mb-4 text-xs uppercase tracking-[0.3em] text-zinc-500">
                  {project.type} · {project.location}
                </p>

                <h3 className="mb-4 text-3xl font-light">
                  {project.title}
                </h3>

                <p className="mb-8 text-zinc-300">
                  {project.text}
                </p>

                <button className="text-sm uppercase tracking-[0.25em] text-white">
                  Vezi proiectul →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "PUG Zlatna",
    category: "PUG • Alba",
    description:
      "Strategie urbană, mobilitate, turism și reconversie economică într-un teritoriu cu patrimoniu industrial.",
    image: "/imagesportofolio/zlatna/zlatna-cover.jpg",
    href: "/proiecte/pug-zlatna",
  },
  {
    title: "PUG Groși",
    category: "PUG • Maramureș",
    description:
      "Dezvoltare periurbană, mobilitate și structurarea noului centru al comunei în relație cu Baia Mare.",
    image: "/imagesportofolio/grosi/grosi-cover.jpg",
    href: "/proiecte/pug-grosi",
  },
  {
    title: "PUG Coltău",
    category: "PUG • Maramureș",
    description:
      "Valorificarea patrimoniului Castelului Teleki și dezvoltarea funcțiunilor economice și publice.",
    image: "/imagesportofolio/coltau/coltau-cover.jpg",
    href: "/proiecte/pug-coltau",
  },
];

export default function portofoliuPage() {
  return (
    <main className="bg-white pt-32">
      <section className="px-8 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-sm uppercase tracking-[0.4em] text-zinc-500">
            Portofoliu
          </p>

          <h1 className="mb-10 max-w-5xl text-6xl font-light leading-tight text-zinc-950 md:text-7xl">
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
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.title}
              href={project.href}
              className="group overflow-hidden rounded-[36px] border border-zinc-200 bg-white transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="relative h-[420px] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  priority
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-10">
                <p className="mb-4 text-sm uppercase tracking-[0.25em] text-zinc-400">
                  {project.category}
                </p>

                <h2 className="mb-5 text-4xl font-light text-zinc-950">
                  {project.title}
                </h2>

                <p className="mb-8 leading-relaxed text-zinc-600">
                  {project.description}
                </p>

                <span className="text-sm uppercase tracking-[0.2em] text-zinc-900">
                  Vezi proiectul →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
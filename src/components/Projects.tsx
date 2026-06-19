import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "PUG Zlatna",
    type: "Plan Urbanistic General",
    location: "Alba",
    image: "/imagesportofolio/zlatna/zlatna-cover.jpg",
    text: "Strategie urbană, mobilitate, turism și reconversie economică într-un teritoriu cu patrimoniu industrial.",
    href: "/proiecte/pug-zlatna",
  },
  {
    title: "PUG Groși",
    type: "Plan Urbanistic General",
    location: "Maramureș",
    image: "/imagesportofolio/grosi/grosi-cover.jpg",
    text: "Dezvoltare periurbană, mobilitate și structurarea noului centru al comunei în relație cu Baia Mare.",
    href: "/proiecte/pug-grosi",
  },
  {
    title: "PUG Coltău",
    type: "Plan Urbanistic General",
    location: "Maramureș",
    image: "/imagesportofolio/coltau/coltau-cover.jpg",
    text: "Valorificarea patrimoniului Castelului Teleki și dezvoltarea funcțiunilor economice și publice.",
    href: "/proiecte/pug-coltau",
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

          <h2 className="text-5xl font-light">Proiecte reprezentative</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.title}
              href={project.href}
              className="group overflow-hidden rounded-[32px] border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:bg-white/10"
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

                <h3 className="mb-4 text-3xl font-light">{project.title}</h3>

                <p className="mb-8 text-zinc-300">{project.text}</p>

                <span className="text-sm uppercase tracking-[0.25em] text-white">
                  Vezi proiectul →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
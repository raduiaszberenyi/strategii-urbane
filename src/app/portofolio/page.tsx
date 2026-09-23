"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    name: "PUG",
    label: "Planuri Urbanistice Generale",
    inactive:
      "border-emerald-200 bg-emerald-50 text-emerald-900 hover:border-emerald-300 hover:bg-emerald-100",
    active:
      "border-emerald-700 bg-emerald-700 text-white shadow-lg shadow-emerald-900/10",
  },
  {
    name: "PUZ",
    label: "Planuri Urbanistice Zonale",
    inactive:
      "border-amber-200 bg-amber-50 text-amber-900 hover:border-amber-300 hover:bg-amber-100",
    active:
      "border-amber-700 bg-amber-700 text-white shadow-lg shadow-amber-900/10",
  },
  {
    name: "PUD",
    label: "Planuri Urbanistice de Detaliu",
    inactive:
      "border-violet-200 bg-violet-50 text-violet-900 hover:border-violet-300 hover:bg-violet-100",
    active:
      "border-violet-700 bg-violet-700 text-white shadow-lg shadow-violet-900/10",
  },
  {
    name: "PMUD",
    label: "Planuri de Mobilitate Urbană Durabilă",
    inactive:
      "border-sky-200 bg-sky-50 text-sky-900 hover:border-sky-300 hover:bg-sky-100",
    active:
      "border-sky-700 bg-sky-700 text-white shadow-lg shadow-sky-900/10",
  },
];

const projects = [
  {
    title: "PUG Zlatna",
    type: "PUG",
    category: "PUG • Alba",
    description:
      "Strategie urbană, mobilitate, turism și reconversie economică într-un teritoriu cu patrimoniu industrial.",
    image: "/images/portofolio/zlatna/zlatna-cover.jpg",
    href: "/proiecte/pug-zlatna",
  },
  {
    title: "PUG Groși",
    type: "PUG",
    category: "PUG • Maramureș",
    description:
      "Dezvoltare periurbană, mobilitate și structurarea noului centru al comunei în relație cu Baia Mare.",
    image: "/images/portofolio/grosi/grosi-cover.jpg",
    href: "/proiecte/pug-grosi",
  },
  {
    title: "PUG Coltău",
    type: "PUG",
    category: "PUG • Maramureș",
    description:
      "Valorificarea patrimoniului Castelului Teleki și dezvoltarea funcțiunilor economice și publice.",
    image: "/images/portofolio/coltau/coltau-cover.jpg",
    href: "/proiecte/pug-coltau",
  },
  {
    title: "PUG Negrești-Oaș",
    type: "PUG",
    category: "PUG • Satu Mare",
    description:
      "Planificare urbană integrată pentru dezvoltarea unui oraș-poartă al Țării Oașului.",
    image: "/images/portofolio/negresti-oas/negresti-oas-cover.jpg",
    href: "/proiecte/pug-negresti-oas",
  },
  {
    title: "PUG Câmpulung la Tisa",
    type: "PUG",
    category: "PUG • Maramureș",
    description:
      "Actualizarea Planului Urbanistic General și stabilirea direcțiilor de dezvoltare durabilă ale comunei Câmpulung la Tisa.",
    image:
      "/images/portofolio/campulung-la-tisa/campulung-la-tisa-cover.jpg",
    href: "/proiecte/pug-campulung-la-tisa",
  },
  {
    title: "PUG Mireșu Mare",
    type: "PUG",
    category: "PUG • Maramureș",
    description:
      "Documentație de urbanism pentru actualizarea direcțiilor de dezvoltare ale comunei Mireșu Mare.",
    image: "/images/portofolio/miresu-mare/miresu-mare-cover.jpg",
    href: "/proiecte/pug-miresu-mare",
  },
  {
    title: "PUG Tăuteu",
    type: "PUG",
    category: "PUG • Bihor",
    description:
      "Documentație de urbanism general pentru stabilirea direcțiilor de dezvoltare ale comunei Tăuteu.",
    image: "/images/portofolio/tauteu/tauteu-cover.jpg",
    href: "/proiecte/pug-tauteu",
  },
  {
    title: "PUG Vadu Izei",
    type: "PUG",
    category: "PUG • Maramureș",
    description:
      "Documentație de urbanism general pentru stabilirea direcțiilor de dezvoltare ale comunei Vadu Izei.",
    image: "/images/portofolio/vadu-izei/vadu-izei-cover.jpg",
    href: "/proiecte/pug-vadu-izei",
  },
  {
    title: "PUG Bistra",
    type: "PUG",
    category: "PUG • Maramureș",
    description:
      "Documentație de urbanism general pentru stabilirea direcțiilor de dezvoltare ale comunei Bistra și reglementarea dezvoltării teritoriale.",
    image: "/images/portofolio/bistra/bistra-cover.jpg",
    href: "/proiecte/pug-bistra",
  },

  {
    title: "PUZ Budești",
    type: "PUZ",
    category: "PUZ • Maramureș",
    description:
      "Plan Urbanistic Zonal pentru reglementarea urbanistică și organizarea funcțională a zonei studiate.",
    image: "/images/portofolio/puz/puz-budesti.jpg",
    href: "/proiecte/puz-budesti",
  },
  {
    title: "PUZ Metro",
    type: "PUZ",
    category: "PUZ • Maramureș",
    description:
      "Plan Urbanistic Zonal pentru reglementarea urbanistică și organizarea funcțională a zonei studiate.",
    image: "/images/portofolio/puz/puz-metro.jpg",
    href: "/proiecte/puz-metro",
  },
  {
    title: "PUZ Ocna Șugatag",
    type: "PUZ",
    category: "PUZ • Maramureș",
    description:
      "Plan Urbanistic Zonal pentru reglementarea urbanistică și organizarea funcțională a zonei studiate.",
    image: "/images/portofolio/puz/puz-ocna-sugatag.jpg",
    href: "/proiecte/puz-ocna-sugatag",
  },
  {
    title: "PUZ Ocna Șugatag 2",
    type: "PUZ",
    category: "PUZ • Maramureș",
    description:
      "Plan Urbanistic Zonal pentru reglementarea urbanistică și organizarea funcțională a zonei studiate.",
    image: "/images/portofolio/puz/puz-ocna-sugatag-2.jpg",
    href: "/proiecte/puz-ocna-sugatag-2",
  },
  {
    title: "PUZ Săcălășeni",
    type: "PUZ",
    category: "PUZ • Maramureș",
    description:
      "Plan Urbanistic Zonal pentru reglementarea urbanistică și organizarea funcțională a zonei studiate.",
    image: "/images/portofolio/puz/puz-sacalaseni.jpg",
    href: "/proiecte/puz-sacalaseni",
  },
  {
    title: "PUZ Suciu de Sus",
    type: "PUZ",
    category: "PUZ • Maramureș",
    description:
      "Plan Urbanistic Zonal pentru reglementarea urbanistică și organizarea funcțională a zonei studiate.",
    image: "/images/portofolio/puz/puz-suciu-de-sus.jpg",
    href: "/proiecte/puz-suciu-de-sus",
  },

  {
    title: "PUD Centru paliativ",
    type: "PUD",
    category: "PUD • Groși • Maramureș",
    description:
      "Documentație de urbanism pentru detalierea condițiilor de construire și organizarea urbanistică a amplasamentului destinat unui centru paliativ.",
    image: "/images/portofolio/pud/locuinta-individuala.jpg",
    href: "/proiecte/pud-centru-social",
  },
  {
    title: "PUD Locuință individuală",
    type: "PUD",
    category: "PUD • Groși • Maramureș",
    description:
      "Documentație de urbanism pentru detalierea condițiilor de construire și organizarea unei parcele destinate locuirii individuale.",
    image: "/images/portofolio/pud/centru-paliativ.jpg",
    href: "/proiecte/pud-locuinta-individuala",
  },

  {
    title: "PMUD Ulmeni",
    type: "PMUD",
    category: "PMUD • Maramureș",
    description:
      "Plan de Mobilitate Urbană Durabilă pentru îmbunătățirea accesibilității, siguranței circulației și dezvoltarea mobilității durabile în orașul Ulmeni.",
    image: "/images/portofolio/pmud-ulmeni/pmud-ulmeni.jpg",
    href: "/proiecte/pmud-ulmeni",
  },
  {
    title: "PMUD Zlatna",
    type: "PMUD",
    category: "PMUD • Alba",
    description:
      "Plan de Mobilitate Urbană Durabilă pentru îmbunătățirea accesibilității, siguranței circulației și dezvoltarea mobilității durabile în orașul Zlatna.",
    image: "/images/portofolio/pmud-zlatna/pmud-zlatna.jpg",
    href: "/proiecte/pmud-zlatna",
  },
];

export default function PortofolioPage() {
  const [activeCategory, setActiveCategory] = useState("PUG");

  const activeCategoryData = categories.find(
    (category) => category.name === activeCategory
  );

  const filteredProjects = projects.filter(
    (project) => project.type === activeCategory
  );

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

      <section className="px-8 pb-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => {
              const isActive = activeCategory === category.name;

              return (
                <button
                  key={category.name}
                  type="button"
                  onClick={() => setActiveCategory(category.name)}
                  className={`rounded-full border px-9 py-4 text-sm uppercase tracking-[0.25em] transition-all duration-300 hover:-translate-y-1 ${
                    isActive ? category.active : category.inactive
                  }`}
                >
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 border-b border-zinc-200 pb-6">
            <p className="mb-3 text-sm uppercase tracking-[0.4em] text-zinc-400">
              {activeCategoryData?.label}
            </p>

            <h2 className="text-5xl font-light text-zinc-950">
              {activeCategory}
            </h2>
          </div>

          {filteredProjects.length > 0 ? (
            <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
              {filteredProjects.map((project) => (
                <Link
                  key={project.title}
                  href={project.href}
                  className="group overflow-hidden rounded-[36px] border border-zinc-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                  <div className="relative h-[420px] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-10">
                    <p className="mb-4 text-sm uppercase tracking-[0.25em] text-zinc-400">
                      {project.category}
                    </p>

                    <h3 className="mb-5 text-4xl font-light text-zinc-950">
                      {project.title}
                    </h3>

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
          ) : (
            <div className="rounded-[36px] border border-zinc-200 bg-zinc-50 px-10 py-16">
              <p className="text-xl font-light text-zinc-500">
                Proiectele din această categorie vor fi adăugate în curând.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
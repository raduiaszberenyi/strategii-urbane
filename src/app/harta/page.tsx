"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const projects = [
  {
    title: "PUG Zlatna",
    county: "Alba",
    type: "PUG",
    lat: 46.1067,
    lng: 23.2311,
    href: "/proiecte/pug-zlatna",
    image: "/images/portofolio/zlatna/zlatna-cover.jpg",
    description:
      "Strategie urbană, mobilitate, turism și reconversie economică într-un teritoriu cu patrimoniu industrial.",
  },
  {
    title: "PUG Groși",
    county: "Maramureș",
    type: "PUG",
    lat: 47.6167,
    lng: 23.6167,
    href: "/proiecte/pug-grosi",
    image: "/images/portofolio/grosi/grosi-cover.jpg",
    description:
      "Dezvoltare periurbană, mobilitate și structurarea noului centru al comunei.",
  },
  {
    title: "PUG Coltău",
    county: "Maramureș",
    type: "PUG",
    lat: 47.6,
    lng: 23.5167,
    href: "/proiecte/pug-coltau",
    image: "/images/portofolio/coltau/coltau-cover.jpg",
    description:
      "Valorificarea patrimoniului Castelului Teleki și dezvoltarea funcțiunilor economice și publice.",
  },
  {
    title: "PUG Negrești-Oaș",
    county: "Satu Mare",
    type: "PUG",
    lat: 47.8667,
    lng: 23.4333,
    href: "/proiecte/pug-negresti-oas",
    image: "/images/portofolio/negresti-oas/negresti-oas-cover.jpg",
    description:
      "Planificare urbană integrată pentru dezvoltarea unui oraș-poartă al Țării Oașului.",
  },
  {
    title: "PUG Câmpulung la Tisa",
    county: "Maramureș",
    type: "PUG",
    lat: 47.9861,
    lng: 23.7739,
    href: "/proiecte/pug-campulung-la-tisa",
    image:
      "/images/portofolio/campulung-la-tisa/campulung-la-tisa-cover.jpg",
    description:
      "Actualizarea Planului Urbanistic General și stabilirea direcțiilor de dezvoltare durabilă.",
  },
  {
    title: "PUG Mireșu Mare",
    county: "Maramureș",
    type: "PUG",
    lat: 47.5,
    lng: 23.3333,
    href: "/proiecte/pug-miresu-mare",
    image: "/images/portofolio/miresu-mare/miresu-mare-cover.jpg",
    description:
      "Documentație de urbanism pentru actualizarea direcțiilor de dezvoltare ale comunei Mireșu Mare.",
  },
  {
    title: "PUG Tăuteu",
    county: "Bihor",
    type: "PUG",
    lat: 47.2667,
    lng: 22.3333,
    href: "/proiecte/pug-tauteu",
    image: "/images/portofolio/tauteu/tauteu-cover.jpg",
    description:
      "Documentație de urbanism general pentru stabilirea direcțiilor de dezvoltare ale comunei Tăuteu.",
  },
  {
    title: "PUG Vadu Izei",
    county: "Maramureș",
    type: "PUG",
    lat: 47.8833,
    lng: 23.9333,
    href: "/proiecte/pug-vadu-izei",
    image: "/images/portofolio/vadu-izei/vadu-izei-cover.jpg",
    description:
      "Documentație de urbanism general pentru stabilirea direcțiilor de dezvoltare ale comunei Vadu Izei.",
  },
];

const filters = ["Toate", "PUG", "PUZ", "Strategie", "GIS"];

const stats = [
  {
    value: 8,
    suffix: "",
    label: "PUG-uri",
  },
  {
    value: 4,
    suffix: "",
    label: "Județe",
  },
  {
    value: 8,
    suffix: "",
    label: "Localități",
  },
  {
    value: 40,
    suffix: "+",
    label: "Planșe",
  },
];

function normalize(text: string) {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function AnimatedNumber({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let frame: number;
    const duration = 1000;
    const start = performance.now();

    const animate = (currentTime: number) => {
      const progress = Math.min((currentTime - start) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const nextValue = Math.round(easedProgress * value);

      setDisplayValue(nextValue);

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [value]);

  return (
    <>
      {displayValue}
      {suffix}
    </>
  );
}

declare global {
  interface Window {
    L: any;
    projectsMap?: any;
    projectMarkers?: any[];
    markerClusterGroup?: any;
    selectProjectFromMap?: (index: number) => void;
    updateSelectedMarker?: (title: string) => void;
  }
}

export default function HartaPage() {
  const [activeFilter, setActiveFilter] = useState("Toate");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesFilter =
        activeFilter === "Toate" || project.type === activeFilter;

      const query = normalize(searchTerm.trim());

      const matchesSearch =
        query.length === 0 ||
        normalize(project.title).includes(query) ||
        normalize(project.county).includes(query) ||
        normalize(project.type).includes(query);

      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchTerm]);

  useEffect(() => {
    if (filteredProjects.length === 0) return;

    if (!filteredProjects.includes(selectedProject)) {
      setSelectedProject(filteredProjects[0]);
    }
  }, [filteredProjects, selectedProject]);

  useEffect(() => {
    window.selectProjectFromMap = (index: number) => {
      setSelectedProject(projects[index]);
    };

    const loadLeaflet = async () => {
      if (!document.querySelector("#leaflet-css")) {
        const link = document.createElement("link");
        link.id = "leaflet-css";
        link.rel = "stylesheet";
        link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
        document.head.appendChild(link);
      }

      if (!document.querySelector("#leaflet-cluster-css")) {
        const link = document.createElement("link");
        link.id = "leaflet-cluster-css";
        link.rel = "stylesheet";
        link.href =
          "https://unpkg.com/leaflet.markercluster@1.5.3/dist/MarkerCluster.css";
        document.head.appendChild(link);
      }

      if (!document.querySelector("#leaflet-cluster-default-css")) {
        const link = document.createElement("link");
        link.id = "leaflet-cluster-default-css";
        link.rel = "stylesheet";
        link.href =
          "https://unpkg.com/leaflet.markercluster@1.5.3/dist/MarkerCluster.Default.css";
        document.head.appendChild(link);
      }

      if (!document.querySelector("#harta-premium-style")) {
        const style = document.createElement("style");
        style.id = "harta-premium-style";
        style.innerHTML = `
          .leaflet-container {
            font-family: inherit;
          }

          .leaflet-control-attribution {
            font-size: 10px;
            color: #71717a;
            background: rgba(255, 255, 255, 0.82);
            backdrop-filter: blur(12px);
            border-radius: 999px 0 0 0;
            padding: 4px 8px;
          }

          .leaflet-tile-pane {
            filter: grayscale(0.25) contrast(0.92) brightness(1.04);
          }

          .su-marker {
            position: relative;
            width: 54px;
            height: 54px;
            border-radius: 20px 20px 20px 4px;
            background: rgba(255, 255, 255, 0.96);
            border: 1px solid rgba(24, 24, 27, 0.12);
            box-shadow:
              0 18px 50px rgba(0, 0, 0, 0.28),
              0 0 0 8px rgba(79, 182, 198, 0.12);
            display: flex;
            align-items: center;
            justify-content: center;
            transform: rotate(-45deg);
            transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;
          }

          .su-marker::before {
            content: "";
            position: absolute;
            inset: -10px;
            border-radius: 24px 24px 24px 6px;
            border: 1px solid rgba(154, 195, 28, 0.35);
            animation: su-pulse 2.2s ease-out infinite;
          }

          .su-marker-inner {
            position: relative;
            z-index: 1;
            width: 36px;
            height: 36px;
            border-radius: 12px;
            background: white;
            display: flex;
            align-items: center;
            justify-content: center;
            transform: rotate(45deg);
          }

          .su-marker-inner img {
            width: 31px;
            height: 31px;
            object-fit: contain;
            display: block;
          }

          .su-marker:hover {
            transform: rotate(-45deg) scale(1.1);
            box-shadow:
              0 22px 60px rgba(0, 0, 0, 0.34),
              0 0 0 10px rgba(154, 195, 28, 0.16);
          }

          .su-marker-selected {
            transform: rotate(-45deg) scale(1.18);
            box-shadow:
              0 24px 70px rgba(0, 0, 0, 0.38),
              0 0 0 12px rgba(79, 182, 198, 0.2),
              0 0 0 22px rgba(154, 195, 28, 0.12);
          }

          .su-marker-selected::before {
            border-color: rgba(79, 182, 198, 0.55);
            animation-duration: 1.6s;
          }

          @keyframes su-pulse {
            0% {
              transform: scale(0.75);
              opacity: 0.8;
            }

            70% {
              transform: scale(1.35);
              opacity: 0;
            }

            100% {
              transform: scale(1.35);
              opacity: 0;
            }
          }

          .marker-cluster-small,
          .marker-cluster-medium,
          .marker-cluster-large {
            background: rgba(255, 255, 255, 0.72);
            border: 1px solid rgba(24, 24, 27, 0.1);
            box-shadow:
              0 18px 50px rgba(0, 0, 0, 0.22),
              0 0 0 8px rgba(79, 182, 198, 0.11);
            backdrop-filter: blur(12px);
          }

          .marker-cluster-small div,
          .marker-cluster-medium div,
          .marker-cluster-large div {
            background: linear-gradient(135deg, #9ac31c, #4fb6c6);
            color: white;
            font-weight: 700;
            font-family: inherit;
          }

          .marker-cluster span {
            line-height: 40px;
          }

          .leaflet-popup-content-wrapper,
          .leaflet-popup-tip {
            display: none;
          }
        `;
        document.head.appendChild(style);
      }

      if (!window.L) {
        await new Promise<void>((resolve) => {
          const script = document.createElement("script");
          script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
          script.onload = () => resolve();
          document.body.appendChild(script);
        });
      }

      if (!window.L.MarkerClusterGroup) {
        await new Promise<void>((resolve) => {
          const script = document.createElement("script");
          script.src =
            "https://unpkg.com/leaflet.markercluster@1.5.3/dist/leaflet.markercluster.js";
          script.onload = () => resolve();
          document.body.appendChild(script);
        });
      }

      const mapContainer = document.getElementById("projects-map");

      if (!mapContainer || mapContainer.dataset.loaded === "true") return;

      mapContainer.dataset.loaded = "true";

      const map = window.L.map("projects-map", {
        scrollWheelZoom: true,
        zoomControl: false,
      }).setView([47.15, 23.35], 7);

      window.projectsMap = map;
      window.projectMarkers = [];
      window.markerClusterGroup = window.L.markerClusterGroup({
        showCoverageOnHover: false,
        spiderfyOnMaxZoom: true,
        disableClusteringAtZoom: 11,
        maxClusterRadius: 56,
      });

      window.updateSelectedMarker = (title: string) => {
        window.projectMarkers?.forEach((marker, markerIndex) => {
          const markerElement = marker.getElement?.();
          const markerInner = markerElement?.querySelector(".su-marker");

          if (!markerInner) return;

          if (projects[markerIndex].title === title) {
            markerInner.classList.add("su-marker-selected");
          } else {
            markerInner.classList.remove("su-marker-selected");
          }
        });
      };

      window.L.control
        .zoom({
          position: "bottomright",
        })
        .addTo(map);

      window.L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
          subdomains: "abcd",
          maxZoom: 20,
        }
      ).addTo(map);

      const bounds = window.L.latLngBounds([]);

      const customIcon = window.L.divIcon({
        className: "",
        html: `
          <div class="su-marker">
            <div class="su-marker-inner">
              <img src="/logo.png" alt="Strategii Urbane" />
            </div>
          </div>
        `,
        iconSize: [54, 54],
        iconAnchor: [27, 54],
      });

      projects.forEach((project, index) => {
        bounds.extend([project.lat, project.lng]);

        const marker = window.L.marker([project.lat, project.lng], {
          icon: customIcon,
        });

        marker.on("click", () => {
          setSelectedProject(project);
          window.updateSelectedMarker?.(project.title);

          map.flyTo([project.lat, project.lng], 10, {
            duration: 0.8,
          });
        });

        window.projectMarkers?.push(marker);
        window.markerClusterGroup.addLayer(marker);
      });

      map.addLayer(window.markerClusterGroup);

      map.fitBounds(bounds, {
        padding: [80, 80],
        maxZoom: 8,
      });

      window.updateSelectedMarker?.(projects[0].title);
    };

    loadLeaflet();
  }, []);

  useEffect(() => {
    if (!window.projectMarkers || !window.projectsMap) return;

    window.markerClusterGroup?.clearLayers();

    window.projectMarkers.forEach((marker, index) => {
      const project = projects[index];
      const isVisible = filteredProjects.includes(project);

      if (isVisible) {
        window.markerClusterGroup?.addLayer(marker);
      }
    });

    if (filteredProjects.length > 0) {
      const bounds = window.L.latLngBounds(
        filteredProjects.map((project) => [project.lat, project.lng])
      );

      window.projectsMap.fitBounds(bounds, {
        padding: [80, 80],
        maxZoom: 8,
      });
    }
  }, [filteredProjects]);

  useEffect(() => {
    window.updateSelectedMarker?.(selectedProject.title);
  }, [selectedProject]);

  return (
    <main className="bg-white pt-32">
      <section className="px-8 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-sm uppercase tracking-[0.4em] text-zinc-500">
            Hartă interactivă
          </p>

          <h1 className="mb-10 max-w-5xl text-6xl font-light leading-tight text-zinc-950 md:text-7xl">
            Proiecte Strategii
            <br />
            Urbane în teritoriu.
          </h1>

          <p className="max-w-3xl text-2xl leading-relaxed text-zinc-600">
            Localizarea proiectelor de urbanism și planificare teritorială
            dezvoltate pentru orașe, comune și teritorii aflate în
            transformare.
          </p>
        </div>
      </section>

      <section className="px-8 pb-16">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-[32px] border border-zinc-200 bg-white p-8 shadow-sm"
            >
              <p className="mb-3 text-5xl font-light text-zinc-950">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-8 pb-32">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[420px_1fr]">
          <aside className="overflow-hidden rounded-[36px] border border-zinc-200 bg-white shadow-sm">
            <div className="relative h-[260px]">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                sizes="420px"
                className="object-cover"
              />
            </div>

            <div className="p-8">
              <p className="mb-4 text-sm uppercase tracking-[0.25em] text-zinc-400">
                {selectedProject.type} • {selectedProject.county}
              </p>

              <h2 className="mb-5 text-4xl font-light leading-tight text-zinc-950">
                {selectedProject.title}
              </h2>

              <p className="mb-8 leading-relaxed text-zinc-600">
                {selectedProject.description}
              </p>

              <Link
                href={selectedProject.href}
                className="inline-flex rounded-full border border-zinc-300 px-6 py-3 text-sm uppercase tracking-[0.18em] text-zinc-900 transition hover:border-black hover:bg-black hover:text-white"
              >
                Vezi proiectul
              </Link>
            </div>

            <div className="border-t border-zinc-200 p-4">
              <input
                type="text"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Caută proiect sau județ..."
                className="mb-4 w-full rounded-full border border-zinc-200 px-5 py-3 text-sm text-zinc-700 outline-none transition placeholder:text-zinc-400 focus:border-zinc-950"
              />

              <div className="mb-4 flex flex-wrap gap-2">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setActiveFilter(filter)}
                    className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.16em] transition ${
                      activeFilter === filter
                        ? "border-zinc-950 bg-zinc-950 text-white"
                        : "border-zinc-200 bg-white text-zinc-500 hover:border-zinc-950 hover:text-zinc-950"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>

              <div className="grid gap-2">
                {filteredProjects.length > 0 ? (
                  filteredProjects.map((project) => (
                    <button
                      key={project.title}
                      type="button"
                      onClick={() => {
                        setSelectedProject(project);

                        if (window.projectsMap) {
                          window.projectsMap.flyTo(
                            [project.lat, project.lng],
                            10,
                            {
                              duration: 0.8,
                            }
                          );
                        }
                      }}
                      className={`rounded-2xl px-4 py-3 text-left text-sm transition ${
                        selectedProject.title === project.title
                          ? "bg-zinc-950 text-white"
                          : "bg-zinc-50 text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950"
                      }`}
                    >
                      {project.title}
                    </button>
                  ))
                ) : (
                  <p className="rounded-2xl bg-zinc-50 px-4 py-4 text-sm text-zinc-500">
                    Nu există proiecte pentru căutarea introdusă.
                  </p>
                )}
              </div>
            </div>
          </aside>

          <div className="overflow-hidden rounded-[36px] border border-zinc-200 bg-white shadow-sm">
            <div id="projects-map" className="h-[820px] w-full" />
          </div>
        </div>
      </section>
    </main>
  );
}

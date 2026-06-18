import Navbar from "../../components/Navbar";

export default function DesprePage() {
  return (
    <>
      <Navbar />

      <main className="bg-white pt-32">
        <section className="px-8 py-24">
          <div className="mx-auto max-w-7xl">
            <p className="mb-6 text-sm uppercase tracking-[0.4em] text-zinc-500">
              Despre noi
            </p>

            <h1 className="mb-10 max-w-5xl text-7xl font-light leading-tight text-zinc-950">
              Urbanism, strategie și analiză spațială pentru teritorii în transformare.
            </h1>

            <p className="max-w-3xl text-2xl leading-relaxed text-zinc-600">
              STRATEGII URBANE este o firmă specializată în planificare urbană,
              documentații de urbanism, GIS și consultanță strategică pentru
              administrații publice, investitori și comunități locale.
            </p>
          </div>
        </section>

        <section className="bg-zinc-100 px-8 py-28">
          <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
            <h2 className="text-5xl font-light leading-tight">
              Construim documentații care leagă viziunea de realitatea teritoriului.
            </h2>

            <div className="space-y-6 text-lg leading-relaxed text-zinc-600">
              <p>
                Abordarea noastră integrează analiza spațială, reglementarea
                urbanistică, strategiile de dezvoltare și instrumentele digitale
                necesare pentru fundamentarea deciziilor.
              </p>

              <p>
                Lucrăm cu date, hărți, planșe, teren, comunități și administrații,
                pentru a propune soluții coerente, aplicabile și sustenabile.
              </p>
            </div>
          </div>
        </section>

        <section className="px-8 py-32">
          <div className="mx-auto max-w-7xl">
            <p className="mb-6 text-sm uppercase tracking-[0.4em] text-zinc-500">
              Expertiză
            </p>

            <h2 className="mb-16 text-5xl font-light">
              Competențe integrate
            </h2>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                "Planuri Urbanistice Generale",
                "Planuri Urbanistice Zonale",
                "Regulamente locale de urbanism",
                "GIS și baze de date spațiale",
                "Strategii de dezvoltare locală",
                "Studii de fundamentare",
                "Analize teritoriale",
                "Mobilitate și infrastructură",
                "Patrimoniu, peisaj și regenerare urbană",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[28px] border border-zinc-200 p-8 text-xl font-light"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-zinc-950 px-8 py-32 text-white">
          <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
            <div>
              <p className="mb-6 text-sm uppercase tracking-[0.4em] text-zinc-500">
                Instrumente
              </p>

              <h2 className="text-5xl font-light leading-tight">
                Urbanism fundamentat prin date, cartografie și analiză GIS.
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {["ArcGIS Pro", "QGIS", "AutoCAD", "Analiză GIS", "Cartografie digitală", "Drone & teren"].map(
                (tool) => (
                  <div
                    key={tool}
                    className="rounded-[24px] border border-white/10 bg-white/5 p-6 text-lg"
                  >
                    {tool}
                  </div>
                )
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
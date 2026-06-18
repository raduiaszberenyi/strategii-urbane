import Navbar from "../../components/Navbar";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white pt-32">
        <section className="px-8 py-24">
          <div className="mx-auto max-w-7xl">
            <p className="mb-6 text-sm uppercase tracking-[0.4em] text-zinc-500">
              Contact
            </p>

            <h1 className="mb-10 max-w-5xl text-7xl font-light leading-tight text-zinc-950">
              Hai să discutăm
              <br />
              despre următorul
              <br />
              proiect.
            </h1>

            <p className="max-w-3xl text-2xl leading-relaxed text-zinc-600">
              Pentru informații privind documentații de urbanism,
              strategii teritoriale, GIS sau colaborări, ne poți contacta
              folosind datele de mai jos.
            </p>
          </div>
        </section>

        <section className="px-8 pb-32">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
            <div className="rounded-[32px] bg-zinc-100 p-10">
              <p className="mb-4 text-sm uppercase tracking-[0.25em] text-zinc-500">
                Email
              </p>

              <p className="text-2xl font-light">
                strategiiurbane@gmail.com
              </p>
            </div>

            <div className="rounded-[32px] bg-zinc-100 p-10">
              <p className="mb-4 text-sm uppercase tracking-[0.25em] text-zinc-500">
                Telefon
              </p>

              <p className="text-2xl font-light">
                0754 390 400
              </p>
            </div>

            <div className="rounded-[32px] bg-zinc-100 p-10">
              <p className="mb-4 text-sm uppercase tracking-[0.25em] text-zinc-500">
                Localizare
              </p>

              <p className="text-2xl font-light">
                Baia Mare, România
              </p>
            </div>
          </div>
        </section>

        <section className="bg-zinc-950 px-8 py-32 text-white">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-6 text-sm uppercase tracking-[0.4em] text-zinc-500">
              STRATEGII URBANE
            </p>

            <h2 className="mb-10 text-5xl font-light leading-tight">
              Urbanism, planificare teritorială și analiză GIS
              pentru comunități și teritorii în transformare.
            </h2>

            <a
              href="mailto:strategiiurbane@gmail.com"
              className="inline-block rounded-full bg-white px-8 py-4 text-black transition hover:bg-zinc-200"
            >
              Trimite un mesaj
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
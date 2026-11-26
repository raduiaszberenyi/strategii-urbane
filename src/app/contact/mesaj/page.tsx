
"use client";

import Link from "next/link";
import { type FormEvent } from "react";
import Navbar from "../../../components/Navbar";

export default function MesajPage() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const nume = String(data.get("nume") || "").trim();
    const email = String(data.get("email") || "").trim();
    const telefon = String(data.get("telefon") || "").trim();
    const serviciu = String(data.get("serviciu") || "").trim();
    const mesaj = String(data.get("mesaj") || "").trim();

    const destinatar = String(
      data.get("destinatar") || "strategiiurbane@yahoo.com"
    );

    const adresaEmail =
      destinatar === "strategiiurbane@gmail.com"
        ? "strategiiurbane@gmail.com"
        : "strategiiurbane@yahoo.com";

    const subiect = `Solicitare Strategii Urbane - ${serviciu}`;

    const continut = [
      "Bună ziua,",
      "",
      "Doresc să vă transmit următoarea solicitare:",
      "",
      `Nume: ${nume}`,
      `Email: ${email}`,
      `Telefon: ${telefon || "Nu a fost completat"}`,
      `Tip solicitare: ${serviciu}`,
      "",
      "Descrierea solicitării:",
      mesaj,
      "",
      "Vă mulțumesc!",
      nume,
    ].join("\n");

    let composeUrl: string;

    if (adresaEmail === "strategiiurbane@yahoo.com") {
      const params = new URLSearchParams({
        to: adresaEmail,
        subject: subiect,
        body: continut,
      });

      composeUrl = `https://compose.mail.yahoo.com/?${params.toString()}`;
    } else {
      const params = new URLSearchParams({
        view: "cm",
        fs: "1",
        to: adresaEmail,
        su: subiect,
        body: continut,
      });

      composeUrl = `https://mail.google.com/mail/?${params.toString()}`;
    }

    window.location.assign(composeUrl);
  }

  const inputStyle =
    "w-full rounded-2xl border border-zinc-200 bg-white px-5 py-4 text-base text-zinc-950 outline-none transition focus:border-zinc-950";

  const labelStyle =
    "mb-3 block text-sm uppercase tracking-[0.18em] text-zinc-500";

  return (
    <>
      <Navbar />

      <main className="bg-white pt-32">
        <section className="px-8 py-20">
          <div className="mx-auto max-w-7xl">
            <Link
              href="/contact"
              className="mb-12 inline-block text-sm uppercase tracking-[0.2em] text-zinc-500 transition hover:text-zinc-950"
            >
              ← Înapoi la contact
            </Link>

            <p className="mb-6 text-sm uppercase tracking-[0.4em] text-zinc-500">
              Contact • Strategii Urbane
            </p>

            <h1 className="mb-10 max-w-5xl text-5xl font-light leading-tight text-zinc-950 md:text-7xl">
              Spune-ne despre
              <br />
              proiectul tău.
            </h1>

            <p className="max-w-3xl text-xl leading-relaxed text-zinc-600 md:text-2xl">
              Ai nevoie de servicii de urbanism, planificare
              teritorială sau GIS? Completează formularul și
              transmite-ne solicitarea ta.
            </p>
          </div>
        </section>

        <section className="px-8 pb-32">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.5fr_1fr]">
            <form
              onSubmit={handleSubmit}
              className="rounded-[32px] bg-zinc-100 p-6 md:p-10"
            >
              <p className="mb-10 text-sm uppercase tracking-[0.25em] text-zinc-500">
                Formular de contact
              </p>

              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <label htmlFor="nume" className={labelStyle}>
                    Nume și prenume *
                  </label>

                  <input
                    id="nume"
                    name="nume"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Numele tău"
                    className={inputStyle}
                  />
                </div>

                <div>
                  <label htmlFor="email" className={labelStyle}>
                    Adresă de email *
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="email@exemplu.ro"
                    className={inputStyle}
                  />
                </div>

                <div>
                  <label htmlFor="telefon" className={labelStyle}>
                    Telefon
                  </label>

                  <input
                    id="telefon"
                    name="telefon"
                    type="tel"
                    autoComplete="tel"
                    placeholder="Număr de telefon"
                    className={inputStyle}
                  />
                </div>

                <div>
                  <label htmlFor="serviciu" className={labelStyle}>
                    Tipul solicitării *
                  </label>

                  <select
                    id="serviciu"
                    name="serviciu"
                    required
                    defaultValue=""
                    className={inputStyle}
                  >
                    <option value="" disabled>
                      Selectează serviciul
                    </option>

                    <option value="Plan Urbanistic General (PUG)">
                      Plan Urbanistic General (PUG)
                    </option>

                    <option value="Plan Urbanistic Zonal (PUZ)">
                      Plan Urbanistic Zonal (PUZ)
                    </option>

                    <option value="Plan Urbanistic de Detaliu (PUD)">
                      Plan Urbanistic de Detaliu (PUD)
                    </option>

                    <option value="Plan de Mobilitate Urbană Durabilă (PMUD)">
                      Mobilitate urbană (PMUD)
                    </option>

                    <option value="GIS și analize teritoriale">
                      GIS și analize teritoriale
                    </option>

                    <option value="Strategii și consultanță">
                      Strategii și consultanță
                    </option>

                    <option value="Altă solicitare">
                      Altă solicitare
                    </option>
                  </select>
                </div>
              </div>

              <div className="mt-8">
                <label htmlFor="mesaj" className={labelStyle}>
                  Descrierea solicitării *
                </label>

                <textarea
                  id="mesaj"
                  name="mesaj"
                  required
                  minLength={10}
                  rows={7}
                  placeholder="Descrie-ne pe scurt ce dorești să realizezi, localizarea proiectului și alte informații relevante..."
                  className={`${inputStyle} resize-y`}
                />
              </div>

              <div className="mt-8">
                <label htmlFor="destinatar" className={labelStyle}>
                  Adresa către care dorești să trimiți
                </label>

                <select
                  id="destinatar"
                  name="destinatar"
                  defaultValue="strategiiurbane@yahoo.com"
                  className={inputStyle}
                >
                  <option value="strategiiurbane@yahoo.com">
                    strategiiurbane@yahoo.com
                  </option>

                  <option value="strategiiurbane@gmail.com">
                    strategiiurbane@gmail.com
                  </option>
                </select>
              </div>

              <button
                type="submit"
                className="mt-10 inline-flex w-full items-center justify-center rounded-full bg-zinc-950 px-8 py-5 text-sm uppercase tracking-[0.18em] text-white transition hover:bg-zinc-800 md:w-auto"
              >
                Continuă către email
              </button>

              <p className="mt-5 max-w-xl text-sm leading-relaxed text-zinc-500">
                Se va deschide Yahoo Mail sau Gmail, în funcție de
                adresa selectată. Verifică mesajul și confirmă
                expedierea din contul tău de email.
              </p>
            </form>

            <aside className="space-y-6">
              <div className="rounded-[32px] bg-zinc-950 p-10 text-white">
                <p className="mb-6 text-sm uppercase tracking-[0.25em] text-zinc-400">
                  Preferi să discutăm telefonic?
                </p>

                <h2 className="mb-8 text-3xl font-light leading-snug">
                  Suntem disponibili pentru a discuta despre proiectul tău.
                </h2>

                <a
                  href="tel:+40745390400"
                  className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm uppercase tracking-[0.14em] text-zinc-950 transition hover:bg-zinc-200"
                >
                  Sună la 0745 390 400
                </a>
              </div>

              <div className="rounded-[32px] bg-zinc-100 p-10">
                <p className="mb-6 text-sm uppercase tracking-[0.25em] text-zinc-500">
                  Contact direct
                </p>

                <div className="space-y-5 text-lg text-zinc-800">
                  <a
                    href="mailto:strategiiurbane@gmail.com"
                    className="block break-words transition hover:text-zinc-500"
                  >
                    strategiiurbane@gmail.com
                  </a>

                  <a
                    href="mailto:strategiiurbane@yahoo.com"
                    className="block break-words transition hover:text-zinc-500"
                  >
                    strategiiurbane@yahoo.com
                  </a>

                  <a
                    href="tel:+40745390400"
                    className="block transition hover:text-zinc-500"
                  >
                    0745 390 400
                  </a>
                </div>

                <div className="mt-10 border-t border-zinc-200 pt-8">
                  <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                    Localizare
                  </p>

                  <p className="mt-4 text-xl font-light text-zinc-950">
                    Baia Mare, România
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>
    </>
  );
}

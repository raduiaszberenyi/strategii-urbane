import Image from "next/image";
import Link from "next/link";

const plans = [
  {
    title: "Plan de situație",
    image: "/images/portofolio/campulung-la-tisa/2. Plan de situație .jpg",
  },
];

export default function PugCampulungLaTisaPage() {
  return (
    <main className="bg-white pt-32">
      <section className="px-8 py-24">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/portofolio"
            className="mb-12 inline-block text-sm uppercase tracking-[0.2em] text-zinc-500 transition hover:text-zinc-950"
          >
            ← Înapoi la portofoliu
          </Link>

          <p className="mb-6 text-sm uppercase tracking-[0.4em] text-zinc-500">
            PUG • Maramureș
          </p>

          <h1 className="mb-10 max-w-5xl text-6xl font-light leading-tight text-zinc-950 md:text-7xl">
            PUG Câmpulung
            <br />
            la Tisa
          </h1>

          <p className="max-w-3xl text-2xl leading-relaxed text-zinc-600">
            Actualizarea Planului Urbanistic General și stabilirea direcțiilor
            de dezvoltare durabilă ale comunei Câmpulung la Tisa.
          </p>
        </div>
      </section>

      <section className="px-8 pb-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[36px] border border-zinc-200 bg-white">
          <div className="relative h-[620px]">
            <Image
              src="/images/portofolio/campulung-la-tisa/campulung-la-tisa-cover.jpg"
              alt="PUG Câmpulung la Tisa"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-10 text-4xl font-light text-zinc-950">Planșe</h2>

          <div className="grid gap-10">
            {plans.map((plan) => (
              <div
                key={plan.image}
                className="overflow-hidden rounded-[36px] border border-zinc-200 bg-white"
              >
                <div className="border-b border-zinc-200 p-6">
                  <h3 className="text-sm uppercase tracking-[0.25em] text-zinc-500">
                    {plan.title}
                  </h3>
                </div>

                <div className="relative h-[780px] bg-zinc-100">
                  <Image
                    src={plan.image}
                    alt={plan.title}
                    fill
                    sizes="100vw"
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
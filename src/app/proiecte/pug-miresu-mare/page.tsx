import Image from "next/image";
import Link from "next/link";

const plans = [
  {
    title: "Planșa 01",
    image: "/images/portofolio/miresu-mare/plan-01.jpg",
  },
  {
    title: "Planșa 02",
    image: "/images/portofolio/miresu-mare/plan-02.jpg",
  },
  {
    title: "Planșa 03",
    image: "/images/portofolio/miresu-mare/plan-03.jpg",
  },
  {
    title: "Planșa 04",
    image: "/images/portofolio/miresu-mare/plan-04.jpg",
  },
  {
    title: "Planșa 05",
    image: "/images/portofolio/miresu-mare/plan-05.jpg",
  },
];

export default function PugMiresuMarePage() {
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
            PUG Mireșu Mare
          </h1>

          <p className="max-w-3xl text-2xl leading-relaxed text-zinc-600">
            Documentație de urbanism pentru actualizarea direcțiilor de
            dezvoltare ale comunei Mireșu Mare.
          </p>
        </div>
      </section>

      <section className="px-8 pb-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[36px] border border-zinc-200 bg-white">
          <div className="relative h-[620px]">
            <Image
              src="/images/portofolio/miresu-mare/miresu-mare-cover.jpg"
              alt="PUG Mireșu Mare"
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
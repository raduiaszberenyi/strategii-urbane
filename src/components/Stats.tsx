export default function Stats() {
  return (
    <section className="bg-white px-8 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-zinc-500">
            Impact
          </p>

          <h2 className="text-5xl font-light">
            Teritorii modelate prin strategie
          </h2>
        </div>

        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <p className="text-6xl font-light">50+</p>
            <p className="mt-3 text-zinc-600">
              localități analizate
            </p>
          </div>

          <div>
            <p className="text-6xl font-light">100+</p>
            <p className="mt-3 text-zinc-600">
              proiecte realizate
            </p>
          </div>

          <div>
            <p className="text-6xl font-light">10.000+</p>
            <p className="mt-3 text-zinc-600">
              hectare studiate
            </p>
          </div>

          <div>
            <p className="text-6xl font-light">4</p>
            <p className="mt-3 text-zinc-600">
              ani experiență
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
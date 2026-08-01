export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-50/70 via-white to-white dark:from-neutral-950 dark:via-[#0b0b0d] dark:to-[#0b0b0d]">
      <div aria-hidden="true" className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-sky-100 dark:bg-sky-500/10 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-orange-50 dark:bg-orange-500/10 blur-3xl" />
      <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 sm:py-28 lg:px-8">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-50 px-4 py-1.5 text-xs font-semibold text-sky-700 ring-1 ring-sky-100 dark:bg-sky-500/10 dark:text-sky-300 dark:ring-sky-500/20">🍼 Curated for parents</span>
        <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-5xl md:text-6xl">Baby Essentials</h1>
        <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400 sm:text-xl">Handpicked everyday essentials for your little one.</p>
        <div className="mt-8">
          <a href="#products" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-brand to-brand-dark px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:brightness-105 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2">
            Browse Products
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4"><path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m0 0-6-6m6 6 6-6" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import SearchBar from "./SearchBar";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-[#0b0b0d]">
      {/* Soft decorative glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-brand/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-brand/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
        <span className="animate-fade-in-up inline-flex items-center gap-2 rounded-full border border-orange-200 dark:border-orange-500/30 bg-orange-50 dark:bg-orange-500/10 px-4 py-1.5 text-xs font-semibold text-brand">
          🔥 500+ live deals updated daily
        </span>

        <h1 className="animate-fade-in-up mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white text-balance">
          Never Pay Full Price <span className="text-brand">Again.</span>
        </h1>

        <p className="animate-fade-in-up mt-5 max-w-2xl mx-auto text-base sm:text-lg text-neutral-600 dark:text-neutral-400 text-balance">
          Discover today&rsquo;s best deals, discounts, and coupon codes in one place.
        </p>

        <div className="animate-fade-in-up mt-8 max-w-xl mx-auto">
          <SearchBar size="lg" />
        </div>

        <div className="animate-fade-in-up mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/deals"
            className="w-full sm:w-auto rounded-full bg-brand px-7 py-3 text-sm font-semibold text-white hover:bg-brand-dark transition-all shadow-sm hover:shadow-lg hover:-translate-y-0.5"
          >
            Browse Deals
          </Link>
          <Link
            href="/stores"
            className="w-full sm:w-auto rounded-full border border-neutral-300 dark:border-neutral-700 px-7 py-3 text-sm font-semibold text-neutral-800 dark:text-neutral-200 hover:border-brand hover:text-brand transition-all"
          >
            Popular Stores
          </Link>
        </div>

        <div className="animate-fade-in-up mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-neutral-500 dark:text-neutral-500">
          <span className="flex items-center gap-1.5">✅ Verified coupon codes</span>
          <span className="flex items-center gap-1.5">⚡ Updated every day</span>
          <span className="flex items-center gap-1.5">💰 Real cashback offers</span>
        </div>
      </div>
    </section>
  );
}

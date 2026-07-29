import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-[#0b0b0d]">
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-orange-500/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-6 py-24 text-center">
        <div className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-medium text-orange-600 dark:border-orange-500/30 dark:bg-orange-500/10 dark:text-orange-300">
          🇮🇳 India's Smart Deal Discovery Platform
        </div>

        <h1 className="mt-8 text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white sm:text-6xl lg:text-7xl">
          Never Pay
          <span className="block text-orange-500">
            Full Price Again.
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-neutral-600 dark:text-neutral-400">
          Discover verified deals, coupon codes, cashback offers, and price drops
from India's leading online stores. Save money on every purchase with
carefully curated offers.
        </p>

        <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/stores"
            className="rounded-xl bg-orange-500 px-8 py-4 text-base font-semibold text-white transition hover:bg-orange-600"
          >
            Browse Stores
          </Link>

          <Link
            href="/categories"
            className="rounded-xl border border-neutral-300 px-8 py-4 text-base font-semibold hover:border-orange-500 hover:text-orange-500 dark:border-neutral-700"
          >
            Explore Categories
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 text-left sm:grid-cols-3">
          <div className="rounded-2xl border border-neutral-200 p-6 dark:border-neutral-800">
            <div className="text-3xl">🏷️</div>
            <h3 className="mt-4 font-semibold text-lg">
              Verified Deals
            </h3>
            <p className="mt-2 text-sm text-neutral-500">
              Only genuine offers from trusted online stores.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 p-6 dark:border-neutral-800">
            <div className="text-3xl">⚡</div>
            <h3 className="mt-4 font-semibold text-lg">
              Fresh Offers
            </h3>
            <p className="mt-2 text-sm text-neutral-500">
              We continuously add new deals and discounts from trusted retailers.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 p-6 dark:border-neutral-800">
            <div className="text-3xl">💰</div>
            <h3 className="mt-4 font-semibold text-lg">
              Save More
            </h3>
            <p className="mt-2 text-sm text-neutral-500">
              Find the best prices before making your next purchase.
            </p>
          </div>

          <div className="mt-16 text-center">
  <p className="text-sm uppercase tracking-widest text-neutral-500">
    Trusted stores we'll feature
  </p>

  <div className="mt-6 flex flex-wrap justify-center gap-3">
    {[
      "Amazon",
      "Flipkart",
      "Myntra",
      "Ajio",
      "Croma",
      "Reliance Digital",
      "Nykaa",
      "FirstCry",
    ].map((store) => (
      <span
        key={store}
        className="rounded-full border border-neutral-300 px-4 py-2 text-sm dark:border-neutral-700"
      >
        {store}
      </span>
    ))}
  </div>
</div>
        </div>
      </div>
    </section>
  );
}
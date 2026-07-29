import type { Metadata } from "next";
import Hero from "@/components/Hero";
import StoreCard from "@/components/StoreCard";
import CategoryCard from "@/components/CategoryCard";
import { categories, stores } from "@/lib/data";

export const metadata: Metadata = {
  title: "CheckOutDeals — Never Pay Full Price Again",
  description:
    "Discover the best online deals, discount offers, coupon codes, and shopping savings from India's top stores.",
};

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Coming Soon */}
      <section className="mx-auto max-w-5xl px-4 py-20 text-center">
        <h2 className="text-4xl font-bold tracking-tight">
          We're Building Something Awesome 🚀
        </h2>

        <p className="mt-6 text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
          CheckOutDeals is preparing a collection of verified deals, coupons,
          and discounts from India's most trusted online stores.
        </p>

        <div className="mt-10 inline-flex rounded-xl bg-orange-100 px-6 py-3 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300">
          Real deals are being added. Stay tuned!
        </div>
      </section>

      {/* Categories */}
      <section className="bg-neutral-50 dark:bg-neutral-950 border-y border-neutral-200 dark:border-neutral-800">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-3xl font-bold mb-2">
            Browse Categories
          </h2>

          <p className="text-neutral-500 mb-10">
            Explore the categories where we'll be publishing the latest offers.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((category) => (
              <CategoryCard key={category.slug} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Stores */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-3xl font-bold mb-2">
          Supported Stores
        </h2>

        <p className="text-neutral-500 mb-10">
          We'll regularly publish verified deals from these stores.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
          {stores.map((store) => (
            <StoreCard key={store.slug} store={store} />
          ))}
        </div>
      </section>
    </>
  );
}
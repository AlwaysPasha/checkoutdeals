import Link from "next/link";
import type { Metadata } from "next";
import Hero from "@/components/Hero";
import DealCard from "@/components/DealCard";
import StoreCard from "@/components/StoreCard";
import CategoryCard from "@/components/CategoryCard";
import Newsletter from "@/components/Newsletter";
import { categories, deals, stores } from "@/lib/data";

export const metadata: Metadata = {
  title: "CheckOutDeals — Never Pay Full Price Again",
  description:
    "Discover today's best online deals, discounts, coupon codes, flash sales and cashback offers from Amazon, Flipkart, Myntra, Apple, Samsung and more.",
};

export default function HomePage() {
  const featured = deals.filter((d) => d.featured);
  const latest = [...deals]
    .sort((a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime())
    .slice(0, 8);

  return (
    <>
      <Hero />

      {/* Featured Deals */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Featured Deals</h2>
            <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-500">
              Hand-picked offers our team loves right now
            </p>
          </div>
          <Link
            href="/deals"
            className="hidden sm:inline-flex text-sm font-semibold text-brand hover:underline shrink-0"
          >
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {featured.map((deal, i) => (
            <DealCard key={deal.id} deal={deal} priority={i < 4} />
          ))}
        </div>
        <div className="mt-6 sm:hidden text-center">
          <Link href="/deals" className="text-sm font-semibold text-brand hover:underline">
            View all deals →
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-neutral-50 dark:bg-neutral-950 border-y border-neutral-200 dark:border-neutral-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Shop by Category</h2>
            <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-500">
              Find deals in the categories you care about most
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((category) => (
              <CategoryCard key={category.slug} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Latest Deals */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Latest Deals</h2>
            <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-500">
              Freshly added offers, updated daily
            </p>
          </div>
          <Link
            href="/deals"
            className="hidden sm:inline-flex text-sm font-semibold text-brand hover:underline shrink-0"
          >
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {latest.map((deal) => (
            <DealCard key={deal.id} deal={deal} />
          ))}
        </div>
      </section>

      {/* Popular Stores */}
      <section className="bg-neutral-50 dark:bg-neutral-950 border-y border-neutral-200 dark:border-neutral-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Popular Stores</h2>
              <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-500">
                Shop your favorite brands and marketplaces
              </p>
            </div>
            <Link
              href="/stores"
              className="hidden sm:inline-flex text-sm font-semibold text-brand hover:underline shrink-0"
            >
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
            {stores.slice(0, 14).map((store) => (
              <StoreCard key={store.slug} store={store} />
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}

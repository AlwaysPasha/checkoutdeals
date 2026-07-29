import Link from "next/link";
import { categories, stores } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();
  const topCategories = categories.slice(0, 6);
  const topStores = stores.slice(0, 6);

  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand text-white font-bold text-lg">
                C
              </span>
              <span className="text-lg font-bold tracking-tight">
                CheckOut<span className="text-brand">Deals</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-neutral-600 dark:text-neutral-400">
              Your trusted destination for the best online deals, discount codes and cashback
              offers — hand-picked daily so you never pay full price again.
            </p>
            <div className="mt-5 flex gap-3">
              {["X", "IG", "FB"].map((s) => (
                <span
                  key={s}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200 dark:border-neutral-700 text-xs font-semibold text-neutral-500 dark:text-neutral-400"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">Categories</h3>
            <ul className="mt-4 space-y-2.5">
              {topCategories.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/categories/${c.slug}`}
                    className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-brand transition-colors"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">Popular Stores</h3>
            <ul className="mt-4 space-y-2.5">
              {topStores.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/stores/${s.slug}`}
                    className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-brand transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">Company</h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link href="/about" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-brand transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-brand transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/deals" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-brand transition-colors">
                  All Deals
                </Link>
              </li>
              <li>
                <Link href="/stores" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-brand transition-colors">
                  All Stores
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-neutral-200 dark:border-neutral-800 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-neutral-500 dark:text-neutral-500">
            © {year} CheckOutDeals. All rights reserved. Prices and offers are for demonstration
            purposes.
          </p>
          <p className="text-xs text-neutral-500 dark:text-neutral-500">
            Made with 🧡 for smart shoppers everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
}

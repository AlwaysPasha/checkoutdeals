import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-b from-brand to-brand-dark text-white font-bold text-lg shadow-sm">
                C
              </span>
              <span className="text-lg font-bold tracking-tight">
                CheckOut<span className="text-brand">Deals</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
              Curated recommendations for babies and new parents — hand-picked to help you shop
              with confidence.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-neutral-900 dark:text-neutral-100">Company</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/about" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-brand transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-brand transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-neutral-900 dark:text-neutral-100">Legal</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/affiliate-disclosure" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-brand transition-colors">
                  Affiliate Disclosure
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-brand transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-neutral-200 dark:border-neutral-800 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-neutral-500 dark:text-neutral-500">
            © {year} CheckOutDeals. All rights reserved.
          </p>
          <p className="text-xs text-neutral-500 dark:text-neutral-500">
            As an Amazon Associate we may earn from qualifying purchases.
          </p>
        </div>
      </div>
    </footer>
  );
}

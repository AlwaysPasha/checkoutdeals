import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-24 text-center">
      <span className="text-6xl">🍼</span>
      <h1 className="mt-6 text-5xl font-extrabold tracking-tight">404</h1>
      <p className="mt-3 text-xl font-semibold text-neutral-800 dark:text-neutral-200">
        This page wandered off during nap time.
      </p>
      <p className="mt-2 text-neutral-500 dark:text-neutral-500">
        The page you&rsquo;re looking for isn&rsquo;t here. Let&rsquo;s get you back to Baby
        Essentials.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
        <Link
          href="/"
          className="w-full sm:w-auto rounded-full bg-brand px-7 py-3 text-sm font-semibold text-white hover:bg-brand-dark transition-colors"
        >
          Back to Home
        </Link>
        <Link
          href="/#products"
          className="w-full sm:w-auto rounded-full border border-neutral-300 dark:border-neutral-700 px-7 py-3 text-sm font-semibold text-neutral-800 dark:text-neutral-200 hover:border-brand hover:text-brand transition-colors"
        >
          Browse Products
        </Link>
      </div>
    </div>
  );
}

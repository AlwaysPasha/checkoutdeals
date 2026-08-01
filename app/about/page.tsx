import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About CheckOutDeals Baby Essentials.",
  alternates: { canonical: "/about" },
  openGraph: { title: "About | CheckOutDeals", description: "About CheckOutDeals Baby Essentials." },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
        About
      </h1>
      <div className="mt-6 space-y-4 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
        <p>
          CheckOutDeals Baby Essentials is a curated recommendation page built to help parents
          and caregivers find useful, well-regarded baby products without wading through endless
          search results.
        </p>
        <p>
          We organize products by everyday need — wipes, diapering, oral care, safety, bath &
          skincare, feeding, teething, learning, and home essentials — so you can find what you
          need quickly.
        </p>
        <p>
          This is not an online store. We don&rsquo;t sell products directly, hold inventory, or
          process payments. Each &ldquo;Buy on Amazon&rdquo; button links out to Amazon, where
          you can complete your purchase.
        </p>
        <p>
          Some links on this site are Amazon affiliate links. Learn more on our{" "}
          <a href="/affiliate-disclosure" className="text-brand hover:underline">
            Affiliate Disclosure
          </a>{" "}
          page.
        </p>
      </div>
    </div>
  );
}

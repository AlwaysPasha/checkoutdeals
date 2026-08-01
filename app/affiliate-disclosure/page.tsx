import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description: "Affiliate disclosure for CheckOutDeals Baby Essentials.",
  alternates: { canonical: "/affiliate-disclosure" },
};

export default function AffiliateDisclosurePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
        Affiliate Disclosure
      </h1>
      <div className="mt-6 space-y-4 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
        <p>
          CheckOutDeals is a participant in the Amazon affiliate program. This means that some
          of the links on this site are affiliate links, and if you click through and make a
          purchase, we may earn a small commission — at no additional cost to you.
        </p>
        <p>
          The products featured on this site are recommendations based on research and
          usefulness for parents. We do not display prices, discounts, or ratings unless they
          come from real data, and we do not accept payment from brands to feature specific
          products.
        </p>
        <p>
          Always follow the manufacturer&rsquo;s instructions and consult your pediatrician
          before using any product if you have questions about its suitability for your child.
        </p>
      </div>
    </div>
  );
}

import { Suspense } from "react";
import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import DealsExplorer from "@/components/DealsExplorer";
import { DealGridSkeleton } from "@/components/Skeleton";
import { deals } from "@/lib/data";

export const metadata: Metadata = {
  title: "All Deals",
  description:
    "Browse and filter hundreds of live deals, discounts and coupon codes across electronics, fashion, mobiles, travel and more.",
};

export default function DealsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumb items={[{ label: "Deals" }]} />
      <h1 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">All Deals</h1>
      <p className="mt-2 text-neutral-500 dark:text-neutral-500 max-w-2xl">
        Search, filter and sort through every live deal to find exactly what you&rsquo;re
        looking for.
      </p>

      <div className="mt-8">
        <Suspense fallback={<DealGridSkeleton count={12} />}>
          <DealsExplorer deals={deals} />
        </Suspense>
      </div>
    </div>
  );
}

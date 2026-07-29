import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import DealsExplorer from "@/components/DealsExplorer";
import { DealGridSkeleton } from "@/components/Skeleton";
import { deals, getStoreBySlug, stores } from "@/lib/data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return stores.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const store = getStoreBySlug(slug);
  if (!store) return { title: "Store not found" };
  return {
    title: `${store.name} Deals & Coupon Codes`,
    description: `Latest ${store.name} deals, discounts and coupon codes — ${store.description}`,
  };
}

export default async function StorePage({ params }: PageProps) {
  const { slug } = await params;
  const store = getStoreBySlug(slug);
  if (!store) notFound();

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumb items={[{ label: "Stores", href: "/stores" }, { label: store.name }]} />
      <div className="mt-3 flex items-center gap-4">
        <span
          className="flex h-14 w-14 items-center justify-center rounded-xl text-2xl font-bold text-white shrink-0"
          style={{ backgroundColor: `#${store.color}` }}
          aria-hidden="true"
        >
          {store.name.charAt(0)}
        </span>
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">{store.name} Deals</h1>
          <p className="text-neutral-500 dark:text-neutral-500">{store.description}</p>
        </div>
      </div>

      <div className="mt-8">
        <Suspense fallback={<DealGridSkeleton count={8} />}>
          <DealsExplorer deals={deals} initialStore={store.slug} />
        </Suspense>
      </div>
    </div>
  );
}

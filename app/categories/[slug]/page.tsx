import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";
import DealsExplorer from "@/components/DealsExplorer";
import { DealGridSkeleton } from "@/components/Skeleton";
import { Suspense } from "react";
import { categories, deals, getCategoryBySlug } from "@/lib/data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return { title: "Category not found" };
  return {
    title: `${category.name} Deals`,
    description: `Best ${category.name.toLowerCase()} deals, discounts and coupon codes — ${category.description}.`,
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumb items={[{ label: "Categories", href: "/categories" }, { label: category.name }]} />
      <div className="mt-3 flex items-center gap-3">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 dark:bg-orange-500/10 text-2xl">
          {category.icon}
        </span>
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">{category.name} Deals</h1>
          <p className="text-neutral-500 dark:text-neutral-500">{category.description}</p>
        </div>
      </div>

      <div className="mt-8">
        <Suspense fallback={<DealGridSkeleton count={8} />}>
          <DealsExplorer deals={deals} initialCategory={category.slug} />
        </Suspense>
      </div>
    </div>
  );
}

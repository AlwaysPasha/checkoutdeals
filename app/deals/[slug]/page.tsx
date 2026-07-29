import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import DealCard from "@/components/DealCard";
import CopyCouponButton from "@/components/CopyCouponButton";
import {
  deals,
  getCategoryBySlug,
  getDealBySlug,
  getStoreBySlug,
} from "@/lib/data";
import { discountPercent, expiryLabel, formatPrice } from "@/lib/utils";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return deals.map((deal) => ({ slug: deal.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const deal = getDealBySlug(slug);
  if (!deal) return { title: "Deal not found" };

  return {
    title: deal.title,
    description: deal.description,
    openGraph: {
      title: `${deal.title} — CheckOutDeals`,
      description: deal.description,
      images: [{ url: deal.image, width: 600, height: 600, alt: deal.title }],
    },
  };
}

export default async function DealDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const deal = getDealBySlug(slug);
  if (!deal) notFound();

  const store = getStoreBySlug(deal.storeSlug);
  const category = getCategoryBySlug(deal.categorySlug);
  const percentOff = discountPercent(deal.originalPrice, deal.discountedPrice);
  const savings = deal.originalPrice - deal.discountedPrice;

  const related = deals
    .filter(
      (d) =>
        d.id !== deal.id &&
        (d.categorySlug === deal.categorySlug || d.storeSlug === deal.storeSlug)
    )
    .slice(0, 4);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumb
        items={[
          { label: category?.name ?? "Deals", href: `/categories/${deal.categorySlug}` },
          { label: deal.title },
        ]}
      />

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="relative aspect-square w-full overflow-hidden rounded-3xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-800">
          <Image
            src={deal.image}
            alt={deal.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority
          />
          <span className="absolute top-4 left-4 rounded-full bg-brand text-white text-sm font-bold px-3 py-1.5 shadow">
            {percentOff}% OFF
          </span>
        </div>

        <div>
          <div className="flex items-center gap-2">
            {store && (
              <Link
                href={`/stores/${store.slug}`}
                className="flex items-center gap-2 rounded-full border border-neutral-200 dark:border-neutral-700 pl-1.5 pr-3 py-1 hover:border-brand transition-colors"
              >
                <span
                  className="flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold text-white"
                  style={{ backgroundColor: `#${store.color}` }}
                  aria-hidden="true"
                >
                  {store.name.charAt(0)}
                </span>
                <span className="text-xs font-medium text-neutral-700 dark:text-neutral-300">
                  {store.name}
                </span>
              </Link>
            )}
            {category && (
              <Link
                href={`/categories/${category.slug}`}
                className="rounded-full bg-neutral-100 dark:bg-neutral-800 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:text-neutral-400 hover:text-brand transition-colors"
              >
                {category.icon} {category.name}
              </Link>
            )}
          </div>

          <h1 className="mt-4 text-2xl sm:text-3xl font-bold tracking-tight text-balance">
            {deal.title}
          </h1>
          <p className="mt-3 text-neutral-600 dark:text-neutral-400">{deal.description}</p>

          <div className="mt-6 flex items-end gap-3">
            <span className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white">
              {formatPrice(deal.discountedPrice)}
            </span>
            <span className="text-lg text-neutral-400 line-through mb-1">
              {formatPrice(deal.originalPrice)}
            </span>
          </div>
          <p className="mt-1 text-sm font-medium text-green-600 dark:text-green-500">
            You save {formatPrice(savings)} ({percentOff}%)
          </p>

          <p
            className={`mt-3 text-sm font-medium ${
              expiryLabel(deal.expiry) === "Expired"
                ? "text-red-500"
                : "text-neutral-500 dark:text-neutral-500"
            }`}
          >
            ⏰ {expiryLabel(deal.expiry)}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            {deal.coupon && <CopyCouponButton coupon={deal.coupon} />}
            <a
              href="#"
              className="flex-1 sm:flex-none text-center rounded-full bg-brand px-8 py-3.5 text-sm font-bold text-white hover:bg-brand-dark transition-all shadow-sm hover:shadow-lg hover:-translate-y-0.5"
            >
              Get Deal at {store?.name ?? "Store"} →
            </a>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-4 text-sm">
            <div>
              <p className="text-neutral-500 dark:text-neutral-500">Store</p>
              <p className="font-medium">{store?.name ?? "—"}</p>
            </div>
            <div>
              <p className="text-neutral-500 dark:text-neutral-500">Category</p>
              <p className="font-medium">{category?.name ?? "—"}</p>
            </div>
            <div>
              <p className="text-neutral-500 dark:text-neutral-500">Coupon</p>
              <p className="font-medium">{deal.coupon ?? "Not required"}</p>
            </div>
            <div>
              <p className="text-neutral-500 dark:text-neutral-500">Verified</p>
              <p className="font-medium text-green-600 dark:text-green-500">✓ Yes</p>
            </div>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-16">
          <h2 className="text-2xl font-bold tracking-tight mb-6">You might also like</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {related.map((d) => (
              <DealCard key={d.id} deal={d} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

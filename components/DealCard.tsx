"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Deal } from "@/lib/types";
import { getStoreBySlug } from "@/lib/data";
import { discountPercent, expiryLabel, formatPrice } from "@/lib/utils";

interface DealCardProps {
  deal: Deal;
  priority?: boolean;
}

export default function DealCard({ deal, priority = false }: DealCardProps) {
  const [copied, setCopied] = useState(false);
  const store = getStoreBySlug(deal.storeSlug);
  const percentOff = discountPercent(deal.originalPrice, deal.discountedPrice);
  const expired = expiryLabel(deal.expiry) === "Expired";

  async function handleCopy(e: React.MouseEvent) {
    e.preventDefault();
    if (!deal.coupon) return;
    try {
      await navigator.clipboard.writeText(deal.coupon);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard API may be unavailable — silently ignore.
    }
  }

  return (
    <article className="group relative flex flex-col rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
      <Link href={`/deals/${deal.slug}`} className="block">
        <div className="relative aspect-square w-full overflow-hidden bg-neutral-100 dark:bg-neutral-800">
          <Image
            src={deal.image}
            alt={deal.title}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority={priority}
          />
          <span className="absolute top-3 left-3 rounded-full bg-brand text-white text-xs font-bold px-2.5 py-1 shadow">
            {percentOff}% OFF
          </span>
          {expired && (
            <span className="absolute top-3 right-3 rounded-full bg-neutral-900/80 text-white text-[10px] font-semibold px-2.5 py-1">
              EXPIRED
            </span>
          )}
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-center gap-2">
          {store && (
            <span
              className="flex h-5 w-5 items-center justify-center rounded text-[9px] font-bold text-white shrink-0"
              style={{ backgroundColor: `#${store.color}` }}
              aria-hidden="true"
            >
              {store.name.charAt(0)}
            </span>
          )}
          <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
            {store?.name ?? "Store"}
          </span>
        </div>

        <Link href={`/deals/${deal.slug}`}>
          <h3 className="mt-2 text-sm font-semibold text-neutral-900 dark:text-neutral-100 line-clamp-2 min-h-[2.5rem] group-hover:text-brand transition-colors">
            {deal.title}
          </h3>
        </Link>

        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-lg font-bold text-neutral-900 dark:text-white">
            {formatPrice(deal.discountedPrice)}
          </span>
          <span className="text-xs text-neutral-400 line-through">
            {formatPrice(deal.originalPrice)}
          </span>
        </div>

        <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-500">
          {expiryLabel(deal.expiry)}
        </p>

        <div className="mt-4 flex items-center gap-2">
          {deal.coupon ? (
            <button
              type="button"
              onClick={handleCopy}
              className="flex-1 min-w-0 rounded-lg border border-dashed border-brand/60 bg-orange-50 dark:bg-orange-500/10 px-2.5 py-2 text-left cursor-pointer hover:bg-orange-100 dark:hover:bg-orange-500/20 transition-colors"
              aria-label={`Copy coupon code ${deal.coupon}`}
            >
              <span className="block text-[10px] uppercase tracking-wide text-brand/80 font-semibold">
                {copied ? "Copied!" : "Coupon"}
              </span>
              <span className="block text-xs font-bold text-brand truncate">{deal.coupon}</span>
            </button>
          ) : (
            <span className="flex-1 rounded-lg bg-neutral-100 dark:bg-neutral-800 px-2.5 py-2 text-xs text-neutral-500 dark:text-neutral-400 text-center">
              No code needed
            </span>
          )}
          <Link
            href={`/deals/${deal.slug}`}
            className="shrink-0 rounded-lg bg-neutral-900 dark:bg-brand px-4 py-2.5 text-xs font-semibold text-white hover:bg-brand transition-colors"
          >
            Get Deal
          </Link>
        </div>
      </div>
    </article>
  );
}

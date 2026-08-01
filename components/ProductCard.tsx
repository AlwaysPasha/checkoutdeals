import Image from "next/image";
import { Product } from "@/lib/types";

const badgeStyles: Record<string, string> = {
  "Best Seller": "bg-amber-500 text-white",
  "Top Rated": "bg-emerald-500 text-white",
  "Editor's Pick": "bg-brand text-white",
  "New Arrival": "bg-sky-500 text-white",
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group relative flex flex-col rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden">
      <div className="relative aspect-square w-full overflow-hidden bg-neutral-50 dark:bg-neutral-800">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
        />
        {product.badge && (
          <span
            className={`absolute top-3 left-3 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide shadow-sm ${badgeStyles[product.badge]}`}
          >
            {product.badge}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h3 className="text-sm font-semibold leading-snug text-neutral-900 dark:text-neutral-100 line-clamp-2 min-h-[2.6rem]">
          {product.name}
        </h3>
        <p className="mt-1.5 text-xs leading-relaxed text-neutral-500 dark:text-neutral-400 line-clamp-2">
          {product.description}
        </p>

        <a
          href={product.amazonAffiliateUrl}
          target="_blank"
          rel="nofollow sponsored noopener"
          aria-label={`Buy ${product.name} on Amazon`}
          className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-b from-brand to-brand-dark px-4 py-2.5 text-xs font-semibold text-white shadow-sm hover:shadow-md hover:brightness-105 active:brightness-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
        >
          Buy on Amazon
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-3.5 w-3.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 17 17 7M7 7h10v10" />
          </svg>
        </a>
      </div>
    </article>
  );
}

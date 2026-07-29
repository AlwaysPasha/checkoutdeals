import Link from "next/link";
import { Store } from "@/lib/types";
import { storeDealCount } from "@/lib/data";

export default function StoreCard({ store }: { store: Store }) {
  const count = storeDealCount(store.slug);

  return (
    <Link
      href={`/stores/${store.slug}`}
      className="group flex flex-col items-center gap-3 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-brand/40 transition-all duration-300"
    >
      <span
        className="flex h-14 w-14 items-center justify-center rounded-xl text-xl font-bold text-white shadow-sm group-hover:scale-105 transition-transform"
        style={{ backgroundColor: `#${store.color}` }}
        aria-hidden="true"
      >
        {store.name.charAt(0)}
      </span>
      <div>
        <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-brand transition-colors">
          {store.name}
        </p>
        <p className="text-xs text-neutral-500 dark:text-neutral-500">{count} deals</p>
      </div>
    </Link>
  );
}

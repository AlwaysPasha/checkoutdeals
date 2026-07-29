import Link from "next/link";
import { Category } from "@/lib/types";
import { categoryDealCount } from "@/lib/data";

export default function CategoryCard({ category }: { category: Category }) {
  const count = categoryDealCount(category.slug);

  return (
    <Link
      href={`/categories/${category.slug}`}
      className="group flex flex-col gap-3 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-brand/40 transition-all duration-300"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 dark:bg-orange-500/10 text-2xl group-hover:bg-brand/10 transition-colors">
        {category.icon}
      </span>
      <div>
        <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-brand transition-colors">
          {category.name}
        </p>
        <p className="mt-0.5 text-xs text-neutral-500 dark:text-neutral-500 line-clamp-1">
          {category.description}
        </p>
        <p className="mt-2 text-xs font-medium text-brand">{count} deals →</p>
      </div>
    </Link>
  );
}

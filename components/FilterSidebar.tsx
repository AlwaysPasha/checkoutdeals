"use client";

import { categories, stores } from "@/lib/data";
import { cn } from "@/lib/utils";

interface FilterSidebarProps {
  selectedCategory: string | null;
  selectedStore: string | null;
  onCategoryChange: (slug: string | null) => void;
  onStoreChange: (slug: string | null) => void;
  onlyWithCoupons: boolean;
  onOnlyWithCouponsChange: (value: boolean) => void;
  onClearAll: () => void;
  className?: string;
}

export default function FilterSidebar({
  selectedCategory,
  selectedStore,
  onCategoryChange,
  onStoreChange,
  onlyWithCoupons,
  onOnlyWithCouponsChange,
  onClearAll,
  className,
}: FilterSidebarProps) {
  const hasActiveFilters = selectedCategory || selectedStore || onlyWithCoupons;

  return (
    <aside className={cn("space-y-6", className)}>
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">Filters</h2>
        {hasActiveFilters && (
          <button
            type="button"
            onClick={onClearAll}
            className="text-xs font-medium text-brand hover:underline cursor-pointer"
          >
            Clear all
          </button>
        )}
      </div>

      <div>
        <label className="flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-300 cursor-pointer">
          <input
            type="checkbox"
            checked={onlyWithCoupons}
            onChange={(e) => onOnlyWithCouponsChange(e.target.checked)}
            className="h-4 w-4 rounded border-neutral-300 dark:border-neutral-600 text-brand focus:ring-brand"
          />
          Has coupon code
        </label>
      </div>

      <div>
        <h3 className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-500 mb-3">
          Category
        </h3>
        <div className="space-y-2 max-h-64 overflow-y-auto pr-1">
          <button
            type="button"
            onClick={() => onCategoryChange(null)}
            className={cn(
              "block w-full text-left text-sm rounded-lg px-2.5 py-1.5 transition-colors cursor-pointer",
              !selectedCategory
                ? "bg-orange-50 dark:bg-orange-500/10 text-brand font-medium"
                : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800"
            )}
          >
            All Categories
          </button>
          {categories.map((c) => (
            <button
              key={c.slug}
              type="button"
              onClick={() => onCategoryChange(c.slug)}
              className={cn(
                "flex w-full items-center gap-2 text-left text-sm rounded-lg px-2.5 py-1.5 transition-colors cursor-pointer",
                selectedCategory === c.slug
                  ? "bg-orange-50 dark:bg-orange-500/10 text-brand font-medium"
                  : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800"
              )}
            >
              <span aria-hidden="true">{c.icon}</span> {c.name}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-500 mb-3">
          Store
        </h3>
        <div className="space-y-2 max-h-64 overflow-y-auto pr-1">
          <button
            type="button"
            onClick={() => onStoreChange(null)}
            className={cn(
              "block w-full text-left text-sm rounded-lg px-2.5 py-1.5 transition-colors cursor-pointer",
              !selectedStore
                ? "bg-orange-50 dark:bg-orange-500/10 text-brand font-medium"
                : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800"
            )}
          >
            All Stores
          </button>
          {stores.map((s) => (
            <button
              key={s.slug}
              type="button"
              onClick={() => onStoreChange(s.slug)}
              className={cn(
                "flex w-full items-center gap-2 text-left text-sm rounded-lg px-2.5 py-1.5 transition-colors cursor-pointer",
                selectedStore === s.slug
                  ? "bg-orange-50 dark:bg-orange-500/10 text-brand font-medium"
                  : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800"
              )}
            >
              <span
                className="h-3.5 w-3.5 rounded-full shrink-0"
                style={{ backgroundColor: `#${s.color}` }}
                aria-hidden="true"
              />
              {s.name}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}

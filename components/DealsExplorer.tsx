"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Deal, SortOption } from "@/lib/types";
import { getStoreBySlug } from "@/lib/data";
import DealCard from "./DealCard";
import FilterSidebar from "./FilterSidebar";
import Pagination from "./Pagination";
import { cn } from "@/lib/utils";

const PAGE_SIZE = 12;

const sortOptions: { value: SortOption; label: string }[] = [
  { value: "newest", label: "Newest" },
  { value: "discount", label: "Highest Discount" },
  { value: "price-low", label: "Lowest Price" },
  { value: "popular", label: "Most Popular" },
];

interface DealsExplorerProps {
  deals: Deal[];
  initialCategory?: string | null;
  initialStore?: string | null;
}

export default function DealsExplorer({
  deals,
  initialCategory = null,
  initialStore = null,
}: DealsExplorerProps) {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") ?? "";

  const [query, setQuery] = useState(initialQuery);
  const [category, setCategory] = useState<string | null>(initialCategory);
  const [store, setStore] = useState<string | null>(initialStore);
  const [onlyWithCoupons, setOnlyWithCoupons] = useState(false);
  const [sort, setSort] = useState<SortOption>("newest");
  const [page, setPage] = useState(1);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    let result = deals;

    if (query.trim()) {
      const q = query.trim().toLowerCase();
      result = result.filter((d) => {
        const storeName = getStoreBySlug(d.storeSlug)?.name.toLowerCase() ?? "";
        return (
          d.title.toLowerCase().includes(q) ||
          d.description.toLowerCase().includes(q) ||
          storeName.includes(q) ||
          d.categorySlug.includes(q)
        );
      });
    }

    if (category) result = result.filter((d) => d.categorySlug === category);
    if (store) result = result.filter((d) => d.storeSlug === store);
    if (onlyWithCoupons) result = result.filter((d) => Boolean(d.coupon));

    const sorted = [...result];
    switch (sort) {
      case "discount":
        sorted.sort(
          (a, b) =>
            (b.originalPrice - b.discountedPrice) / b.originalPrice -
            (a.originalPrice - a.discountedPrice) / a.originalPrice
        );
        break;
      case "price-low":
        sorted.sort((a, b) => a.discountedPrice - b.discountedPrice);
        break;
      case "popular":
        sorted.sort((a, b) => b.popularity - a.popularity);
        break;
      case "newest":
      default:
        sorted.sort((a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime());
        break;
    }

    return sorted;
  }, [deals, query, category, store, onlyWithCoupons, sort]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const paginated = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  function resetPage() {
    setPage(1);
  }

  function clearAll() {
    setCategory(null);
    setStore(null);
    setOnlyWithCoupons(false);
    setQuery("");
    resetPage();
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-8">
      {/* Desktop sidebar */}
      <FilterSidebar
        className="hidden lg:block sticky top-24 self-start"
        selectedCategory={category}
        selectedStore={store}
        onCategoryChange={(v) => {
          setCategory(v);
          resetPage();
        }}
        onStoreChange={(v) => {
          setStore(v);
          resetPage();
        }}
        onlyWithCoupons={onlyWithCoupons}
        onOnlyWithCouponsChange={(v) => {
          setOnlyWithCoupons(v);
          resetPage();
        }}
        onClearAll={clearAll}
      />

      <div>
        {/* Controls bar */}
        <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between mb-6">
          <div className="flex-1 flex items-center gap-2 rounded-full border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-4 py-2.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4 text-neutral-400 shrink-0"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <input
              type="search"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                resetPage();
              }}
              placeholder="Search deals…"
              aria-label="Search deals"
              className="flex-1 bg-transparent outline-none text-sm placeholder:text-neutral-400"
            />
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(true)}
              className="lg:hidden flex items-center gap-1.5 rounded-full border border-neutral-200 dark:border-neutral-700 px-4 py-2.5 text-sm font-medium text-neutral-700 dark:text-neutral-300 cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M6 12h12M10 18h4" />
              </svg>
              Filters
            </button>

            <label className="sr-only" htmlFor="sort-select">
              Sort deals
            </label>
            <select
              id="sort-select"
              value={sort}
              onChange={(e) => setSort(e.target.value as SortOption)}
              className="rounded-full border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-4 py-2.5 text-sm font-medium text-neutral-700 dark:text-neutral-300 outline-none focus:ring-2 focus:ring-brand cursor-pointer"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  Sort: {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <p className="mb-4 text-sm text-neutral-500 dark:text-neutral-500">
          {filtered.length} {filtered.length === 1 ? "deal" : "deals"} found
        </p>

        {paginated.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {paginated.map((deal) => (
              <DealCard key={deal.id} deal={deal} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-neutral-300 dark:border-neutral-700 py-20 text-center">
            <span className="text-4xl">🔍</span>
            <p className="mt-4 text-sm font-medium text-neutral-700 dark:text-neutral-300">
              No deals match your filters
            </p>
            <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-500">
              Try adjusting your search or clearing filters.
            </p>
            <button
              type="button"
              onClick={clearAll}
              className="mt-5 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-dark transition-colors cursor-pointer"
            >
              Clear all filters
            </button>
          </div>
        )}

        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setPage} />
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMobileFiltersOpen(false)}
            aria-hidden="true"
          />
          <div
            className={cn(
              "absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white dark:bg-neutral-900 p-5 overflow-y-auto shadow-2xl"
            )}
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base font-semibold">Filters</h2>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                aria-label="Close filters"
                className="h-8 w-8 flex items-center justify-center rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <FilterSidebar
              selectedCategory={category}
              selectedStore={store}
              onCategoryChange={(v) => {
                setCategory(v);
                resetPage();
              }}
              onStoreChange={(v) => {
                setStore(v);
                resetPage();
              }}
              onlyWithCoupons={onlyWithCoupons}
              onOnlyWithCouponsChange={(v) => {
                setOnlyWithCoupons(v);
                resetPage();
              }}
              onClearAll={clearAll}
            />
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(false)}
              className="mt-6 w-full rounded-full bg-brand py-2.5 text-sm font-semibold text-white cursor-pointer"
            >
              Show {filtered.length} deals
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

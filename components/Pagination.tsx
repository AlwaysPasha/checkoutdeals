"use client";

import { cn } from "@/lib/utils";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1).filter((p) => {
    return p === 1 || p === totalPages || Math.abs(p - currentPage) <= 1;
  });

  return (
    <nav aria-label="Pagination" className="mt-10 flex items-center justify-center gap-1.5">
      <button
        type="button"
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="rounded-full border border-neutral-200 dark:border-neutral-700 px-3 py-2 text-sm font-medium text-neutral-600 dark:text-neutral-400 disabled:opacity-40 disabled:cursor-not-allowed hover:border-brand hover:text-brand transition-colors cursor-pointer"
        aria-label="Previous page"
      >
        ← Prev
      </button>

      {pages.map((page, idx) => {
        const prevPage = pages[idx - 1];
        const showEllipsis = prevPage !== undefined && page - prevPage > 1;
        return (
          <span key={page} className="flex items-center gap-1.5">
            {showEllipsis && <span className="px-1 text-neutral-400">…</span>}
            <button
              type="button"
              onClick={() => onPageChange(page)}
              aria-current={page === currentPage ? "page" : undefined}
              className={cn(
                "h-9 w-9 rounded-full text-sm font-medium transition-colors cursor-pointer",
                page === currentPage
                  ? "bg-brand text-white"
                  : "text-neutral-600 dark:text-neutral-400 hover:bg-orange-50 dark:hover:bg-orange-500/10 hover:text-brand"
              )}
            >
              {page}
            </button>
          </span>
        );
      })}

      <button
        type="button"
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="rounded-full border border-neutral-200 dark:border-neutral-700 px-3 py-2 text-sm font-medium text-neutral-600 dark:text-neutral-400 disabled:opacity-40 disabled:cursor-not-allowed hover:border-brand hover:text-brand transition-colors cursor-pointer"
        aria-label="Next page"
      >
        Next →
      </button>
    </nav>
  );
}

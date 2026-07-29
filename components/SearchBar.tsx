"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  initialValue?: string;
  size?: "lg" | "md";
  className?: string;
  placeholder?: string;
}

/** Search bar that redirects to the deals page with a `q` query parameter. */
export default function SearchBar({
  initialValue = "",
  size = "md",
  className,
  placeholder = "Search for deals, brands or products…",
}: SearchBarProps) {
  const [value, setValue] = useState(initialValue);
  const router = useRouter();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (value.trim()) params.set("q", value.trim());
    router.push(`/deals${params.toString() ? `?${params.toString()}` : ""}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      role="search"
      aria-label="Search deals"
      className={cn(
        "flex w-full items-center gap-2 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 shadow-sm focus-within:ring-2 focus-within:ring-brand focus-within:border-brand transition-shadow",
        size === "lg" ? "p-2" : "p-1.5",
        className
      )}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        className={cn("shrink-0 text-neutral-400 ml-2", size === "lg" ? "h-5 w-5" : "h-4 w-4")}
        aria-hidden="true"
      >
        <circle cx="11" cy="11" r="7" />
        <path d="m21 21-4.35-4.35" />
      </svg>
      <input
        type="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        aria-label="Search deals"
        className={cn(
          "flex-1 bg-transparent outline-none placeholder:text-neutral-400 text-neutral-900 dark:text-neutral-100",
          size === "lg" ? "text-base py-2" : "text-sm py-1.5"
        )}
      />
      <button
        type="submit"
        className={cn(
          "rounded-full bg-brand text-white font-semibold hover:bg-brand-dark transition-colors cursor-pointer shrink-0",
          size === "lg" ? "px-6 py-2.5 text-sm" : "px-4 py-1.5 text-sm"
        )}
      >
        Search
      </button>
    </form>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import DarkModeToggle from "./DarkModeToggle";

const links = [
  { href: "/#products", label: "Browse Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-[#0b0b0d]/80 backdrop-blur-md shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-16" aria-label="Main">
        <Link href="/" className="flex items-center gap-2 shrink-0" onClick={() => setOpen(false)}>
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand text-white font-bold text-lg">
            C
          </span>
          <span className="text-lg font-bold tracking-tight">
            CheckOut<span className="text-brand">Deals</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3 py-2 rounded-full text-sm font-medium transition-colors",
                  active
                    ? "text-brand bg-orange-50 dark:bg-orange-500/10"
                    : "text-neutral-700 dark:text-neutral-300 hover:text-brand hover:bg-orange-50 dark:hover:bg-orange-500/10"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <DarkModeToggle />
          <Link
            href="/#products"
            className="rounded-full bg-gradient-to-b from-brand to-brand-dark px-4 py-2 text-sm font-semibold text-white shadow-sm hover:shadow-md hover:brightness-105 active:brightness-95 transition-all"
          >
            Shop Now
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <DarkModeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle menu"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300"
          >
            {open ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      <div
        className={cn(
          "md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0b0b0d]",
          open ? "max-h-96" : "max-h-0 border-t-0"
        )}
      >
        <div className="flex flex-col gap-1 px-4 py-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="px-3 py-2.5 rounded-lg text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-orange-50 dark:hover:bg-orange-500/10 hover:text-brand transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#products"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-gradient-to-b from-brand to-brand-dark px-4 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:shadow-md transition-all"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </header>
  );
}

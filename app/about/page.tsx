import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn how CheckOutDeals helps you save money with verified deals, discount codes and cashback offers from your favorite stores.",
};

const steps = [
  {
    title: "We scan the web daily",
    description:
      "Our team and tools track hundreds of stores every day to catch price drops, flash sales and limited-time offers the moment they go live.",
    icon: "🔎",
  },
  {
    title: "We verify every deal",
    description:
      "Before a deal is published, we check that the discount is genuine and that any coupon code actually works at checkout.",
    icon: "✅",
  },
  {
    title: "You shop and save",
    description:
      "Browse, copy a code if needed, and click through to the store to complete your purchase at the discounted price.",
    icon: "🛍️",
  },
];

const values = [
  {
    title: "Transparency",
    description: "We always show the original price, discounted price and exact savings — no hidden markups.",
  },
  {
    title: "Trust",
    description: "Every coupon code is checked before publishing, and expired deals are removed promptly.",
  },
  {
    title: "Speed",
    description: "New deals are added every day so you always have fresh offers to browse.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumb items={[{ label: "About" }]} />

      <div className="mt-6 text-center max-w-2xl mx-auto">
        <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 dark:border-orange-500/30 bg-orange-50 dark:bg-orange-500/10 px-4 py-1.5 text-xs font-semibold text-brand">
          About CheckOutDeals
        </span>
        <h1 className="mt-5 text-3xl sm:text-4xl font-bold tracking-tight text-balance">
          We help you shop smarter, every single day.
        </h1>
        <p className="mt-4 text-neutral-600 dark:text-neutral-400 text-balance">
          CheckOutDeals is a deal discovery platform that brings together the best discounts,
          coupon codes, flash sales and cashback offers from popular online stores — all in one
          simple, easy-to-browse place. Our mission is simple: help everyday shoppers save real
          money without spending hours hunting for the best price.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
        {steps.map((step) => (
          <div
            key={step.title}
            className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-sm"
          >
            <span className="text-3xl">{step.icon}</span>
            <h2 className="mt-4 text-base font-semibold">{step.title}</h2>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{step.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold tracking-tight text-center">What we stand for</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {values.map((value) => (
            <div key={value.title} className="rounded-2xl bg-neutral-50 dark:bg-neutral-950 p-6">
              <h3 className="text-sm font-semibold text-brand">{value.title}</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 rounded-3xl bg-neutral-900 dark:bg-neutral-950 px-6 py-12 text-center">
        <h2 className="text-2xl font-bold text-white text-balance">
          Ready to start saving?
        </h2>
        <p className="mt-2 text-sm text-neutral-400">
          Browse hundreds of live deals updated daily.
        </p>
        <Link
          href="/deals"
          className="mt-6 inline-flex rounded-full bg-brand px-7 py-3 text-sm font-semibold text-white hover:bg-brand-dark transition-colors"
        >
          Browse Deals
        </Link>
      </div>
    </div>
  );
}

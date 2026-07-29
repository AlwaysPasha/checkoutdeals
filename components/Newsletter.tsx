"use client";

import { FormEvent, useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    // Demo-only: no backend is wired up, so we just acknowledge the signup.
    setStatus("submitted");
    setEmail("");
  }

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="relative overflow-hidden rounded-3xl bg-neutral-900 dark:bg-neutral-950 px-6 py-14 sm:px-14 text-center">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-16 -right-16 h-64 w-64 rounded-full bg-brand/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-brand/20 blur-3xl"
        />
        <div className="relative">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-balance">
            Get the best deals, straight to your inbox.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-400 max-w-lg mx-auto text-balance">
            Join 50,000+ smart shoppers getting hand-picked deals and exclusive coupon codes
            every morning — no spam, unsubscribe anytime.
          </p>

          {status === "submitted" ? (
            <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand/20 px-5 py-3 text-sm font-medium text-brand">
              🎉 You&rsquo;re subscribed! Check your inbox for a confirmation.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-6 mx-auto flex max-w-md flex-col sm:flex-row items-center gap-3"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full flex-1 rounded-full border border-neutral-700 bg-neutral-800 px-5 py-3 text-sm text-white placeholder:text-neutral-500 outline-none focus:ring-2 focus:ring-brand focus:border-brand"
              />
              <button
                type="submit"
                className="w-full sm:w-auto shrink-0 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white hover:bg-brand-dark transition-colors"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

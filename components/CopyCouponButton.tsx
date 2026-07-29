"use client";

import { useState } from "react";

export default function CopyCouponButton({ coupon }: { coupon: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(coupon);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard API may be unavailable — silently ignore.
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="flex-1 sm:flex-none flex items-center justify-center gap-2 rounded-full border-2 border-dashed border-brand bg-orange-50 dark:bg-orange-500/10 px-6 py-3.5 text-sm font-bold text-brand hover:bg-orange-100 dark:hover:bg-orange-500/20 transition-colors cursor-pointer"
    >
      {copied ? "✓ Copied!" : `Copy Code: ${coupon}`}
    </button>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for CheckOutDeals Baby Essentials.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
        Privacy Policy
      </h1>
      <div className="mt-6 space-y-4 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
        <p>
          This page does not collect personal data beyond what you voluntarily submit through
          our contact form (name, email, and message). We use this information only to respond
          to your inquiry.
        </p>
        <p>
          We do not sell or share your personal information with third parties. Clicking a
          &ldquo;Buy on Amazon&rdquo; link takes you to Amazon&rsquo;s website, where
          Amazon&rsquo;s own privacy policy applies.
        </p>
        <p>
          If you have questions about this policy, please reach out via our{" "}
          <a href="/contact" className="text-brand hover:underline">
            Contact
          </a>{" "}
          page.
        </p>
      </div>
    </div>
  );
}

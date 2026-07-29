import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with the CheckOutDeals team — we'd love to hear from you.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumb items={[{ label: "Contact" }]} />
      <div className="mt-3 text-center max-w-xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Get in Touch</h1>
        <p className="mt-2 text-neutral-500 dark:text-neutral-500">
          Have a question, found a broken deal, or want to partner with us? Send us a message
          and we&rsquo;ll get back to you soon.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-5 gap-8">
        <div className="md:col-span-3">
          <ContactForm />
        </div>
        <div className="md:col-span-2 space-y-4">
          <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6">
            <h2 className="text-sm font-semibold">Email</h2>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
              hello@checkoutdeals.com
            </p>
          </div>
          <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6">
            <h2 className="text-sm font-semibold">Response Time</h2>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
              We typically reply within 1–2 business days.
            </p>
          </div>
          <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6">
            <h2 className="text-sm font-semibold">Report a Deal</h2>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
              Found an expired coupon or broken link? Let us know and we&rsquo;ll fix it fast.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

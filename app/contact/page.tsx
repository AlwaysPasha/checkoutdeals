import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with CheckOutDeals Baby Essentials.",
  alternates: { canonical: "/contact" },
  openGraph: { title: "Contact | CheckOutDeals", description: "Get in touch with CheckOutDeals Baby Essentials." },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
        Contact
      </h1>
      <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
        Questions, suggestions, or a product you think we should feature? Send us a message.
      </p>
      <div className="mt-8">
        <ContactForm />
      </div>
    </div>
  );
}

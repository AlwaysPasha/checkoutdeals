import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/data";

const siteUrl = "https://checkoutdeals.vercel.app";

export const metadata: Metadata = {
  title: "CheckOutDeals — Baby Essentials",
  description: "Handpicked everyday baby essentials for care, feeding, hygiene, safety and more.",
  alternates: { canonical: siteUrl },
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Baby Essentials",
    description: "Handpicked everyday essentials for your little one.",
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: { "@type": "Product", name: product.name, description: product.description, image: `${siteUrl}${product.image}`, url: product.amazonAffiliateUrl },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />
      <section id="products" className="border-t border-neutral-100 bg-neutral-50/40 dark:border-neutral-800 dark:bg-neutral-950">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 sm:py-16">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-3xl">Baby Essentials</h2>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">Handpicked everyday essentials for your little one.</p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-6">
            {products.map((product) => <ProductCard key={product.id} product={product} />)}
          </div>
        </div>
      </section>
    </>
  );
}

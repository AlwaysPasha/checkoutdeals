import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import StoreCard from "@/components/StoreCard";
import { stores } from "@/lib/data";

export const metadata: Metadata = {
  title: "Popular Stores",
  description:
    "Browse deals from Amazon, Flipkart, Myntra, Ajio, Croma, Apple, Samsung, Nike, Adidas and more of your favorite stores.",
};

export default function StoresPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumb items={[{ label: "Stores" }]} />
      <h1 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">Popular Stores</h1>
      <p className="mt-2 text-neutral-500 dark:text-neutral-500 max-w-2xl">
        Shop deals from all your favorite brands and marketplaces in one place.
      </p>

      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {stores.map((store) => (
          <StoreCard key={store.slug} store={store} />
        ))}
      </div>
    </div>
  );
}

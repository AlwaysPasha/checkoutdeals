import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import CategoryCard from "@/components/CategoryCard";
import { categories } from "@/lib/data";

export const metadata: Metadata = {
  title: "Shop by Category",
  description:
    "Browse deals by category — electronics, fashion, mobiles, laptops, home & kitchen, travel, beauty, food, gaming and subscriptions.",
};

export default function CategoriesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumb items={[{ label: "Categories" }]} />
      <h1 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">Shop by Category</h1>
      <p className="mt-2 text-neutral-500 dark:text-neutral-500 max-w-2xl">
        Explore deals across every category, from electronics and fashion to travel and
        subscriptions.
      </p>

      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {categories.map((category) => (
          <CategoryCard key={category.slug} category={category} />
        ))}
      </div>
    </div>
  );
}

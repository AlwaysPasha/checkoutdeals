import type { MetadataRoute } from "next";
import { categories, deals, stores } from "@/lib/data";

const siteUrl = "https://checkoutdeals.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/`, changeFrequency: "daily", priority: 1 },
    { url: `${siteUrl}/deals`, changeFrequency: "daily", priority: 0.9 },
    { url: `${siteUrl}/categories`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${siteUrl}/stores`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${siteUrl}/about`, changeFrequency: "monthly", priority: 0.4 },
    { url: `${siteUrl}/contact`, changeFrequency: "monthly", priority: 0.4 },
  ];

  const categoryRoutes: MetadataRoute.Sitemap = categories.map((c) => ({
    url: `${siteUrl}/categories/${c.slug}`,
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  const storeRoutes: MetadataRoute.Sitemap = stores.map((s) => ({
    url: `${siteUrl}/stores/${s.slug}`,
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  const dealRoutes: MetadataRoute.Sitemap = deals.map((d) => ({
    url: `${siteUrl}/deals/${d.slug}`,
    changeFrequency: "daily",
    priority: 0.5,
  }));

  return [...staticRoutes, ...categoryRoutes, ...storeRoutes, ...dealRoutes];
}

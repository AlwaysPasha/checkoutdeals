import type { MetadataRoute } from "next";

const siteUrl = "https://checkoutdeals.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${siteUrl}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/about`, changeFrequency: "monthly", priority: 0.4 },
    { url: `${siteUrl}/contact`, changeFrequency: "monthly", priority: 0.4 },
    { url: `${siteUrl}/affiliate-disclosure`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteUrl}/privacy-policy`, changeFrequency: "yearly", priority: 0.3 },
  ];
}

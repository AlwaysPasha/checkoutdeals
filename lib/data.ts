import { Category, Deal, Store } from "./types";

/** Build a placeholder product image URL with a solid background and centered label. */
function img(label: string, bg = "FF6B00", fg = "FFFFFF"): string {
  const text = encodeURIComponent(label);
  return `https://placehold.co/600x600/${bg}/${fg}?text=${text}&font=roboto`;
}

export const categories: Category[] = [
  { slug: "electronics", name: "Electronics", icon: "🔌", description: "TVs, headphones, cameras & smart gadgets" },
  { slug: "fashion", name: "Fashion", icon: "👗", description: "Clothing, footwear & accessories" },
  { slug: "mobiles", name: "Mobiles", icon: "📱", description: "Smartphones from every top brand" },
  { slug: "laptops", name: "Laptops", icon: "💻", description: "Laptops & computer accessories" },
  { slug: "home-kitchen", name: "Home & Kitchen", icon: "🏠", description: "Appliances & everyday essentials" },
  { slug: "travel", name: "Travel", icon: "✈️", description: "Flights, hotels & holiday packages" },
  { slug: "beauty", name: "Beauty", icon: "💄", description: "Skincare, makeup & personal care" },
  { slug: "food", name: "Food", icon: "🍔", description: "Food delivery & dining offers" },
  { slug: "gaming", name: "Gaming", icon: "🎮", description: "Consoles, games & accessories" },
  { slug: "subscriptions", name: "Subscriptions", icon: "🎬", description: "Streaming, music & OTT plans" },
];

export const stores: Store[] = [
  { slug: "amazon", name: "Amazon", color: "232F3E", description: "Everything store with daily deals across every category." },
  { slug: "flipkart", name: "Flipkart", color: "2874F0", description: "India's homegrown marketplace for electronics & fashion." },
  { slug: "myntra", name: "Myntra", color: "FF3F6C", description: "Fashion and lifestyle destination for trending styles." },
  { slug: "ajio", name: "Ajio", color: "2A2A72", description: "Curated fashion from national and international brands." },
  { slug: "croma", name: "Croma", color: "00A19C", description: "Electronics superstore for gadgets and appliances." },
  { slug: "reliance-digital", name: "Reliance Digital", color: "E4002B", description: "One-stop shop for electronics and home appliances." },
  { slug: "nykaa", name: "Nykaa", color: "FC2779", description: "Beauty and wellness products from top brands." },
  { slug: "firstcry", name: "FirstCry", color: "6EC531", description: "Everything for babies, kids & parents." },
  { slug: "tata-cliq", name: "Tata CLiQ", color: "E31E24", description: "Premium fashion and electronics marketplace." },
  { slug: "apple", name: "Apple", color: "111111", description: "iPhones, MacBooks, iPads and accessories." },
  { slug: "samsung", name: "Samsung", color: "1428A0", description: "Galaxy phones, TVs and smart home devices." },
  { slug: "boat", name: "boAt", color: "E30613", description: "Audio gear and wearables for everyday life." },
  { slug: "nike", name: "Nike", color: "111111", description: "Footwear and sportswear for every athlete." },
  { slug: "adidas", name: "Adidas", color: "000000", description: "Sportswear, sneakers and performance gear." },
];

export const deals: Deal[] = [];

export function getDealBySlug(slug: string): Deal | undefined {
  return deals.find((d) => d.slug === slug);
}

export function getStoreBySlug(slug: string): Store | undefined {
  return stores.find((s) => s.slug === slug);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function dealsForStore(slug: string): Deal[] {
  return deals.filter((d) => d.storeSlug === slug);
}

export function dealsForCategory(slug: string): Deal[] {
  return deals.filter((d) => d.categorySlug === slug);
}

export function storeDealCount(slug: string): number {
  return deals.filter((d) => d.storeSlug === slug).length;
}

export function categoryDealCount(slug: string): number {
  return deals.filter((d) => d.categorySlug === slug).length;
}
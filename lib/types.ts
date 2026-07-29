export interface Category {
  slug: string;
  name: string;
  icon: string; // emoji icon
  description: string;
}

export interface Store {
  slug: string;
  name: string;
  color: string; // brand hex color used for logo tile
  description: string;
  dealCount?: number;
}

export interface Deal {
  id: string;
  slug: string;
  title: string;
  description: string;
  categorySlug: string;
  storeSlug: string;
  image: string;
  originalPrice: number;
  discountedPrice: number;
  coupon?: string;
  expiry: string; // ISO date string
  popularity: number; // 0-100, used for "most popular" sort
  dateAdded: string; // ISO date string
  featured?: boolean;
}

export type SortOption = "newest" | "discount" | "price-low" | "popular";

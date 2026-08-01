export interface ProductCategory {
  slug: string;
  name: string;
  icon: string; // emoji icon
}

export type ProductBadge = "Best Seller" | "Top Rated" | "Editor's Pick" | "New Arrival";

export interface Product {
  id: string;
  category: string; // ProductCategory.slug
  name: string;
  description: string;
  image: string; // local path under /public, e.g. "/products/mama-bear-baby-wipes.jpg"
  amazonAffiliateUrl: string;
  badge?: ProductBadge;
}

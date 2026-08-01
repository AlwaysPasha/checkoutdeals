# Migrating your repo to Baby Essentials (real data)

This zip contains every file you need to **replace or add**, now with your real product names,
real local images, and real Amazon affiliate links. Your project structure, deployment config,
and branding (CheckOutDeals name/logo) are unchanged.

## What's new in this pass

- `lib/data.ts` — 19 real products across 11 categories (added a new **Baby Food** category for
  the Slurrp Farm cookies), each with its real name, description, local image path, and your
  real affiliate link.
- `public/products/` — all 19 real product images, renamed to clean slugs
  (e.g. `mama-bear-baby-wipes.jpg`). **Note:** your uploads were named `.webp` but were actually
  JPEG files internally — I renamed them to `.jpg` to match their real format and avoid a
  MIME-type mismatch when Vercel serves them. Next/Image will still automatically re-encode them
  to WebP/AVIF in the browser per your `next.config.ts` settings, so you lose nothing.
- `components/ProductCard.tsx` — added optional badges (Best Seller, Top Rated, Editor's Pick,
  New Arrival). I only assigned a few, conservatively: **New Arrival** on the genuinely-new
  Slurrp Farm cookies (factual), plus a couple of illustrative examples on Little's Wipes and
  Aveeno lotion. I did **not** assign badges site-wide without real sales/ratings data behind
  them — swap/add/remove badges in `lib/data.ts` (`badge` field) once you have real data to back
  them.
- `components/Hero.tsx` — added a subtle gradient background and category quick-jump chips.
- JSON-LD `Product`/`ItemList` schema added to the homepage (`app/page.tsx`).
- Canonical URLs added to every page's metadata.
- `next.config.ts` — removed the now-unused `placehold.co` remote pattern since all images are
  local.

## 1. Files to REPLACE (copy these over your existing files)

```
app/page.tsx
app/layout.tsx
app/sitemap.ts
app/not-found.tsx
app/globals.css
components/Navbar.tsx
components/Footer.tsx
components/Hero.tsx
lib/types.ts
lib/data.ts
lib/utils.ts
```

## 2. Files to ADD (new)

```
app/about/page.tsx
app/contact/page.tsx
app/affiliate-disclosure/page.tsx
app/privacy-policy/page.tsx
components/ProductCard.tsx
components/CategorySection.tsx
```

## 3. Files to KEEP as-is (unchanged, just reused)

```
components/DarkModeToggle.tsx
components/ContactForm.tsx
app/robots.ts
next.config.ts
package.json / tsconfig.json / eslint.config.mjs / postcss.config.mjs
```

## 4. Files/folders to DELETE from your existing repo

These were deals-site-only and are no longer used by anything:

```
app/deals/
app/categories/
app/stores/
components/DealsExplorer.tsx
components/FilterSidebar.tsx
components/DealCard.tsx
components/StoreCard.tsx
components/CategoryCard.tsx
components/CopyCouponButton.tsx
components/SearchBar.tsx
components/Pagination.tsx
components/Breadcrumb.tsx
components/Skeleton.tsx
components/Newsletter.tsx
```

If any of these are referenced from old `about/page.tsx` or `contact/page.tsx` you already have,
those two pages are replaced by the new ones in this zip, so that's fine — just make sure to
overwrite them rather than merge.

## 5. After copying files in

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` and check:
- Homepage hero, disclaimer, and all 10 product category sections render
- "Browse Products" button smooth-scrolls to `#products`
- Navbar / footer links (`/about`, `/contact`, `/affiliate-disclosure`, `/privacy-policy`) work
- Dark mode toggle still works

## 6. Before going live

- Swap the placeholder images in `lib/data.ts` (currently `placehold.co` URLs) for real product
  photos — add them to `public/photos/` and update the `image` field, or add your image host to
  `next.config.ts` → `images.remotePatterns`.
- Replace every `amazonAffiliateUrl: "#"` in `lib/data.ts` with your real Amazon affiliate links.
- Deploy — Vercel will pick up the changes automatically on push since your deployment config is
  untouched.

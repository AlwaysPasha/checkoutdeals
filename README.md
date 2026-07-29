# CheckOutDeals

A modern, production-ready deals discovery website built with Next.js 16 (App Router), TypeScript and Tailwind CSS v4. CheckOutDeals helps users discover the best online deals, discount coupon codes, flash sales and cashback offers from popular shopping websites.

## Tech Stack

- **Next.js 16** (App Router, TypeScript, Turbopack)
- **Tailwind CSS v4**
- **ESLint** (flat config, `eslint-config-next`)
- Fully static-generatable (SSG) — no database or API keys required
- Deployable to Vercel's free Hobby plan with zero extra configuration

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

## Project Structure

```
app/
  page.tsx                  Home page (hero, featured/latest deals, categories, stores, newsletter)
  deals/page.tsx             All deals with search, filter & sort
  deals/[slug]/page.tsx      Deal detail page (SSG)
  categories/page.tsx        Category index
  categories/[slug]/page.tsx Category detail (deals filtered)
  stores/page.tsx            Store index
  stores/[slug]/page.tsx     Store detail (deals filtered)
  about/page.tsx             About page
  contact/page.tsx           Contact form page
  not-found.tsx              Custom 404
  sitemap.ts                 Dynamic sitemap.xml
  robots.ts                  Dynamic robots.txt
  layout.tsx                 Root layout, global metadata, dark-mode anti-flash script
  globals.css                Tailwind import + design tokens + dark mode variant

components/                  Reusable UI components (Navbar, Footer, DealCard, StoreCard,
                              CategoryCard, Hero, Newsletter, SearchBar, FilterSidebar,
                              DealsExplorer, Pagination, Breadcrumb, Skeleton, forms, etc.)

lib/
  types.ts                   Shared TypeScript types
  data.ts                    Demo data: 10 categories, 14 stores, 24 deals
  utils.ts                   Price formatting, discount %, expiry labels, slugify
```

## Notes

- Product, store and OG images use [placehold.co](https://placehold.co) as lightweight placeholder
  images so the project runs immediately with zero image assets or API keys. Swap `lib/data.ts`
  image URLs for real product photos whenever you're ready — `next.config.ts` already allows
  `placehold.co`; add your real image host(s) to `images.remotePatterns` when you do.
- All deal/coupon/contact-form data is static/demo data — there is no backend. Wire up your own
  API routes or a database if you want real submissions, live pricing, or affiliate tracking.
- Dark mode is a manual toggle (persisted to `localStorage`) with an inline anti-flash script in
  the root layout, plus a `prefers-color-scheme` fallback for first-time visitors.

## Deploying to Vercel

1. Push this project to a GitHub repository.
2. Import the repository at [vercel.com/new](https://vercel.com/new).
3. Framework preset: **Next.js** (auto-detected). No environment variables are required.
4. Deploy — that's it.

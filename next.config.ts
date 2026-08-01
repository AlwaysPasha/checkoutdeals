import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // All product images are served locally from /public/products.
    // Add remotePatterns here only if you introduce a remote image host later.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;

import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const siteUrl = "https://checkoutdeals.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "CheckOutDeals — Baby Essentials",
    template: "%s | CheckOutDeals",
  },
  description:
    "Carefully selected Baby Essentials products for babies and new parents — wipes, diapering, oral care, safety, bath & skincare, feeding, teething, and more.",
  keywords: [
    "baby essentials",
    "baby products",
    "new parents",
    "baby wipes",
    "diapering",
    "baby safety",
    "baby skincare",
  ],
  authors: [{ name: "CheckOutDeals" }],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "CheckOutDeals",
    title: "CheckOutDeals — Baby Essentials",
    description:
      "Carefully selected Baby Essentials products for babies and new parents.",
    images: [
      {
        url: "https://placehold.co/1200x630/FF6B00/FFFFFF?text=CheckOutDeals",
        width: 1200,
        height: 630,
        alt: "CheckOutDeals",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CheckOutDeals — Baby Essentials",
    description:
      "Carefully selected Baby Essentials products for babies and new parents.",
    images: ["https://placehold.co/1200x630/FF6B00/FFFFFF?text=CheckOutDeals"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var m=localStorage.getItem('cod-theme');if(m==='dark'||(!m&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark');}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white dark:bg-[#0b0b0d] text-neutral-900 dark:text-neutral-100">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:top-2 focus:left-2 focus:bg-brand focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

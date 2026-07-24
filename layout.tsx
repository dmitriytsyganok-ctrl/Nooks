import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nook Auctions — Furniture finds, rehomed",
  description:
    "Discover, bid on, and rehome one-of-a-kind furniture in your neighborhood.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Nook Auctions — Furniture finds, rehomed",
    description:
      "A better way to discover, sell, and rehome great furniture locally.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nook Auctions — Furniture finds, rehomed",
    description:
      "A better way to discover, sell, and rehome great furniture locally.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

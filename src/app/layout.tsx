import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import AnimatedBackground from "@/components/AnimatedBackground";

export const metadata: Metadata = {
  title: "Wisp of Petals — Handcrafted Flower Bouquets | Premium Florist",
  description:
    "Discover beautifully handcrafted flower bouquets for every occasion. Browse our collection and order via WhatsApp. Premium home-based florist serving the Klang Valley.",
  keywords: [
    "flower bouquets", "florist", "handcrafted flowers", "bouquet delivery",
    "Klang Valley florist", "custom bouquets", "roses", "peonies",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}

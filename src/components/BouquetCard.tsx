"use client";

import Link from "next/link";
import { getWhatsAppLink } from "@/data/bouquets";
import type { Bouquet } from "@/data/bouquets";

export default function BouquetCard({ bouquet }: { bouquet: Bouquet }) {
  const tag = bouquet.tags?.[0];

  const tagLabels: Record<string, string> = {
    "best-seller": "Bestseller",
    popular: "Popular",
    new: "New",
    featured: "Featured",
  };

  return (
    <div className="relative flex flex-col group transition-all duration-300">
      <Link href={`/bouquets/${bouquet.id}`} className="flex flex-col flex-1 relative">
        {/* Image */}
        <div className="relative overflow-hidden aspect-square mb-4 bg-cream-dark group-hover:opacity-90 transition-opacity">
          <div
            className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{
              backgroundImage: `url(${bouquet.images?.[0] || "/images/placeholder.jpg"})`,
            }}
          />
          {tag && (
            <span className="absolute top-0 left-0 bg-accent text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 z-10">
              {tagLabels[tag] || tag}
            </span>
          )}
          {bouquet.availability === "seasonal" && (
            <span className="absolute bottom-3 left-3 z-10 inline-block px-3 py-1 text-[10px] font-bold tracking-widest uppercase bg-white/90 text-charcoal">
              Seasonal
            </span>
          )}

          {/* Quick Enquire Overlay (Desktop) */}
          <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out hidden md:block z-20">
            <button
              className="block w-full py-3 bg-white text-charcoal text-center text-xs font-bold uppercase tracking-wider hover:bg-accent hover:text-white transition-colors"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                window.open(getWhatsAppLink(bouquet.name, bouquet.price), '_blank', 'noopener,noreferrer');
              }}
            >
              Quick Enquire
            </button>
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-col text-center">
          <h3 className="font-heading text-lg font-medium text-charcoal mb-1">{bouquet.name}</h3>
          <p className="text-sm font-semibold text-charcoal mb-1">From RM {bouquet.price}</p>
          <p className="text-[13px] text-text-light">{bouquet.colorLabel}</p>
        </div>
      </Link>
    </div>
  );
}

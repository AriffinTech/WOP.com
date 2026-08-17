"use client";

import { useState } from "react";
import { Bouquet, getWhatsAppLink } from "@/data/bouquets";
import { WhatsAppIcon } from "@/components/Icons";
import BouquetGallery from "@/components/BouquetGallery";

export default function BouquetInteractiveClient({ bouquet }: { bouquet: Bouquet }) {
  // Default to "Large" if it exists, otherwise default to the largest/last size in the array
  const defaultSize = 
    bouquet.sizes.find(s => s.name.toLowerCase().includes("large")) || 
    bouquet.sizes[bouquet.sizes.length - 1];

  const [selectedSize, setSelectedSize] = useState(defaultSize);

  const whatsappMessageName = bouquet.sizes.length > 1 
    ? `${bouquet.name} (${selectedSize.name})` 
    : bouquet.name;

  const currentImages = selectedSize.images && selectedSize.images.length > 0
    ? selectedSize.images
    : bouquet.images || [];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 lg:gap-20">
      {/* Images */}
      <BouquetGallery images={currentImages} />

      {/* Details */}
      <div className="flex flex-col">
        <div className="mb-2">
          {bouquet.tags?.map((tag) => (
            <span key={tag} className="inline-block px-3 py-1 text-xs font-semibold tracking-wide uppercase rounded-full bg-rose-bg text-[#8b4a5a] mr-2">
              {tag.replace("-", " ")}
            </span>
          ))}
        </div>

        <h1 className="font-heading text-3xl md:text-5xl font-medium text-charcoal mb-2 md:mb-4">{bouquet.name}</h1>
        
        <p className={`text-2xl font-medium text-charcoal ${bouquet.sizes.length > 1 ? "mb-3 md:mb-6" : "mb-0 md:mb-6"}`}>RM {selectedSize.price}</p>

        {bouquet.sizes.length > 1 && (
          <div className="mb-3 md:mb-8 mt-1">
            <h3 className="text-sm font-medium text-text-muted mb-3">Select Size</h3>
            <div className="flex flex-wrap gap-3">
              {bouquet.sizes.map((size) => (
                <button
                  key={size.name}
                  onClick={() => setSelectedSize(size)}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-colors border ${
                    selectedSize.name === size.name
                      ? "bg-charcoal text-white border-charcoal"
                      : "bg-white text-charcoal border-border-light hover:border-charcoal"
                  }`}
                >
                  {size.name}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="h-[1px] w-full bg-border-light my-3 md:my-6" />

        <p className="text-base md:text-lg text-text-light leading-relaxed mb-4 md:mb-8">{bouquet.description}</p>

        <div className="bg-surface border border-border-light rounded-xl p-4 md:p-6 mb-4 md:mb-8">
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wider mb-2 md:mb-4">Bouquet Details</h3>
          <ul className="flex flex-col gap-3">
            <li className="flex items-start">
              <span className="w-24 text-sm font-medium text-text-muted">Flowers</span>
              <span className="flex-1 text-sm text-charcoal">{bouquet.flowerTypes?.join(", ")}</span>
            </li>

            <li className="flex items-start">
              <span className="w-24 text-sm font-medium text-text-muted">Status</span>
              <span className="flex-1 text-sm text-charcoal capitalize">{bouquet.availability.replace("-", " ")}</span>
            </li>
          </ul>
        </div>

        <div className="bg-sage-bg rounded-xl p-4 md:p-6 mb-4 md:mb-10">
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-[#4a6e46] mb-2">The WOP Promise</h3>
          <p className="text-[13px] md:text-sm text-[#4a6e46] leading-relaxed">Every bouquet is handcrafted with love and carefully prepared to ensure your blooms arrive fresh and beautiful. All you have to do is enjoy the moment!</p>
        </div>

        <div className="flex flex-col gap-4 mt-auto">
          <a
            href={getWhatsAppLink(whatsappMessageName, selectedSize.price)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-4 px-8 w-full bg-whatsapp text-white rounded-full text-sm font-semibold uppercase tracking-wider hover:bg-whatsapp-hover transition-all shadow-md hover:shadow-[0_6px_24px_rgba(37,211,102,0.3)]"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Enquire on WhatsApp
          </a>
          <p className="text-xs text-center text-text-muted">
            You will be redirected to WhatsApp to confirm details, delivery, and payment.
          </p>
        </div>
      </div>
    </div>
  );
}

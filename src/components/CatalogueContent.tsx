"use client";

import { useState, useMemo } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import BouquetCard from "@/components/BouquetCard";
import PriceSlider from "@/components/PriceSlider";
import {
  Bouquet,
  colorOptions,
  styleOptions,
  sortOptions,
} from "@/data/bouquets";

interface CatalogueContentProps {
  initialBouquets: Bouquet[];
  flowerOptions: { value: string; label: string }[];
}

export default function CatalogueContent({ initialBouquets, flowerOptions }: CatalogueContentProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentFlower = searchParams.get("flower") || "";
  const currentColor = searchParams.get("color") || "";
  const currentMinPrice = parseInt(searchParams.get("minPrice") || "0", 10);
  const currentMaxPrice = parseInt(searchParams.get("maxPrice") || "500", 10);
  const currentStyle = searchParams.get("style") || "";
  const currentSort = searchParams.get("sort") || "featured";

  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const updateFilter = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) params.set(key, value);
    else params.delete(key);
    router.push(`/bouquets?${params.toString()}`);
  };

  const clearFilters = () => {
    router.push("/bouquets");
  };

  const filteredBouquets = useMemo(() => {
    let result = [...initialBouquets];

    if (currentFlower) {
      result = result.filter((b) =>
        b.flowerTypes.some((f) => f.toLowerCase().replace(/[^a-z0-9]+/g, "-") === currentFlower)
      );
    }
    if (currentColor) {
      result = result.filter((b) => b.colors.includes(currentColor));
    }
    if (currentStyle) {
      result = result.filter((b) => b.style === currentStyle);
    }
    if (currentMinPrice > 0 || currentMaxPrice < 500) {
      result = result.filter(
        (b) => b.price >= currentMinPrice && b.price <= (currentMaxPrice === 500 ? Infinity : currentMaxPrice)
      );
    }

    switch (currentSort) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        result.sort((a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime());
        break;
      case "popular":
        result.sort((a, b) => (b.tags?.includes("popular") ? 1 : 0) - (a.tags?.includes("popular") ? 1 : 0));
        break;
      case "featured":
      default:
        result.sort((a, b) => (b.tags?.includes("featured") ? 1 : 0) - (a.tags?.includes("featured") ? 1 : 0));
        break;
    }

    return result;
  }, [initialBouquets, currentFlower, currentColor, currentStyle, currentMinPrice, currentMaxPrice, currentSort]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-24 pt-[104px]">
      <div className="flex flex-col md:flex-row gap-12">
        {/* Mobile Filter Toggle */}
        <button
          className="md:hidden w-full py-3 border border-border-light rounded-full font-medium text-sm flex items-center justify-center gap-2"
          onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
        >
          {isMobileFilterOpen ? "Hide Filters" : "Show Filters"}
          <span className="text-lg leading-none">{isMobileFilterOpen ? "−" : "+"}</span>
        </button>

        {/* Sidebar Filters */}
        <aside
          className={`${
            isMobileFilterOpen ? "block" : "hidden"
          } md:block w-full md:w-64 shrink-0 space-y-12`}
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-heading font-medium tracking-wider uppercase text-sm">Filters</h3>
              {(currentFlower || currentColor || currentStyle || currentMinPrice > 0 || currentMaxPrice < 500) && (
                <button onClick={clearFilters} className="text-xs text-text-muted hover:text-rose transition-colors underline">
                  Clear All
                </button>
              )}
            </div>

            {/* Price Filter */}
            <div className="py-6 border-t border-border-light">
              <h4 className="text-sm font-semibold mb-6">Price Range</h4>
              <PriceSlider
                minPrice={currentMinPrice}
                maxPrice={currentMaxPrice}
                onPriceChange={(min: number, max: number) => {
                  const params = new URLSearchParams(searchParams.toString());
                  if (min > 0) params.set("minPrice", min.toString());
                  else params.delete("minPrice");
                  if (max < 500) params.set("maxPrice", max.toString());
                  else params.delete("maxPrice");
                  router.push(`/bouquets?${params.toString()}`);
                }}
              />
            </div>

            {/* Flower Type */}
            <div className="py-6 border-t border-border-light">
              <h4 className="text-sm font-semibold mb-4">Flower Type</h4>
              <div className="flex flex-col gap-3">
                <button
                  className={`text-left text-sm transition-colors ${!currentFlower ? "font-semibold text-rose" : "text-text-light hover:text-charcoal"}`}
                  onClick={() => updateFilter("flower", "")}
                >
                  All Flowers
                </button>
                {flowerOptions.map((fl) => (
                  <button
                    key={fl.value}
                    className={`text-left text-sm transition-colors ${currentFlower === fl.value ? "font-semibold text-rose" : "text-text-light hover:text-charcoal"}`}
                    onClick={() => updateFilter("flower", fl.value)}
                  >
                    {fl.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Colors */}
            <div className="py-6 border-t border-border-light">
              <h4 className="text-sm font-semibold mb-4">Color Theme</h4>
              <div className="flex flex-wrap gap-2">
                {colorOptions.map((c) => (
                  <button
                    key={c.value}
                    onClick={() => updateFilter("color", currentColor === c.value ? "" : c.value)}
                    className={`w-8 h-8 rounded-full border-2 transition-all ${
                      currentColor === c.value ? "border-rose scale-110 shadow-md" : "border-transparent hover:scale-110"
                    }`}
                    style={{ backgroundColor: (c as any).hex || c.value }}
                    title={c.label}
                  />
                ))}
              </div>
            </div>


          </div>
        </aside>

        {/* Main Grid */}
        <main className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <h1 className="font-heading text-3xl font-medium">All Bouquets <span className="text-text-muted text-lg font-normal ml-2">({filteredBouquets.length})</span></h1>
            
            <div className="flex items-center gap-3 self-start sm:self-auto">
              <span className="text-sm text-text-muted">Sort by:</span>
              <select
                value={currentSort}
                onChange={(e) => updateFilter("sort", e.target.value)}
                className="text-sm border-none bg-transparent font-medium text-charcoal focus:ring-0 cursor-pointer p-0"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>
          </div>

          {filteredBouquets.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredBouquets.map((bouquet) => (
                <BouquetCard key={bouquet.id} bouquet={bouquet} />
              ))}
            </div>
          ) : (
            <div className="text-center py-24 bg-surface border border-border-light rounded-2xl flex flex-col items-center justify-center">
              <span className="text-4xl mb-4">🥀</span>
              <h3 className="font-heading text-xl font-medium mb-2">No bouquets found</h3>
              <p className="text-text-light mb-6">Try adjusting your filters to see more results.</p>
              <button onClick={clearFilters} className="px-6 py-2 bg-charcoal text-white text-sm font-medium rounded-full">
                Clear Filters
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

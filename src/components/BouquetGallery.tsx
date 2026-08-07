"use client";

import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function BouquetGallery({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  if (!images || images.length === 0) {
    return (
      <div className="w-full aspect-[4/5] bg-cream-dark rounded-2xl flex items-center justify-center">
        <span className="text-text-muted">No image available</span>
      </div>
    );
  }

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const index = Math.round(container.scrollLeft / container.clientWidth);
    setCurrentIndex(index);
  };

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      container.scrollTo({
        left: index * container.clientWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col gap-4 relative">
      {/* Main Swipeable Gallery */}
      <div className="relative group w-full aspect-[4/5] rounded-2xl overflow-hidden">
        <div
          ref={scrollContainerRef}
          className="flex w-full h-full overflow-x-auto snap-x snap-mandatory no-scrollbar"
          onScroll={handleScroll}
        >
          {images.map((img, idx) => (
            <div
              key={idx}
              className="w-full h-full flex-shrink-0 snap-center bg-cream-dark bg-cover bg-center"
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
        </div>

        {/* Navigation Arrows (Desktop) */}
        {images.length > 1 && (
          <>
            <button
              onClick={() => scrollToIndex(Math.max(0, currentIndex - 1))}
              className={`absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur rounded-full flex items-center justify-center text-charcoal hover:bg-white transition-opacity ${currentIndex === 0 ? "opacity-0 pointer-events-none" : "opacity-0 group-hover:opacity-100"}`}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => scrollToIndex(Math.min(images.length - 1, currentIndex + 1))}
              className={`absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur rounded-full flex items-center justify-center text-charcoal hover:bg-white transition-opacity ${currentIndex === images.length - 1 ? "opacity-0 pointer-events-none" : "opacity-0 group-hover:opacity-100"}`}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

        {/* Dots Indicator */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${currentIndex === idx ? "bg-white w-6" : "bg-white/50 w-2 hover:bg-white/80"}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 md:grid-cols-5 gap-3 mt-2">
          {images.map((img, idx) => (
            <div
              key={idx}
              onClick={() => scrollToIndex(idx)}
              className={`aspect-square bg-cream-dark rounded-lg bg-cover bg-center cursor-pointer border-2 transition-colors ${currentIndex === idx ? "border-charcoal" : "border-transparent hover:border-border-light"}`}
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

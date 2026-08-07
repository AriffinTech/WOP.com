"use client";

import React, { useState, useEffect } from "react";
import * as Slider from "@radix-ui/react-slider";

interface PriceSliderProps {
  minPrice: number;
  maxPrice: number;
  onPriceChange: (min: number, max: number) => void;
}

export default function PriceSlider({ minPrice, maxPrice, onPriceChange }: PriceSliderProps) {
  const [localRange, setLocalRange] = useState([minPrice, maxPrice]);

  useEffect(() => {
    setLocalRange([minPrice, maxPrice]);
  }, [minPrice, maxPrice]);

  const handleValueChange = (value: number[]) => {
    setLocalRange(value);
  };

  const handleValueCommit = (value: number[]) => {
    onPriceChange(value[0], value[1]);
  };

  const handleMinInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value, 10);
    if (!isNaN(val)) {
      const newMin = Math.min(val, localRange[1]);
      setLocalRange([newMin, localRange[1]]);
    }
  };

  const handleMaxInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value, 10);
    if (!isNaN(val)) {
      const newMax = Math.max(val, localRange[0]);
      setLocalRange([localRange[0], newMax]);
    }
  };

  const handleInputBlur = () => {
    onPriceChange(localRange[0], localRange[1]);
  };

  return (
    <div className="flex flex-col gap-4">
      <Slider.Root
        className="relative flex items-center select-none touch-none w-full h-5"
        defaultValue={[0, 500]}
        value={localRange}
        max={500}
        min={0}
        step={10}
        onValueChange={handleValueChange}
        onValueCommit={handleValueCommit}
      >
        <Slider.Track className="bg-border-light relative grow rounded-full h-[6px]">
          <Slider.Range className="absolute bg-charcoal rounded-full h-full" />
        </Slider.Track>
        <Slider.Thumb
          className="block w-5 h-5 bg-white border-2 border-charcoal shadow-sm rounded-full hover:bg-cream focus:outline-none focus:ring-2 focus:ring-charcoal focus:ring-offset-1 transition-all"
          aria-label="Min Price"
        />
        <Slider.Thumb
          className="block w-5 h-5 bg-white border-2 border-charcoal shadow-sm rounded-full hover:bg-cream focus:outline-none focus:ring-2 focus:ring-charcoal focus:ring-offset-1 transition-all"
          aria-label="Max Price"
        />
      </Slider.Root>

      <div className="flex items-center gap-3">
        <div className="flex-1 relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-light text-xs font-medium">RM</span>
          <input
            type="number"
            value={localRange[0]}
            onChange={handleMinInputChange}
            onBlur={handleInputBlur}
            className="w-full pl-9 pr-3 py-2 bg-surface border border-border-light rounded-lg text-sm text-charcoal outline-none focus:border-rose appearance-none font-medium"
            style={{ MozAppearance: "textfield" }}
          />
        </div>
        <span className="text-text-light text-sm font-medium">-</span>
        <div className="flex-1 relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-light text-xs font-medium">RM</span>
          <input
            type="number"
            value={localRange[1]}
            onChange={handleMaxInputChange}
            onBlur={handleInputBlur}
            className="w-full pl-9 pr-3 py-2 bg-surface border border-border-light rounded-lg text-sm text-charcoal outline-none focus:border-rose appearance-none font-medium"
            style={{ MozAppearance: "textfield" }}
          />
        </div>
      </div>
    </div>
  );
}

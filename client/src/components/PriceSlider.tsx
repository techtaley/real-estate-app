import React from 'react';

interface PriceSliderProps {
  min: number;
  max: number;
  valueMin: number;
  valueMax: number;
  onMinChange: (value: number) => void;
  onMaxChange: (value: number) => void;
}

export function PriceSlider({
  min,
  max,
  valueMin,
  valueMax,
  onMinChange,
  onMaxChange,
}: PriceSliderProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="space-y-4">
      <label className="block text-sm text-gray-700">Price Range</label>
      
      <div className="flex items-center gap-4">
        <div className="flex-1">
          <input
            type="number"
            value={valueMin}
            onChange={(e) => onMinChange(Number(e.target.value))}
            min={min}
            max={valueMax}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Min"
          />
          <span className="text-xs text-gray-500 mt-1 block">{formatPrice(valueMin)}</span>
        </div>
        
        <span className="text-gray-400">—</span>
        
        <div className="flex-1">
          <input
            type="number"
            value={valueMax}
            onChange={(e) => onMaxChange(Number(e.target.value))}
            min={valueMin}
            max={max}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Max"
          />
          <span className="text-xs text-gray-500 mt-1 block">{formatPrice(valueMax)}</span>
        </div>
      </div>

      <div className="relative pt-2">
        <input
          type="range"
          min={min}
          max={max}
          value={valueMin}
          onChange={(e) => onMinChange(Number(e.target.value))}
          className="absolute w-full h-2 bg-transparent appearance-none pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-600 [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-blue-600 [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:cursor-pointer"
          style={{ zIndex: valueMin > max - 100 ? 5 : 3 }}
        />
        <input
          type="range"
          min={min}
          max={max}
          value={valueMax}
          onChange={(e) => onMaxChange(Number(e.target.value))}
          className="absolute w-full h-2 bg-transparent appearance-none pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-600 [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-blue-600 [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:cursor-pointer"
          style={{ zIndex: 4 }}
        />
        <div className="w-full h-2 bg-gray-200 rounded-full">
          <div
            className="h-full bg-blue-600 rounded-full"
            style={{
              marginLeft: `${((valueMin - min) / (max - min)) * 100}%`,
              width: `${((valueMax - valueMin) / (max - min)) * 100}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
}

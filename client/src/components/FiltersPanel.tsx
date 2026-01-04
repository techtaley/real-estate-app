import React from 'react';
import { Search, MapPin } from 'lucide-react';
import { PriceSlider } from './PriceSlider';
import { FilterOptions } from '../types';

interface FiltersPanelProps {
  filters: FilterOptions;
  onFilterChange: (filters: FilterOptions) => void;
  onReset: () => void;
}

export function FiltersPanel({ filters, onFilterChange, onReset }: FiltersPanelProps) {
  const cities = [
    'All Locations',
    'Los Angeles',
    'San Francisco',
    'Austin',
    'Seattle',
    'Denver',
    'Portland',
    'Malibu',
    'Scottsdale',
    'Raleigh',
  ];

  const bedOptions = [
    { label: 'Any', value: 0 },
    { label: '1+', value: 1 },
    { label: '2+', value: 2 },
    { label: '3+', value: 3 },
    { label: '4+', value: 4 },
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 h-fit sticky top-20">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-gray-900">Filters</h2>
        <button
          onClick={onReset}
          className="text-sm text-blue-600 hover:text-blue-700 transition-colors"
        >
          Reset
        </button>
      </div>

      <div className="space-y-6">
        {/* Price Range */}
        <PriceSlider
          min={0}
          max={2000000}
          valueMin={filters.priceMin}
          valueMax={filters.priceMax}
          onMinChange={(value) => onFilterChange({ ...filters, priceMin: value })}
          onMaxChange={(value) => onFilterChange({ ...filters, priceMax: value })}
        />

        {/* Location */}
        <div>
          <label className="block text-sm text-gray-700 mb-2">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Location
            </div>
          </label>
          <div className="relative">
            <select
              value={filters.location}
              onChange={(e) => onFilterChange({ ...filters, location: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            >
              {cities.map((city) => (
                <option key={city} value={city === 'All Locations' ? '' : city}>
                  {city}
                </option>
              ))}
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Bedrooms */}
        <div>
          <label className="block text-sm text-gray-700 mb-3">Bedrooms</label>
          <div className="grid grid-cols-5 gap-2">
            {bedOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => onFilterChange({ ...filters, beds: option.value })}
                className={`px-3 py-2 rounded-lg border text-sm transition-colors ${
                  filters.beds === option.value
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Apply Button */}
        <button className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
          <Search className="w-4 h-4" />
          Apply Filters
        </button>
      </div>
    </div>
  );
}

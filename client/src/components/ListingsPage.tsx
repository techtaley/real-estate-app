import React, { useState, useMemo } from 'react';
import { FiltersPanel } from './FiltersPanel';
import { ListingCard } from './ListingCard';
import { LoadingCard } from './LoadingCard';
import { mockProperties } from '../data/mockData';
import { FilterOptions } from '../types';

interface ListingsPageProps {
  onViewDetails: (id: string) => void;
}

export function ListingsPage({ onViewDetails }: ListingsPageProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [filters, setFilters] = useState<FilterOptions>({
    priceMin: 0,
    priceMax: 2000000,
    location: '',
    beds: 0,
  });

  const defaultFilters: FilterOptions = {
    priceMin: 0,
    priceMax: 2000000,
    location: '',
    beds: 0,
  };

  const filteredProperties = useMemo(() => {
    return mockProperties.filter((property) => {
      // Price filter
      if (property.price < filters.priceMin || property.price > filters.priceMax) {
        return false;
      }

      // Location filter
      if (filters.location && property.city !== filters.location) {
        return false;
      }

      // Beds filter
      if (filters.beds > 0 && property.beds < filters.beds) {
        return false;
      }

      return true;
    });
  }, [filters]);

  const handleFilterChange = (newFilters: FilterOptions) => {
    setFilters(newFilters);
  };

  const handleReset = () => {
    setFilters(defaultFilters);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="homepage-container">
          {/* Filters Sidebar */}
          <aside className="filter-panel">
            <FiltersPanel
              filters={filters}
              onFilterChange={handleFilterChange}
              onReset={handleReset}
            />
          </aside>

          {/* Listings Grid */}
          <main className="listing-section">
            {/* Header */}
            <div className="mb-6">
              <h1 className="text-gray-900 mb-2">Real Estate Listings</h1>
              <p className="text-gray-600">
                {filteredProperties.length} {filteredProperties.length === 1 ? 'property' : 'properties'} found
              </p>
            </div>

            {/* Grid */}
            {isLoading ? (
              <div className="listing-grid">
                {[...Array(6)].map((_, i) => (
                  <LoadingCard key={i} />
                ))}
              </div>
            ) : filteredProperties.length > 0 ? (
              <div className="listing-grid">
                {filteredProperties.map((property) => (
                  <ListingCard
                    key={property.id}
                    property={property}
                    onViewDetails={onViewDetails}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
                <div className="max-w-md mx-auto">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                  </div>
                  <h3 className="text-gray-900 mb-2">No properties found</h3>
                  <p className="text-gray-600 mb-6">
                    Try adjusting your filters to see more results.
                  </p>
                  <button
                    onClick={handleReset}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Reset Filters
                  </button>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
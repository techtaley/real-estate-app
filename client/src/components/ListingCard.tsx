import React, { useState } from 'react';
import { Bed, Bath, Maximize2, MapPin, Heart } from 'lucide-react';
import { Property } from '../types';

interface ListingCardProps {
  property: Property;
  onViewDetails: (id: string) => void;
}

export function ListingCard({ property, onViewDetails }: ListingCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow group">
      {/* Image */}
      <div className="relative aspect-[4/3] bg-gray-200 overflow-hidden">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse" />
        )}
        <img
          src={property.imageUrl}
          alt={property.title}
          className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        
        {/* Favorite Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsFavorite(!isFavorite);
          }}
          className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
        >
          <Heart
            className={`w-5 h-5 ${
              isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-700'
            }`}
          />
        </button>

        {/* Property Type Badge */}
        <div className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs text-gray-900 capitalize">
          {property.propertyType}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Price */}
        <div className="text-blue-600 mb-2">{formatPrice(property.price)}</div>

        {/* Title */}
        <h3 className="text-gray-900 mb-2 line-clamp-1">{property.title}</h3>

        {/* Address */}
        <div className="flex items-start gap-2 text-sm text-gray-600 mb-4">
          <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
          <span className="line-clamp-1">
            {property.address}, {property.city}, {property.state} {property.zipCode}
          </span>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-4 mb-4 pb-4 border-b border-gray-200">
          <div className="flex items-center gap-1.5 text-sm text-gray-700">
            <Bed className="w-4 h-4 text-gray-400" />
            <span>{property.beds} Beds</span>
          </div>
          <div className="flex items-center gap-1.5 text-sm text-gray-700">
            <Bath className="w-4 h-4 text-gray-400" />
            <span>{property.baths} Baths</span>
          </div>
          <div className="flex items-center gap-1.5 text-sm text-gray-700">
            <Maximize2 className="w-4 h-4 text-gray-400" />
            <span>{formatNumber(property.sqft)} sqft</span>
          </div>
        </div>

        {/* View Details Button */}
        <button
          onClick={() => onViewDetails(property.id)}
          className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
        >
          View Details
        </button>
      </div>
    </div>
  );
}

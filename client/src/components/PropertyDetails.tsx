import React, { useState } from 'react';
import { ArrowLeft, Bed, Bath, Maximize2, MapPin, Calendar, Heart, Share2, TrendingUp } from 'lucide-react';
import { mockProperties } from '../data/mockData';

interface PropertyDetailsProps {
  propertyId: string;
  onBack: () => void;
}

export function PropertyDetails({ propertyId, onBack }: PropertyDetailsProps) {
  const property = mockProperties.find((p) => p.id === propertyId);
  const [isFavorite, setIsFavorite] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!property) {
    return (
      <div className="container mx-auto px-4 py-12">
        <p>Property not found</p>
      </div>
    );
  }

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

  const pricePerSqft = Math.round(property.price / property.sqft);

  // Gallery images (using same image for demo, in production would have multiple)
  const galleryImages = [
    property.imageUrl,
    property.imageUrl,
    property.imageUrl,
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Listings
        </button>

        <div className="property-details-container">
          {/* Main Content */}
          <div className="property-main-content space-y-6">
            {/* Image Gallery */}
            <div className="bg-white rounded-lg overflow-hidden border border-gray-200">
              <div className="aspect-[16/10] bg-gray-200 relative">
                <img
                  src={galleryImages[currentImageIndex]}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Gallery Navigation */}
                {galleryImages.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {galleryImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Thumbnail Strip */}
              <div className="grid grid-cols-3 gap-2 p-4">
                {galleryImages.slice(0, 3).map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`aspect-video rounded-lg overflow-hidden border-2 transition-colors ${
                      index === currentImageIndex ? 'border-blue-600' : 'border-transparent'
                    }`}
                  >
                    <img src={img} alt={`View ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Property Info */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm mb-3 capitalize">
                    {property.propertyType}
                  </div>
                  <h1 className="text-gray-900 mb-2">{property.title}</h1>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-5 h-5" />
                    <span>
                      {property.address}, {property.city}, {property.state} {property.zipCode}
                    </span>
                  </div>
                </div>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-y border-gray-200">
                <div>
                  <div className="flex items-center gap-2 text-gray-600 mb-1">
                    <Bed className="w-5 h-5" />
                    <span className="text-sm">Bedrooms</span>
                  </div>
                  <div className="text-gray-900">{property.beds}</div>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-gray-600 mb-1">
                    <Bath className="w-5 h-5" />
                    <span className="text-sm">Bathrooms</span>
                  </div>
                  <div className="text-gray-900">{property.baths}</div>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-gray-600 mb-1">
                    <Maximize2 className="w-5 h-5" />
                    <span className="text-sm">Square Feet</span>
                  </div>
                  <div className="text-gray-900">{formatNumber(property.sqft)}</div>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-gray-600 mb-1">
                    <Calendar className="w-5 h-5" />
                    <span className="text-sm">Year Built</span>
                  </div>
                  <div className="text-gray-900">{property.yearBuilt}</div>
                </div>
              </div>

              {/* Description */}
              <div className="py-6">
                <h2 className="text-gray-900 mb-3">Description</h2>
                <p className="text-gray-600 leading-relaxed">{property.description}</p>
              </div>

              {/* Features */}
              <div className="pt-6 border-t border-gray-200">
                <h2 className="text-gray-900 mb-4">Features & Amenities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {property.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-700">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-gray-900 mb-4">Location</h2>
              <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500">Map integration placeholder</p>
                  <p className="text-sm text-gray-400 mt-1">
                    {property.city}, {property.state}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="property-sidebar">
            <div className="bg-white rounded-lg border border-gray-200 p-6 sticky top-20 space-y-6">
              {/* Price */}
              <div>
                <div className="text-blue-600 mb-1">{formatPrice(property.price)}</div>
                <p className="text-sm text-gray-600">
                  ${formatNumber(pricePerSqft)} per sqft
                </p>
              </div>

              {/* Market Insights */}
              <div className="pt-6 border-t border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                  <h3 className="text-gray-900">Market Insights</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Avg. Price in {property.city}</span>
                    <span className="text-gray-900">$595k</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Price Trend</span>
                    <span className="text-green-600 text-sm">+5.2%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Days on Market</span>
                    <span className="text-gray-900">12 days</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-6 border-t border-gray-200">
                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className={`w-full px-4 py-3 rounded-lg border transition-colors flex items-center justify-center gap-2 ${
                    isFavorite
                      ? 'bg-red-50 border-red-200 text-red-700'
                      : 'bg-white border-gray-300 text-gray-700 hover:border-gray-400'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
                  {isFavorite ? 'Saved to Favorites' : 'Save to Favorites'}
                </button>
                
                <button className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Contact Agent
                </button>

                <button className="w-full px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition-colors flex items-center justify-center gap-2">
                  <Share2 className="w-5 h-5" />
                  Share
                </button>
              </div>

              {/* Listing Info */}
              <div className="pt-6 border-t border-gray-200 text-sm text-gray-600">
                <p>Listed on {new Date(property.listingDate).toLocaleDateString()}</p>
                <p className="mt-1">ID: {property.id}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export interface Property {
  id: string;
  title: string;
  price: number;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  beds: number;
  baths: number;
  sqft: number;
  imageUrl: string;
  description: string;
  features: string[];
  yearBuilt: number;
  propertyType: 'house' | 'condo' | 'apartment' | 'townhouse';
  listingDate: string;
  latitude?: number;
  longitude?: number;
}

export interface FilterOptions {
  priceMin: number;
  priceMax: number;
  location: string;
  beds: number;
}

export interface MarketData {
  month: string;
  avgPrice: number;
  medianPrice: number;
  listings: number;
}

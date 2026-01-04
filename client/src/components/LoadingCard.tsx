import React from 'react';

export function LoadingCard() {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      {/* Image Skeleton */}
      <div className="aspect-[4/3] bg-gray-200 animate-pulse" />

      {/* Content Skeleton */}
      <div className="p-5 space-y-3">
        {/* Price */}
        <div className="h-6 bg-gray-200 rounded animate-pulse w-1/3" />

        {/* Title */}
        <div className="h-5 bg-gray-200 rounded animate-pulse w-3/4" />

        {/* Address */}
        <div className="h-4 bg-gray-200 rounded animate-pulse w-full" />

        {/* Stats */}
        <div className="flex gap-4 pt-2">
          <div className="h-4 bg-gray-200 rounded animate-pulse w-16" />
          <div className="h-4 bg-gray-200 rounded animate-pulse w-16" />
          <div className="h-4 bg-gray-200 rounded animate-pulse w-20" />
        </div>

        {/* Button */}
        <div className="h-10 bg-gray-200 rounded-lg animate-pulse mt-4" />
      </div>
    </div>
  );
}

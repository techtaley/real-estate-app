import React from 'react';
import { TrendingUp, DollarSign, Home, BarChart3 } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { marketData, locationData } from '../data/mockData';

export function AnalyticsPage() {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const stats = [
    {
      label: 'Average Price',
      value: '$610,000',
      change: '+5.2%',
      trend: 'up',
      icon: DollarSign,
      color: 'blue',
    },
    {
      label: 'Median Price',
      value: '$540,000',
      change: '+3.8%',
      trend: 'up',
      icon: TrendingUp,
      color: 'green',
    },
    {
      label: 'Active Listings',
      value: '189',
      change: '-12.3%',
      trend: 'down',
      icon: Home,
      color: 'purple',
    },
    {
      label: 'Avg. Price per sqft',
      value: '$285',
      change: '+4.1%',
      trend: 'up',
      icon: BarChart3,
      color: 'orange',
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-gray-900 mb-2">Market Analytics</h1>
          <p className="text-gray-600">
            Real-time insights and trends in the real estate market
          </p>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const colorClasses = {
              blue: 'bg-blue-50 text-blue-600',
              green: 'bg-green-50 text-green-600',
              purple: 'bg-purple-50 text-purple-600',
              orange: 'bg-orange-50 text-orange-600',
            };

            return (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg ${colorClasses[stat.color as keyof typeof colorClasses]} flex items-center justify-center`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className={`text-sm px-2 py-1 rounded-full ${
                    stat.trend === 'up' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                  }`}>
                    {stat.change}
                  </div>
                </div>
                <div className="text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Price Trends Chart */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-gray-900 mb-6">Price Trends Over Time</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={marketData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" stroke="#6b7280" style={{ fontSize: '12px' }} />
                <YAxis
                  stroke="#6b7280"
                  style={{ fontSize: '12px' }}
                  tickFormatter={(value) => `$${value / 1000}k`}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#fff',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                  }}
                  formatter={(value: number) => [formatPrice(value), '']}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="avgPrice"
                  stroke="#2563eb"
                  strokeWidth={2}
                  name="Average Price"
                  dot={{ fill: '#2563eb', r: 4 }}
                />
                <Line
                  type="monotone"
                  dataKey="medianPrice"
                  stroke="#10b981"
                  strokeWidth={2}
                  name="Median Price"
                  dot={{ fill: '#10b981', r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Average Price by Location */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-gray-900 mb-6">Average Price by Location</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={locationData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis
                  dataKey="city"
                  stroke="#6b7280"
                  style={{ fontSize: '12px' }}
                  angle={-45}
                  textAnchor="end"
                  height={80}
                />
                <YAxis
                  stroke="#6b7280"
                  style={{ fontSize: '12px' }}
                  tickFormatter={(value) => `$${value / 1000}k`}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#fff',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                  }}
                  formatter={(value: number) => [formatPrice(value), 'Avg Price']}
                />
                <Bar dataKey="avgPrice" fill="#2563eb" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Market Summary */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-gray-900 mb-6">Market Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h3 className="text-gray-900 mb-3">Top Markets</h3>
              <div className="space-y-3">
                {locationData.slice(0, 3).map((location, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 text-sm">
                        {index + 1}
                      </div>
                      <span className="text-gray-700">{location.city}</span>
                    </div>
                    <span className="text-gray-900">{formatPrice(location.avgPrice)}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-gray-900 mb-3">Listing Volume</h3>
              <div className="space-y-3">
                {locationData.slice(0, 3).map((location, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-gray-700">{location.city}</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-blue-600 rounded-full"
                          style={{ width: `${(location.count / 67) * 100}%` }}
                        />
                      </div>
                      <span className="text-sm text-gray-600 w-8">{location.count}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-gray-900 mb-3">Market Indicators</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Market Health</span>
                  <span className="px-2 py-1 bg-green-50 text-green-700 rounded-full text-sm">Strong</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Supply/Demand</span>
                  <span className="px-2 py-1 bg-orange-50 text-orange-700 rounded-full text-sm">Tight</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">6-Mo Outlook</span>
                  <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">Positive</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

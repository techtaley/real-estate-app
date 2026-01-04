import React, { useState } from 'react';
import './styles/globals.css';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ListingsPage } from './components/ListingsPage';
import { PropertyDetails } from './components/PropertyDetails';
import { AnalyticsPage } from './components/AnalyticsPage';

type Page = 'listings' | 'analytics' | 'favorites' | 'details';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('listings');
  const [selectedPropertyId, setSelectedPropertyId] = useState<string | null>(null);

  const handleViewDetails = (propertyId: string) => {
    setSelectedPropertyId(propertyId);
    setCurrentPage('details');
  };

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    if (page !== 'details') {
      setSelectedPropertyId(null);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      
      <main className="flex-1">
        {currentPage === 'listings' && <ListingsPage onViewDetails={handleViewDetails} />}
        {currentPage === 'analytics' && <AnalyticsPage />}
        {currentPage === 'details' && selectedPropertyId && (
          <PropertyDetails propertyId={selectedPropertyId} onBack={() => handleNavigate('listings')} />
        )}
        {currentPage === 'favorites' && (
          <div className="container mx-auto px-4 py-12">
            <h1 className="mb-6">Favorites</h1>
            <p className="text-gray-600">Your saved properties will appear here.</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
import React, { useState } from 'react';
import { Home, BarChart3, Heart, User, Menu, X } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: 'listings' | 'analytics' | 'favorites') => void;
}

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'listings', label: 'Listings', icon: Home },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'favorites', label: 'Favorites', icon: Heart },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Home className="w-6 h-6 text-blue-600" />
            <span className="text-gray-900">American Dreamer</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id as any)}
                  className={`flex items-center gap-2 transition-colors ${
                    currentPage === link.id
                      ? 'text-blue-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* User Profile */}
          <div className="hidden md:flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 hover:border-gray-400 transition-colors text-gray-700">
              <User className="w-4 h-4" />
              <span>Sign In</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <button
                    key={link.id}
                    onClick={() => {
                      onNavigate(link.id as any);
                      setMobileMenuOpen(false);
                    }}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                      currentPage === link.id
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {link.label}
                  </button>
                );
              })}
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 text-gray-700">
                <User className="w-4 h-4" />
                <span>Sign In</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

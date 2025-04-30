'use client';

import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold text-black">NovaBots</a>
          </div>
          {/* Meniu desktop */}
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition">Despre noi</a>
            <a href="#services" className="text-gray-600 hover:text-blue-600 transition">Servicii</a>
            <a href="#projects" className="text-gray-600 hover:text-blue-600 transition">Proiecte</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition">Contact</a>
          </div>
          {/* Buton hamburger pentru mobil */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-600 hover:text-blue-600 focus:outline-none">
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Meniu mobil (când butonul hamburger este apăsat) */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col items-center py-4">
            <a href="#about" className="text-gray-600 py-2 hover:text-blue-600 transition">Despre noi</a>
            <a href="#services" className="text-gray-600 py-2 hover:text-blue-600 transition">Servicii</a>
            <a href="#projects" className="text-gray-600 py-2 hover:text-blue-600 transition">Proiecte</a>
            <a href="#contact" className="text-gray-600 py-2 hover:text-blue-600 transition">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}

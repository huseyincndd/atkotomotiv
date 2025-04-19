"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white text-gray-800 shadow-lg py-2' 
        : 'bg-transparent text-white py-4'
    }`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative z-10 group">
          <div className="flex items-center">
            <div className="w-24 h-11 mr-3 rounded-md overflow-hidden bg-white flex items-center justify-center p-1">
              <Image 
                src="https://villaqrmenu.b-cdn.net/images%20(2).jpeg"
                alt="ATK Otomotiv Logo"
                width={88}
                height={40}
                className="object-contain"
              />
            </div>
            <span className={`font-bold text-xl transition-colors duration-300 ${scrolled ? 'text-gray-800' : 'text-white'}`}>
              ATK <span className="text-blue-600">Otomotiv</span>
            </span>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          <NavLink href="/" scrolled={scrolled}>Ana Sayfa</NavLink>
          
          <div className="relative group">
            <button className={`group flex items-center px-3 py-2 rounded-full text-sm font-medium transition-all ${
              scrolled 
                ? 'hover:bg-gray-100 text-gray-700' 
                : 'hover:bg-white/10 text-white'
            }`}>
              <span>Kurumsal</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 ml-1 transition-transform duration-200 group-hover:rotate-180" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute right-0 top-full mt-1 w-56 bg-white rounded-xl shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
              <Link href="/kurumsal/hakkimizda" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors rounded-lg mx-1">
                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Hakkımızda
                </span>
              </Link>
              <Link href="/kurumsal/tarihce" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors rounded-lg mx-1">
                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Tarihçe
                </span>
              </Link>
            </div>
          </div>
          
          <div className="relative group">
            <button className={`group flex items-center px-3 py-2 rounded-full text-sm font-medium transition-all ${
              scrolled 
                ? 'hover:bg-gray-100 text-gray-700' 
                : 'hover:bg-white/10 text-white'
            }`}>
              <span>Ürünlerimiz</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 ml-1 transition-transform duration-200 group-hover:rotate-180" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute right-0 top-full mt-1 w-56 bg-white rounded-xl shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
              <Link href="/urunler/yolcu-koltuklari" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors rounded-lg mx-1">
                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Yolcu Koltukları
                </span>
              </Link>
              <Link href="/urunler/surucu-koltuklari" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors rounded-lg mx-1">
                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Sürücü Koltukları
                </span>
              </Link>
              <Link href="/urunler/ozel-koltuklar" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors rounded-lg mx-1">
                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Özel Koltuklar
                </span>
              </Link>
              <Link href="/urunler/askeri-koltuklar" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors rounded-lg mx-1">
                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Askeri Koltuklar
                </span>
              </Link>
            </div>
          </div>
          
          <NavLink href="/galeri" scrolled={scrolled}>Galeri</NavLink>
          
          <Link 
            href="/iletisim" 
            className={`ml-3 px-5 py-2 rounded-full font-medium transition-all ${
              scrolled 
                ? 'bg-blue-600 text-white hover:bg-blue-700' 
                : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30'
            }`}
          >
            İletişim
          </Link>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="relative w-6 h-6">
            <span className={`absolute left-0 top-1 block w-6 h-0.5 transform transition-all duration-300 ${
              isMobileMenuOpen 
                ? 'rotate-45 translate-y-1.5' 
                : ''
            } ${scrolled ? 'bg-gray-800' : 'bg-white'}`}></span>
            
            <span className={`absolute left-0 top-3 block w-6 h-0.5 transition-all duration-300 ${
              isMobileMenuOpen 
                ? 'opacity-0' 
                : 'opacity-100'
            } ${scrolled ? 'bg-gray-800' : 'bg-white'}`}></span>
            
            <span className={`absolute left-0 top-5 block w-6 h-0.5 transform transition-all duration-300 ${
              isMobileMenuOpen 
                ? '-rotate-45 -translate-y-1.5' 
                : ''
            } ${scrolled ? 'bg-gray-800' : 'bg-white'}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 max-h-0 ${
        isMobileMenuOpen ? 'max-h-screen mt-4 pb-4' : ''
      }`}>
        <div className={`rounded-lg p-3 ${scrolled ? 'bg-gray-50' : 'bg-white/10 backdrop-blur-md'}`}>
          <MobileNavLink href="/" scrolled={scrolled}>Ana Sayfa</MobileNavLink>
          
          <div className="mb-2">
            <button className={`w-full flex justify-between items-center py-2 px-4 rounded-lg font-medium ${
              scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}>
              Kurumsal
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="pl-4 mt-1 space-y-1">
              <MobileNavLink href="/kurumsal/hakkimizda" scrolled={scrolled}>Hakkımızda</MobileNavLink>
              <MobileNavLink href="/kurumsal/tarihce" scrolled={scrolled}>Tarihçe</MobileNavLink>
            </div>
          </div>
          
          <div className="mb-2">
            <button className={`w-full flex justify-between items-center py-2 px-4 rounded-lg font-medium ${
              scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}>
              Ürünlerimiz
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="pl-4 mt-1 space-y-1">
              <MobileNavLink href="/urunler/yolcu-koltuklari" scrolled={scrolled}>Yolcu Koltukları</MobileNavLink>
              <MobileNavLink href="/urunler/surucu-koltuklari" scrolled={scrolled}>Sürücü Koltukları</MobileNavLink>
              <MobileNavLink href="/urunler/ozel-koltuklar" scrolled={scrolled}>Özel Koltuklar</MobileNavLink>
              <MobileNavLink href="/urunler/askeri-koltuklar" scrolled={scrolled}>Askeri Koltuklar</MobileNavLink>
            </div>
          </div>
          
          <MobileNavLink href="/galeri" scrolled={scrolled}>Galeri</MobileNavLink>
          
          <Link 
            href="/iletisim" 
            className={`block py-2 px-4 rounded-lg font-medium mt-2 text-center ${
              scrolled 
                ? 'bg-blue-600 text-white hover:bg-blue-700' 
                : 'bg-white/20 text-white hover:bg-white/30'
            }`}
          >
            İletişim
          </Link>
        </div>
      </div>
    </header>
  );
};

// Reusable Desktop Navigation Link Component
const NavLink = ({ href, children, scrolled }: { href: string; children: React.ReactNode; scrolled: boolean }) => (
  <Link 
    href={href} 
    className={`px-3 py-2 rounded-full text-sm font-medium transition-all ${
      scrolled 
        ? 'hover:bg-gray-100 text-gray-700' 
        : 'hover:bg-white/10 text-white'
    }`}
  >
    {children}
  </Link>
);

// Reusable Mobile Navigation Link Component
const MobileNavLink = ({ href, children, scrolled }: { href: string; children: React.ReactNode; scrolled: boolean }) => (
  <Link 
    href={href} 
    className={`block py-2 px-4 rounded-lg font-medium mb-1 ${
      scrolled 
        ? 'text-gray-700 hover:bg-gray-100' 
        : 'text-white hover:bg-white/10'
    }`}
  >
    {children}
  </Link>
);

export default Header; 
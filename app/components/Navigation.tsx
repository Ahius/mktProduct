'use client';

import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { href: "/", label: "Trang chủ" },
    { href: "/san-pham", label: "Sản phẩm" },
    { href: "/about", label: "Về Cocoon" },
    { href: "/lien-he", label: "Liên hệ" },
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex flex-col items-center hover:opacity-80 transition-opacity">
              <span className="text-2xl text-gray-900 font-bold tracking-wider uppercase" style={{ letterSpacing: '0.15em' }}>
                Cocoon
              </span>
              <span className="text-xs text-gray-500 font-light">dịu lành làn da việt</span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-gray-700 hover:text-pink-600 font-medium transition-colors duration-300 group"
              >
                <span className="relative z-10">{link.label}</span>
                {/* Pink underline on hover */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-custom focus:outline-none"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative block px-3 py-2 text-gray-700 hover:text-pink-600 hover:bg-gray-50 rounded-md transition-colors duration-300 group"
              >
                <span className="relative z-10 font-medium">{link.label}</span>
                <span className="absolute left-3 bottom-2 w-0 h-0.5 bg-pink-400 group-hover:w-[calc(100%-1.5rem)] transition-all duration-300"></span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}


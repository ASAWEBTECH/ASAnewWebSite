import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navigationItems = [
  { label: 'HOME', href: '#home' },
  { label: 'EDUCATION', href: '#education' },
  { label: 'GALERY', href: '#galery' },
  { label: 'OUR COMMUNITY', href: '#ourcommunity' },
  { label: 'CONTACT US', href: '#contactus' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-[#2e2b70] shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home">
              <img
                src="./fundo.png"
                className="h-16 w-auto -ml-5"
                alt="Logo"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            <ul className="flex space-x-4">
              {navigationItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className={`px-3 py-2 text-sm font-medium transition-colors duration-200
                      ${
                        hoveredIndex === index
                          ? 'text-blue-600'
                          : 'text-white-700 hover:text-blue-600'
                      }`}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="https://asangola.openapply.com/"
              className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
            >
              Admissions
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-White-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navigationItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-white-700 hover:text-blue-600 hover:bg-gray-50"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://asangola.openapply.com/"
            className="block px-3 py-2 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md"
          >
            Admissions
          </a>
        </div>
      </div>
    </header>
  );
}
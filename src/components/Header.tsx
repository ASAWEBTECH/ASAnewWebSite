import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const navigationItems = [
  { label: 'Home', href: '/' },
  { label: 'Education', href: '../Education' },
  { label: 'Gallery', href: '../GalleryMain' },
  { label: 'School calendar', href: '../schoolCalendar' },
  { label: 'Contact', href: '../Contact' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div>
    <header className="absolute w-full top-6 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 mt-12">
            <Link href="/" passHref>
              <Image
              src="/fundo.png"
              className="h-16 w-auto md:h-52 transition-all duration-300"
              alt="Logo"
              width={520}
              height={520}
              priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="bg-[#0071c6]/80 shadow-md hidden md:flex items-center py-3 px-4 rounded-lg md:-mr-16">
          <nav className="hidden md:flex items-center space-x-4">
            <ul className="flex space-x-4">
              {navigationItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className={`px-3 py-1 text-base font-normal font-poppins transition-colors duration-200
                      ${
                        hoveredIndex === index
                          ? 'text-[#ffac1e] '
                          : 'text-white-700 hover:text-[#ffac1e]'
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
              className="ml-4 inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-full text-white bg-[#ff9f00] hover:bg-[#ffbb47] transition-colors duration-200"
            >
              Admissions
            </a>
          </nav>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[#ffac1e] hover:bg-[#0071c6]/80 focus:outline-none"
              style={{ background: isOpen ? 'rgba(0,113,198,0.8)' : 'transparent' }}
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
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#0071c6]/80 rounded-b-lg shadow-lg">
          {navigationItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-[#ffac1e] hover:bg-[#0071c6]/90"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://asangola.openapply.com/"
            className="block px-3 py-2 text-base font-medium text-white bg-[#ff9f00] hover:bg-[#ffbb47] rounded-md"
          >
            Admissions
          </a>
        </div>
      </div>
    </header>
    </div>
  );
}
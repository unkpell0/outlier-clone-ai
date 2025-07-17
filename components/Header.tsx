
import React, { useState, useEffect } from 'react';

const Logo = () => (
  <span className="text-3xl font-bold tracking-tighter text-gray-900">Outlier</span>
);

const MenuIcon = ({ className }: { className?: string }) => (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const CloseIcon = ({ className }: { className?: string }) => (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const navLinks = [
  { name: 'About Us', href: '#' },
  { name: 'Our Experts', href: '#' },
  { name: 'Blog', href: '#' },
  { name: 'FAQ', href: '#' },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <a href="#" aria-label="Homepage">
              <Logo />
            </a>
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors uppercase tracking-wider">
                  {link.name}
                </a>
              ))}
            </nav>
            <div className="hidden lg:flex items-center space-x-4">
              <a href="#" className="px-5 py-2 text-sm font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">LOG IN</a>
              <a href="#" className="px-5 py-2 text-sm font-semibold text-white bg-gray-900 hover:bg-gray-700 rounded-full transition-colors">
                VIEW OPPORTUNITIES
              </a>
            </div>
            <div className="lg:hidden">
              <button onClick={() => setIsMenuOpen(true)} aria-label="Open menu" className="text-gray-900">
                <MenuIcon className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-50 bg-white p-6 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out lg:hidden`}>
        <div className="flex justify-between items-center mb-10">
           <a href="#" aria-label="Homepage">
              <Logo />
            </a>
          <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
            <CloseIcon className="h-6 w-6 text-gray-900" />
          </button>
        </div>
        <nav className="flex flex-col space-y-6">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-lg font-semibold text-gray-600 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>
              {link.name}
            </a>
          ))}
        </nav>
        <div className="mt-10 pt-6 border-t border-gray-200 flex flex-col space-y-4">
            <a href="#" className="w-full text-center px-5 py-3 text-lg font-semibold text-gray-700 bg-gray-100 rounded-full">LOG IN</a>
            <a href="#" className="w-full text-center px-5 py-3 text-lg font-semibold text-white bg-gray-900 rounded-full">
                VIEW OPPORTUNITIES
            </a>
        </div>
      </div>
    </>
  );
};

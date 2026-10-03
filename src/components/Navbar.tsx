import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { Menu, X, ArrowUpRight, MessageCircle, Camera } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { getWhatsAppUrl, BRAND_INFO } from '../data/fashionData';
import { isOwnerMode } from '../utils/ownerMode';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenInquiry: (initialType?: string) => void;
  onOpenOwner?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, onOpenInquiry, onOpenOwner }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'collections', label: 'Collections' },
    { id: 'services', label: 'Services' },
    { id: 'academy', label: 'Academy' },
    { id: 'about', label: 'About' },
    { id: 'journal', label: 'Journal' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: PageId) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappLink = getWhatsAppUrl();

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0b0b0c]/90 backdrop-blur-md border-b border-[#27272a]'
            : 'bg-transparent border-b border-white/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 h-20 flex items-center justify-between">
          {/* Zone 1: Official Brand Logo with TF Monogram & Wordmark */}
          <button
            onClick={() => handleNavClick('home')}
            className="text-left group cursor-pointer focus-visible:outline-none flex items-center"
            aria-label="Tony Fashion Home"
          >
            <BrandLogo size="md" />
          </button>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-8 text-[13px] tracking-[0.15em] uppercase font-sans text-neutral-400">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`transition-colors py-1 relative cursor-pointer ${
                    isActive ? 'text-white' : 'hover:text-white'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-px bg-white transition-all" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Action & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 bg-[#25D366]/10 hover:bg-[#25D366] text-[#25D366] hover:text-black border border-[#25D366]/40 hover:border-[#25D366] text-[11px] uppercase tracking-wider font-medium transition-all"
              aria-label="WhatsApp Tony Fashion"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={() => onOpenInquiry('general')}
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 border border-neutral-700 hover:border-white text-xs uppercase tracking-[0.15em] text-neutral-200 hover:text-white transition-colors cursor-pointer"
            >
              <span>Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-neutral-300 hover:text-white focus:outline-none cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-[#0b0b0c] lg:hidden transition-all duration-500 ease-in-out flex flex-col justify-between px-6 pt-24 pb-8 overflow-y-auto ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
      >
        <div className="flex flex-col space-y-5">
          <div className="flex items-center justify-between border-b border-neutral-850 pb-3">
            <BrandLogo size="md" />
            <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400">
              Navigation
            </span>
          </div>
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left font-serif text-2xl tracking-wide uppercase transition-colors cursor-pointer flex items-center justify-between ${
                  isActive ? 'text-white' : 'text-neutral-400 hover:text-white'
                }`}
              >
                <span>{item.label}</span>
                {isActive && <span className="text-xs uppercase tracking-widest font-sans text-neutral-400">Current</span>}
              </button>
            );
          })}
        </div>

        <div className="pt-6 border-t border-neutral-800 space-y-3">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 bg-[#25D366] text-black text-xs uppercase tracking-[0.2em] font-semibold transition-colors flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4 fill-current stroke-none" />
            <span>Chat on WhatsApp (+234 704 989 6447)</span>
          </a>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenInquiry('general');
            }}
            className="w-full py-3 border border-neutral-600 hover:border-white text-white text-xs uppercase tracking-[0.2em] font-medium transition-colors cursor-pointer"
          >
            Request Consultation
          </button>

          <div className="pt-2 text-center text-[10px] uppercase tracking-[0.15em] text-neutral-400 font-light">
            <span>{BRAND_INFO.shortAddress}</span>
          </div>
        </div>
      </div>
    </>
  );
};

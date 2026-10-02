import React, { useState, useEffect } from 'react';
import { BRAND_INFO, getWhatsAppUrl } from '../data/fashionData';
import { PageId } from '../types';
import { ArrowUp, MessageCircle, MapPin, Camera, Lock } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { isOwnerMode, toggleOwnerMode } from '../utils/ownerMode';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onTriggerOwner?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onTriggerOwner }) => {
  const [clickCount, setClickCount] = useState(0);
  const [ownerActive, setOwnerActive] = useState(isOwnerMode());

  useEffect(() => {
    const handler = () => setOwnerActive(isOwnerMode());
    window.addEventListener('tony-owner-mode-changed', handler);
    window.addEventListener('hashchange', handler);
    return () => {
      window.removeEventListener('tony-owner-mode-changed', handler);
      window.removeEventListener('hashchange', handler);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCopyrightClick = () => {
    const next = clickCount + 1;
    if (next >= 3) {
      setClickCount(0);
      const active = toggleOwnerMode();
      if (active) onTriggerOwner?.();
    } else {
      setClickCount(next);
    }
  };

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'collections', label: 'Lookbook' },
    { id: 'services', label: 'Services' },
    { id: 'academy', label: 'Academy' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-[#080809] border-t border-neutral-900 text-neutral-400 font-sans py-12">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-8 border-b border-neutral-850 gap-6">
          <div>
            <BrandLogo size="md" />
            <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-400 mt-2 font-light">
              Bespoke Tailoring · Experimental Denim · Apparel Manufacturing
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs uppercase tracking-wider">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className="hover:text-white transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 border border-neutral-800 hover:border-neutral-600 text-neutral-400 hover:text-white transition-colors cursor-pointer self-start md:self-auto"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 text-neutral-300">
            <MapPin className="w-3.5 h-3.5 text-[#d4995c] shrink-0" />
            <span>{BRAND_INFO.physicalStore}</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            {onTriggerOwner && ownerActive && (
              <button
                onClick={onTriggerOwner}
                className="text-[#d4995c] hover:text-white flex items-center gap-1.5 font-medium text-[11px] border border-[#d4995c]/60 px-2 py-1 bg-neutral-900 cursor-pointer"
              >
                <Camera className="w-3.5 h-3.5" />
                <span>Owner: Manage Photos</span>
              </button>
            )}

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#25D366] hover:underline flex items-center gap-1 font-medium text-xs"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp: {BRAND_INFO.whatsappDisplay}</span>
            </a>
            <span
              onClick={handleCopyrightClick}
              className="text-neutral-400 text-[11px] cursor-default select-none"
              title="Tony Fashion"
            >
              © {new Date().getFullYear()} Tony Fashion
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

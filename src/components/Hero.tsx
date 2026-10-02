import React from 'react';
import { BRAND_ASSETS, BRAND_INFO, getWhatsAppUrl } from '../data/fashionData';
import { ArrowUpRight, MessageCircle, MapPin } from 'lucide-react';
import { PageId } from '../types';

interface HeroProps {
  onNavigate: (page: PageId) => void;
  onOpenInquiry: (type?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, onOpenInquiry }) => {
  return (
    <section className="relative min-h-[82vh] sm:min-h-[88vh] flex items-end pb-12 pt-28 sm:pt-32 overflow-hidden">
      {/* Background Editorial Image with subtle contrast scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={BRAND_ASSETS.hero}
          alt="Tony Fashion Avant-Garde Collection"
          className="w-full h-full object-cover object-center filter brightness-[0.75] contrast-[1.08]"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0c] via-[#0b0b0c]/50 to-black/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full">
        {/* Hero Title & Information - cleanly positioned at bottom without blocking model */}
        <div className="max-w-3xl">
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white font-normal tracking-tight leading-[1.1] mb-4 text-balance">
            Bespoke Tailoring, Crazy-Jeans & Apparel Manufacturing
          </h1>

          <p className="font-sans text-neutral-300 text-sm sm:text-base font-light leading-relaxed max-w-xl mb-6 text-balance">
            Over a decade of hands-on physical craftsmanship. We design, manufacture, and teach non-basic garments with structural integrity.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-black text-xs uppercase tracking-[0.18em] font-semibold transition-all flex items-center gap-2 cursor-pointer shadow-lg"
            >
              <MessageCircle className="w-4 h-4 fill-current stroke-none" />
              <span>WhatsApp Inquiries</span>
            </a>

            <button
              onClick={() => {
                const el = document.getElementById('lookbook-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                else onNavigate('collections');
              }}
              className="px-6 py-3 border border-neutral-600 hover:border-white text-white text-xs uppercase tracking-[0.18em] font-medium transition-colors text-center cursor-pointer flex items-center gap-1.5"
            >
              <span>View Works</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Location Strip along bottom border */}
        <div className="mt-8 pt-4 border-t border-neutral-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-neutral-400">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#d4995c] shrink-0" />
            <span className="text-neutral-300 text-[11px] sm:text-xs">
              {BRAND_INFO.physicalStore}
            </span>
          </div>
          <div className="text-[11px] text-neutral-500 font-sans tracking-wider uppercase">
            {BRAND_INFO.studioHours}
          </div>
        </div>
      </div>
    </section>
  );
};

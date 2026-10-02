import React from 'react';
import { BRAND_ASSETS, BRAND_INFO } from '../data/fashionData';
import { ArrowUpRight } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface AboutSectionProps {
  onOpenInquiry: (initialSubject?: string) => void;
  isStandalonePage?: boolean;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onOpenInquiry,
  isStandalonePage = false,
}) => {
  return (
    <section className={`bg-[#0b0b0c] ${isStandalonePage ? 'pt-28 pb-32' : 'py-24 sm:py-32 border-t border-neutral-900'}`}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-neutral-400 font-sans mb-3">
            <span>Brand Heritage & Identity</span>
            <span className="w-6 h-px bg-neutral-700" />
            <span>Over A Decade</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white font-normal leading-tight mb-6">
            The Tony Fashion Story
          </h2>

          <p className="font-sans text-neutral-300 text-base sm:text-lg font-light leading-relaxed">
            Tony Fashion ({BRAND_INFO.alias}) is an independent fashion design and manufacturing house operating at the intersection of avant-garde denim experimentation and industrial production rigor.
          </p>
        </div>

        {/* Narrative & Image Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start mb-24">
          <div className="lg:col-span-6 space-y-6">
            {/* Official Brand Hallmark Box */}
            <div className="p-6 bg-neutral-950 border border-neutral-800 flex items-center justify-between">
              <BrandLogo size="lg" />
              <div className="text-right">
                <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 block">
                  Official Insignia
                </span>
                <span className="text-xs text-[#d4995c] font-sans tracking-widest font-medium">
                  TF ATELIER
                </span>
              </div>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal leading-snug">
              A Decade of Tactile Mastery and Non-Basic Garments
            </h3>

            <p className="font-sans text-neutral-400 text-sm sm:text-base leading-relaxed font-light">
              For more than ten years, Tony Fashion has operated as a living workshop. We began not with mood boards or venture financing, but at the cutting table with heavy-gauge shears, tailor chalk, and raw fabric bolts.
            </p>

            <p className="font-sans text-neutral-400 text-sm sm:text-base leading-relaxed font-light">
              While conventional fashion moved toward disposable mass production and generic blanks, our studio doubled down on non-basic, high-character silhouettes. We became renowned for our experimental &ldquo;crazy-jeans&rdquo; — sculptural denim constructions featuring asymmetric paneling, multidirectional pockets, and intricate seam ergonomics that challenge conventional tailoring rules.
            </p>

            <p className="font-sans text-neutral-400 text-sm sm:text-base leading-relaxed font-light">
              Over ten continuous years of physical garment manufacturing, we expanded our operational footprint to encompass not only bespoke individual commissions, but small-batch B2B industrial manufacturing and a structured academy where apprentice tailors learn the craft first-hand.
            </p>

            {/* Core Values Minimalist Grid */}
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-neutral-800">
              <div>
                <span className="font-serif text-3xl text-white block mb-1">10+</span>
                <span className="text-xs uppercase tracking-wider text-neutral-400 font-sans">
                  Years of Physical Operation
                </span>
              </div>
              <div>
                <span className="font-serif text-3xl text-white block mb-1">4-Phase</span>
                <span className="text-xs uppercase tracking-wider text-neutral-400 font-sans">
                  Integrated Fashion Engine
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-8">
            <div className="relative aspect-[4/3] bg-neutral-900 border border-neutral-800 overflow-hidden">
              <img
                src={BRAND_ASSETS.atelierCollectionRack}
                alt="Tony Fashion Studio Atelier and Production Sample Rack"
                className="w-full h-full object-cover object-center filter brightness-95"
                loading="lazy"
              />
              <div className="absolute bottom-4 left-4 bg-black/80 px-3 py-1.5 border border-white/10 text-[11px] font-sans tracking-widest text-neutral-300">
                Atelier Mannequin Vest & Sample Rack
              </div>
            </div>

            <div className="p-6 sm:p-8 bg-neutral-950 border border-neutral-800/80">
              <h4 className="font-serif text-xl text-white mb-3 font-normal">
                The Integrated Fashion Engine
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed font-light mb-4">
                Our operations form a closed continuous loop where ideas pass seamlessly from bespoke sketches to industrial engineering, material research, and apprentice transmission:
              </p>
              <div className="flex flex-wrap items-center gap-2 text-xs font-sans tracking-wider uppercase text-neutral-200">
                <span className="px-2.5 py-1 bg-neutral-900 border border-neutral-800">Design</span>
                <span className="text-neutral-600">→</span>
                <span className="px-2.5 py-1 bg-neutral-900 border border-neutral-800">Production</span>
                <span className="text-neutral-600">→</span>
                <span className="px-2.5 py-1 bg-neutral-900 border border-neutral-800">Development</span>
                <span className="text-neutral-600">→</span>
                <span className="px-2.5 py-1 bg-neutral-900 border border-neutral-800">Education</span>
              </div>
            </div>
          </div>
        </div>

        {/* Studio Consultation Banner */}
        <div className="pt-12 border-t border-neutral-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h4 className="font-serif text-2xl text-white font-normal mb-1">
              Connect With The Founders & Artisans
            </h4>
            <p className="text-xs text-neutral-400 font-light">
              Available for bespoke appointments, brand production partnerships, and press inquiries.
            </p>
          </div>

          <button
            onClick={() => onOpenInquiry('general')}
            className="px-6 py-3.5 bg-white text-black text-xs uppercase tracking-[0.2em] font-medium hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 cursor-pointer self-start sm:self-auto"
          >
            <span>Initiate Dialogue</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

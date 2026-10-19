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
            <span>Our Story & Workshop</span>
            <span className="w-6 h-px bg-neutral-700" />
            <span>Over 10 Years in Nigeria</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white font-normal leading-tight mb-6">
            The Tony Fashion Story
          </h2>

          <p className="font-sans text-neutral-300 text-base sm:text-lg font-light leading-relaxed">
            Tony Fashion ({BRAND_INFO.alias}) is a Nigerian fashion brand and sewing workshop based at Delta Park UniPort, Port Harcourt. We are well known for neat custom tailoring, creative crazy jeans, bulk factory sewing, and practical fashion school training.
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
                  Official Brand
                </span>
                <span className="text-xs text-[#d4995c] font-sans tracking-widest font-medium">
                  TONY FASHION
                </span>
              </div>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal leading-snug">
              Over 10 Years of Real Tailoring & Quality Sewing
            </h3>

            <p className="font-sans text-neutral-400 text-sm sm:text-base leading-relaxed font-light">
              For more than ten years, Tony Fashion has been doing real work at the cutting table with scissors, tailor chalk, and quality fabrics. We did not start with empty talk — we started by cutting and sewing neat, clean clothes that make our customers look sharp.
            </p>

            <p className="font-sans text-neutral-400 text-sm sm:text-base leading-relaxed font-light">
              While many tailors only sew plain, basic styles, we decided to be creative. That was how we created our famous &ldquo;crazy jeans&rdquo; — stylish denim trousers with unique cargo pockets, creative patch designs, and strong stitches that turn heads anywhere you go.
            </p>

            <p className="font-sans text-neutral-400 text-sm sm:text-base leading-relaxed font-light">
              Today, our workshop handles custom individual orders, bulk sewing for clothing brands and school uniforms, and our fashion academy where young people learn the trade with real sewing machines.
            </p>

            {/* Core Values Minimalist Grid */}
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-neutral-800">
              <div>
                <span className="font-serif text-3xl text-white block mb-1">10+</span>
                <span className="text-xs uppercase tracking-wider text-neutral-400 font-sans">
                  Years of Tailoring Experience
                </span>
              </div>
              <div>
                <span className="font-serif text-3xl text-white block mb-1">4 Services</span>
                <span className="text-xs uppercase tracking-wider text-neutral-400 font-sans">
                  Custom, Jeans, Bulk & Academy
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
                Tailored Outfits on Display in Our Workshop
              </div>
            </div>

            <div className="p-6 sm:p-8 bg-neutral-950 border border-neutral-800/80">
              <h4 className="font-serif text-xl text-white mb-3 font-normal">
                How We Work at Tony Fashion
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed font-light mb-4">
                Everything we do is connected under one roof to give you the best quality clothing:
              </p>
              <div className="flex flex-wrap items-center gap-2 text-xs font-sans tracking-wider uppercase text-neutral-200">
                <span className="px-2.5 py-1 bg-neutral-900 border border-neutral-800">1. Accurate Measurement</span>
                <span className="text-neutral-600">→</span>
                <span className="px-2.5 py-1 bg-neutral-900 border border-neutral-800">2. Clean Pattern Cutting</span>
                <span className="text-neutral-600">→</span>
                <span className="px-2.5 py-1 bg-neutral-900 border border-neutral-800">3. Industrial Sewing</span>
                <span className="text-neutral-600">→</span>
                <span className="px-2.5 py-1 bg-neutral-900 border border-neutral-800">4. Perfect Fitting</span>
              </div>
            </div>
          </div>
        </div>

        {/* Studio Consultation Banner */}
        <div className="pt-12 border-t border-neutral-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h4 className="font-serif text-2xl text-white font-normal mb-1">
              Talk Directly with Our Head Tailors
            </h4>
            <p className="text-xs text-neutral-400 font-light">
              Reach out to sew custom clothes, discuss bulk production for your brand, or register for our fashion academy.
            </p>
          </div>

          <button
            onClick={() => onOpenInquiry('general')}
            className="px-6 py-3.5 bg-white text-black text-xs uppercase tracking-[0.2em] font-medium hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 cursor-pointer self-start sm:self-auto"
          >
            <span>Send Us a Message</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { PILLARS } from '../data/fashionData';
import { ArrowUpRight, CheckCircle2, Scissors, Factory, GraduationCap } from 'lucide-react';

interface ServicesSectionProps {
  onOpenInquiry: (initialType?: string) => void;
  isStandalonePage?: boolean;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenInquiry,
  isStandalonePage = false,
}) => {
  const getPillarIcon = (id: string) => {
    switch (id) {
      case 'atelier':
        return <Scissors className="w-5 h-5 text-neutral-300" />;
      case 'production':
        return <Factory className="w-5 h-5 text-neutral-300" />;
      case 'academy':
        return <GraduationCap className="w-5 h-5 text-neutral-300" />;
      default:
        return null;
    }
  };

  return (
    <section className={`bg-[#0c0c0e] ${isStandalonePage ? 'pt-28 pb-32' : 'py-24 sm:py-32 border-t border-neutral-900'}`}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <div className="flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-neutral-400 font-sans mb-3">
            <span>Capabilities & Operations</span>
            <span className="w-6 h-px bg-neutral-700" />
            <span>Three Pillars</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white font-normal leading-tight mb-6">
            Fashion Engine Services
          </h2>

          <p className="font-sans text-neutral-400 text-base sm:text-lg font-light leading-relaxed">
            From single private commissions to high-volume commercial production and generational technical education, our facilities are equipped to execute at international luxury standards.
          </p>
        </div>

        {/* Pillars In-Depth */}
        <div className="space-y-24">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              id={`service-${pillar.id}`}
              className="border border-neutral-800 bg-[#0e0e11] p-6 sm:p-10 md:p-12 relative overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">
                {/* Left Header Info */}
                <div className="lg:w-5/12 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2.5">
                        {getPillarIcon(pillar.id)}
                        <span className="text-xs uppercase tracking-[0.25em] text-neutral-400 font-sans">
                          Pillar {pillar.number}
                        </span>
                      </div>
                      <span className="font-serif text-3xl text-neutral-600 font-light">
                        {pillar.number}
                      </span>
                    </div>

                    <h3 className="font-serif text-3xl sm:text-4xl text-white font-normal mb-3">
                      {pillar.title}
                    </h3>

                    <p className="text-sm text-neutral-300 font-sans tracking-wide uppercase mb-6 text-neutral-400">
                      {pillar.tagline}
                    </p>

                    <p className="font-sans text-neutral-300 text-sm leading-relaxed mb-6 font-light">
                      {pillar.description}
                    </p>

                    <blockquote className="border-l border-neutral-700 pl-4 py-2 italic font-serif text-neutral-300 text-sm mb-6 bg-neutral-900/40">
                      &ldquo;{pillar.quote}&rdquo;
                    </blockquote>
                  </div>

                  {/* Consultation Button */}
                  <div className="pt-4">
                    <button
                      onClick={() => onOpenInquiry(pillar.id)}
                      className="w-full sm:w-auto px-7 py-3.5 bg-white text-black text-xs uppercase tracking-[0.2em] font-medium hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Consult With {pillar.title} Team</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Right Capabilities Grid */}
                <div className="lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-6 border-t lg:border-t-0 lg:border-l border-neutral-800 pt-8 lg:pt-0 lg:pl-10">
                  {pillar.capabilities.map((cap, cIdx) => (
                    <div
                      key={cIdx}
                      className="p-5 bg-neutral-900/40 border border-neutral-800/80 hover:border-neutral-700 transition-colors"
                    >
                      <div className="flex items-start gap-2.5 mb-2.5">
                        <CheckCircle2 className="w-4 h-4 text-neutral-400 mt-0.5 shrink-0" />
                        <h4 className="font-serif text-lg text-white font-normal leading-snug">
                          {cap.title}
                        </h4>
                      </div>
                      <p className="font-sans text-xs text-neutral-400 leading-relaxed font-light pl-6">
                        {cap.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Operational Standards Banner */}
        <div className="mt-20 p-8 sm:p-12 border border-neutral-800/80 bg-neutral-950 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <h4 className="font-serif text-2xl text-white mb-2 font-normal">
              Technical Consultation & Facility Visits
            </h4>
            <p className="text-sm text-neutral-400 font-light max-w-xl">
              Clients seeking bespoke commissions, brand development, or factory production audits are welcomed at our physical facilities by appointment.
            </p>
          </div>

          <button
            onClick={() => onOpenInquiry('general')}
            className="px-6 py-3 border border-neutral-600 hover:border-white text-white text-xs uppercase tracking-[0.18em] transition-colors whitespace-nowrap cursor-pointer self-start md:self-auto"
          >
            Schedule Atelier Visit
          </button>
        </div>
      </div>
    </section>
  );
};

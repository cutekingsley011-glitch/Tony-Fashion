import React from 'react';
import { PILLARS } from '../data/fashionData';
import { ArrowUpRight, Scissors, Factory, GraduationCap } from 'lucide-react';
import { PageId } from '../types';

interface PillarsOverviewProps {
  onNavigate: (page: PageId) => void;
  onOpenInquiry: (initialType?: string) => void;
}

export const PillarsOverview: React.FC<PillarsOverviewProps> = ({ onNavigate, onOpenInquiry }) => {
  const icons = [
    <Scissors className="w-5 h-5 text-[#d4995c]" key="1" />,
    <Factory className="w-5 h-5 text-[#d4995c]" key="2" />,
    <GraduationCap className="w-5 h-5 text-[#d4995c]" key="3" />,
  ];

  return (
    <section id="engine-overview" className="py-16 sm:py-20 bg-[#0e0e11] border-y border-neutral-900">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Concise Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#d4995c] font-sans block mb-2">
              What We Do
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-white font-normal">
              The Three Core Pillars
            </h2>
          </div>
          <p className="text-xs text-neutral-400 font-light max-w-md">
            Design, industrial production, and apprentice training unified under one physical workshop.
          </p>
        </div>

        {/* 3 Clean Compact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PILLARS.map((pillar, idx) => (
            <div
              key={pillar.id}
              className="bg-neutral-950 border border-neutral-850 hover:border-neutral-700 transition-all p-6 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 bg-neutral-900 border border-neutral-800">
                    {icons[idx]}
                  </div>
                  <span className="font-mono text-xs text-neutral-600 font-medium">
                    {pillar.number}
                  </span>
                </div>

                <h3 className="font-serif text-xl text-white font-normal mb-2 group-hover:text-[#d4995c] transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs text-[#d4995c] font-sans tracking-wide mb-3">
                  {pillar.tagline}
                </p>
                <p className="text-xs text-neutral-400 font-light leading-relaxed mb-6">
                  {pillar.summary}
                </p>
              </div>

              <button
                onClick={() => onOpenInquiry(pillar.id)}
                className="inline-flex items-center gap-1.5 text-xs text-neutral-300 hover:text-white uppercase tracking-wider pt-3 border-t border-neutral-900 transition-colors cursor-pointer"
              >
                <span>Consult On {pillar.title}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

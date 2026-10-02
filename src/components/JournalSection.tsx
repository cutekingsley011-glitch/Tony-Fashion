import React, { useState } from 'react';
import { JOURNAL_ARTICLES } from '../data/fashionData';
import { JournalArticle } from '../types';
import { ArrowUpRight, X, ArrowLeft } from 'lucide-react';

interface JournalSectionProps {
  onOpenInquiry: (initialSubject?: string) => void;
  isStandalonePage?: boolean;
}

export const JournalSection: React.FC<JournalSectionProps> = ({
  onOpenInquiry,
  isStandalonePage = false,
}) => {
  const [selectedArticle, setSelectedArticle] = useState<JournalArticle | null>(null);

  return (
    <section className={`bg-[#0c0c0e] ${isStandalonePage ? 'pt-28 pb-32' : 'py-24 sm:py-32 border-t border-neutral-900'}`}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-neutral-400 font-sans mb-3">
            <span>Essays & Craft Dispatches</span>
            <span className="w-6 h-px bg-neutral-700" />
            <span>Tony Fashion Journal</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white font-normal leading-tight mb-6">
            The Studio Journal
          </h2>

          <p className="font-sans text-neutral-400 text-base sm:text-lg font-light leading-relaxed">
            Explorations into denim geometry, technical pattern engineering, the economics of small-batch production, and studio culture.
          </p>
        </div>

        {/* Articles Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {JOURNAL_ARTICLES.map((article) => (
            <article
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="group cursor-pointer flex flex-col justify-between border border-neutral-850 hover:border-neutral-700 bg-[#0e0e11] p-6 transition-all duration-300"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-950 mb-6 border border-neutral-800">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover object-center filter brightness-90 contrast-[1.05] group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>

                <div className="flex items-center gap-2 text-[11px] font-sans tracking-wider uppercase text-neutral-400 mb-3">
                  <span>{article.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{article.readTime}</span>
                </div>

                <h3 className="font-serif text-2xl text-white group-hover:text-neutral-300 transition-colors font-normal leading-snug mb-3">
                  {article.title}
                </h3>

                <p className="font-sans text-xs text-neutral-400 leading-relaxed font-light line-clamp-3 mb-6">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-400 group-hover:text-white transition-colors">
                <span className="font-sans tracking-wider text-[11px] uppercase">{article.date}</span>
                <div className="flex items-center gap-1 uppercase tracking-widest text-[11px]">
                  <span>Read Essay</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Article Full Reader Modal */}
        {selectedArticle && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 bg-black/90 backdrop-blur-md overflow-y-auto"
            onClick={(e) => {
              if (e.target === e.currentTarget) setSelectedArticle(null);
            }}
          >
            <div className="relative w-full max-w-4xl bg-[#0e0e11] border border-neutral-800 my-auto p-6 sm:p-12 overflow-y-auto max-h-[90vh] shadow-2xl">
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 p-2 bg-neutral-900 border border-neutral-700 text-neutral-300 hover:text-white transition-colors cursor-pointer"
                aria-label="Close article"
              >
                <X className="w-5 h-5" />
              </button>

              <button
                onClick={() => setSelectedArticle(null)}
                className="flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-400 hover:text-white mb-6 transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Return to Journal</span>
              </button>

              <div className="flex items-center gap-2 text-xs font-sans tracking-widest uppercase text-neutral-400 mb-4">
                <span>{selectedArticle.category}</span>
                <span aria-hidden="true">·</span>
                <span>{selectedArticle.date}</span>
                <span aria-hidden="true">·</span>
                <span>{selectedArticle.readTime}</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl text-white font-normal leading-tight mb-8">
                {selectedArticle.title}
              </h2>

              <div className="relative aspect-[16/9] overflow-hidden border border-neutral-800 mb-8 bg-neutral-950">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-6 text-neutral-300 font-sans text-sm sm:text-base leading-relaxed font-light border-b border-neutral-800 pb-10 mb-8">
                {selectedArticle.content.map((paragraph, pIdx) => (
                  <p key={pIdx}>{paragraph}</p>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs uppercase tracking-wider text-neutral-400 block mb-1">
                    Published By
                  </span>
                  <span className="font-serif text-lg text-white">
                    Tony Fashion Editorial Studio
                  </span>
                </div>

                <button
                  onClick={() => {
                    const title = selectedArticle.title;
                    setSelectedArticle(null);
                    onOpenInquiry(`Dialogue regarding Journal Article: ${title}`);
                  }}
                  className="px-6 py-3 border border-neutral-700 hover:border-white text-white text-xs uppercase tracking-[0.18em] transition-colors cursor-pointer self-start sm:self-auto"
                >
                  Discuss This Concept
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

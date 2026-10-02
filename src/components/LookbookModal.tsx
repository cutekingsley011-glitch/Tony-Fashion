import React, { useEffect } from 'react';
import { LookbookItem } from '../types';
import { X, ArrowRight, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../data/fashionData';

interface LookbookModalProps {
  item: LookbookItem | null;
  onClose: () => void;
  onInquire: (itemName: string) => void;
}

export const LookbookModal: React.FC<LookbookModalProps> = ({ item, onClose, onInquire }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  const whatsappUrl = getWhatsAppUrl(
    `Hi Tony Fashion, I came from the website, I came to make enquiries regarding: ${item.title}.`
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-5xl bg-[#0e0e10] border border-neutral-800 my-auto overflow-hidden shadow-2xl flex flex-col lg:flex-row max-h-[92vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 bg-black/60 hover:bg-black text-neutral-300 hover:text-white border border-neutral-700 transition-colors cursor-pointer"
          aria-label="Close lookbook preview"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Column: High-Res Image */}
        <div className="lg:w-7/12 relative bg-neutral-950 flex items-center justify-center overflow-hidden min-h-[350px] lg:min-h-[550px]">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover object-center max-h-[50vh] lg:max-h-[85vh]"
          />
          <div className="absolute bottom-4 left-4 bg-black/70 px-3 py-1.5 border border-white/10 text-[11px] font-sans tracking-widest uppercase text-neutral-300">
            {item.season} · {item.category}
          </div>
        </div>

        {/* Right Column: Garment Specs & Editorial Analysis */}
        <div className="lg:w-5/12 p-6 sm:p-8 md:p-10 overflow-y-auto flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-neutral-800">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-neutral-400 mb-3 font-sans">
              <span>Tony Fashion Archive</span>
              <span className="w-4 h-px bg-neutral-700" />
              <span>{item.category}</span>
            </div>

            <h3 id="modal-title" className="font-serif text-2xl sm:text-3xl text-white font-normal leading-snug mb-4">
              {item.title}
            </h3>

            <p className="font-sans text-neutral-300 text-sm leading-relaxed mb-6 font-light">
              {item.description}
            </p>

            {/* Technical Specifications */}
            <div className="space-y-4 mb-8 pt-4 border-t border-neutral-800">
              <div>
                <span className="block text-[11px] uppercase tracking-wider text-neutral-400 mb-1">
                  Architectural Silhouette
                </span>
                <span className="text-xs text-neutral-200">{item.silhouette}</span>
              </div>

              <div>
                <span className="block text-[11px] uppercase tracking-wider text-neutral-400 mb-1">
                  Material Composition
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {item.fabrics.map((fabric, idx) => (
                    <span
                      key={idx}
                      className="text-xs text-neutral-300 bg-neutral-900 border border-neutral-800 px-2.5 py-1"
                    >
                      {fabric}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="block text-[11px] uppercase tracking-wider text-neutral-400 mb-1">
                  Craftsmanship & Finishing Details
                </span>
                <ul className="text-xs text-neutral-300 space-y-1 list-disc list-inside">
                  {item.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Action Area: Bespoke / Production Consultation & WhatsApp */}
          <div className="pt-6 border-t border-neutral-800 space-y-3">
            <p className="text-[11px] text-neutral-400 mb-2 font-light">
              This piece is part of our permanent atelier design archive. Available via custom bespoke tailoring or commercial production adaptation.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-[#25D366] hover:bg-[#20bd5a] text-black text-xs uppercase tracking-[0.2em] font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-current stroke-none" />
              <span>WhatsApp Inquiry For This Piece</span>
            </a>

            <button
              onClick={() => {
                onClose();
                onInquire(item.title);
              }}
              className="w-full py-3 border border-neutral-700 hover:border-white text-white text-xs uppercase tracking-[0.2em] font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Email Consultation Form</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

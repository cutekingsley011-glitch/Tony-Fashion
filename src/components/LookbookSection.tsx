import React, { useState, useEffect } from 'react';
import { LOOKBOOK_ITEMS, getWhatsAppUrl } from '../data/fashionData';
import { LookbookItem } from '../types';
import { LookbookModal } from './LookbookModal';
import { Eye, MessageCircle, Camera } from 'lucide-react';
import { loadSavedMedia, CustomMediaMap } from '../utils/mediaStore';
import { isOwnerMode } from '../utils/ownerMode';

interface LookbookSectionProps {
  onOpenInquiry: (initialSubject?: string) => void;
  isStandalonePage?: boolean;
  onOpenOwner?: () => void;
}

export const LookbookSection: React.FC<LookbookSectionProps> = ({
  onOpenInquiry,
  isStandalonePage = false,
  onOpenOwner,
}) => {
  const [selectedPiece, setSelectedPiece] = useState<LookbookItem | null>(null);
  const [mediaMap, setMediaMap] = useState<CustomMediaMap>({});
  const [ownerActive, setOwnerActive] = useState<boolean>(isOwnerMode());

  useEffect(() => {
    const ownerHandler = () => setOwnerActive(isOwnerMode());
    window.addEventListener('tony-owner-mode-changed', ownerHandler);
    window.addEventListener('hashchange', ownerHandler);

    setMediaMap(loadSavedMedia());
    const handler = (e: any) => {
      setMediaMap(e.detail || {});
    };
    window.addEventListener('tony-media-updated', handler);
    return () => {
      window.removeEventListener('tony-media-updated', handler);
      window.removeEventListener('tony-owner-mode-changed', ownerHandler);
      window.removeEventListener('hashchange', ownerHandler);
    };
  }, []);

  const getItemImage = (item: LookbookItem, index: number): string => {
    // Priority 1: User uploaded custom photo in Owner Mode
    if (index === 0 && mediaMap.oliveMonogram) return mediaMap.oliveMonogram;
    if (index === 1 && (mediaMap.whitePipedSet || mediaMap.oliveSilhouette)) return (mediaMap.whitePipedSet || mediaMap.oliveSilhouette)!;
    if (index === 2 && (mediaMap.tweedWideTrousers || mediaMap.tweedPortrait)) return (mediaMap.tweedWideTrousers || mediaMap.tweedPortrait)!;
    if (index === 3 && mediaMap.atelierRack) return mediaMap.atelierRack;
    if (index === 4 && mediaMap.crazyJeans) return mediaMap.crazyJeans;
    // Priority 2: Direct bundled static asset imported in fashionData
    return item.image;
  };

  // The 5 signature collection looks displayed in one screen row
  const displayItems = LOOKBOOK_ITEMS.slice(0, 5);

  return (
    <section
      id="lookbook-section"
      className={`bg-[#0b0b0c] ${isStandalonePage ? 'pt-20 pb-16' : 'py-12 sm:py-14 border-t border-neutral-900'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Compact Header (Fits in one screen together with items) */}
        <div className="flex flex-row items-center justify-between mb-5 gap-3 border-b border-neutral-900 pb-3">
          <div>
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-[#d4995c] font-sans">
              <span>Tony Fashion Archive</span>
              <span className="w-4 h-px bg-neutral-700" />
              <span>Series 01 & 02</span>
            </div>
            <h2 className="font-serif text-xl sm:text-2xl md:text-3xl text-white font-normal leading-tight">
              Collections Gallery
            </h2>
          </div>

          <div className="flex items-center gap-3">
            {onOpenOwner && ownerActive && (
              <button
                onClick={onOpenOwner}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-neutral-900 border border-[#d4995c]/50 text-[#d4995c] hover:bg-[#d4995c] hover:text-black text-[11px] font-medium transition-colors cursor-pointer"
              >
                <Camera className="w-3.5 h-3.5" />
                <span>Upload Phone Photos</span>
              </button>
            )}
            <span className="text-[11px] text-neutral-400 font-light hidden sm:inline">
              Tap any look to view details
            </span>
          </div>
        </div>

        {/* 5-in-One-Screen Compact Grid (Fits in a single screenshot without scrolling) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5 sm:gap-3">
          {displayItems.map((item, idx) => {
            const currentImg = getItemImage(item, idx);
            return (
              <div
                key={item.id}
                onClick={() => setSelectedPiece({ ...item, image: currentImg })}
                className="group cursor-pointer bg-neutral-950/70 border border-neutral-850 hover:border-neutral-700 transition-all p-2 flex flex-col justify-between"
              >
                {/* Compact Thumbnail Container */}
                <div className="relative aspect-[3/4] overflow-hidden bg-neutral-900 mb-2">
                  <img
                    src={currentImg}
                    alt={item.title}
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = item.image;
                    }}
                    className="w-full h-full object-cover object-center filter brightness-95 group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* Season & Category Badge */}
                  <div className="absolute top-1.5 left-1.5 text-[9px] uppercase tracking-widest text-white bg-black/80 px-1.5 py-0.5 border border-white/10 font-sans">
                    {item.season}
                  </div>

                  {/* Hover Eye Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform">
                      <Eye className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Title & Category - Compact 1-2 lines */}
                <div>
                  <span className="text-[9px] font-sans tracking-wider uppercase text-neutral-500 block truncate">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-xs sm:text-sm text-white group-hover:text-[#d4995c] transition-colors leading-tight line-clamp-2 mt-0.5">
                    {item.title}
                  </h3>
                </div>

                {/* Quick WhatsApp Action per piece */}
                <div className="mt-2 pt-1.5 border-t border-neutral-900 flex items-center justify-between text-[10px] text-neutral-400 group-hover:text-white">
                  <span className="text-[9px] uppercase tracking-wider">Tap to View</span>
                  <a
                    href={getWhatsAppUrl(`Hi Tony Fashion, I came from the website, I came to make enquiries regarding: ${item.title}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-[#25D366] hover:text-white p-1"
                    title="Inquire on WhatsApp"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-current stroke-none" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Lookbook Modal Viewer */}
        <LookbookModal
          item={selectedPiece}
          onClose={() => setSelectedPiece(null)}
          onInquire={(pieceName) => {
            onOpenInquiry(`Inquiry regarding lookbook piece: ${pieceName}`);
          }}
        />
      </div>
    </section>
  );
};

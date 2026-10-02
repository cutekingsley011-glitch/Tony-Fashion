import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl, BRAND_INFO } from '../data/fashionData';

interface WhatsAppButtonProps {
  customMessage?: string;
  className?: string;
}

export const WhatsAppFloatingButton: React.FC<WhatsAppButtonProps> = ({
  customMessage,
  className = '',
}) => {
  const url = getWhatsAppUrl(customMessage);

  return (
    <aside aria-label="WhatsApp quick chat" className={`fixed bottom-6 right-6 z-40 ${className}`}>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-black px-4 py-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 border border-white/20"
        aria-label="Chat with Tony Fashion on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 fill-current stroke-none" />
        <span className="text-xs uppercase tracking-wider font-semibold font-sans hidden sm:inline-block">
          Chat on WhatsApp
        </span>
      </a>
    </aside>
  );
};

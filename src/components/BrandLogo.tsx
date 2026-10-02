import React, { useState, useEffect } from 'react';
import { loadSavedMedia } from '../utils/mediaStore';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showWordmark?: boolean;
  monogramOnly?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'md',
  showWordmark = true,
  monogramOnly = false,
}) => {
  const [customLogo, setCustomLogo] = useState<string | undefined>(undefined);

  useEffect(() => {
    setCustomLogo(loadSavedMedia().logo);
    const handler = (e: any) => {
      setCustomLogo(e.detail?.logo);
    };
    window.addEventListener('tony-media-updated', handler);
    return () => window.removeEventListener('tony-media-updated', handler);
  }, []);

  // Dimensions based on size prop
  const sizeMap = {
    sm: { monogram: 30, text: 'text-[11px] tracking-[0.25em]' },
    md: { monogram: 40, text: 'text-[13px] tracking-[0.22em]' },
    lg: { monogram: 60, text: 'text-base tracking-[0.25em]' },
    xl: { monogram: 96, text: 'text-xl tracking-[0.3em]' },
  };

  const currentSize = sizeMap[size];

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {customLogo ? (
        <img
          src={customLogo}
          alt="Tony Fashion Logo"
          className="shrink-0 object-contain rounded transition-transform duration-300 group-hover:scale-105"
          style={{ width: currentSize.monogram, height: currentSize.monogram }}
        />
      ) : (
        /* Precision SVG Vector of the Official Tony Fashion TF Monogram */
        <svg
          width={currentSize.monogram}
          height={currentSize.monogram}
          viewBox="0 0 240 240"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="shrink-0 transition-transform duration-300 group-hover:scale-105"
          style={{
            filter: 'drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.7))',
          }}
        >
          <defs>
            {/* Authentic Warm Cognac / Tan Leather & Wood Texture Gradient */}
            <linearGradient id="tf-leather-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e3a76a" />
              <stop offset="45%" stopColor="#cf8c4a" />
              <stop offset="80%" stopColor="#b47133" />
              <stop offset="100%" stopColor="#9a5a24" />
            </linearGradient>

            {/* Crisp Metallic Chrome / Silver Bevel Stroke */}
            <linearGradient id="tf-chrome-border" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
              <stop offset="35%" stopColor="#cbd5e1" stopOpacity="0.8" />
              <stop offset="70%" stopColor="#64748b" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#f8fafc" stopOpacity="0.9" />
            </linearGradient>

            {/* Inner Highlight for 3D Emboss Feel */}
            <linearGradient id="tf-inner-glow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0.25" />
            </linearGradient>
          </defs>

          {/* The 'T' Monogram Structure: Horizontal Top Beam & Left Vertical Stem */}
          <g>
            {/* Drop Shadow Underlay */}
            <path
              d="M28 32 H212 V72 H82 V204 H32 V36 C30 34 30 32 28 32 Z"
              fill="#050505"
              opacity="0.8"
              transform="translate(4, 5)"
            />

            {/* Main 'T' Geometry */}
            <path
              d="M32 30 H208 V68 H76 V198 H32 V30 Z"
              fill="url(#tf-leather-grad)"
              stroke="url(#tf-chrome-border)"
              strokeWidth="3.5"
              strokeLinejoin="round"
            />

            {/* Subtle Inner Bevel Glint */}
            <path
              d="M36 34 H204 V40 H78 V194 H36 V34 Z"
              fill="url(#tf-inner-glow)"
              opacity="0.6"
            />
          </g>

          {/* The Nested 'F' Monogram Structure: Inside the right-angle corner of T */}
          <g>
            {/* Drop Shadow Underlay for F */}
            <path
              d="M102 90 H208 V128 H134 V158 C134 176 122 192 102 198 V90 Z"
              fill="#050505"
              opacity="0.8"
              transform="translate(4, 5)"
            />

            {/* Main 'F' Geometry with signature angled bottom-left notch cut */}
            <path
              d="M102 88 H208 V124 H134 V150 C134 168 120 186 102 192 V88 Z"
              fill="url(#tf-leather-grad)"
              stroke="url(#tf-chrome-border)"
              strokeWidth="3.5"
              strokeLinejoin="round"
            />

            {/* Inner Highlight on F top bar */}
            <path
              d="M106 92 H204 V96 H136 V122 H106 V92 Z"
              fill="url(#tf-inner-glow)"
              opacity="0.5"
            />
          </g>
        </svg>
      )}

      {/* Brand Wordmark with Metallic Chrome Styling */}
      {!monogramOnly && showWordmark && (
        <div className="flex flex-col">
          <span
            className={`font-sans font-medium uppercase text-neutral-100 ${currentSize.text} leading-none transition-colors group-hover:text-white`}
            style={{
              textShadow: '0 2px 4px rgba(0,0,0,0.5)',
              letterSpacing: '0.24em',
            }}
          >
            TONY FASHION
          </span>
          {size === 'lg' || size === 'xl' ? (
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#d4995c] font-sans mt-1.5 font-light">
              TONYFASHIONFIT · ATELIER
            </span>
          ) : null}
        </div>
      )}
    </div>
  );
};

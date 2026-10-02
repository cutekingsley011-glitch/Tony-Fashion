import React, { useState, useEffect } from 'react';
import { X, Upload, Check, Trash2, Camera, Smartphone, Sparkles } from 'lucide-react';
import { loadSavedMedia, saveMediaItem, clearCustomMedia, CustomMediaMap } from '../utils/mediaStore';

interface OwnerPhotoDropProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SlotConfig {
  key: keyof CustomMediaMap;
  slotNumber: number;
  label: string;
  description: string;
}

const SLOTS: SlotConfig[] = [
  {
    key: 'atelierRack',
    slotNumber: 1,
    label: 'Look 1: Atelier Vest & Collection Rack',
    description: 'Model sitting with plush lion beside mannequin vest & clothing rack',
  },
  {
    key: 'oliveMonogram',
    slotNumber: 2,
    label: 'Look 2: Olive Drape Top & Monogram (Portrait)',
    description: 'Close portrait in olive green draped cowl neck top with stitched TF monogram',
  },
  {
    key: 'oliveSilhouette',
    slotNumber: 3,
    label: 'Look 3: Olive Drape Top & Wide Trousers (Full)',
    description: 'Full-length shot in olive drape top and black wide-leg trousers',
  },
  {
    key: 'tweedPortrait',
    slotNumber: 4,
    label: 'Look 4: Cropped Tweed Jacket & Tote (Portrait)',
    description: 'Portrait in grey herringbone/tweed jacket with raffia tote bag',
  },
  {
    key: 'tweedWideTrousers',
    slotNumber: 5,
    label: 'Look 5: Cropped Tweed & Fluid Trousers (Full)',
    description: 'Full-length shot of model leaning against wall in cropped tweed & black trousers',
  },
  {
    key: 'academyHero',
    slotNumber: 6,
    label: 'Academy: Workshop Feature Photo',
    description: 'Training classroom, pattern drafting, or student tailoring photo',
  },
];

export const OwnerPhotoDrop: React.FC<OwnerPhotoDropProps> = ({ isOpen, onClose }) => {
  const [mediaMap, setMediaMap] = useState<CustomMediaMap>({});
  const [loadingKey, setLoadingKey] = useState<string | null>(null);
  const [successNotice, setSuccessNotice] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      setMediaMap(loadSavedMedia());
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleFileUpload = (slotKey: string, file: File) => {
    setLoadingKey(slotKey);
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      if (result) {
        saveMediaItem(slotKey, result);
        setMediaMap((prev) => ({ ...prev, [slotKey]: result }));
        setSuccessNotice('Photo saved successfully!');
        setTimeout(() => setSuccessNotice(null), 3000);
      }
      setLoadingKey(null);
    };
    reader.onerror = () => {
      setLoadingKey(null);
    };
    reader.readAsDataURL(file);
  };

  const handleMultiBatch = (files: FileList) => {
    const fileList = Array.from(files);
    if (fileList.length === 0) return;

    // Sequential assignment to empty slots or ordered slots
    fileList.forEach((file, index) => {
      const name = file.name.toLowerCase();
      let targetSlot = '';

      if (name.includes('rack') || name.includes('lion') || name.includes('vest') || name.includes('f8067baa')) {
        targetSlot = 'atelierRack';
      } else if (name.includes('9fa57dda')) {
        targetSlot = 'oliveMonogram';
      } else if (name.includes('3dc3ae40')) {
        targetSlot = 'oliveSilhouette';
      } else if (name.includes('2dabf3b7')) {
        targetSlot = 'tweedPortrait';
      } else if (name.includes('0a103f7b')) {
        targetSlot = 'tweedWideTrousers';
      } else {
        // Fallback: assign by index in order
        const fallbackSlots: (keyof CustomMediaMap)[] = [
          'atelierRack',
          'oliveMonogram',
          'oliveSilhouette',
          'tweedPortrait',
          'tweedWideTrousers',
        ];
        if (index < fallbackSlots.length) {
          targetSlot = fallbackSlots[index] as string;
        }
      }

      if (targetSlot) {
        handleFileUpload(targetSlot, file);
      }
    });

    setSuccessNotice(`Loaded ${fileList.length} photos from your phone!`);
    setTimeout(() => setSuccessNotice(null), 4000);
  };

  const activeCount = SLOTS.filter((s) => Boolean(mediaMap[s.key])).length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/90 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-xl bg-[#111113] border border-neutral-800 p-4 sm:p-6 my-auto shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-3 border-b border-neutral-800 pb-3">
          <div className="flex items-center gap-2">
            <Smartphone className="w-5 h-5 text-[#d4995c]" />
            <div>
              <h3 className="font-serif text-lg sm:text-xl text-white">Owner Photo Upload</h3>
              <p className="text-[11px] text-[#d4995c]">Select directly from your phone gallery</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-neutral-400 hover:text-white p-2 touch-manipulation cursor-pointer"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Notice Banner */}
        {successNotice && (
          <div className="mb-3 p-2.5 bg-emerald-950/80 border border-emerald-600/50 text-emerald-200 text-xs flex items-center gap-2 rounded">
            <Check className="w-4 h-4 shrink-0" />
            <span>{successNotice}</span>
          </div>
        )}

        <p className="text-xs text-neutral-300 mb-4 leading-relaxed">
          Because you are on your phone, you can select the original pictures directly from your phone's photo library. They will appear on your website with <strong>100% original quality and zero AI changes</strong>.
        </p>

        {/* Big Mobile One-Tap Batch Upload */}
        <div className="mb-5 p-4 bg-neutral-900 border border-[#d4995c]/40 text-center">
          <div className="flex justify-center mb-2">
            <div className="w-12 h-12 rounded-full bg-[#d4995c]/20 border border-[#d4995c] flex items-center justify-center text-[#d4995c]">
              <Upload className="w-6 h-6" />
            </div>
          </div>
          <h4 className="text-sm font-medium text-white mb-1">
            Tap to Select Photos from Phone
          </h4>
          <p className="text-[11px] text-neutral-400 mb-3">
            Pick your 5 photos from your phone gallery in one go
          </p>
          <label className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 bg-[#d4995c] hover:bg-[#c3864a] text-black font-semibold text-xs uppercase tracking-wider cursor-pointer touch-manipulation">
            <Camera className="w-4 h-4" />
            <span>Open Phone Photo Gallery</span>
            <input
              type="file"
              multiple
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                if (e.target.files && e.target.files.length > 0) {
                  handleMultiBatch(e.target.files);
                }
              }}
            />
          </label>
        </div>

        {/* Individual Slots for Mobile Precision */}
        <div className="space-y-2.5 max-h-[45vh] overflow-y-auto pr-1">
          {SLOTS.map((slot) => {
            const hasData = Boolean(mediaMap[slot.key]);
            const isUploading = loadingKey === slot.key;

            return (
              <div
                key={slot.key}
                className="flex items-center justify-between p-2.5 bg-neutral-950 border border-neutral-800 gap-3"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-11 h-13 bg-neutral-900 border border-neutral-700 overflow-hidden shrink-0 flex items-center justify-center">
                    {hasData ? (
                      <img
                        src={mediaMap[slot.key]}
                        alt={slot.label}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-[10px] text-neutral-500 font-mono">#{slot.slotNumber}</span>
                    )}
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-white font-medium truncate flex items-center gap-1.5">
                      <span>{slot.label}</span>
                      {hasData && <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />}
                    </div>
                    <div className="text-[10px] text-neutral-400 truncate">
                      {hasData ? 'Original photo active' : slot.description}
                    </div>
                  </div>
                </div>

                <label className="px-3 py-2 text-[11px] font-medium uppercase tracking-wider bg-neutral-800 hover:bg-neutral-700 text-white cursor-pointer border border-neutral-600 shrink-0 touch-manipulation">
                  {isUploading ? 'Saving...' : hasData ? 'Change' : 'Pick Photo'}
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) handleFileUpload(slot.key as string, file);
                    }}
                  />
                </label>
              </div>
            );
          })}
        </div>

        {/* Bottom Actions */}
        <div className="mt-4 pt-3 border-t border-neutral-800 flex items-center justify-between gap-3 text-xs">
          <button
            onClick={() => {
              if (confirm('Clear saved photos and reset?')) {
                clearCustomMedia();
                setMediaMap({});
              }
            }}
            className="text-neutral-500 hover:text-red-400 flex items-center gap-1 text-[11px] p-1 cursor-pointer"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>

          <button
            onClick={onClose}
            className="flex-1 max-w-[200px] py-2.5 bg-white text-black text-xs uppercase tracking-wider font-semibold hover:bg-neutral-200 text-center cursor-pointer touch-manipulation"
          >
            Done ({activeCount}/5 Active)
          </button>
        </div>
      </div>
    </div>
  );
};

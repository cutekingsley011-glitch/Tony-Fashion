import React, { useState, useEffect } from 'react';
import { InquiryType } from '../types';
import { X, Send, CheckCircle2 } from 'lucide-react';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: string;
  initialSubject?: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  initialType = 'general',
  initialSubject = '',
}) => {
  const [inquiryType, setInquiryType] = useState<string>(initialType);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: initialSubject ? `Regarding: ${initialSubject}\n\n` : '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (initialType) setInquiryType(initialType);
    if (initialSubject) {
      setFormData((prev) => ({
        ...prev,
        message: `Regarding: ${initialSubject}\n\n`,
      }));
    }
  }, [initialType, initialSubject]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 500);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-sm overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-xl bg-[#0e0e11] border border-neutral-800 p-6 sm:p-10 shadow-2xl my-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Close inquiry modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <span className="text-[11px] uppercase tracking-[0.25em] text-neutral-400 font-sans block mb-2">
            Tony Fashion Atelier
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal">
            Request Consultation
          </h3>
        </div>

        {submitted ? (
          <div className="py-10 text-center space-y-4">
            <CheckCircle2 className="w-10 h-10 text-white mx-auto stroke-1" />
            <h4 className="font-serif text-2xl text-white">Dispatch Transmitted</h4>
            <p className="text-xs text-neutral-400 font-light leading-relaxed max-w-md mx-auto">
              Your inquiry has been routed to our studio team. We will review your brief and contact you via email promptly.
            </p>
            <div className="pt-4">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 bg-white text-black text-xs uppercase tracking-widest font-medium hover:bg-neutral-200 cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-neutral-400 mb-2 font-sans">
                Inquiry Focus
              </label>
              <select
                value={inquiryType}
                onChange={(e) => setInquiryType(e.target.value)}
                className="w-full bg-neutral-950 border border-neutral-800 px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-white transition-colors"
              >
                <option value="bespoke">01. Atelier Bespoke Commission</option>
                <option value="production">02. Production House & B2B Manufacturing</option>
                <option value="academy">03. Tony Fashion Academy Enrolment</option>
                <option value="collaboration">Brand Collaboration & Press</option>
                <option value="general">General Studio Consultation</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-neutral-400 mb-1.5 font-sans">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-neutral-950 border border-neutral-800 px-3.5 py-2.5 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-white"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-neutral-400 mb-1.5 font-sans">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-neutral-950 border border-neutral-800 px-3.5 py-2.5 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-wider text-neutral-400 mb-1.5 font-sans">
                Organization / Brand (Optional)
              </label>
              <input
                type="text"
                placeholder="Brand name, label, or private"
                value={formData.organization}
                onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                className="w-full bg-neutral-950 border border-neutral-800 px-3.5 py-2.5 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-white"
              />
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-wider text-neutral-400 mb-1.5 font-sans">
                Project Notes & Scope *
              </label>
              <textarea
                required
                rows={4}
                placeholder="Share your requirements, desired completion timeline, or academy training goals..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-neutral-950 border border-neutral-800 px-3.5 py-2.5 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-white resize-y"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 bg-white text-black text-xs uppercase tracking-[0.2em] font-medium hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                <span>{loading ? 'Sending...' : 'Transmit Inquiry'}</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

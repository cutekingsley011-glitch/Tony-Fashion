import React, { useState } from 'react';
import { BRAND_INFO, getWhatsAppUrl } from '../data/fashionData';
import { Send, CheckCircle2, MessageCircle, MapPin, Clock, Mail } from 'lucide-react';

interface ContactSectionProps {
  initialSubject?: string;
  isStandalonePage?: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialSubject = '',
  isStandalonePage = false,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    message: initialSubject ? `Regarding: ${initialSubject}\n\n` : '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.contact || !formData.message) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 500);
  };

  return (
    <section
      id="contact-section"
      className={`bg-[#0b0b0c] ${isStandalonePage ? 'pt-24 pb-28' : 'py-16 sm:py-20 border-t border-neutral-900'}`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-10 sm:mb-12">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#d4995c] font-sans block mb-2">
            Get In Touch
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal mb-3">
            Contact & Store Location
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 font-light">
            Visit our physical workshop in Abakaliki or connect directly on WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct WhatsApp & Store Details (Primary Card) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 bg-[#0e0e11] border border-[#25D366]/40 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#25D366] font-sans font-medium">
                  Fastest Response
                </span>
                <span className="text-xs font-mono text-neutral-300">{BRAND_INFO.whatsappDisplay}</span>
              </div>

              <h3 className="font-serif text-2xl text-white font-normal">
                Direct WhatsApp Chat
              </h3>

              <p className="text-xs text-neutral-300 font-light leading-relaxed">
                Connect instantly with Tony Fashion for bespoke orders, crazy-jeans inquiries, B2B production, or academy admissions.
              </p>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-black text-xs uppercase tracking-[0.2em] font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <MessageCircle className="w-4 h-4 fill-current stroke-none" />
                <span>Chat on WhatsApp (+234 704 989 6447)</span>
              </a>
            </div>

            {/* Address & Hours */}
            <div className="p-6 bg-neutral-950 border border-neutral-850 space-y-4 text-xs">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#d4995c] mt-0.5 shrink-0" />
                <div>
                  <span className="text-white font-medium block">Physical Store & Atelier</span>
                  <span className="text-neutral-300 font-light mt-0.5 block">{BRAND_INFO.physicalStore}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-neutral-400 mt-0.5 shrink-0" />
                <div>
                  <span className="text-white font-medium block">Hours</span>
                  <span className="text-neutral-400 font-light">{BRAND_INFO.studioHours}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-neutral-400 mt-0.5 shrink-0" />
                <div>
                  <span className="text-white font-medium block">Email</span>
                  <span className="text-neutral-400 font-light">{BRAND_INFO.contactEmail}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Message Form */}
          <div className="lg:col-span-6 p-6 sm:p-8 bg-neutral-950 border border-neutral-850">
            <h3 className="font-serif text-xl text-white font-normal mb-1">
              Send a Quick Note
            </h3>
            <p className="text-xs text-neutral-400 mb-6 font-light">
              Leave your details and we will reply promptly.
            </p>

            {submitted ? (
              <div className="p-6 bg-neutral-900 border border-neutral-750 text-center space-y-3">
                <CheckCircle2 className="w-8 h-8 text-[#d4995c] mx-auto" />
                <h4 className="font-serif text-lg text-white">Message Received</h4>
                <p className="text-xs text-neutral-300 font-light">
                  Thank you! We will get in touch with you shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', contact: '', message: '' });
                  }}
                  className="text-xs text-neutral-400 hover:text-white uppercase tracking-wider underline pt-2 cursor-pointer"
                >
                  Send Another Note
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-neutral-400 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-neutral-900 border border-neutral-800 px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-neutral-400 mb-1.5">
                    Phone / Email / WhatsApp
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. +234 ... or email"
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    className="w-full bg-neutral-900 border border-neutral-800 px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-neutral-400 mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe what you would like to make or enquire about..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-neutral-900 border border-neutral-800 px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-white transition-colors resize-y"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-white text-black text-xs uppercase tracking-[0.18em] font-medium hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <span>{loading ? 'Sending...' : 'Send Message'}</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

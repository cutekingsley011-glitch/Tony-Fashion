import React, { useState, useEffect } from 'react';
import { ACADEMY_PROGRAMS, BRAND_ASSETS } from '../data/fashionData';
import { ArrowUpRight, Clock, Award, ShieldCheck, Check, Camera, RotateCcw } from 'lucide-react';
import { loadSavedMedia, saveMediaItem } from '../utils/mediaStore';
import { isOwnerMode } from '../utils/ownerMode';

interface AcademySectionProps {
  onOpenInquiry: (initialSubject?: string) => void;
  isStandalonePage?: boolean;
}

export const AcademySection: React.FC<AcademySectionProps> = ({
  onOpenInquiry,
  isStandalonePage = false,
}) => {
  const [academyImg, setAcademyImg] = useState<string>(BRAND_ASSETS.academy);
  const [isCustom, setIsCustom] = useState<boolean>(false);
  const [uploadNotice, setUploadNotice] = useState<string | null>(null);
  const [ownerActive, setOwnerActive] = useState<boolean>(isOwnerMode());

  useEffect(() => {
    const ownerHandler = () => setOwnerActive(isOwnerMode());
    window.addEventListener('tony-owner-mode-changed', ownerHandler);
    window.addEventListener('hashchange', ownerHandler);

    const saved = loadSavedMedia();
    if (saved.academyHero) {
      setAcademyImg(saved.academyHero);
      setIsCustom(true);
    }

    const handler = (e: any) => {
      const media = e.detail || {};
      if (media.academyHero) {
        setAcademyImg(media.academyHero);
        setIsCustom(true);
      } else {
        setAcademyImg(BRAND_ASSETS.academy);
        setIsCustom(false);
      }
    };

    window.addEventListener('tony-media-updated', handler);
    return () => {
      window.removeEventListener('tony-media-updated', handler);
      window.removeEventListener('tony-owner-mode-changed', ownerHandler);
      window.removeEventListener('hashchange', ownerHandler);
    };
  }, []);

  const handleImageUpload = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      if (result) {
        saveMediaItem('academyHero', result);
        setAcademyImg(result);
        setIsCustom(true);
        setUploadNotice('Academy photo updated from your phone!');
        setTimeout(() => setUploadNotice(null), 3500);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleResetImage = () => {
    const saved = loadSavedMedia();
    delete saved.academyHero;
    localStorage.setItem('tony_fashion_custom_media_v1', JSON.stringify(saved));
    setAcademyImg(BRAND_ASSETS.academy);
    setIsCustom(false);
    window.dispatchEvent(new CustomEvent('tony-media-updated', { detail: saved }));
  };

  return (
    <section className={`bg-[#0b0b0c] ${isStandalonePage ? 'pt-28 pb-32' : 'py-24 sm:py-32 border-t border-neutral-900'}`}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-neutral-400 font-sans mb-3">
            <span>Professional Education Arm</span>
            <span className="w-6 h-px bg-neutral-700" />
            <span>Pillar 03</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white font-normal leading-tight mb-6">
            Tony Fashion Academy
          </h2>

          <p className="font-sans text-neutral-300 text-base sm:text-lg font-light leading-relaxed">
            A vocational training institute embedded directly within an operating fashion house. We do not sell pre-recorded video courses; we train working tailors, pattern engineers, and factory supervisors on industrial equipment.
          </p>
        </div>

        {/* Feature Hero Image & Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center mb-20">
          <div className="lg:col-span-7">
            {/* Notification Banner */}
            {uploadNotice && (
              <div className="mb-3 p-2.5 bg-emerald-950/80 border border-emerald-600/50 text-emerald-200 text-xs flex items-center gap-2 rounded">
                <Check className="w-4 h-4 shrink-0" />
                <span>{uploadNotice}</span>
              </div>
            )}

            <div className="relative aspect-[16/10] overflow-hidden border border-neutral-800 bg-neutral-950 group">
              <img
                src={academyImg}
                alt="Tony Fashion Academy workshop"
                className="w-full h-full object-cover object-center filter brightness-95"
                loading="lazy"
              />

              {/* Bottom Caption */}
              <div className="absolute bottom-3 left-3 bg-black/85 px-3 py-1.5 border border-white/10 text-[11px] font-sans tracking-wider text-neutral-300">
                Pattern Drafting & Industrial Draping Workshop
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs uppercase tracking-[0.2em] text-[#d4995c] font-sans">
              Vocational Discipline
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal leading-snug">
              Physical Immersion on the Production Floor
            </h3>

            <p className="font-sans text-neutral-400 text-sm leading-relaxed font-light">
              Craftsmanship is tactile intelligence. Under the guidance of our master tailors with over ten years of active industry mastery, apprentices work directly with industrial heavy-duty lockstitch machines, computerized pattern tables, and authentic selvedge textiles.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-xs text-neutral-300">
                <ShieldCheck className="w-4 h-4 text-[#d4995c] shrink-0" />
                <span>Zero simulated exercises — all training uses real garment cuts</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-neutral-300">
                <ShieldCheck className="w-4 h-4 text-[#d4995c] shrink-0" />
                <span>1:4 Master artisan-to-apprentice ratio for personalized scrutiny</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-neutral-300">
                <ShieldCheck className="w-4 h-4 text-[#d4995c] shrink-0" />
                <span>Direct pathway to employment within our manufacturing house</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => onOpenInquiry('academy')}
                className="px-6 py-3.5 bg-white text-black text-xs uppercase tracking-[0.2em] font-medium hover:bg-neutral-200 transition-colors cursor-pointer"
              >
                Apply For Academy Admission
              </button>
            </div>
          </div>
        </div>

        {/* Structured Program Tracks */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8 border-b border-neutral-800 pb-4">
            <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal">
              Structured Curriculum Tracks
            </h3>
            <span className="text-xs uppercase tracking-widest text-neutral-400 hidden sm:block">
              Physical Studio Enrolment
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ACADEMY_PROGRAMS.map((program) => (
              <div
                key={program.id}
                className="bg-neutral-950 border border-neutral-800 p-8 flex flex-col justify-between hover:border-neutral-700 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] uppercase tracking-[0.2em] px-2.5 py-1 bg-neutral-900 border border-neutral-800 text-neutral-300">
                      {program.level}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-neutral-400 font-mono">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{program.duration}</span>
                    </div>
                  </div>

                  <h4 className="font-serif text-xl sm:text-2xl text-white font-normal mb-3">
                    {program.title}
                  </h4>

                  <p className="font-sans text-neutral-400 text-xs leading-relaxed mb-6 font-light">
                    {program.description}
                  </p>

                  <div className="border-t border-neutral-900 pt-5 mb-6">
                    <div className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-sans mb-3">
                      Syllabus Competencies
                    </div>
                    <ul className="space-y-2.5">
                      {program.curriculum.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-neutral-300 font-light">
                          <Check className="w-3.5 h-3.5 text-white shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 border-t border-neutral-900 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-neutral-300">
                    <Award className="w-4 h-4 text-white" />
                    <span>Graduation Certificate</span>
                  </div>

                  <button
                    onClick={() => onOpenInquiry(`Academy Enrolment: ${program.title}`)}
                    className="flex items-center gap-1 text-xs uppercase tracking-wider text-white hover:text-neutral-300 cursor-pointer"
                  >
                    <span>Enroll</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Verification Guarantee */}
        <div className="border border-neutral-800 bg-neutral-950/60 p-8 sm:p-12 text-center max-w-4xl mx-auto">
          <div className="text-xs uppercase tracking-[0.25em] text-[#d4995c] font-sans mb-3">
            Tony Fashion Accreditation
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal mb-4">
            Hands-On Mastery, Certified by Master Tailors
          </h3>
          <p className="font-sans text-neutral-400 text-xs sm:text-sm font-light leading-relaxed max-w-2xl mx-auto mb-8">
            Every candidate who completes the Academy capstone project produces a finished three-piece bespoke garment or structured uniform collection audited by senior industry patternmakers.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenInquiry('academy')}
              className="w-full sm:w-auto px-8 py-3.5 bg-[#d4995c] text-black text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#c3864a] transition-colors cursor-pointer"
            >
              Book Studio Walkthrough & Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

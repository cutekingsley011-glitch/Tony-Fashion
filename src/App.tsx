import { useState, useEffect } from 'react';
import { PageId } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PillarsOverview } from './components/PillarsOverview';
import { LookbookSection } from './components/LookbookSection';
import { ServicesSection } from './components/ServicesSection';
import { AcademySection } from './components/AcademySection';
import { AboutSection } from './components/AboutSection';
import { JournalSection } from './components/JournalSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { InquiryModal } from './components/InquiryModal';
import { WhatsAppFloatingButton } from './components/WhatsAppButton';
import { OwnerPhotoDrop } from './components/OwnerPhotoDrop';

export default function App() {
  // Always initialize on 'home' homepage
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [inquiryModalType, setInquiryModalType] = useState('general');
  const [inquiryModalSubject, setInquiryModalSubject] = useState('');
  const [ownerDropOpen, setOwnerDropOpen] = useState(false);

  // Ensure fresh loads always start from 'home' homepage & setup owner shortcuts
  useEffect(() => {
    if (window.location.hash && window.location.hash !== '#home') {
      if (window.location.hash === '#owner' || window.location.hash === '#upload') {
        setOwnerDropOpen(true);
      }
      window.history.replaceState(null, '', window.location.pathname);
    }
    setCurrentPage('home');

    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      if (hash === ('owner' as any) || hash === ('upload' as any)) {
        setOwnerDropOpen(true);
        return;
      }
      const validPages: PageId[] = [
        'home',
        'collections',
        'services',
        'academy',
        'about',
        'journal',
        'contact',
      ];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      } else if (!hash) {
        setCurrentPage('home');
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      // Discreet shortcut: Alt + U or Ctrl + Shift + U to open original photo dropzone
      if ((e.altKey && e.key.toLowerCase() === 'u') || ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === 'u')) {
        e.preventDefault();
        setOwnerDropOpen((prev) => !prev);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenInquiry = (initialTypeOrSubject?: string) => {
    if (initialTypeOrSubject) {
      if (['atelier', 'production', 'academy', 'bespoke', 'collaboration', 'general'].includes(initialTypeOrSubject)) {
        setInquiryModalType(initialTypeOrSubject === 'atelier' ? 'bespoke' : initialTypeOrSubject);
        setInquiryModalSubject('');
      } else {
        setInquiryModalSubject(initialTypeOrSubject);
      }
    } else {
      setInquiryModalType('general');
      setInquiryModalSubject('');
    }
    setInquiryModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0b0b0c] text-neutral-100 flex flex-col font-sans selection:bg-neutral-700 selection:text-white">
      {/* Top Bar Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenInquiry={handleOpenInquiry}
        onOpenOwner={() => setOwnerDropOpen(true)}
      />

      {/* Main Content Router */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <>
            {/* 1. Hero Experience (Clean & Impactful) */}
            <Hero onNavigate={navigateTo} onOpenInquiry={handleOpenInquiry} />

            {/* 2. Collections Gallery / Lookbook (Top 5 In One View) */}
            <LookbookSection
              onOpenInquiry={handleOpenInquiry}
              isStandalonePage={false}
              onOpenOwner={() => setOwnerDropOpen(true)}
            />

            {/* 3. The Three Core Pillars (3 Compact Cards) */}
            <PillarsOverview onNavigate={navigateTo} onOpenInquiry={handleOpenInquiry} />

            {/* 4. Direct Contact & Location Card */}
            <ContactSection isStandalonePage={false} />
          </>
        )}

        {currentPage === 'collections' && (
          <LookbookSection
            onOpenInquiry={handleOpenInquiry}
            isStandalonePage={true}
            onOpenOwner={() => setOwnerDropOpen(true)}
          />
        )}

        {currentPage === 'services' && (
          <ServicesSection onOpenInquiry={handleOpenInquiry} isStandalonePage={true} />
        )}

        {currentPage === 'academy' && (
          <AcademySection onOpenInquiry={handleOpenInquiry} isStandalonePage={true} />
        )}

        {currentPage === 'about' && (
          <AboutSection onOpenInquiry={handleOpenInquiry} />
        )}

        {currentPage === 'journal' && (
          <JournalSection onOpenInquiry={handleOpenInquiry} isStandalonePage={true} />
        )}

        {currentPage === 'contact' && (
          <ContactSection isStandalonePage={true} />
        )}
      </main>

      {/* Global Quick Consultation Modal */}
      <InquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        initialType={inquiryModalType}
        initialSubject={inquiryModalSubject}
      />

      {/* Owner Original Photo Dropzone (Discreet: Alt + U or #owner) */}
      <OwnerPhotoDrop
        isOpen={ownerDropOpen}
        onClose={() => setOwnerDropOpen(false)}
      />

      {/* Floating WhatsApp Quick Action Button */}
      <WhatsAppFloatingButton />

      {/* Footer */}
      <Footer onNavigate={navigateTo} onTriggerOwner={() => setOwnerDropOpen(true)} />
    </div>
  );
}

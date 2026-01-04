import React, { useState } from 'react';
import { AcapellaData } from '../types';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import TickerTape from './sections/TickerTape';
import AboutSection from './sections/AboutSection';
import FounderSection from './sections/FounderSection';
import TeamSection from './sections/TeamSection';
import Gallery from './sections/Gallery';
import FeaturedPerformance from './sections/FeaturedPerformance';
import PerformanceArchive from './sections/PerformanceArchive';
import Footer from './sections/Footer';
import InstagramModal from './sections/InstagramModal';

interface Props {
  data: AcapellaData;
}

const TemplateCinematic: React.FC<Props> = ({ data }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedReel, setSelectedReel] = useState<string | null>(null);

  const openModal = (reelId: string) => {
    setSelectedReel(reelId);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedReel(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-pink-500 selection:text-white print:bg-slate-900 print:text-white">
      <Navigation />
      <Hero about={data.about} />
      <TickerTape shows={data.upcomingShows} />
      <AboutSection />
      <FounderSection />
      <TeamSection />
      <Gallery />
      <FeaturedPerformance 
        performance={data.pastPerformances[0]} 
        onOpenModal={openModal} 
      />
      <PerformanceArchive 
        performances={data.pastPerformances} 
        upcomingShows={data.upcomingShows}
        onOpenModal={openModal}
      />
      <Footer groupName={data.groupName} />
      
      {modalOpen && selectedReel && (
        <InstagramModal reelId={selectedReel} onClose={closeModal} />
      )}
    </div>
  );
};

export default TemplateCinematic;

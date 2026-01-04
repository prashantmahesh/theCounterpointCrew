import React from 'react';
import { Play, Mic } from 'lucide-react';

interface Performance {
  title: string;
  description: string;
  reelId?: string;
}

interface FeaturedPerformanceProps {
  performance: Performance;
  onOpenModal: (reelId: string) => void;
}

const FeaturedPerformance: React.FC<FeaturedPerformanceProps> = ({ performance, onOpenModal }) => {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto print:py-12">
      <div className="flex flex-col md:flex-row gap-16 items-center">
        <button 
          onClick={() => performance.reelId && onOpenModal(performance.reelId)}
          className="w-full md:w-1/2 relative group cursor-pointer"
          disabled={!performance.reelId}
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-pastel-pink to-pastel-blue rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-1000 print:hidden"></div>
          <div className="relative aspect-video bg-slate-800 rounded-2xl overflow-hidden border border-white/10 shadow-2xl print:border-slate-700">
            <img src="/reel/sangathil.jpeg" alt="Sangathil" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" loading="lazy"/>
            <div className="absolute inset-0 flex items-center justify-center print:hidden">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all duration-300">
                <Play size={32} fill="currentColor" className="ml-2"/>
              </div>
            </div>
            {performance.reelId && (
              <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-white print:hidden">
                Watch on Instagram
              </div>
            )}
          </div>
        </button>
        
        <div className="w-full md:w-1/2 space-y-8">
          <div className="flex items-center gap-3 text-pastel-pink print:text-pink-400">
            <Mic size={18} />
            <span className="text-xs font-bold uppercase tracking-widest">Featured Performance</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight print:text-white">
            {performance.title}
          </h2>
          <p className="text-slate-400 leading-relaxed text-lg print:text-slate-300">
            {performance.description} Experience the vocal arrangement that showcases regional music.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPerformance;


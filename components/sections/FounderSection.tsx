import React from 'react';
import { Mic } from 'lucide-react';

const FounderSection: React.FC = () => {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto print:py-12 bg-slate-900">
      <div className="flex flex-col md:flex-row gap-16 items-center">
        {/* Left: Text Area */}
        <div className="w-full md:w-1/2 space-y-6">
          <div className="flex items-center gap-3 text-pastel-pink print:text-pink-400">
            <Mic size={18} />
            <span className="text-xs font-bold uppercase tracking-widest">Founder & Conductor</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight print:text-white">
            Kavitha Ramesh
          </h2>
          <div className="h-1 w-20 bg-pastel-blue"></div>
          <p className="text-lg font-medium text-slate-300">Arranger & Conductor</p>
          <p className="text-slate-400 leading-relaxed text-lg print:text-slate-300">
            Kavitha Ramesh is a Carnatic musician from Chennai, a city deeply rooted in both Indian classical and Western music traditions. Trained in Carnatic music for over two decades and formally qualified by Trinity College London in Western music theory, she carries a deep love for choral and a cappella music.
          </p>
          <p className="text-slate-400 leading-relaxed text-lg print:text-slate-300">
            After relocating to Bengaluru, what began as a long-held dream of starting a choir slowly took shape. Through a simple WhatsApp group and online sessions on basic Western theory and sight-singing, Kavitha brought together like-minded singers, a small a cappella group that organically grew into The Counterpoint Crew, a 20-member vocal ensemble.
          </p>
        </div>

        {/* Right: Image */}
        <div className="w-full md:w-1/2 relative group">
          <div className="absolute -inset-1 bg-gradient-to-br from-pastel-pink to-pastel-blue rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-1000 print:hidden"></div>
          <div className="relative aspect-square bg-slate-800 rounded-2xl overflow-hidden border border-white/10 shadow-2xl print:border-slate-700">
            <img src="/pictures/Ish-27.jpg" alt="Kavitha Ramesh conducting" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" loading="lazy"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;


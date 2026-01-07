import React from 'react';
import { Info } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-32 px-6 max-w-7xl mx-auto print:py-12">
      <div className="flex flex-col md:flex-row gap-16 items-center">
        <div className="w-full md:w-1/2 space-y-8">
          <div className="flex items-center gap-3 text-pastel-pink print:text-pink-400">
            <Info size={18} />
            <span className="text-xs font-bold uppercase tracking-widest">About Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight print:text-white">
            The Counterpoint Crew
          </h2>
          <p className="text-slate-400 leading-relaxed text-lg print:text-slate-300">
            Counterpoint Crew is a 20-member vocal ensemble based in Bangalore that blends classical techniques with contemporary repertoire. Born from a love of rich harmonies and collaborative arrangement, the Crew presents vocal textures that move fluidly between contemporary melodies, film music and western choral numbers
          </p>
        </div>

        <div className="w-full md:w-1/2 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-pastel-pink to-pastel-blue rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-1000 print:hidden"></div>
          <div className="relative aspect-square bg-slate-800 rounded-2xl overflow-hidden border border-white/10 shadow-2xl print:border-slate-700">
            <img src="/pictures/PIC02134 copy.jpg" alt="The Counterpoint Crew" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" loading="lazy"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;


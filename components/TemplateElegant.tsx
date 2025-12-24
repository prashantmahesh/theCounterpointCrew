import React from 'react';
import { AcapellaData } from '../types';
import { Star, ChevronRight, Mic2 } from 'lucide-react';

interface Props {
  data: AcapellaData;
}

const TemplateElegant: React.FC<Props> = ({ data }) => {
  return (
    <div className="min-h-screen bg-stone-50 font-serif text-stone-800">
      
      {/* Centered Classic Nav */}
      <nav className="py-8 text-center border-b border-stone-200 sticky top-0 bg-stone-50/95 backdrop-blur z-30 transition-all duration-300 print:static print:bg-white">
        <h1 className="text-3xl tracking-widest uppercase font-bold text-stone-900">{data.groupName}</h1>
        <div className="flex justify-center gap-12 mt-4 text-xs tracking-widest uppercase font-sans text-stone-500 print:hidden">
          <a href="#" className="hover:text-stone-900 transition-colors">Biography</a>
          <a href="#" className="hover:text-stone-900 transition-colors">Repertoire</a>
          <a href="#" className="hover:text-stone-900 transition-colors">Schedule</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center print:h-[500px] print:overflow-visible">
        {/* Parallax Background - Removed 'bg-fixed' for print as it breaks in PDFs */}
        <div 
          className="absolute inset-0 bg-fixed bg-center bg-cover opacity-90 transition-transform duration-700 print:bg-local"
          style={{ backgroundImage: 'url("https://picsum.photos/id/453/1600/900")' }}
        ></div>
        <div className="absolute inset-0 bg-stone-900/30 mix-blend-multiply pointer-events-none print:hidden"></div>
        
        <div className="relative z-10 text-center text-white px-4 print:text-stone-900 print:bg-white/80 print:p-8 print:rounded-lg">
          <p className="font-sans text-sm tracking-[0.3em] uppercase mb-4 opacity-90 print:text-stone-600">Presenting</p>
          <h2 className="text-5xl md:text-7xl italic mb-6 drop-shadow-md print:drop-shadow-none">{data.tagline}</h2>
          <button className="group mt-8 px-10 py-4 bg-white/10 backdrop-blur-sm border border-white/40 hover:bg-white hover:text-stone-900 hover:scale-105 active:scale-95 transition-all duration-500 ease-out font-sans text-xs tracking-[0.2em] uppercase print:hidden">
            <span className="group-hover:tracking-[0.3em] transition-all duration-500">Experience Our Sound</span>
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 md:px-20 max-w-5xl mx-auto text-center bg-stone-50 relative z-20 print:py-12">
        <div className="w-16 h-[1px] bg-stone-400 mx-auto mb-8"></div>
        <p className="text-xl md:text-2xl leading-relaxed text-stone-600 italic">
          "{data.about}"
        </p>
        <div className="w-16 h-[1px] bg-stone-400 mx-auto mt-8"></div>
      </section>

      {/* Featured Shows (Horizontal Scroll - flattened for print) */}
      <section className="bg-stone-100 py-24 overflow-hidden relative z-20 print:py-12 print:overflow-visible">
        <div className="px-6 md:px-12 mb-12 flex justify-between items-end max-w-7xl mx-auto">
           <div>
             <h3 className="text-4xl italic text-stone-800">The Season</h3>
             <p className="font-sans text-xs tracking-widest uppercase mt-2 text-stone-500">Upcoming Engagements</p>
           </div>
           <div className="hidden md:flex gap-2 print:hidden">
             <button className="p-3 border border-stone-300 rounded-full hover:bg-stone-200 transition-colors"><ChevronRight className="rotate-180" size={20}/></button>
             <button className="p-3 border border-stone-300 rounded-full hover:bg-stone-200 transition-colors"><ChevronRight size={20}/></button>
           </div>
        </div>

        <div className="flex gap-8 overflow-x-auto pb-12 px-6 md:px-12 snap-x scrollbar-hide print:grid print:grid-cols-3 print:overflow-visible print:pb-0">
          {data.upcomingShows.map((show, i) => (
            <div key={i} className="min-w-[300px] md:min-w-[400px] snap-center bg-white p-10 shadow-sm border-t-4 border-stone-300 hover:border-stone-800 transition-colors duration-300 print:min-w-0 print:p-6 print:border-stone-400">
              <div className="font-sans text-xs font-bold tracking-widest text-stone-400 mb-4 uppercase">{show.date}</div>
              <h4 className="text-3xl mb-4">{show.title}</h4>
              <p className="font-sans text-stone-500 text-sm border-t border-stone-100 pt-4 mt-4">
                {show.location}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Past Performances (List Layout) */}
      <section className="py-24 max-w-4xl mx-auto px-6 relative z-20 print:py-12">
        <h3 className="text-center text-4xl italic mb-16 print:mb-8">Selected Repertoire</h3>
        <div className="space-y-12 print:space-y-8">
          {data.pastPerformances.map((perf, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-8 items-center md:items-start group cursor-pointer print:items-start">
              <div className="w-full md:w-1/3 aspect-[4/3] overflow-hidden">
                <img 
                   src={`https://picsum.photos/seed/${i + 55}/600/450`} 
                   alt={perf.imageAlt} 
                   className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110 print:grayscale-0"
                />
              </div>
              <div className="w-full md:w-2/3 pt-4 text-center md:text-left print:text-left">
                <h4 className="text-2xl mb-3 group-hover:text-stone-600 transition-colors duration-300">{perf.title}</h4>
                <p className="text-stone-500 leading-relaxed font-sans text-sm mb-4">{perf.description}</p>
                <div className="flex justify-center md:justify-start gap-4">
                  <span className="flex items-center gap-1 font-sans text-xs uppercase tracking-wider text-stone-400 group-hover:text-stone-600 transition-colors"><Mic2 size={12}/> Live Recording</span>
                  <span className="flex items-center gap-1 font-sans text-xs uppercase tracking-wider text-stone-400 group-hover:text-stone-600 transition-colors"><Star size={12}/> Highlight</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <footer className="bg-stone-900 text-stone-500 py-16 text-center font-sans text-xs uppercase tracking-widest relative z-20 print:bg-white print:text-stone-600 print:py-8">
         Designed for {data.groupName}
      </footer>
    </div>
  );
};

export default TemplateElegant;
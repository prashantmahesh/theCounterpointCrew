import React from 'react';
import { AcapellaData } from '../types';
import { Play, Calendar, Mic, Share2, Info } from 'lucide-react';

interface Props {
  data: AcapellaData;
}

const TemplateCinematic: React.FC<Props> = ({ data }) => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-pink-500 selection:text-white print:bg-slate-900 print:text-white">
      
      {/* Floating Glass Nav */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center pointer-events-none print:absolute print:bg-transparent print:pointer-events-auto">
        <div className="bg-black/30 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 pointer-events-auto flex gap-6 items-center print:bg-transparent print:border-none print:px-0">
          <span className="font-bold tracking-wider text-sm text-pastel-blue uppercase print:text-pastel-blue">{data.groupName}</span>
          <div className="h-4 w-[1px] bg-white/20 print:hidden"></div>
          <div className="flex gap-4 text-xs font-medium text-slate-300 print:text-slate-400">
             <a href="#" className="hover:text-white hover:glow-text transition-colors">Tour</a>
             <a href="#" className="hover:text-white hover:glow-text transition-colors">Music</a>
             <a href="#" className="hover:text-white hover:glow-text transition-colors">Store</a>
          </div>
        </div>
        <button className="pointer-events-auto bg-pastel-pink text-slate-900 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-[0_0_20px_rgba(252,231,243,0.3)] print:hidden">
          Stream Now
        </button>
      </nav>

      {/* Hero Video Background */}
      <header className="relative h-screen w-full overflow-hidden flex items-center justify-center print:h-[600px] print:overflow-hidden print:block print:relative">
        {/* Placeholder for video - in production use a real video file */}
        <div className="absolute inset-0 z-0 print:absolute print:inset-0 print:h-full">
           {/* Video hidden on print */}
           <video 
             autoPlay 
             muted 
             loop 
             playsInline
             className="w-full h-full object-cover opacity-60 grayscale print:hidden"
             poster="https://picsum.photos/1920/1080?grayscale"
           >
             <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4" type="video/mp4" />
           </video>
           
           {/* Fallback image for print */}
           <img 
             src="https://picsum.photos/1920/1080?grayscale" 
             className="hidden print:block absolute inset-0 w-full h-full object-cover opacity-40 grayscale" 
             alt="Background"
           />

           {/* Gradient Overlay */}
           <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
           <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-transparent to-slate-900/80"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl px-4 mt-20 print:pt-32">
          <div className="mb-6 flex justify-center print:hidden">
             <span className="px-4 py-1 border border-pastel-blue/30 text-pastel-blue rounded-full text-[10px] tracking-[0.3em] uppercase backdrop-blur-sm">
                Official Site
             </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black uppercase leading-none tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500 drop-shadow-2xl print:text-white print:bg-none">
            {data.tagline.split(' ')[0]} <br/>
            <span className="text-white print:text-slate-300">{data.tagline.split(' ').slice(1).join(' ')}</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-xl mx-auto mb-10 font-light leading-relaxed print:text-slate-400">
            {data.about}
          </p>
          <button className="group relative flex items-center gap-4 mx-auto pl-8 pr-2 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full hover:bg-white/10 transition-all print:hidden">
             <span className="text-xs font-bold uppercase tracking-widest">Watch Showreel</span>
             <div className="w-10 h-10 bg-pastel-blue text-slate-900 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play size={14} fill="currentColor" className="ml-0.5" />
             </div>
          </button>
        </div>
      </header>

      {/* Ticker Tape */}
      <div className="w-full bg-pastel-blue text-slate-900 overflow-hidden py-4 border-y border-white/10 print:border-y-slate-700">
        <div className="flex gap-12 whitespace-nowrap animate-marquee items-center print:animate-none print:flex-wrap print:justify-center">
           <div className="flex items-center gap-4 text-sm font-bold uppercase tracking-wider print:text-xs">
              {data.upcomingShows.map((show, idx) => (
                <span key={`show-${idx}`} className="flex items-center gap-2">
                   <span className="w-2 h-2 bg-slate-900 rounded-full"></span>
                   {show.date} — {show.location} // {show.title}
                </span>
              ))}
           </div>
        </div>
      </div>
      <style>{`
        .animate-marquee { animation: marquee 30s linear infinite; }
        @media print { .animate-marquee { animation: none; } }
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>

      {/* Spotlight Section */}
      <section className="py-32 px-6 max-w-7xl mx-auto print:py-12">
         <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2 relative group">
               <div className="absolute -inset-1 bg-gradient-to-r from-pastel-pink to-pastel-blue rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-1000 print:hidden"></div>
               <div className="relative aspect-video bg-slate-800 rounded-2xl overflow-hidden border border-white/10 shadow-2xl print:border-slate-700">
                  <img src="https://picsum.photos/seed/spotlight/800/450?grayscale" alt="Featured" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"/>
                  <div className="absolute inset-0 flex items-center justify-center print:hidden">
                     <button className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 hover:scale-110 hover:bg-white hover:text-black transition-all duration-300">
                        <Play size={32} fill="currentColor" className="ml-2"/>
                     </button>
                  </div>
               </div>
            </div>
            
            <div className="w-full md:w-1/2 space-y-8">
               <div className="flex items-center gap-3 text-pastel-pink print:text-pink-400">
                  <Mic size={18} />
                  <span className="text-xs font-bold uppercase tracking-widest">Featured Performance</span>
               </div>
               <h2 className="text-4xl md:text-5xl font-bold leading-tight print:text-white">
                 {data.pastPerformances[0].title}
               </h2>
               <p className="text-slate-400 leading-relaxed text-lg print:text-slate-300">
                 {data.pastPerformances[0].description} Experience the vocal arrangement that won us the regional championship.
               </p>
            </div>
         </div>
      </section>

      {/* Grid Archive */}
      <section className="border-t border-white/10 bg-slate-950 py-20 px-6 print:bg-slate-900 print:border-slate-800">
         <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-12">
               <div>
                 <h3 className="text-2xl font-bold mb-2 print:text-white">Performance Archive</h3>
                 <p className="text-slate-500 text-sm">Highlights from the past year</p>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.pastPerformances.slice(1).map((perf, i) => (
                <div key={i} className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-slate-800 print:bg-slate-800 print:border print:border-slate-700">
                   <img 
                      src={`https://picsum.photos/seed/${i + 200}/600/800?grayscale`} 
                      alt={perf.imageAlt}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80 print:opacity-60"></div>
                   <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 print:translate-y-0">
                      <div className="text-pastel-pink text-xs font-bold uppercase tracking-wider mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 print:opacity-100 print:text-pink-400">Live Set</div>
                      <h4 className="text-xl font-bold text-white mb-2 print:text-white">{perf.title}</h4>
                      <p className="text-xs text-slate-400 line-clamp-2 print:text-slate-300">{perf.description}</p>
                   </div>
                </div>
              ))}
              
              {/* Upcoming Card in Grid */}
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 flex flex-col justify-between border border-white/5 relative overflow-hidden group print:bg-none print:bg-slate-800 print:border-slate-700">
                 
                 <Calendar className="text-pastel-blue mb-4 print:text-blue-300" size={32} />
                 <div>
                    <h4 className="text-xl font-bold text-white mb-6">Upcoming Shows</h4>
                    <ul className="space-y-4">
                       {data.upcomingShows.slice(0, 2).map((show, i) => (
                          <li key={i} className="border-l-2 border-white/10 pl-4 py-1 hover:border-pastel-pink transition-colors print:border-slate-600">
                             <div className="text-xs text-pastel-pink font-bold uppercase print:text-pink-400">{show.date}</div>
                             <div className="text-sm font-medium text-slate-300 print:text-slate-300">{show.title}</div>
                          </li>
                       ))}
                    </ul>
                 </div>
                 <button className="mt-8 w-full py-3 bg-white/5 border border-white/10 rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all print:border-slate-600 print:text-white">
                    Full Schedule
                 </button>
              </div>
            </div>
         </div>
      </section>

    </div>
  );
};

export default TemplateCinematic;
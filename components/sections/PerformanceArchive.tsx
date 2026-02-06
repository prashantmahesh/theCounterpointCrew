import React from 'react';
import { Play, Calendar } from 'lucide-react';

interface Performance {
  title: string;
  description: string;
  imageAlt: string;
  reelId?: string;
}

interface Show {
  date: string;
  title: string;
  location: string;
}

interface PerformanceArchiveProps {
  performances: Performance[];
  upcomingShows: Show[];
  onOpenModal: (reelId: string) => void;
}

const PerformanceArchive: React.FC<PerformanceArchiveProps> = ({ performances, upcomingShows, onOpenModal }) => {
  // Map performance titles to cover art images
  const coverArtMap: { [key: string]: string } = {
    'Sangathil': '/reel/sangathil.jpeg',
    'Meri Maa': '/reel/merimaa.jpeg',
    'Ave Maria': '/reel/avemaria.jpeg'
  };

  return (
    <section id="events" className="border-t border-white/10 bg-slate-950 py-20 px-6 print:bg-slate-900 print:border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-2 print:text-white">Performance Archive</h3>
            <p className="text-slate-500 text-sm">Watch our Instagram reels</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Instagram Reel Cards */}
          {performances && performances.length > 0 && performances.map((perf, i) => {
            if (!perf.reelId) return null;
            
            const coverArt = coverArtMap[perf.title] || null;
            
            return (
              <button 
                key={`reel-${i}`}
                onClick={() => onOpenModal(perf.reelId!)}
                className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-gradient-to-br from-pastel-pink/20 to-pastel-blue/20 border border-white/10 hover:border-pastel-pink/50 transition-all duration-300 cursor-pointer"
              >
                {/* Cover Art Image */}
                {coverArt && (
                  <img 
                    src={coverArt} 
                    alt={perf.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                )}
                <div className="absolute inset-0 bg-slate-800/50"></div>
                <div className="relative h-full flex flex-col items-center justify-center p-6 text-center z-10">
                  <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-pastel-pink transition-all duration-300">
                    <Play size={32} fill="white" className="ml-1 text-white" />
                  </div>
                  <h4 className="text-2xl font-serif font-bold text-white mb-3">{perf.title}</h4>
                  <p className="text-sm text-slate-300 mb-4">{perf.description}</p>
                  <span className="text-xs text-pastel-pink font-bold uppercase tracking-widest">Watch on Instagram</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              </button>
            );
          })}
          
          {/* Upcoming Card in Grid */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 flex flex-col justify-between border border-white/5 relative overflow-hidden group print:bg-none print:bg-slate-800 print:border-slate-700">
            <Calendar className="text-pastel-blue mb-4 print:text-blue-300" size={32} />
            <div>
              <h4 className="text-xl font-serif font-bold text-white mb-6">Upcoming Shows</h4>
              <ul className="space-y-6">
                {upcomingShows.slice(0, 2).map((show, i) => (
                  <li key={i} className="border-l-2 border-white/10 pl-4 py-1 hover:border-pastel-pink transition-colors print:border-slate-600">
                    <div className="text-xs text-pastel-pink font-bold uppercase print:text-pink-400">{show.date}</div>
                    <div className="text-sm font-medium text-slate-300 mb-3 print:text-slate-300">{show.title}</div>
                    
                    {/* Booking Button */}
                    <div className="flex items-center gap-2 print:hidden">
                      {/* District */}
                      <a
                        href="https://link.district.in/DSTRKT/atcea6k5"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center p-1.5 bg-black text-white rounded-full hover:bg-[#E23744] transition-all duration-300 hover:scale-105"
                        title="Book on District"
                      >
                        <img
                          src="https://b.zmtcdn.com/data/edition_assets/17466982242413.svg"
                          alt="District"
                          className="h-5 w-auto object-contain"
                        />
                      </a>
                    </div>
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
  );
};

export default PerformanceArchive;


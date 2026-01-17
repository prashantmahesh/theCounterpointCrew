import React from 'react';
import { Play } from 'lucide-react';

interface HeroProps {
  about: string;
}

const Hero: React.FC<HeroProps> = ({ about }) => {
  return (
    <header className="relative h-screen w-full overflow-hidden flex items-center justify-center print:h-[600px] print:overflow-hidden print:block print:relative">
      <div className="absolute inset-0 z-0 print:absolute print:inset-0 print:h-full">
        {/* Hero Background Image */}
        <img 
          src="/pictures/PIC02134 copy.jpg" 
          className="absolute inset-0 w-full h-full object-cover opacity-80" 
          alt="The Counterpoint Crew"
          loading="eager"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-transparent to-slate-900/80"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl px-6 mt-16 md:mt-20 print:pt-32">
        <div className="mb-4 md:mb-6 flex justify-center print:hidden">
          <span className="px-3 md:px-4 py-1 border border-pastel-blue/30 text-pastel-blue rounded-full text-[9px] md:text-[10px] tracking-[0.2em] md:tracking-[0.3em] uppercase backdrop-blur-sm">
            A capella group
          </span>
        </div>
        <h1 
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-black uppercase leading-tight md:leading-none tracking-tight mb-4 md:mb-6 text-[#e6e6e6] drop-shadow-2xl px-2"
        >
          The Counterpoint<br className="md:hidden"/> Crew
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-slate-300 max-w-xl mx-auto mb-6 md:mb-8 font-light leading-relaxed print:text-slate-400 px-4">
          {about}
        </p>
        
        {/* Show Announcement Card */}
        <div className="mb-6 print:hidden bg-transparent border border-transparent rounded-2xl p-6 md:p-8 max-w-3xl mx-auto">
          <div className="grid grid-cols-1 gap-6 items-center">
            {/* Event Info */}
            <div className="text-center">
              <p className="text-xs md:text-sm text-pastel-pink font-bold uppercase tracking-wider mb-3">14th February 2026</p>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2">Sounds Like Love</h3>
              <p className="text-base md:text-lg text-slate-300 font-medium">Underline Center, Bangalore</p>
              <p className="text-sm text-slate-400 mt-2">Book your tickets now</p>
            </div>

            {/* Booking Buttons */}
            <div className="flex flex-wrap justify-center items-center gap-3">
              {/* BookMyShow - Red Button */}
              <a 
                href="https://in.bookmyshow.com/events/sounds-like-love-by-the-counterpoint-crew/ET00481922" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#C4242B] text-white font-semibold text-sm rounded-full border-2 border-[#C4242B] hover:bg-[#A01F25] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <img 
                  src="https://assets-in.bmscdn.com/webin/common/icons/logo.svg" 
                  alt="BookMyShow" 
                  className="h-5 w-auto object-contain brightness-0 invert"
                />
              </a>

              {/* District - Black Button */}
              <a 
                href="https://link.district.in/DSTRKT/atcea6k5" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center p-3.5 bg-black text-white font-semibold text-sm rounded-full hover:bg-[#E23744] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <img 
                  src="https://b.zmtcdn.com/data/edition_assets/17466982242413.svg" 
                  alt="District" 
                  className="h-9 w-auto object-contain"
                />
              </a>

              {/* Urbanaut - White Button with Border */}
              <a 
                href="https://urbanaut.app/spot/sounds-like-love-by-the-counterpoint-crew" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group inline-flex items-center justify-center p-3.5 bg-white text-black rounded-full border-2 border-black transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <img 
                  src="/logo/urbanaut.webp" 
                  alt="Urbanaut" 
                  className="h-7 object-contain"
                  style={{ width: '100px', overflow: 'visible' }}
                />
              </a>
            </div>
          </div>
        </div>

        {/* Instagram Link */}
        <a href="https://www.instagram.com/thecounterpointcrew/" target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center gap-3 md:gap-4 mx-auto pl-6 md:pl-8 pr-2 py-2 mt-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full hover:bg-white/10 transition-all print:hidden">
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest">Watch us on Instagram</span>
          <div className="w-10 h-10 bg-pastel-blue text-slate-900 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
            <Play size={14} fill="currentColor" className="ml-0.5" />
          </div>
        </a>
      </div>
    </header>
  );
};

export default Hero;


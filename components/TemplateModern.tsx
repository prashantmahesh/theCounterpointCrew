import React from 'react';
import { AcapellaData } from '../types';
import { Music, Calendar, MapPin, ArrowRight } from 'lucide-react';

interface Props {
  data: AcapellaData;
}

const TemplateModern: React.FC<Props> = ({ data }) => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-pastel-blue">
      {/* Navbar */}
      <nav className="fixed w-full z-20 top-0 left-0 px-8 py-6 flex justify-between items-center bg-white/80 backdrop-blur-md print:absolute print:bg-white print:backdrop-blur-none">
        <div className="text-xl font-bold tracking-tighter text-slate-900">{data.groupName}</div>
        <div className="flex gap-8 text-sm font-medium text-slate-500 print:hidden">
          <a href="#" className="hover:text-slate-900 transition-colors">About</a>
          <a href="#" className="hover:text-slate-900 transition-colors">Performances</a>
          <a href="#" className="hover:text-slate-900 transition-colors">Contact</a>
        </div>
        <button className="px-5 py-2 bg-slate-900 text-white text-sm rounded-full hover:bg-slate-700 transition-colors print:hidden">
          Book Us
        </button>
      </nav>

      {/* Hero */}
      <header className="pt-32 pb-20 px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wide uppercase bg-pastel-blue text-blue-800 rounded-full print:border print:border-blue-100">
            Est. 2024
          </span>
          <h1 className="text-6xl md:text-7xl font-light leading-tight mb-6">
            {data.tagline.split(' ').slice(0, 3).join(' ')} <br />
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 print:text-blue-600 print:bg-none">
              {data.tagline.split(' ').slice(3).join(' ')}
            </span>
          </h1>
          <p className="text-lg text-slate-500 mb-8 max-w-md leading-relaxed">
            {data.about}
          </p>
          <div className="flex gap-4 print:hidden">
             <button className="flex items-center gap-2 px-6 py-3 bg-pastel-blue text-blue-900 font-semibold rounded-lg hover:bg-blue-200 transition-all">
               Listen Now <Music size={18} />
             </button>
             <button className="px-6 py-3 border border-slate-200 rounded-lg hover:border-slate-400 transition-all">
               Watch Video
             </button>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-pastel-pink rounded-full blur-3xl opacity-50 -translate-y-12 translate-x-12 print:hidden"></div>
           <div className="absolute inset-0 bg-pastel-blue rounded-full blur-3xl opacity-50 translate-y-12 -translate-x-12 print:hidden"></div>
          <img 
            src="https://picsum.photos/800/800?grayscale" 
            alt="Group" 
            className="relative z-10 w-full aspect-square object-cover rounded-2xl shadow-2xl print:shadow-none print:border print:border-slate-200"
          />
        </div>
      </header>

      {/* Content Grid */}
      <section className="px-8 py-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Upcoming Sidebar */}
          <div className="lg:col-span-4 space-y-8 print:col-span-12">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <Calendar className="text-blue-400 print:text-slate-600" /> Upcoming
            </h2>
            <div className="space-y-4 print:grid print:grid-cols-3 print:gap-4 print:space-y-0">
              {data.upcomingShows.map((show, i) => (
                <div key={i} className="group p-6 bg-white rounded-xl border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all cursor-pointer print:shadow-none print:border-slate-300">
                  <div className="text-sm text-blue-500 font-semibold mb-1 print:text-slate-600">{show.date}</div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors print:text-slate-900">{show.title}</h3>
                  <div className="flex items-center gap-2 text-slate-400 text-sm">
                    <MapPin size={14} /> {show.location}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Past Performances Masonry */}
          <div className="lg:col-span-8 print:col-span-12">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <Music className="text-pink-400 print:text-slate-600" /> Recent Sets
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 print:grid-cols-3">
              {data.pastPerformances.map((perf, i) => (
                <div key={i} className={`relative group overflow-hidden rounded-2xl ${i === 0 ? 'md:col-span-2 aspect-[2/1] print:col-span-3' : 'aspect-square'}`}>
                  <img 
                    src={`https://picsum.photos/seed/${i + 15}/800/800`} 
                    alt={perf.imageAlt}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex flex-col justify-end p-8 print:bg-white print:relative print:from-transparent print:p-4 print:text-slate-900">
                    <h3 className="text-white text-2xl font-bold mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 print:text-slate-900 print:translate-y-0">{perf.title}</h3>
                    <p className="text-slate-200 text-sm opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75 print:text-slate-600 print:opacity-100 print:translate-y-0">
                      {perf.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
      
      <footer className="bg-slate-900 text-slate-400 py-12 text-center print:bg-white print:text-slate-500 print:border-t">
        <p className="text-sm">© 2024 {data.groupName}. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default TemplateModern;
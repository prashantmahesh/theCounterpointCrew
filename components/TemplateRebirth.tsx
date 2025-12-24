import React, { useEffect, useState } from 'react';
import { AcapellaData } from '../types';
import { ArrowRight, Play, Plus } from 'lucide-react';

interface Props {
    data: AcapellaData;
}

const TemplateRebirth: React.FC<Props> = ({ data }) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black overflow-x-hidden">

            {/* Navigation */}
            <nav className={`fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-6 flex justify-between items-center transition-all duration-500 ${scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10' : ''}`}>
                <div className="text-xl font-serif tracking-widest uppercase">
                    {data.groupName}
                </div>
                <div className="hidden md:flex gap-12 text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
                    <a href="#" className="hover:text-white transition-colors">Index</a>
                    <a href="#" className="hover:text-white transition-colors">Studio</a>
                    <a href="#" className="hover:text-white transition-colors">Contact</a>
                </div>
                <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300">
                    <Plus size={16} />
                </button>
            </nav>

            {/* Hero Section */}
            <header className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-20">
                <div className="absolute inset-0 overflow-hidden">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover opacity-50"
                    >
                        <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gray-900/60 mix-blend-multiply"></div>
                </div>

                <div className="relative z-10 text-center max-w-5xl mx-auto">
                    <div className="mb-6 inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm animate-fade-in-up">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-300">Est. 2024</span>
                    </div>

                    <h1 className="text-6xl md:text-9xl font-serif leading-[0.9] tracking-tight mb-8 mix-blend-difference animate-fade-in-up delay-100">
                        {data.tagline.split(' ').map((word, i) => (
                            <span key={i} className="inline-block hover:italic transition-all duration-300 cursor-default">{word} </span>
                        ))}
                    </h1>

                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
                        {data.about}
                    </p>
                </div>

                <div className="absolute bottom-12 left-0 w-full flex justify-between px-6 md:px-12 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 animate-fade-in-up delay-300">
                    <span>Scroll to Explore</span>
                    <span>Based in NY</span>
                </div>
            </header>

            {/* Featured Image Parallax */}
            <section className="px-4 md:px-8 py-20">
                <div className="relative aspect-video w-full overflow-hidden rounded-sm">
                    <img
                        src="https://picsum.photos/seed/rebirth_hero/1920/1080?grayscale"
                        alt="Hero"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1.5s] ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-8 left-8 md:bottom-16 md:left-16">
                        <h2 className="text-4xl md:text-6xl font-serif mb-4">The Sound of<br />Silence & Soul</h2>
                        <button className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest hover:gap-6 transition-all">
                            Play Showreel <Play size={12} fill="currentColor" />
                        </button>
                    </div>
                </div>
            </section>

            {/* Content Grid */}
            <section className="px-6 md:px-12 py-32 border-t border-white/10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    <div className="md:col-span-4">
                        <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-500 mb-8 sticky top-32">Selected Works</h3>
                    </div>
                    <div className="md:col-span-8 space-y-32">
                        {data.pastPerformances.map((perf, i) => (
                            <div key={i} className="group cursor-pointer">
                                <div className="relative overflow-hidden mb-8 aspect-[4/3]">
                                    <img
                                        src={`https://picsum.photos/seed/rebirth_${i}/1200/900?grayscale`}
                                        alt={perf.imageAlt}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-500"></div>
                                </div>
                                <div className="flex justify-between items-end border-b border-white/20 pb-6 group-hover:border-white transition-colors">
                                    <div>
                                        <h4 className="text-3xl md:text-5xl font-serif mb-2">{perf.title}</h4>
                                        <p className="text-gray-400">{perf.description}</p>
                                    </div>
                                    <span className="text-xs font-bold uppercase tracking-widest border border-white/20 px-4 py-2 rounded-full group-hover:bg-white group-hover:text-black transition-all">
                                        View Case
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Upcoming List */}
            <section className="py-32 bg-zinc-900">
                <div className="px-6 md:px-12 max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20">
                        <h2 className="text-5xl md:text-7xl font-serif leading-none">Upcoming<br /><span className="text-gray-500 italic">Performances</span></h2>
                        <button className="mt-8 md:mt-0 px-8 py-4 border border-white/20 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                            Full Schedule
                        </button>
                    </div>

                    <div className="space-y-0">
                        {data.upcomingShows.map((show, i) => (
                            <div key={i} className="group relative flex flex-col md:flex-row justify-between items-center py-12 border-t border-white/10 hover:bg-white/5 transition-colors px-4">
                                <div className="flex items-baseline gap-8 w-full md:w-1/2">
                                    <span className="text-xs font-bold uppercase tracking-widest text-gray-500">0{i + 1}</span>
                                    <h3 className="text-3xl font-serif group-hover:translate-x-4 transition-transform duration-300">{show.title}</h3>
                                </div>
                                <div className="flex justify-between items-center w-full md:w-1/2 mt-4 md:mt-0">
                                    <span className="text-sm text-gray-400">{show.location}</span>
                                    <span className="text-sm font-bold uppercase tracking-widest">{show.date}</span>
                                </div>
                            </div>
                        ))}
                        <div className="border-t border-white/10"></div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="px-6 md:px-12 py-20 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
                <div>
                    <h2 className="text-8xl md:text-[10rem] font-serif leading-[0.8] tracking-tighter mb-8 opacity-20 hover:opacity-100 transition-opacity duration-500 cursor-default">
                        {data.groupName.split(' ')[0]}
                    </h2>
                    <div className="flex gap-8 text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
                        <a href="#" className="hover:text-white transition-colors">Instagram</a>
                        <a href="#" className="hover:text-white transition-colors">Twitter</a>
                        <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                    </div>
                </div>
                <div className="text-right">
                    <p className="text-gray-500 text-sm mb-2">Designed in 2024</p>
                    <p className="text-xs font-bold uppercase tracking-widest">&copy; All Rights Reserved</p>
                </div>
            </footer>

            <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
      `}</style>
        </div>
    );
};

export default TemplateRebirth;

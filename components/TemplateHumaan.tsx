import React from 'react';
import { AcapellaData } from '../types';
import { ArrowUpRight, Play, Star } from 'lucide-react';

interface Props {
    data: AcapellaData;
}

const TemplateHumaan: React.FC<Props> = ({ data }) => {
    return (
        <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-pink-500 selection:text-white overflow-x-hidden">

            {/* Nav */}
            <nav className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center mix-blend-difference">
                <div className="text-2xl font-black tracking-tighter uppercase">
                    {data.groupName.split(' ')[0]}<span className="text-pink-500">.</span>
                </div>
                <div className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-widest">
                    <a href="#" className="hover:text-pink-500 transition-colors">Work</a>
                    <a href="#" className="hover:text-pink-500 transition-colors">Studio</a>
                    <a href="#" className="hover:text-pink-500 transition-colors">News</a>
                    <a href="#" className="hover:text-pink-500 transition-colors">Contact</a>
                </div>
                <button className="bg-white text-black px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-pink-500 hover:text-white transition-all">
                    Book Us
                </button>
            </nav>

            {/* Hero */}
            <header className="relative min-h-screen flex items-center px-6 md:px-20 pt-20">
                <div className="max-w-7xl w-full">
                    <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">Available for 2025 Season</span>
                    </div>

                    <h1 className="text-6xl md:text-9xl font-black leading-[0.9] tracking-tighter mb-12">
                        WE ARE <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-gradient-x">
                            {data.groupName.toUpperCase()}
                        </span>
                    </h1>

                    <div className="flex flex-col md:flex-row gap-12 items-start md:items-end justify-between border-t border-zinc-800 pt-12">
                        <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl font-medium leading-relaxed">
                            {data.about}
                        </p>
                        <div className="flex gap-4">
                            <button className="w-16 h-16 rounded-full border border-zinc-700 flex items-center justify-center hover:bg-white hover:text-black transition-all group">
                                <ArrowUpRight size={24} className="group-hover:rotate-45 transition-transform duration-300" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Background Elements */}
                <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-pink-600/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
            </header>

            {/* Featured Work / Grid */}
            <section className="px-6 md:px-20 py-32 bg-zinc-900">
                <div className="flex justify-between items-end mb-20">
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
                        LATEST <span className="italic font-serif font-normal text-zinc-500">Performances</span>
                    </h2>
                    <button className="hidden md:flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-pink-500 transition-colors">
                        View All <ArrowUpRight size={16} />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {data.pastPerformances.map((perf, i) => (
                        <div key={i} className={`group relative ${i === 1 ? 'md:mt-32' : ''}`}>
                            <div className="aspect-[4/3] overflow-hidden rounded-2xl mb-6 bg-zinc-800">
                                <img
                                    src={`https://picsum.photos/seed/humaan_${i}/800/600?grayscale`}
                                    alt={perf.imageAlt}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                            </div>
                            <div className="flex justify-between items-start border-b border-zinc-800 pb-6 group-hover:border-pink-500 transition-colors">
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">{perf.title}</h3>
                                    <p className="text-zinc-400">{perf.description}</p>
                                </div>
                                <span className="text-xs font-bold uppercase tracking-widest border border-zinc-700 px-3 py-1 rounded-full">
                                    2024
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Marquee / Upcoming */}
            <section className="py-32 overflow-hidden bg-black">
                <div className="relative flex whitespace-nowrap">
                    <div className="animate-marquee flex gap-12 items-center text-8xl md:text-[12rem] font-black tracking-tighter text-zinc-800 uppercase leading-none">
                        {data.upcomingShows.map((show, i) => (
                            <React.Fragment key={i}>
                                <span className="hover:text-white transition-colors cursor-default">{show.title}</span>
                                <Star size={48} className="text-pink-500" fill="currentColor" />
                            </React.Fragment>
                        ))}
                        {data.upcomingShows.map((show, i) => (
                            <React.Fragment key={`dup-${i}`}>
                                <span className="hover:text-white transition-colors cursor-default">{show.title}</span>
                                <Star size={48} className="text-pink-500" fill="currentColor" />
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-6 md:px-20 mt-32">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-zinc-800 pt-12">
                        <div className="md:col-span-1">
                            <h3 className="text-sm font-bold uppercase tracking-widest text-pink-500 mb-4">Next Show</h3>
                            <div className="text-4xl font-black mb-2">{data.upcomingShows[0].date}</div>
                            <div className="text-xl text-zinc-400">{data.upcomingShows[0].location}</div>
                        </div>
                        <div className="md:col-span-2 flex flex-col justify-between">
                            <p className="text-2xl font-medium leading-relaxed mb-12">
                                Don't miss our next live performance. Tickets are selling fast for the {data.upcomingShows[0].title}.
                            </p>
                            <button className="self-start px-8 py-4 bg-white text-black rounded-full font-bold uppercase tracking-widest hover:bg-pink-500 hover:text-white transition-all flex items-center gap-4">
                                Get Tickets <ArrowUpRight size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <style>{`
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 5s ease infinite;
        }
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
        </div>
    );
};

export default TemplateHumaan;

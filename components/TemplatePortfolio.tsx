import React from 'react';
import { AcapellaData } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface Props {
    data: AcapellaData;
}

const TemplatePortfolio: React.FC<Props> = ({ data }) => {
    return (
        <div className="min-h-screen bg-[#1a1a1a] text-white font-sans selection:bg-pink-500 selection:text-white">

            {/* Nav */}
            <nav className="fixed top-0 left-0 w-full z-50 px-8 py-8 flex justify-between items-start mix-blend-difference pointer-events-none">
                <div className="text-sm font-bold tracking-widest uppercase pointer-events-auto cursor-pointer hover:opacity-70 transition-opacity">
                    {data.groupName}
                </div>
                <div className="flex flex-col items-end gap-1 text-xs font-medium uppercase tracking-widest pointer-events-auto">
                    <a href="#" className="hover:line-through transition-all">Index</a>
                    <a href="#" className="hover:line-through transition-all">Info</a>
                    <a href="#" className="hover:line-through transition-all">Contact</a>
                </div>
            </nav>

            {/* Hero / Intro */}
            <header className="px-8 pt-40 pb-20 max-w-4xl">
                <h1 className="text-4xl md:text-6xl font-normal leading-tight mb-8">
                    {data.tagline}
                </h1>
                <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed">
                    {data.about}
                </p>
            </header>

            {/* Masonry Grid */}
            <section className="px-4 pb-20">
                <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">

                    {/* Upcoming Shows as Cards */}
                    {data.upcomingShows.map((show, i) => (
                        <div key={`show-${i}`} className="break-inside-avoid relative group bg-zinc-800 p-8 rounded-sm hover:bg-zinc-700 transition-colors cursor-pointer">
                            <div className="flex justify-between items-start mb-12">
                                <span className="text-xs font-bold uppercase tracking-widest text-gray-500">{show.date}</span>
                                <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <h3 className="text-2xl font-medium mb-2">{show.title}</h3>
                            <p className="text-gray-400">{show.location}</p>
                        </div>
                    ))}

                    {/* Past Performances Images */}
                    {data.pastPerformances.map((perf, i) => (
                        <div key={`perf-${i}`} className="break-inside-avoid relative group overflow-hidden cursor-pointer">
                            <img
                                src={`https://picsum.photos/seed/nivedha_${i}/800/${i % 2 === 0 ? '1000' : '600'}?grayscale`}
                                alt={perf.imageAlt}
                                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-6">
                                <h3 className="text-xl font-medium mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{perf.title}</h3>
                                <p className="text-sm text-gray-400 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">{perf.description}</p>
                            </div>
                        </div>
                    ))}

                    {/* Filler Images for Masonry Effect */}
                    {[1, 2, 3].map((n) => (
                        <div key={`filler-${n}`} className="break-inside-avoid relative group overflow-hidden cursor-pointer">
                            <img
                                src={`https://picsum.photos/seed/filler_${n}/800/${n % 2 === 0 ? '600' : '800'}?grayscale`}
                                alt="Abstract Texture"
                                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-6">
                                <h3 className="text-xl font-medium mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">Visual Study {n}</h3>
                            </div>
                        </div>
                    ))}

                </div>
            </section>

            {/* Footer */}
            <footer className="px-8 py-12 border-t border-zinc-800 flex justify-between items-end text-xs font-bold uppercase tracking-widest text-gray-500">
                <div>
                    &copy; 2024 {data.groupName}
                </div>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-white transition-colors">Instagram</a>
                    <a href="#" className="hover:text-white transition-colors">Twitter</a>
                    <a href="#" className="hover:text-white transition-colors">Email</a>
                </div>
            </footer>
        </div>
    );
};

export default TemplatePortfolio;

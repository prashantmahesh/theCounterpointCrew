import React from 'react';
import { AcapellaData } from '../types';
import { Play, ChevronRight, Apple } from 'lucide-react';

interface Props {
    data: AcapellaData;
}

const TemplateApple: React.FC<Props> = ({ data }) => {
    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">

            {/* Nav */}
            <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
                <div className="max-w-5xl mx-auto px-6 h-12 flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs font-medium text-gray-300">
                        <Apple size={16} className="text-white" />
                        <span className="hover:text-white transition-colors cursor-pointer">{data.groupName}</span>
                        <span className="hover:text-white transition-colors cursor-pointer">Events</span>
                        <span className="hover:text-white transition-colors cursor-pointer">Music</span>
                        <span className="hover:text-white transition-colors cursor-pointer">Support</span>
                    </div>
                    <button className="bg-white text-black px-3 py-1 rounded-full text-xs font-medium hover:bg-gray-200 transition-colors">
                        Listen
                    </button>
                </div>
            </nav>

            {/* Hero */}
            <section className="pt-32 pb-20 px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
                        {data.groupName}.
                    </h1>
                    <p className="text-2xl md:text-3xl font-medium text-gray-400 mb-8 tracking-tight">
                        {data.tagline}
                    </p>
                    <div className="flex items-center justify-center gap-6 text-blue-400 text-lg md:text-xl font-medium">
                        <a href="#" className="hover:underline flex items-center gap-1">
                            Learn more <ChevronRight size={18} />
                        </a>
                        <a href="#" className="hover:underline flex items-center gap-1">
                            Buy Tickets <ChevronRight size={18} />
                        </a>
                    </div>
                </div>
            </section>

            {/* Large Image / Video Placeholder */}
            <section className="px-6 pb-24">
                <div className="max-w-6xl mx-auto aspect-video bg-gray-900 rounded-3xl overflow-hidden relative group">
                    <img
                        src="https://picsum.photos/seed/apple_hero/1920/1080?grayscale"
                        alt="Hero"
                        className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <button className="w-16 h-16 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/30 hover:bg-white hover:text-black transition-all">
                            <Play size={24} fill="currentColor" className="ml-1" />
                        </button>
                    </div>
                    <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 text-left">
                        <h3 className="text-3xl font-semibold mb-2">The New Sound.</h3>
                        <p className="text-gray-300">Experience spatial audio like never before.</p>
                    </div>
                </div>
            </section>

            {/* Grid Section */}
            <section className="bg-zinc-950 py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-16 text-center">
                        Performances. <span className="text-gray-500">Refined.</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {data.pastPerformances.map((perf, i) => (
                            <div key={i} className={`relative bg-black rounded-3xl overflow-hidden group h-[500px] ${i === 0 ? 'md:col-span-2' : ''}`}>
                                <img
                                    src={`https://picsum.photos/seed/apple_${i}/800/600?grayscale`}
                                    alt={perf.imageAlt}
                                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                                />
                                <div className={`absolute ${i === 0 ? 'bottom-12 left-12' : 'top-12 left-0 w-full text-center'}`}>
                                    <h3 className={`text-3xl md:text-4xl font-semibold mb-2 ${i !== 0 && 'text-white'}`}>{perf.title}</h3>
                                    <p className={`text-lg text-gray-300 ${i !== 0 && 'max-w-xs mx-auto'}`}>{perf.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Upcoming List */}
            <section className="py-24 px-6 bg-black">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-semibold tracking-tight mb-12">Upcoming Events</h2>
                    <div className="divide-y divide-gray-800">
                        {data.upcomingShows.map((show, i) => (
                            <div key={i} className="py-8 flex flex-col md:flex-row justify-between items-center group hover:bg-zinc-900/50 transition-colors rounded-xl px-4">
                                <div className="text-left mb-4 md:mb-0">
                                    <div className="text-gray-500 font-medium mb-1">{show.date}</div>
                                    <div className="text-2xl font-semibold">{show.title}</div>
                                </div>
                                <div className="flex items-center gap-6">
                                    <span className="text-gray-400">{show.location}</span>
                                    <button className="px-6 py-2 rounded-full border border-blue-500 text-blue-500 font-medium hover:bg-blue-500 hover:text-white transition-all">
                                        Buy
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-zinc-950 py-12 px-6 border-t border-zinc-900 text-xs text-gray-500">
                <div className="max-w-5xl mx-auto">
                    <p className="mb-4">Copyright © 2024 {data.groupName}. All rights reserved.</p>
                    <div className="flex gap-4">
                        <a href="#" className="hover:underline">Privacy Policy</a>
                        <a href="#" className="hover:underline">Terms of Use</a>
                        <a href="#" className="hover:underline">Sales and Refunds</a>
                        <a href="#" className="hover:underline">Legal</a>
                        <a href="#" className="hover:underline">Site Map</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default TemplateApple;

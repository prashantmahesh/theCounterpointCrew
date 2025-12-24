import React from 'react';
import { AcapellaData } from '../types';
import { ArrowRight, Play, Instagram, Twitter, Mail } from 'lucide-react';

interface Props {
    data: AcapellaData;
}

const TemplatePrerna: React.FC<Props> = ({ data }) => {
    return (
        <div className="min-h-screen bg-[#fdfbf7] text-[#2d2d2d] font-sans selection:bg-[#d4e4bc] selection:text-[#2d2d2d]">

            {/* Navigation */}
            <nav className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center bg-[#fdfbf7]/80 backdrop-blur-sm">
                <div className="text-xl font-serif italic font-medium tracking-wide">
                    {data.groupName}
                </div>
                <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide text-gray-600">
                    <a href="#" className="hover:text-black transition-colors">Work</a>
                    <a href="#" className="hover:text-black transition-colors">About</a>
                    <a href="#" className="hover:text-black transition-colors">Contact</a>
                </div>
                <button className="bg-[#2d2d2d] text-[#fdfbf7] px-5 py-2 rounded-full text-xs font-medium tracking-wider hover:bg-[#d4e4bc] hover:text-[#2d2d2d] transition-all duration-300">
                    Get in Touch
                </button>
            </nav>

            {/* Hero Section */}
            <header className="pt-32 pb-20 px-6 md:px-20 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="w-full md:w-1/2 space-y-8">
                        <div className="inline-block px-3 py-1 rounded-full bg-[#e8dff5] text-[#6b4c9a] text-xs font-medium tracking-wider">
                            Available for bookings
                        </div>
                        <h1 className="text-5xl md:text-7xl font-serif leading-[1.1]">
                            {data.tagline}
                        </h1>
                        <p className="text-lg text-gray-600 leading-relaxed max-w-md">
                            {data.about}
                        </p>
                        <div className="flex gap-4 pt-4">
                            <button className="flex items-center gap-2 px-6 py-3 bg-[#d4e4bc] rounded-full text-sm font-medium hover:bg-[#c1d6a3] transition-colors">
                                View Showreel <Play size={16} fill="currentColor" />
                            </button>
                            <button className="flex items-center gap-2 px-6 py-3 border border-gray-200 rounded-full text-sm font-medium hover:border-gray-400 transition-colors">
                                Upcoming Shows
                            </button>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 relative">
                        <div className="aspect-[4/5] rounded-[2rem] overflow-hidden relative z-10">
                            <img
                                src="https://picsum.photos/seed/prerna_hero/800/1000?grayscale"
                                alt="Hero"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                            />
                        </div>
                        {/* Decorative Elements */}
                        <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#fce1e4] rounded-full blur-3xl -z-0 opacity-60"></div>
                        <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-[#d4e4bc] rounded-full blur-3xl -z-0 opacity-60"></div>
                    </div>
                </div>
            </header>

            {/* Selected Works */}
            <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
                <div className="flex justify-between items-end mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif">Selected Works</h2>
                    <a href="#" className="hidden md:flex items-center gap-2 text-sm font-medium hover:gap-4 transition-all">
                        View Archive <ArrowRight size={16} />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
                    {data.pastPerformances.map((perf, i) => (
                        <div key={i} className={`group cursor-pointer ${i % 2 !== 0 ? 'md:mt-24' : ''}`}>
                            <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-gray-100 relative">
                                <img
                                    src={`https://picsum.photos/seed/prerna_${i}/800/600?grayscale`}
                                    alt={perf.imageAlt}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
                            </div>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-2xl font-serif mb-2 group-hover:text-gray-600 transition-colors">{perf.title}</h3>
                                    <p className="text-gray-500 text-sm">{perf.description}</p>
                                </div>
                                <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                    <ArrowRight size={14} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Upcoming Events List */}
            <section className="py-24 bg-[#f2f0e9]">
                <div className="px-6 md:px-20 max-w-5xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-serif mb-12 text-center">Upcoming Events</h2>

                    <div className="space-y-4">
                        {data.upcomingShows.map((show, i) => (
                            <div key={i} className="group bg-[#fdfbf7] p-6 rounded-2xl flex flex-col md:flex-row justify-between items-center hover:shadow-lg hover:shadow-[#d4e4bc]/20 transition-all duration-300 cursor-pointer border border-transparent hover:border-[#d4e4bc]">
                                <div className="flex items-center gap-6 mb-4 md:mb-0 w-full md:w-auto">
                                    <div className="w-16 h-16 rounded-full bg-[#e8dff5] flex flex-col items-center justify-center text-[#6b4c9a]">
                                        <span className="text-xs font-bold uppercase">{show.date.split(' ')[0]}</span>
                                        <span className="text-lg font-serif font-bold">{show.date.split(' ')[1].replace(',', '')}</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-medium">{show.title}</h3>
                                        <p className="text-gray-500 text-sm">{show.location}</p>
                                    </div>
                                </div>
                                <button className="w-full md:w-auto px-6 py-2 rounded-full border border-gray-200 text-sm font-medium group-hover:bg-[#2d2d2d] group-hover:text-white transition-colors">
                                    Get Tickets
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-20 px-6 md:px-20 max-w-7xl mx-auto text-center">
                <h2 className="text-4xl md:text-6xl font-serif mb-8">Let's create magic together.</h2>
                <div className="flex justify-center gap-6 mb-12">
                    <a href="#" className="p-3 rounded-full bg-gray-100 hover:bg-[#d4e4bc] transition-colors"><Instagram size={20} /></a>
                    <a href="#" className="p-3 rounded-full bg-gray-100 hover:bg-[#e8dff5] transition-colors"><Twitter size={20} /></a>
                    <a href="#" className="p-3 rounded-full bg-gray-100 hover:bg-[#fce1e4] transition-colors"><Mail size={20} /></a>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 border-t border-gray-200 pt-8">
                    <p>&copy; 2024 {data.groupName}. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-black">Privacy</a>
                        <a href="#" className="hover:text-black">Terms</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default TemplatePrerna;

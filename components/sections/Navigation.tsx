import React from 'react';

const Navigation: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 md:px-6 py-4 md:py-6 flex justify-between items-center pointer-events-none print:absolute print:bg-transparent print:pointer-events-auto">
      <div className="bg-black/30 backdrop-blur-md px-4 md:px-6 py-2 md:py-3 rounded-full border border-white/10 pointer-events-auto flex gap-3 md:gap-6 items-center print:bg-transparent print:border-none print:px-0">
        <a href="#" className="font-serif font-bold tracking-wider text-xs md:text-sm text-pastel-blue uppercase print:text-pastel-blue hover:text-pastel-pink transition-colors cursor-pointer whitespace-nowrap">TCC</a>
        <div className="h-4 w-[1px] bg-white/20 print:hidden hidden md:block"></div>
        <div className="hidden md:flex gap-4 text-xs font-medium text-slate-300 print:text-slate-400">
          <a href="#about" className="hover:text-white hover:glow-text transition-colors">About Us</a>
          <a href="#team" className="hover:text-white hover:glow-text transition-colors">Team</a>
          <a href="#gallery" className="hover:text-white hover:glow-text transition-colors">Gallery</a>
          <a href="#events" className="hover:text-white hover:glow-text transition-colors">Events</a>
        </div>
      </div>
      <a href="#contact" className="pointer-events-auto bg-pastel-pink text-slate-900 px-4 md:px-6 py-2 md:py-3 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-[0_0_20px_rgba(252,231,243,0.3)] print:hidden whitespace-nowrap">
        Contact us
      </a>
    </nav>
  );
};

export default Navigation;


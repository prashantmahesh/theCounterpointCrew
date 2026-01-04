import React from 'react';

interface Show {
  date: string;
  title: string;
  location: string;
}

interface TickerTapeProps {
  shows: Show[];
}

const TickerTape: React.FC<TickerTapeProps> = ({ shows }) => {
  if (!shows || shows.length === 0) {
    return null;
  }

  return (
    <>
      <div className="w-full bg-pastel-blue text-slate-900 overflow-hidden py-4 border-y border-white/10 print:border-y-slate-700">
        <div className="flex gap-12 whitespace-nowrap animate-marquee items-center print:animate-none print:flex-wrap print:justify-center">
          <div className="flex items-center gap-4 text-sm font-bold uppercase tracking-wider print:text-xs">
            {shows.map((show, idx) => (
              <span key={`show-${idx}`} className="flex items-center gap-2">
                <span className="w-2 h-2 bg-slate-900 rounded-full"></span>
                {show.date} — {show.location} // {show.title}
              </span>
            ))}
          </div>
          {/* Duplicate for seamless loop */}
          <div className="flex items-center gap-4 text-sm font-bold uppercase tracking-wider print:text-xs print:hidden">
            {shows.map((show, idx) => (
              <span key={`show-dup-${idx}`} className="flex items-center gap-2">
                <span className="w-2 h-2 bg-slate-900 rounded-full"></span>
                {show.date} — {show.location} // {show.title}
              </span>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        html { scroll-behavior: smooth; }
        .animate-marquee { animation: marquee 30s linear infinite; }
        @media print { .animate-marquee { animation: none; } }
        @keyframes marquee { from { transform: translateX(100%); } to { transform: translateX(-100%); } }
      `}</style>
    </>
  );
};

export default TickerTape;


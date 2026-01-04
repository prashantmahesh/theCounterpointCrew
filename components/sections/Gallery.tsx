import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    '/pictures/Ish-10.jpg',
    '/pictures/Ish-27.jpg',
    '/pictures/Ish-48.jpg',
    '/pictures/Ish-63.jpg',
    '/pictures/PIC01953 copy.jpg',
    '/pictures/PIC01999 copy.jpg',
    '/pictures/PIC02105 copy (1).jpg',
    '/pictures/PIC02117 copy.jpg',
    '/pictures/PIC02134 copy.jpg',
    '/pictures/VideoCapture_20251216-160006.jpg',
    '/pictures/VideoCapture_20251216-160244.jpg'
  ];

  return (
    <>
      <section id="gallery" className="py-20 bg-slate-950 relative overflow-hidden border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center">Moments & Memories</h2>
          <p className="text-slate-500 text-center mt-4 text-sm uppercase tracking-widest">Gallery</p>
        </div>

        {/* Gradient Fade Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none"></div>

        {/* Scrolling Container */}
        <div className="carousel-scroll flex gap-6 animate-scroll hover:pause-animation">
          {/* First set of images */}
          {images.map((img, i) => (
            <div key={`img-${i}`} className="flex-none w-[300px] md:w-[400px] group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-pastel-pink/20 to-pastel-blue/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10 shadow-xl">
                <img src={img} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
              </div>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {images.map((img, i) => (
            <div key={`img-dup-${i}`} className="flex-none w-[300px] md:w-[400px] group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-pastel-pink/20 to-pastel-blue/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10 shadow-xl">
                <img src={img} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .pause-animation:hover {
          animation-play-state: paused;
        }
        @media print {
          .animate-scroll { animation: none; transform: translateX(0); }
        }
      `}</style>
    </>
  );
};

export default Gallery;


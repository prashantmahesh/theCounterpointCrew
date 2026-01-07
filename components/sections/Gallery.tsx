import React, { useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import gsap from 'gsap';

const Gallery: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const loopRef = useRef<any>(null);
  
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

  useEffect(() => {
    if (!containerRef.current) return;

    const items = gsap.utils.toArray('.gallery-item') as HTMLElement[];
    
    // Horizontal loop helper function
    function horizontalLoop(items: HTMLElement[], config: any) {
      items = gsap.utils.toArray(items) as HTMLElement[];
      config = config || {};
      let tl = gsap.timeline({
        repeat: config.repeat,
        paused: config.paused,
        defaults: { ease: "none" },
        onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100)
      });
      
      let length = items.length;
      let startX = items[0].offsetLeft;
      let times: number[] = [];
      let widths: number[] = [];
      let xPercents: number[] = [];
      let curIndex = 0;
      let pixelsPerSecond = (config.speed || 1) * 100;
      let snap = config.snap === false ? (v: number) => v : gsap.utils.snap(config.snap || 1);
      let totalWidth: number, curX: number, distanceToStart: number, distanceToLoop: number, item: HTMLElement, i: number;
      
      gsap.set(items, {
        xPercent: (i: number, el: HTMLElement) => {
          let w = widths[i] = parseFloat(gsap.getProperty(el, "width", "px") as string);
          xPercents[i] = snap(parseFloat(gsap.getProperty(el, "x", "px") as string) / w * 100 + parseFloat(gsap.getProperty(el, "xPercent") as string));
          return xPercents[i];
        }
      });
      
      gsap.set(items, { x: 0 });
      
      totalWidth = items[length - 1].offsetLeft + xPercents[length - 1] / 100 * widths[length - 1] - startX + 
                   items[length - 1].offsetWidth * parseFloat(gsap.getProperty(items[length - 1], "scaleX") as string) + 
                   (parseFloat(config.paddingRight) || 0);
      
      for (i = 0; i < length; i++) {
        item = items[i];
        curX = xPercents[i] / 100 * widths[i];
        distanceToStart = item.offsetLeft + curX - startX;
        distanceToLoop = distanceToStart + widths[i] * parseFloat(gsap.getProperty(item, "scaleX") as string);
        tl.to(item, {
          xPercent: snap((curX - distanceToLoop) / widths[i] * 100),
          duration: distanceToLoop / pixelsPerSecond
        }, 0)
        .fromTo(item, {
          xPercent: snap((curX - distanceToLoop + totalWidth) / widths[i] * 100)
        }, {
          xPercent: xPercents[i],
          duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
          immediateRender: false
        }, distanceToLoop / pixelsPerSecond)
        .add("label" + i, distanceToStart / pixelsPerSecond);
        times[i] = distanceToStart / pixelsPerSecond;
      }
      
      function toIndex(index: number, vars?: any) {
        vars = vars || {};
        (Math.abs(index - curIndex) > length / 2) && (index += index > curIndex ? -length : length);
        let newIndex = gsap.utils.wrap(0, length, index);
        let time = times[newIndex];
        if (time > tl.time() !== index > curIndex) {
          vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
          time += tl.duration() * (index > curIndex ? 1 : -1);
        }
        curIndex = newIndex;
        vars.overwrite = true;
        return tl.tweenTo(time, vars);
      }
      
      tl.next = (vars?: any) => toIndex(curIndex + 1, vars);
      tl.previous = (vars?: any) => toIndex(curIndex - 1, vars);
      tl.current = () => curIndex;
      tl.toIndex = (index: number, vars?: any) => toIndex(index, vars);
      tl.times = times;
      tl.progress(1, true).progress(0, true);
      
      if (config.reversed) {
        tl.vars.onReverseComplete();
        tl.reverse();
      }
      
      return tl;
    }

    // Initialize the loop
    loopRef.current = horizontalLoop(items, {
      speed: 0.5,
      repeat: -1,
      paddingRight: 24
    });

    return () => {
      if (loopRef.current) {
        loopRef.current.kill();
      }
    };
  }, []);

  const handleNext = () => {
    if (loopRef.current?.next) {
      loopRef.current.next({ duration: 0.5, ease: "power1.inOut" });
    }
  };

  const handlePrevious = () => {
    if (loopRef.current?.previous) {
      loopRef.current.previous({ duration: 0.5, ease: "power1.inOut" });
    }
  };

  return (
    <>
      <section id="gallery" className="py-20 bg-slate-950 relative overflow-hidden border-y border-white/5 group/gallery">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center">Moments & Memories</h2>
          <p className="text-slate-500 text-center mt-4 text-sm uppercase tracking-widest">Gallery</p>
        </div>

        {/* Gradient Fade Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none"></div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/40 hover:bg-white/10 hover:text-white transition-all print:hidden"
          aria-label="Previous image"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/40 hover:bg-white/10 hover:text-white transition-all print:hidden"
          aria-label="Next image"
        >
          <ChevronRight size={24} />
        </button>

        {/* Scrolling Container */}
        <div 
          ref={containerRef}
          className="flex gap-6"
        >
          {images.map((img, i) => (
            <div key={`img-${i}`} className="gallery-item flex-none w-[300px] md:w-[400px] group relative">
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
        .gallery-item {
          will-change: transform;
        }
        @media print {
          .gallery-item { transform: translateX(0) !important; }
        }
      `}</style>
    </>
  );
};

export default Gallery;


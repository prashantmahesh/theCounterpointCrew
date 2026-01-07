import React from 'react';
import { Users } from 'lucide-react';

const TeamSection: React.FC = () => {
  const vocalGroups = [
    {
      name: 'Bass',
      image: '/team/Bass.jpg',
      description: 'The foundation of our harmony'
    },
    {
      name: 'Tenor',
      image: '/team/Tenor.jpg',
      description: 'The powerful middle voice'
    },
    {
      name: 'Alto',
      image: '/team/Alto.jpg',
      description: 'The bridge between melody and bass'
    },
    {
      name: 'Soprano',
      image: '/team/Sopranos.jpg',
      description: 'The soaring voice above'
    }
  ];

  return (
    <section id="team" className="py-16 px-6 bg-slate-900 border-y border-white/5 print:py-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 text-pastel-pink print:text-pink-400 mb-4">
            <Users size={20} />
            <span className="text-xs font-bold uppercase tracking-widest">Meet the Team</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-3 print:text-white">
            Our Vocal Ensemble
          </h2>
          <p className="text-slate-400 text-base max-w-2xl mx-auto">
            A 20-member collective bringing together four distinct vocal ranges in perfect harmony
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {vocalGroups.map((group, index) => (
            <div key={index} className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-pastel-pink to-pastel-blue rounded-2xl blur-sm opacity-10 group-hover:opacity-25 transition-opacity duration-1000 print:hidden"></div>
              <div className="relative bg-slate-800 rounded-2xl overflow-hidden border border-white/10 shadow-2xl print:border-slate-700">
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={group.image} 
                    alt={group.name}
                    className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                
                {/* Content */}
                <div className="p-4 text-center">
                  <h3 className="text-xl font-serif font-bold text-white mb-1">
                    {group.name}
                  </h3>
                  <p className="text-slate-400 text-xs">
                    {group.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;


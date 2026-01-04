import React from 'react';
import { X } from 'lucide-react';

interface InstagramModalProps {
  reelId: string;
  onClose: () => void;
}

const InstagramModal: React.FC<InstagramModalProps> = ({ reelId, onClose }) => {
  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 print:hidden"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-lg max-h-[90vh] bg-slate-900 rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-pastel-pink hover:border-pastel-pink transition-all group"
        >
          <X size={20} className="text-white group-hover:rotate-90 transition-transform duration-300" />
        </button>

        {/* Instagram Embed */}
        <div className="relative w-full" style={{ paddingBottom: '177.78%' }}>
          <iframe
            src={`https://www.instagram.com/reel/${reelId}/embed/`}
            className="absolute inset-0 w-full h-full"
            frameBorder="0"
            scrolling="no"
            allowTransparency={true}
            allow="encrypted-media"
            title="Instagram Reel"
          />
        </div>
      </div>
    </div>
  );
};

export default InstagramModal;


import React from 'react';
import { Mail, Instagram /*, Phone */ } from 'lucide-react';

interface FooterProps {
  groupName: string;
}

const Footer: React.FC<FooterProps> = ({ groupName }) => {
  return (
    <footer id="contact" className="bg-black py-20 px-6 border-t border-white/10">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">Get in Touch</h2>
          <p className="text-slate-400 mb-12 max-w-xl mx-auto">
            For bookings, auditions, or just to say hello, reach out to us through any of these channels.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            <a href="mailto:thecounterpointcrew@gmail.com" className="flex items-center gap-3 px-6 py-4 rounded-full bg-white/5 hover:bg-white/10 hover:text-pastel-blue transition-all border border-white/10 group">
              <Mail size={20} className="group-hover:scale-110 transition-transform" />
              <span className="font-medium">Email Us</span>
            </a>
            
            <a href="https://www.instagram.com/thecounterpointcrew/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-4 rounded-full bg-white/5 hover:bg-white/10 hover:text-pastel-pink transition-all border border-white/10 group">
              <Instagram size={20} className="group-hover:scale-110 transition-transform" />
              <span className="font-medium">Instagram</span>
            </a>
            
            {/* Phone/WhatsApp link - commented out for future use
            <a href="tel:+919886288626" className="flex items-center gap-3 px-6 py-4 rounded-full bg-white/5 hover:bg-white/10 hover:text-pastel-blue transition-all border border-white/10 group">
              <Phone size={20} className="group-hover:scale-110 transition-transform" />
              <span className="font-medium">Call / WhatsApp</span>
            </a>
            */}
          </div>
        </div>
        
        <div className="pt-20 border-t border-white/10 space-y-4">
          <div className="text-2xl font-serif font-bold text-slate-600 mb-4">{groupName}</div>
          <p className="text-xs text-slate-600 uppercase tracking-widest">© {new Date().getFullYear()} All Rights Reserved</p>
          <p className="text-xs text-slate-700">
            Made by{' '}
            <a 
              href="https://www.linkedin.com/in/abhishek-satapathy/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-pastel-blue transition-colors underline"
            >
              Abhishek Satapathy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


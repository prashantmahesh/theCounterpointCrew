import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { AcapellaData, DesignTemplate } from './types';
import { generateAcapellaContent } from './services/geminiService';
import { downloadFigmaTokens } from './utils/figmaExport';
import TemplateModern from './components/TemplateModern';
import TemplateApple from './components/TemplateApple';
import TemplateHumaan from './components/TemplateHumaan';
import TemplatePortfolio from './components/TemplatePortfolio';
import TemplatePrerna from './components/TemplatePrerna';
import TemplateRebirth from './components/TemplateRebirth';
import TemplateElegant from './components/TemplateElegant';

import TemplateCinematic from './components/TemplateCinematic';
import { Loader2, Palette, Layout, Download, Printer } from 'lucide-react';

const defaultData: AcapellaData = {
  groupName: "The Chromatics",
  tagline: "Harmony in every shade",
  about: "We are a premier vocal collective blending modern pop with classic choral techniques.",
  upcomingShows: [
    { date: "Oct 12", title: "Autumn Acapella", location: "Grand Hall" },
    { date: "Nov 05", title: "Voices of the City", location: "Downtown Plaza" },
    { date: "Dec 20", title: "Winter Harmony", location: "University Chapel" },
  ],
  pastPerformances: [
    { title: "Regionals 2023", description: "First place finish with a medley of 80s hits.", imageAlt: "Performance on stage" },
    { title: "Spring Showcase", description: "Our annual charity gala raising $5k.", imageAlt: "Group singing outdoors" },
    { title: "Campus Jam", description: "Impromptu session in the quad.", imageAlt: "Casual singing" },
  ]
};

const App: React.FC = () => {
  const [data, setData] = useState<AcapellaData | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentTemplate, setCurrentTemplate] = useState<DesignTemplate>(DesignTemplate.MODERN_MINIMAL);
  const [showUI, setShowUI] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const generatedData = await generateAcapellaContent();
        setData(generatedData);
      } catch (error) {
        console.error("Failed to generate content, using default", error);
        setData(defaultData);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleExportJSON = () => {
    if (data) {
      downloadFigmaTokens(data);
    }
  };

  const handlePrint = () => {
    // Add a small timeout to allow any UI state changes (like css print queries) 
    // to settle before the browser print dialog freezes execution.
    setTimeout(() => {
      window.print();
    }, 100);
  };

  const renderTemplate = () => {
    if (!data) return null;
    switch (currentTemplate) {
      case DesignTemplate.MODERN_MINIMAL:
        return <TemplateModern data={data} />;
      case DesignTemplate.ELEGANT_CLASSIC:
        return <TemplateElegant data={data} />;
      case DesignTemplate.APPLE_MINIMAL:
        return <TemplateApple data={data} />;
      case DesignTemplate.AGENCY_MODERN:
        return <TemplateHumaan data={data} />;
      case DesignTemplate.PORTFOLIO_MINIMAL:
        return <TemplatePortfolio data={data} />;
      case DesignTemplate.FRAMER_PASTEL:
        return <TemplatePrerna data={data} />;
      case DesignTemplate.REBIRTH_MODERN:
        return <TemplateRebirth data={data} />;
      case DesignTemplate.CINEMATIC_VIDEO:
        return <TemplateCinematic data={data} />;
      default:
        return <TemplateModern data={data} />;
    }
  };

  if (loading) {
    return (
      <div className="h-screen w-full flex flex-col items-center justify-center bg-gray-50 text-gray-500 gap-4">
        <Loader2 className="animate-spin text-indigo-500" size={48} />
        <p className="font-medium animate-pulse">Designing your experience with Gemini...</p>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Design Switcher UI - Hidden when printing */}
      <div className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 print:hidden ${showUI ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'}`}>
        <div className="bg-gray-900/90 backdrop-blur-md text-white p-2 rounded-2xl shadow-2xl flex items-center gap-2 border border-white/10">

          <div className="px-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-400 border-r border-gray-700 mr-1">
            <Palette size={14} />
            Mockups
          </div>

          <button
            onClick={() => setCurrentTemplate(DesignTemplate.MODERN_MINIMAL)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${currentTemplate === DesignTemplate.MODERN_MINIMAL ? 'bg-indigo-500 text-white' : 'hover:bg-white/10 text-gray-300'}`}
          >
            Harmonic Haze
          </button>

          <button
            onClick={() => setCurrentTemplate(DesignTemplate.ELEGANT_CLASSIC)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${currentTemplate === DesignTemplate.ELEGANT_CLASSIC ? 'bg-indigo-500 text-white' : 'hover:bg-white/10 text-gray-300'}`}
          >
            Velvet Vocals
          </button>

          <button
            onClick={() => setCurrentTemplate(DesignTemplate.APPLE_MINIMAL)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${currentTemplate === DesignTemplate.APPLE_MINIMAL ? 'bg-indigo-500 text-white' : 'hover:bg-white/10 text-gray-300'}`}
          >
            Cupertino Canvas
          </button>

          <button
            onClick={() => setCurrentTemplate(DesignTemplate.AGENCY_MODERN)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${currentTemplate === DesignTemplate.AGENCY_MODERN ? 'bg-indigo-500 text-white' : 'hover:bg-white/10 text-gray-300'}`}
          >
            Digital Agency
          </button>

          <button
            onClick={() => setCurrentTemplate(DesignTemplate.PORTFOLIO_MINIMAL)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${currentTemplate === DesignTemplate.PORTFOLIO_MINIMAL ? 'bg-indigo-500 text-white' : 'hover:bg-white/10 text-gray-300'}`}
          >
            Portfolio Grid
          </button>

          <button
            onClick={() => setCurrentTemplate(DesignTemplate.FRAMER_PASTEL)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${currentTemplate === DesignTemplate.FRAMER_PASTEL ? 'bg-indigo-500 text-white' : 'hover:bg-white/10 text-gray-300'}`}
          >
            Pastel Portfolio
          </button>

          <button
            onClick={() => setCurrentTemplate(DesignTemplate.REBIRTH_MODERN)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${currentTemplate === DesignTemplate.REBIRTH_MODERN ? 'bg-indigo-500 text-white' : 'hover:bg-white/10 text-gray-300'}`}
          >
            Rebirth Editorial
          </button>


          <button
            onClick={() => setCurrentTemplate(DesignTemplate.CINEMATIC_VIDEO)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${currentTemplate === DesignTemplate.CINEMATIC_VIDEO ? 'bg-indigo-500 text-white' : 'hover:bg-white/10 text-gray-300'}`}
          >
            Cinematic Spotlight
          </button>

          <div className="w-[1px] h-8 bg-gray-700 mx-1"></div>

          <button
            onClick={handlePrint}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors group relative"
            title="Save as PDF (Import to Figma for Vectors)"
          >
            <Printer size={18} className="text-gray-400 group-hover:text-white" />
          </button>

          <button
            onClick={handleExportJSON}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors group relative"
            title="Download Figma Tokens (JSON)"
          >
            <Download size={18} className="text-gray-400 group-hover:text-white" />
          </button>

          <div className="w-[1px] h-8 bg-gray-700 mx-1"></div>

          <button onClick={() => setShowUI(false)} className="p-2 hover:bg-red-500/20 hover:text-red-400 rounded-lg transition-colors" title="Hide Toolbar">
            <span className="text-xs">✕</span>
          </button>
        </div>
      </div>

      {!showUI && (
        <button
          onClick={() => setShowUI(true)}
          className="fixed bottom-8 left-8 z-50 bg-gray-900 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform print:hidden"
        >
          <Layout size={20} />
        </button>
      )}

      {renderTemplate()}
    </div>
  );
};

export default App;
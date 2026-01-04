import React, { useState, useEffect } from 'react';
import { AcapellaData } from './types';
import { getAcapellaData } from './services/dataService';
import TemplateCinematic from './components/TemplateCinematic';
import { Loader2 } from 'lucide-react';

const defaultData: AcapellaData = {
  groupName: "The Counterpoint Crew",
  tagline: "The Counterpoint Crew",
  about: "We are a premier vocal collective blending modern pop with classic choral techniques.",
  upcomingShows: [
    { date: "Oct 12", title: "Autumn Acapella", location: "Grand Hall" },
    { date: "Nov 05", title: "Voices of the City", location: "Downtown Plaza" },
    { date: "Dec 20", title: "Winter Harmony", location: "University Chapel" },
  ],
  pastPerformances: [
    { title: "Sangathil", description: "First place finish with a medley of 80s hits.", imageAlt: "Performance on stage" },
    { title: "Meri Maa", description: "Our annual charity gala raising $5k.", imageAlt: "Group singing outdoors" },
    { title: "Ave Maria", description: "Impromptu session in the quad.", imageAlt: "Casual singing" },
  ]
};

const App: React.FC = () => {
  const [data, setData] = useState<AcapellaData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const generatedData = await getAcapellaData();
        setData(generatedData);
      } catch (error) {
        console.error("Failed to load content, using default", error);
        setData(defaultData);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-full flex flex-col items-center justify-center bg-gray-50 text-gray-500 gap-4">
        <Loader2 className="animate-spin text-indigo-500" size={48} />
        <p className="font-medium animate-pulse">Loading your experience...</p>
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className="relative">
      <TemplateCinematic data={data} />
    </div>
  );
};

export default App;

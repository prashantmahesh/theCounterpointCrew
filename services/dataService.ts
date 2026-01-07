import { AcapellaData } from "../types";

const staticData: AcapellaData = {
  groupName: "The Counterpoint Crew",
  tagline: "The Counterpoint Crew",
  about: "A collective of vocal artists dedicated to blending modern pop with classical choral arrangements, all wrapped in a soft, acoustic aesthetic. We believe in the power of the human voice to create textures as rich and varied as a pastel palette.",
  upcomingShows: [
    {
      date: "February 14, 2026",
      title: "Sounds like love",
      location: "TBD"
    }
  ],
  pastPerformances: [
    {
      title: "Sangathil",
      description: "Unspoken emotions, love expressed through melody and silence.",
      imageAlt: "Group performing in an autumn park with falling leaves",
      reelId: "DOOcP1kkWX2"
    },
    {
      title: "Meri Maa",
      description: "A child's gratitude, comfort, unconditional love, emotional refuge.",
      imageAlt: "Stage lit with neon pink and blue lights",
      reelId: "DOEMVW2Abqg"
    },
    {
      title: "Ave Maria",
      description: "A sacred prayer seeking grace, peace, and divine protection.",
      imageAlt: "Dimly lit jazz club setting with microphones",
      reelId: "DSr78LAEStZ"
    }
  ]
};

export const getAcapellaData = async (): Promise<AcapellaData> => {
  // Returns static data for The Counterpoint Crew
  return Promise.resolve(staticData);
};
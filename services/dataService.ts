import { AcapellaData } from "../types";

const staticData: AcapellaData = {
  groupName: "The Counterpoint Crew",
  tagline: "The Counterpoint Crew",
  about: "A collective of vocal artists dedicated to blending modern pop with classical choral arrangements, all wrapped in a soft, acoustic aesthetic. We believe in the power of the human voice to create textures as rich and varied as a pastel palette.",
  upcomingShows: [
    {
      date: "February 14, 2026",
      title: "Sounds like Love",
      location: "Underline Center, Indiranagar",
      ticketLink: "https://link.district.in/DSTRKT/atcea6k5"
    },
    {
      date: "February 15, 2026 · 8:00 AM – 9:00 AM",
      title: "Heritage Beku",
      location: "Bandstand, Cubbon Park",
      badge: "Open for all"
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
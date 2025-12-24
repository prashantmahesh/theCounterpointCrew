import { AcapellaData } from "../types";

const staticData: AcapellaData = {
  groupName: "The Counterpoint Crew",
  tagline: "Painting silence with sound.",
  about: "A collective of vocal artists dedicated to blending modern pop with classical choral arrangements, all wrapped in a soft, acoustic aesthetic. We believe in the power of the human voice to create textures as rich and varied as a pastel palette.",
  upcomingShows: [
    {
      date: "April 15, 2026",
      title: "Bollywood Night",
      location: "The Garden Pavillion"
    },
    {
      date: "June 20, 2026",
      title: "Hollywood",
      location: "City Amphitheater"
    },
    {
      date: "December 10, 2026",
      title: "Winter Whispers",
      location: "Grand Hall"
    }
  ],
  pastPerformances: [
    {
      title: "Echoes of Autumn",
      description: "A soulful journey through folk favorites.",
      imageAlt: "Group performing in an autumn park with falling leaves"
    },
    {
      title: "Neon Nights",
      description: "80s synth-pop reimagined for voices.",
      imageAlt: "Stage lit with neon pink and blue lights"
    },
    {
      title: "Velvet Underground",
      description: "Underground jazz club vibes.",
      imageAlt: "Dimly lit jazz club setting with microphones"
    }
  ]
};

export const generateAcapellaContent = async (): Promise<AcapellaData> => {
  // Simulate a short delay to mimic network request if needed, or just return immediately.
  // For now, returning immediately as per "static data" request.
  return Promise.resolve(staticData);
};
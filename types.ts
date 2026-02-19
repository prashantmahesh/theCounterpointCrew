export interface Show {
  date: string;
  title: string;
  location: string;
  ticketLink?: string;
  badge?: string;
  past?: boolean;
}

export interface Performance {
  title: string;
  description: string;
  imageAlt: string;
  reelId?: string;
}

export interface AcapellaData {
  groupName: string;
  tagline: string;
  about: string;
  upcomingShows: Show[];
  pastPerformances: Performance[];
}

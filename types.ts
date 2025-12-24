export interface Show {
  date: string;
  title: string;
  location: string;
}

export interface Performance {
  title: string;
  description: string;
  imageAlt: string;
}

export interface AcapellaData {
  groupName: string;
  tagline: string;
  about: string;
  upcomingShows: Show[];
  pastPerformances: Performance[];
}

export enum DesignTemplate {
  MODERN_MINIMAL = 'MODERN_MINIMAL',
  ELEGANT_CLASSIC = 'ELEGANT_CLASSIC',

  APPLE_MINIMAL = 'APPLE_MINIMAL',
  AGENCY_MODERN = 'AGENCY_MODERN',
  PORTFOLIO_MINIMAL = 'PORTFOLIO_MINIMAL',
  FRAMER_PASTEL = 'FRAMER_PASTEL',
  REBIRTH_MODERN = 'REBIRTH_MODERN',
  CINEMATIC_VIDEO = 'CINEMATIC_VIDEO',
}
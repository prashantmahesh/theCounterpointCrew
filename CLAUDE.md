# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Website for The Counterpoint Crew, a 20-member a cappella vocal ensemble based in Bangalore. Deployed on Vercel.

## Commands

- `npm run dev` — Start dev server on port 3000
- `npm run build` — Production build (output to `dist/`)
- `npm run preview` — Preview production build

No test runner or linter is configured.

## Architecture

**Single-page React + TypeScript app** built with Vite. Tailwind CSS is loaded via CDN in `index.html` (not as a PostCSS plugin), with custom theme config (fonts, pastel colors, print styles) defined inline in `index.html`.

### Data Flow

`App.tsx` fetches data via `services/dataService.ts`, which returns static `AcapellaData` (group info, upcoming shows, past performances). This data is passed to `TemplateCinematic`, the top-level layout component, which distributes it to section components via props.

The `AcapellaData` type (defined in `types.ts`) is the central data model — shows, performances with optional Instagram reel IDs.

### Component Structure

`components/TemplateCinematic.tsx` is the page layout that composes all sections. Individual sections live in `components/sections/` (Hero, Navigation, AboutSection, FounderSection, TeamSection, Gallery, FeaturedPerformance, PerformanceArchive, Footer, TickerTape, InstagramModal).

Instagram reels are embedded via `InstagramModal` — reel IDs from `dataService.ts` are passed through `PerformanceArchive`/`FeaturedPerformance` → modal open callback → `InstagramModal`.

### Static Assets

Images are in `public/` organized into `logo/`, `pictures/`, `reel/`, and `team/` subdirectories. Image paths are hardcoded in section components.

### Path Aliases

`@/*` maps to the project root (configured in `tsconfig.json`).

# The Counterpoint Crew - Website

A modern, responsive website for The Counterpoint Crew, a 20-member a cappella vocal ensemble based in Bangalore.

## Quick Start

```bash
npm install
npm run dev
```

## Build for Production

```bash
npm run build
npm run preview
```

## Deploy to Vercel

### Option 1: Vercel Dashboard (Recommended)
1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "Add New Project" and import your repository
4. Vercel will auto-detect Vite settings
5. Click "Deploy"

### Option 2: Vercel CLI
```bash
npm i -g vercel
vercel login
vercel --prod
```

Your site will be live at `https://your-project.vercel.app`

## Tech Stack

- React + TypeScript
- Vite
- Tailwind CSS
- Lucide Icons

## Project Structure

- `/components` - React components
  - `/sections` - Page section components (Hero, Gallery, Team, etc.)
- `/services` - Data service
- `/public` - Static assets (images, logos, reel covers)

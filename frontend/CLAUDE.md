# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server on localhost:3000
npm run build    # Production build
npm run lint     # Run ESLint
npm run start    # Start production server
```

## Architecture

This is a Next.js 16 personal portfolio website using the App Router (`src/app/`).

### Key Directories
- `src/app/components/` - Section components (Navbar, Intro, About, Skills, Work, Projects, Footer)
- `src/app/providers/` - Context providers (PostHogProvider for analytics)
- `src/app/links/` - Standalone link-tree style page with its own theme
- `src/app/photography/` - Photography portfolio page
- `src/app/api/spotify/` - API route for Spotify now-playing integration

### Site Configuration
- `src/app/site.ts` - Centralized site constants (SITE_NAME, getSiteUrl)
- Environment variable `NEXT_PUBLIC_SITE_URL` controls the site URL; falls back to `VERCEL_URL` or localhost

### Styling
- Tailwind CSS with a custom cyberpunk theme defined in `tailwind.config.js`
- Custom color palette under `cyber.*` (black, surface, cyan, pink, lime, text)
- Custom fonts: Orbitron (headings), JetBrains Mono (body), Nabla (accents)
- `globals.css` contains custom CSS classes for neon effects, glitch animations, glassmorphism cards, pixel shadows
- Key utility classes: `.neon-text-*`, `.neon-border`, `.glass-card`, `.pixel-shadow-*`, `.gradient-text`

### Analytics
PostHog analytics is integrated via a provider wrapper and proxied through `/ingest` rewrites (see `next.config.js`) to avoid ad blockers.

### Environment Variables
- `NEXT_PUBLIC_SITE_URL` - Production site URL
- `NEXT_PUBLIC_POSTHOG_KEY` - PostHog project API key
- `NEXT_PUBLIC_LINKEDIN_URL` - LinkedIn profile URL (used in structured data)

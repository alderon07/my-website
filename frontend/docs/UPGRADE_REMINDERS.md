# Upgrade Reminders

## Tailwind CSS v4 Migration

**Status:** Waiting for stable release  
**Current Version:** 3.4.18 (stable)  
**Target Version:** 4.0.0 (when stable)  
**Check Date:** March 2025 or later

### Why Waiting?

- Tailwind v4 is currently in beta (v4.0.0-beta.7 as of Nov 2024)
- Major rewrite with breaking changes:
  - CSS-first configuration (moves from JS config to CSS `@theme`)
  - New plugin system
  - Different import system
  - Custom utilities syntax changes

### What to Check Before Upgrading

1. ✅ Verify Tailwind CSS v4 has reached stable (not beta)
2. ✅ Read official migration guide: https://tailwindcss.com/docs/upgrade-guide
3. ✅ Review breaking changes
4. ✅ Check if `next-themes` is compatible with v4
5. ✅ Test in a separate branch first

### What Needs Migration in Your Config

Your current `tailwind.config.js` has:

- ✅ Custom color (`rust`)
- ✅ Custom font families (`rubik-font`, `nabla-font`)
- ✅ Custom animations (`gradient`, `fade-in`, `slide-up`, `scale-in`)
- ✅ Custom keyframes for all animations
- ✅ Dark mode class strategy

All of these will need to be converted from JS config to CSS `@theme` directives.

### How to Upgrade When Ready

1. Create a new branch: `git checkout -b upgrade/tailwind-v4`
2. Update package: `npm install tailwindcss@latest`
3. Follow official migration guide to convert config
4. Test all pages, especially dark mode and animations
5. Verify build succeeds: `npm run build`
6. Test in browser thoroughly
7. Merge when confident

### Resources

- Tailwind v4 Docs: https://tailwindcss.com/docs
- Migration Guide: https://tailwindcss.com/docs/upgrade-guide
- Beta Announcement: https://tailwindcss.com/blog/tailwindcss-v4-beta

---

## Recent Upgrades (Completed)

### Next.js 16 ✅

**Date:** November 27, 2024  
**Previous:** 15.5.6  
**Current:** 16.0.5  
**Status:** ✅ Complete - Build passing, no issues

**Also Upgraded:**

- ESLint: 8.57.1 → 9.39.1
- eslint-config-next: 15.5.6 → 16.0.5
- React 19.2.0 (already latest)
- React DOM 19.2.0 (already latest)

---

_Last updated: November 27, 2024_

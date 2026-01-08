/**
 * Centralized site constants.
 *
 * Note: We intentionally avoid hardcoding a specific domain so the repo doesn't
 * contain personal-domain strings. Configure `NEXT_PUBLIC_SITE_URL` in your
 * environment instead.
 */
export const SITE_NAME = "Naqi";

function normalizeUrl(url: string): string {
  return url.replace(/\/+$/, "");
}

export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return normalizeUrl(explicit);

  // Vercel sets VERCEL_URL without protocol (e.g. "my-site.vercel.app")
  const vercel = process.env.VERCEL_URL;
  if (vercel) return normalizeUrl(`https://${vercel}`);

  // Local dev fallback
  return "http://localhost:3000";
}


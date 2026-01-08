import type { LinkButtonVariant } from "./links-data";

type LinksTheme = {
  fullBleed: string;
  cardRadius: string;
  buttonRadius: string;
  pageBackground: string;
  viewport: string;
  card: string;
  cardHeaderRow: string;
  headerControlsWrap: string;
  headerIconButton: string;
  profile: string;
  avatarWrap: string;
  avatarImg: string;
  profileText: string;
  name: string;
  subtitle: string;
  quickLinksRow: string;
  quickIconButton: string;
  quickIcon: string;
  linksList: string;
  linkButtonBase: string;
  linkButtonVariants: Record<LinkButtonVariant, string>;
  linkButtonLeft: string;
  linkButtonIconWrap: string;
  linkButtonIcon: string;
  linkButtonTextWrap: string;
  linkButtonLabel: string;
  linkButtonSubtitle: string;
  linkButtonRight: string;
  spotifyWrap: string;
  spotifyTitleRow: string;
  spotifyTitle: string;
  spotifyOpenLink: string;
  spotifyFrame: string;
  footer: string;
  footerLink: string;
};

const baseLinksTheme = {
  /**
   * Full-bleed helper: `body` has global padding in `globals.css`, so this
   * makes the background span the entire viewport width on this route only.
   */
  fullBleed: "relative left-1/2 -translate-x-1/2 w-screen",

  /**
   * Customize these first.
   * - cardRadius/buttonRadius: swap `rounded-3xl` → `rounded-2xl`/`rounded-full` etc.
   */
  cardRadius: "rounded-3xl",
  buttonRadius: "rounded-2xl",

  // Page background (hybrid: Linktree vibe + your site accents)
  pageBackground:
    "min-h-screen bg-gradient-to-b from-emerald-200 via-emerald-300 to-emerald-400 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950",

  // Layout
  viewport: "min-h-screen flex items-center justify-center px-4 py-10 sm:px-6",

  // Card
  card:
    "w-full max-w-[440px] border border-emerald-900/10 dark:border-slate-700/60 bg-white/35 dark:bg-slate-950/40 backdrop-blur-xl shadow-[0_20px_60px_-25px_rgba(0,0,0,0.45)]",
  cardHeaderRow: "flex items-center justify-between",
  headerControlsWrap: "flex items-center justify-end px-5 pt-5",
  headerIconButton: [
    "inline-flex h-10 w-10 items-center justify-center",
    "border border-emerald-900/15 dark:border-slate-700/60",
    "bg-white/60 dark:bg-slate-900/50",
    "text-emerald-950/80 dark:text-slate-200",
    "ring-1 ring-transparent",
    "will-change-transform",
    "transition-all duration-200 ease-out",
    "hover:scale-[1.07] hover:shadow-[0_10px_30px_-18px_rgba(0,0,0,0.55)]",
    "hover:ring-emerald-400/30 hover:border-emerald-400/30 dark:hover:ring-emerald-300/25 dark:hover:border-emerald-300/25",
    "active:scale-[1.02] active:shadow-none",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 focus-visible:ring-offset-emerald-100",
    "dark:focus-visible:ring-rose-400 dark:focus-visible:ring-offset-slate-950",
    "motion-reduce:transition-none motion-reduce:hover:scale-100 motion-reduce:active:scale-100",
  ].join(" "),

  // Profile section
  profile: "flex flex-col items-center text-center pt-6",
  avatarWrap:
    "relative h-24 w-24 overflow-hidden ring-2 ring-emerald-900/10 dark:ring-slate-700/60 shadow-lg",
  avatarImg: "object-cover",
  profileText: "mt-4",
  name: "font-nabla text-3xl leading-none",
  subtitle: "mt-2 text-sm text-emerald-950/80 dark:text-slate-300/80",

  quickLinksRow: "mt-4 flex items-center gap-3",
  quickIconButton: [
    "inline-flex h-10 w-10 items-center justify-center",
    "border border-emerald-900/15 dark:border-slate-700/60",
    "bg-white/60 dark:bg-slate-900/50",
    "text-emerald-950/80 dark:text-slate-200",
    "ring-1 ring-transparent",
    "will-change-transform",
    "transition-transform duration-200 ease-out",
    "hover:scale-[1.07] hover:shadow-[0_10px_30px_-18px_rgba(0,0,0,0.55)]",
    "active:scale-[1.02] active:shadow-none",
    "hover:text-emerald-950 dark:hover:text-white",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 focus-visible:ring-offset-emerald-100",
    "dark:focus-visible:ring-rose-400 dark:focus-visible:ring-offset-slate-950",
    "motion-reduce:transition-none motion-reduce:hover:scale-100 motion-reduce:active:scale-100",
  ].join(" "),
  // Slightly smaller + consistent silhouette across different icon glyphs.
  quickIcon: "h-[18px] w-[18px]",

  // Links list
  linksList: "mt-6 flex flex-col gap-3 px-5 pb-5",

  linkButtonBase: [
    // 3-column layout so the text column can be truly centered
    "group w-full grid grid-cols-[40px,1fr,40px] items-center gap-4 px-4 py-4",
    "border border-emerald-900/20 dark:border-slate-700/60",
    "ring-1 ring-transparent",
    "bg-yellow-200/90 dark:bg-slate-900/60",
    "text-emerald-950 dark:text-slate-100",
    "shadow-[0_10px_0_rgba(0,0,0,0.15)] dark:shadow-[0_10px_0_rgba(0,0,0,0.35)]",
    "transition-all duration-200 ease-out",
    "hover:-translate-y-1 hover:shadow-[0_14px_0_rgba(0,0,0,0.2)]",
    "active:translate-y-0 active:shadow-[0_10px_0_rgba(0,0,0,0.15)]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 focus-visible:ring-offset-emerald-100",
    "dark:focus-visible:ring-rose-400 dark:focus-visible:ring-offset-slate-950",
  ].join(" "),

  linkButtonVariants: {
    primary: "",
    accent:
      "bg-white/80 dark:bg-slate-900/70 border-emerald-900/15 dark:border-slate-700/60",
    muted:
      "bg-emerald-50/80 dark:bg-slate-900/40 border-emerald-900/10 dark:border-slate-700/50",
  } as const,

  linkButtonLeft: "",
  linkButtonIconWrap:
    "h-10 w-10 shrink-0 flex items-center justify-center bg-emerald-900/10 dark:bg-white/10 ring-1 ring-transparent",
  linkButtonIcon: "h-5 w-5",
  linkButtonTextWrap: "flex flex-col items-center text-center min-w-0",
  linkButtonLabel:
    "text-sm font-semibold leading-tight tracking-wide truncate max-w-[18rem] mx-auto",
  linkButtonSubtitle:
    "mt-0.5 text-xs tracking-wide text-emerald-950/70 dark:text-slate-300/70 truncate max-w-[18rem]",
  linkButtonRight:
    "justify-self-end shrink-0 text-emerald-950/70 dark:text-slate-300/70 group-hover:text-emerald-950 dark:group-hover:text-slate-100 transition-colors",

  // Footer
  footer: "px-5 pb-6 pt-2 flex flex-col items-center gap-3",
  footerLink:
    "text-xs lowercase text-emerald-950/70 dark:text-slate-300/70 hover:text-emerald-950 dark:hover:text-slate-100 transition-colors underline underline-offset-4 decoration-emerald-900/30 dark:decoration-slate-500/60",

  // Spotify
  spotifyWrap:
    "mx-5 mb-2 mt-1 rounded-2xl border border-emerald-900/10 dark:border-slate-700/60 bg-white/25 dark:bg-slate-950/30 backdrop-blur-md p-3",
  spotifyTitleRow: "flex items-center justify-between gap-3 pb-2",
  spotifyTitle: "text-xs uppercase tracking-wider text-slate-300/80",
  spotifyOpenLink:
    "text-xs lowercase text-slate-300/70 hover:text-slate-100 transition-colors underline underline-offset-4 decoration-slate-500/60",
  // legacy (iframe) style kept for optional re-use
  spotifyFrame: "w-full h-[152px] rounded-xl",

} as const satisfies Omit<LinksTheme, "linkButtonVariants"> & {
  linkButtonVariants: Record<LinkButtonVariant, string>;
};

function withRadii(theme: typeof baseLinksTheme): LinksTheme {
  return {
    ...theme,
    card: `${theme.card} ${theme.cardRadius}`,
    avatarWrap: `${theme.avatarWrap} ${theme.buttonRadius}`,
    linkButtonIconWrap: `${theme.linkButtonIconWrap} ${theme.buttonRadius}`,
    linkButtonBase: `${theme.linkButtonBase} ${theme.buttonRadius}`,
    quickIconButton: `${theme.quickIconButton} ${theme.buttonRadius}`,
    headerIconButton: `${theme.headerIconButton} ${theme.buttonRadius}`,
  };
}

/**
 * Update `cardRadius` / `buttonRadius` above to quickly change the shape
 * of the entire page (card, buttons, icons, header controls).
 */
export const linksTheme = withRadii(baseLinksTheme);



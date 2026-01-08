import type React from "react";
import {
  CameraIcon,
  CodeBracketIcon,
  GlobeAltIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/solid";
import InstagramIcon from "./InstagramIcon";
import MailIcon from "./MailIcon";

export type LinkButtonVariant = "primary" | "accent" | "muted";
export type LinkIcon = React.ComponentType<React.SVGProps<SVGSVGElement>>;

export type LinksQuickLink = {
  key: string;
  label: string;
  href: string;
  icon: LinkIcon;
  external?: boolean;
  ariaLabel?: string;
  iconClassName?: string;
  buttonClassName?: string;
};

export type LinksProfile = {
  name: string;
  subtitle: string;
  avatarSrc: string;
  avatarAlt: string;
  quickLinks: LinksQuickLink[];
};

export const linksProfile: LinksProfile = {
  name: "naqi",
  subtitle: "software developer & photographer",
  avatarSrc: "/me-square.jpg",
  avatarAlt: "naqi",
  quickLinks: [
    ...(process.env.NEXT_PUBLIC_CONTACT_EMAIL
      ? [
          {
            key: "email",
            label: "email",
            href: `mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`,
            icon: MailIcon,
            ariaLabel: "Email Naqi",
            buttonClassName:
              "bg-emerald-500/18 ring-1 ring-emerald-400/25 text-emerald-200 hover:bg-emerald-500/26 hover:ring-emerald-300/35",
            iconClassName: "text-emerald-200",
          },
        ]
      : []),
    {
      key: "instagram",
      label: "instagram",
      href: "https://www.instagram.com/",
      icon: InstagramIcon,
      external: true,
      ariaLabel: "Open Instagram (new tab)",
      buttonClassName:
        "bg-fuchsia-500/18 ring-1 ring-fuchsia-400/25 text-fuchsia-200 hover:bg-fuchsia-500/26 hover:ring-fuchsia-300/35",
      iconClassName: "text-fuchsia-200",
    },
  ],
};

export const spotifyNowPlaying = {
  title: "now playing",
  // Optional: link to your public Spotify profile (or a playlist).
  openUrl: "https://open.spotify.com/",
} as const;

export type LinksItem = {
  key: string;
  label: string;
  href: string;
  icon: LinkIcon;
  subtitle?: string;
  ariaLabel?: string;
  external?: boolean;
  variant?: LinkButtonVariant;
  className?: string;
  accentClassName?: string;
  iconWrapClassName?: string;
  iconClassName?: string;
};

export const links: LinksItem[] = [
  {
    key: "site",
    label: "portfolio site",
    subtitle: "naqi",
    href: "/",
    icon: GlobeAltIcon,
    variant: "primary",
    ariaLabel: "open naqi's portfolio site",
    accentClassName:
      "hover:ring-emerald-400/30 hover:border-emerald-400/30 dark:hover:ring-emerald-300/25 dark:hover:border-emerald-300/25",
    iconWrapClassName:
      "bg-emerald-500/15 ring-1 ring-emerald-400/20 text-emerald-200",
  },
  {
    key: "prints",
    label: "PRINTS",
    subtitle: "naqi.darkroom.com",
    href: "https://naqi.darkroom.com/",
    icon: ShoppingBagIcon,
    variant: "muted",
    external: true,
    ariaLabel: "Open Prints store (new tab)",
    accentClassName:
      "hover:ring-rose-400/25 hover:border-rose-400/25 dark:hover:ring-rose-300/20 dark:hover:border-rose-300/20",
    iconWrapClassName:
      "bg-rose-500/10 ring-1 ring-rose-400/15 text-rose-200/80",
  },
  {
    key: "github",
    label: "code",
    subtitle: "github + projects",
    href: "https://github.com/alderon07",
    icon: CodeBracketIcon,
    external: true,
    accentClassName:
      "hover:ring-violet-400/25 hover:border-violet-400/25 dark:hover:ring-violet-300/20 dark:hover:border-violet-300/20",
    iconWrapClassName:
      "bg-violet-500/15 ring-1 ring-violet-400/20 text-violet-200",
  },
  {
    key: "photography",
    label: "photography",
    subtitle: "some favorite shots",
    href: "/photography",
    icon: CameraIcon,
    variant: "accent",
    accentClassName:
      "hover:ring-amber-300/30 hover:border-amber-300/30 dark:hover:ring-amber-200/25 dark:hover:border-amber-200/25",
    iconWrapClassName:
      "bg-amber-400/15 ring-1 ring-amber-300/20 text-amber-200",
  },
];


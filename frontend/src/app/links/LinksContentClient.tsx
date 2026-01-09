"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePostHog } from "posthog-js/react";
import { LinkIcon } from "@heroicons/react/24/solid";
import { linksTheme } from "./links-theme";
import { links, linksProfile, spotifyNowPlaying } from "./links-data";

type NowPlayingState =
  | { status: "loading" }
  | { status: "not_configured" }
  | { status: "not_playing" }
  | {
      status: "playing";
      title: string;
      artist: string;
      album: string;
      albumImageUrl?: string;
      songUrl: string;
    };

export default function LinksContentClient() {
  const router = useRouter();
  const posthog = usePostHog();
  const [copied, setCopied] = useState(false);
  const [nowPlaying, setNowPlaying] = useState<NowPlayingState>({
    status: "loading",
  });

  const reducedMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
  }, []);

  useEffect(() => {
    if (!copied) return;
    const t = window.setTimeout(() => setCopied(false), 1200);
    return () => window.clearTimeout(t);
  }, [copied]);

  useEffect(() => {
    let mounted = true;
    let interval: number | undefined;

    const load = async () => {
      try {
        const res = await fetch("/api/spotify/now-playing", { cache: "no-store" });
        const json = (await res.json()) as
          | { configured: false }
          | { configured: true; isPlaying: false }
          | {
              configured: true;
              isPlaying: true;
              title: string;
              artist: string;
              album: string;
              albumImageUrl?: string;
              songUrl: string;
            };

        if (!mounted) return;

        if (!json.configured) {
          setNowPlaying({ status: "not_configured" });
          return;
        }

        if (!json.isPlaying) {
          setNowPlaying({ status: "not_playing" });
          return;
        }

        setNowPlaying({
          status: "playing",
          title: json.title,
          artist: json.artist,
          album: json.album,
          albumImageUrl: json.albumImageUrl,
          songUrl: json.songUrl,
        });
      } catch {
        if (!mounted) return;
        setNowPlaying({ status: "not_configured" });
      }
    };

    void load();
    interval = window.setInterval(load, 15000);

    return () => {
      mounted = false;
      if (interval) window.clearInterval(interval);
    };
  }, []);

  const copyLinksUrl = useCallback(async () => {
    if (typeof window === "undefined") return;
    const url = window.location.href;

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      posthog?.capture("page_url_copied");
    } catch {
      // fallback: old-school textarea copy
      try {
        const el = document.createElement("textarea");
        el.value = url;
        el.style.position = "fixed";
        el.style.left = "-9999px";
        document.body.appendChild(el);
        el.select();
        document.execCommand("copy");
        document.body.removeChild(el);
        setCopied(true);
        posthog?.capture("page_url_copied");
      } catch {
        // no-op
      }
    }
  }, [posthog]);

  const maybeConfettiThenNavigate = useCallback(
    async (href: string) => {
      if (reducedMotion) {
        router.push(href);
        return;
      }

      try {
        const mod = await import("canvas-confetti");
        const confetti = (mod as any).default ?? (mod as any);

        // A small, tasteful burst that doesn't overwhelm.
        confetti({
          particleCount: 90,
          spread: 70,
          startVelocity: 35,
          ticks: 140,
          origin: { x: 0.5, y: 0.2 },
          scalar: 0.9,
        });
      } catch {
        // if confetti fails, still navigate
      }

      // Let the animation be visible before routing.
      window.setTimeout(() => router.push(href), 180);
    },
    [reducedMotion, router],
  );

  return (
    <div className={linksTheme.viewport}>
      <div className={linksTheme.card}>
        <div className={linksTheme.headerControlsWrap}>
          <div className="relative">
            <button
              type="button"
              className={[
                linksTheme.headerIconButton,
                copied
                  ? "text-emerald-100 ring-emerald-300/25 border-emerald-300/25"
                  : "",
              ]
                .filter(Boolean)
                .join(" ")}
              onClick={copyLinksUrl}
              aria-label={copied ? "copied" : "copy links page url"}
              title={copied ? "copied!" : "copy url"}
            >
              <LinkIcon className="h-[18px] w-[18px]" aria-hidden="true" />
            </button>

            <div
              className={[
                "pointer-events-none absolute right-0 -bottom-7",
                "rounded-full px-2 py-1 text-[11px] tracking-wide",
                "bg-emerald-500/15 ring-1 ring-emerald-300/25 text-emerald-100",
                "transition-all duration-200 ease-out",
                copied ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1",
              ].join(" ")}
              aria-hidden="true"
            >
              copied
            </div>
          </div>
        </div>

        <div className={linksTheme.profile}>
          <div className={linksTheme.avatarWrap}>
            <Image
              src={linksProfile.avatarSrc}
              alt={linksProfile.avatarAlt}
              fill
              className={linksTheme.avatarImg}
              sizes="96px"
              priority
            />
          </div>

          <div className={linksTheme.profileText}>
            <h1 className={linksTheme.name}>{linksProfile.name}</h1>
            <p className={linksTheme.subtitle}>{linksProfile.subtitle}</p>
          </div>

          <div className={linksTheme.quickLinksRow} aria-label="Quick links">
            {linksProfile.quickLinks.map((quickLink) => {
              const Icon = quickLink.icon;
              const isExternal =
                quickLink.external ?? quickLink.href.startsWith("http");
              return (
                <Link
                  key={quickLink.key}
                  href={quickLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={[
                    linksTheme.quickIconButton,
                    quickLink.buttonClassName,
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  aria-label={quickLink.ariaLabel ?? quickLink.label}
                  title={quickLink.label}
                  onClick={() => {
                    posthog?.capture("link_clicked", {
                      link_key: quickLink.key,
                      link_label: quickLink.label,
                      link_href: quickLink.href,
                      is_external: isExternal,
                      link_type: "quick_link",
                    });
                  }}
                >
                  <Icon
                    className={[linksTheme.quickIcon, quickLink.iconClassName]
                      .filter(Boolean)
                      .join(" ")}
                    aria-hidden="true"
                  />
                </Link>
              );
            })}
          </div>
        </div>

        <div className={linksTheme.linksList} aria-label="Links list">
          {links.map((item) => {
            const Icon = item.icon;
            const isExternal = item.external ?? item.href.startsWith("http");
            const rel = "noopener noreferrer";
            const target = "_blank";

            const buttonClassName = [
              linksTheme.linkButtonBase,
              item.variant ? linksTheme.linkButtonVariants[item.variant] : "",
              item.accentClassName ?? "",
              item.className ?? "",
            ]
              .filter(Boolean)
              .join(" ");

            const isConfetti = item.key === "photography" && !isExternal;

            return (
              <Link
                key={item.key}
                href={item.href}
                target={target}
                rel={rel}
                className={buttonClassName}
                aria-label={item.ariaLabel ?? item.label}
                onClick={(e) => {
                  posthog?.capture("link_clicked", {
                    link_key: item.key,
                    link_label: item.label,
                    link_href: item.href,
                    is_external: isExternal,
                    link_type: "main_link",
                  });

                  if (!isConfetti) return;
                  e.preventDefault();
                  void maybeConfettiThenNavigate(item.href);
                }}
              >
                <span
                  className={[
                    linksTheme.linkButtonIconWrap,
                    item.iconWrapClassName ?? "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  <Icon
                    className={[
                      linksTheme.linkButtonIcon,
                      item.iconClassName ?? "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  />
                </span>

                <span className={linksTheme.linkButtonTextWrap}>
                  <span className={linksTheme.linkButtonLabel}>{item.label}</span>
                  {item.subtitle ? (
                    <span className={linksTheme.linkButtonSubtitle}>
                      {item.subtitle}
                    </span>
                  ) : null}
                </span>

                <span className={linksTheme.linkButtonRight} aria-hidden="true">
                  →
                </span>
              </Link>
            );
          })}
        </div>

        <div className={linksTheme.spotifyWrap} aria-label="Spotify now playing">
          <div className={linksTheme.spotifyTitleRow}>
            <span className={linksTheme.spotifyTitle}>{spotifyNowPlaying.title}</span>
            <Link
              href={spotifyNowPlaying.openUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={linksTheme.spotifyOpenLink}
              onClick={() => {
                posthog?.capture("link_clicked", {
                  link_key: "spotify_profile",
                  link_label: "Open Spotify",
                  link_href: spotifyNowPlaying.openUrl,
                  is_external: true,
                  link_type: "spotify",
                });
              }}
            >
              open
            </Link>
          </div>

          {nowPlaying.status === "loading" ? (
            <div className="h-[72px] rounded-xl bg-white/5" />
          ) : nowPlaying.status === "not_configured" ? (
            <div className="text-xs text-slate-300/70">
              spotify now-playing isn’t configured yet.
            </div>
          ) : nowPlaying.status === "not_playing" ? (
            <div className="text-xs text-slate-300/70">not playing right now.</div>
          ) : (
            <Link
              href={nowPlaying.songUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl bg-white/5 p-2 hover:bg-white/10 transition-colors"
              aria-label={`open now playing: ${nowPlaying.title} by ${nowPlaying.artist}`}
              onClick={() => {
                posthog?.capture("link_clicked", {
                  link_key: "spotify_now_playing",
                  link_label: nowPlaying.title,
                  link_href: nowPlaying.songUrl,
                  is_external: true,
                  link_type: "spotify",
                });
              }}
            >
              <div className="h-12 w-12 overflow-hidden rounded-lg bg-white/10 ring-1 ring-white/10">
                {nowPlaying.albumImageUrl ? (
                  // Using <img> avoids extra next/image remote host config.
                  <img
                    src={nowPlaying.albumImageUrl}
                    alt={`${nowPlaying.album} album art`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                ) : null}
              </div>
              <div className="min-w-0">
                <div className="text-sm font-semibold text-slate-100 truncate">
                  {nowPlaying.title}
                </div>
                <div className="text-xs text-slate-300/70 truncate">
                  {nowPlaying.artist} • {nowPlaying.album}
                </div>
              </div>
            </Link>
          )}
        </div>

        <div className={linksTheme.footer}>
          <Link href="/" target="_blank" rel="noopener noreferrer" className={linksTheme.footerLink}>
            Back to site
          </Link>
          <span
            className="text-xs text-emerald-950/60 dark:text-slate-300/60"
            aria-label="Built with love by naqi"
          >
            built with <span className="text-red-500">♥</span> by naqi
          </span>
        </div>
      </div>
    </div>
  );
}


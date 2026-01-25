import { NextResponse } from "next/server";
import type {
  SpotifyCurrentlyPlayingResponse,
  SpotifyArtist,
  NowPlayingApiResponse,
} from "@/app/types/spotify";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const FETCH_TIMEOUT_MS = 10000; // 10 second timeout

async function fetchWithTimeout(
  url: string,
  options: RequestInit,
  timeoutMs: number = FETCH_TIMEOUT_MS
): Promise<Response> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
    });
    clearTimeout(timeoutId);
    return response;
  } catch (error) {
    clearTimeout(timeoutId);
    throw error;
  }
}

async function getSpotifyAccessToken() {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) return null;

  const basicAuth = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

  try {
    const res = await fetchWithTimeout("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${basicAuth}`,
      },
      body: new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: refreshToken,
      }),
      cache: "no-store",
    });

    if (!res.ok) return null;
    const json = (await res.json()) as { access_token?: string };
    return json.access_token ?? null;
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") {
      console.error("Spotify token request timed out");
    }
    return null;
  }
}

export async function GET() {
  const accessToken = await getSpotifyAccessToken();

  if (!accessToken) {
    return NextResponse.json<NowPlayingApiResponse>(
      { configured: false },
      { headers: { "Cache-Control": "no-store" } },
    );
  }

  let res: Response;
  try {
    res = await fetchWithTimeout("https://api.spotify.com/v1/me/player/currently-playing", {
      headers: { Authorization: `Bearer ${accessToken}` },
      cache: "no-store",
    });
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") {
      console.error("Spotify now-playing request timed out");
    }
    return NextResponse.json<NowPlayingApiResponse>(
      { configured: true, isPlaying: false },
      { headers: { "Cache-Control": "no-store" } },
    );
  }

  // Spotify returns 204 (No Content) when nothing is playing.
  if (res.status === 204 || res.status === 404) {
    return NextResponse.json<NowPlayingApiResponse>(
      { configured: true, isPlaying: false },
      { headers: { "Cache-Control": "no-store" } },
    );
  }

  if (!res.ok) {
    return NextResponse.json<NowPlayingApiResponse>(
      { configured: true, isPlaying: false },
      { headers: { "Cache-Control": "no-store" } },
    );
  }

  const data = (await res.json()) as SpotifyCurrentlyPlayingResponse;

  if (!data?.is_playing || !data?.item?.external_urls?.spotify) {
    return NextResponse.json<NowPlayingApiResponse>(
      { configured: true, isPlaying: false },
      { headers: { "Cache-Control": "no-store" } },
    );
  }

  const item = data.item;
  const title = item.name;
  const artist = item.artists
    .map((a: SpotifyArtist) => a.name)
    .filter(Boolean)
    .join(", ");
  const album = item.album?.name ?? "";
  const albumImageUrl = item.album?.images?.[1]?.url;
  const songUrl = item.external_urls.spotify;

  return NextResponse.json<NowPlayingApiResponse>(
    {
      configured: true,
      isPlaying: true,
      title,
      artist,
      album,
      albumImageUrl,
      songUrl,
    },
    { headers: { "Cache-Control": "no-store" } },
  );
}


import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type NowPlayingResponse =
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

async function getSpotifyAccessToken() {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) return null;

  const basicAuth = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${basicAuth}`,
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    }),
    // Server-side fetch; no caching.
    cache: "no-store",
  });

  if (!res.ok) return null;
  const json = (await res.json()) as { access_token?: string };
  return json.access_token ?? null;
}

export async function GET() {
  const accessToken = await getSpotifyAccessToken();

  if (!accessToken) {
    return NextResponse.json<NowPlayingResponse>(
      { configured: false },
      { headers: { "Cache-Control": "no-store" } },
    );
  }

  const res = await fetch("https://api.spotify.com/v1/me/player/currently-playing", {
    headers: { Authorization: `Bearer ${accessToken}` },
    cache: "no-store",
  });

  // Spotify returns 204 (No Content) when nothing is playing.
  if (res.status === 204 || res.status === 404) {
    return NextResponse.json<NowPlayingResponse>(
      { configured: true, isPlaying: false },
      { headers: { "Cache-Control": "no-store" } },
    );
  }

  if (!res.ok) {
    return NextResponse.json<NowPlayingResponse>(
      { configured: true, isPlaying: false },
      { headers: { "Cache-Control": "no-store" } },
    );
  }

  const data = (await res.json()) as any;

  if (!data?.is_playing || !data?.item?.external_urls?.spotify) {
    return NextResponse.json<NowPlayingResponse>(
      { configured: true, isPlaying: false },
      { headers: { "Cache-Control": "no-store" } },
    );
  }

  const item = data.item;
  const title = item.name as string;
  const artist = Array.isArray(item.artists)
    ? (item.artists.map((a: any) => a?.name).filter(Boolean).join(", ") as string)
    : "";
  const album = item.album?.name as string;
  const albumImageUrl = Array.isArray(item.album?.images) ? item.album.images?.[1]?.url : undefined;
  const songUrl = item.external_urls.spotify as string;

  return NextResponse.json<NowPlayingResponse>(
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


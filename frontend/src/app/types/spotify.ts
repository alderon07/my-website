export interface SpotifyArtist {
  name: string;
  external_urls: {
    spotify: string;
  };
}

export interface SpotifyAlbum {
  name: string;
  images: Array<{
    url: string;
    height: number;
    width: number;
  }>;
}

export interface SpotifyTrack {
  name: string;
  artists: SpotifyArtist[];
  album: SpotifyAlbum;
  external_urls: {
    spotify: string;
  };
  duration_ms: number;
  is_playing: boolean;
}

export interface SpotifyCurrentlyPlayingResponse {
  is_playing: boolean;
  item: SpotifyTrack | null;
  progress_ms: number | null;
  timestamp: number;
}

export type NowPlayingApiResponse =
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

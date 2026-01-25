import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const revalidate = 3600; // Cache for 1 hour

interface GitHubRepository {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  updated_at: string;
}

interface ReposResponse {
  repos: GitHubRepository[];
  error?: string;
}

const FETCH_TIMEOUT_MS = 10000; // 10 second timeout

export async function GET(): Promise<NextResponse<ReposResponse>> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);

  try {
    const headers: HeadersInit = {
      Accept: "application/vnd.github.v3+json",
    };

    // Use server-side env var (not NEXT_PUBLIC_)
    const token = process.env.GITHUB_TOKEN;
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    const response = await fetch(
      "https://api.github.com/users/alderon07/repos?sort=updated&per_page=100",
      {
        headers,
        signal: controller.signal,
        next: { revalidate: 3600 },
      }
    );

    clearTimeout(timeoutId);

    if (!response.ok) {
      console.error(`GitHub API error: ${response.status}`);
      return NextResponse.json(
        { repos: [], error: `GitHub API error: ${response.status}` },
        { status: response.status }
      );
    }

    const data: GitHubRepository[] = await response.json();

    return NextResponse.json(
      { repos: data },
      {
        headers: {
          "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
        },
      }
    );
  } catch (error) {
    clearTimeout(timeoutId);

    if (error instanceof Error && error.name === "AbortError") {
      console.error("GitHub API request timed out");
      return NextResponse.json(
        { repos: [], error: "Request timed out" },
        { status: 504 }
      );
    }

    console.error(
      "Error fetching GitHub repos:",
      error instanceof Error ? error.message : "Unknown error"
    );
    return NextResponse.json(
      { repos: [], error: "Failed to fetch repositories" },
      { status: 500 }
    );
  }
}

"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string | null;
  language: string;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  updated_at: string;
}

export default function Projects() {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);

  // Priority repos to display first
  const priorityRepos = useMemo(
    () => ["my-website", "link-it", "godoit", "kv", "cocktail-app"],
    []
  );

  useEffect(() => {
    async function fetchRepos() {
      try {
        // Fetch all repos with optional GitHub token for higher rate limits
        const headers: HeadersInit = {
          Accept: "application/vnd.github.v3+json",
        };

        // Add auth token if available (optional - increases rate limit)
        const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
        if (token) {
          headers["Authorization"] = `Bearer ${token}`;
        }

        const response = await fetch(
          "https://api.github.com/users/alderon07/repos?sort=updated&per_page=100",
          {
            headers,
            // Cache for 1 hour to reduce API calls
            next: { revalidate: 3600 },
          }
        );

        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`);
        }

        const data: Repository[] = await response.json();

        // Filter to only show pinned repos (based on your priority list)
        const pinned = data.filter((repo) => priorityRepos.includes(repo.name));

        // Sort pinned repos according to priority order
        const sorted = pinned.sort((a, b) => {
          const aIndex = priorityRepos.indexOf(a.name);
          const bIndex = priorityRepos.indexOf(b.name);
          return aIndex - bIndex;
        });

        setRepos(sorted);
      } catch (error) {
        // Log error securely without exposing sensitive info
        console.error(
          "Error fetching repos:",
          error instanceof Error ? error.message : "Unknown error"
        );
      } finally {
        setLoading(false);
      }
    }

    fetchRepos();
  }, [priorityRepos]);

  const getLanguageColor = (language: string) => {
    const colors: { [key: string]: string } = {
      TypeScript: "bg-blue-500",
      JavaScript: "bg-yellow-400",
      Go: "bg-cyan-500",
      Python: "bg-green-500",
      Java: "bg-red-500",
      Perl: "bg-purple-500",
    };
    return colors[language] || "bg-gray-500";
  };

  if (loading) {
    return (
      <div
        className="flex items-center justify-center md:min-h-screen py-16"
        id="projects"
      >
        <div className="text-center" role="status" aria-live="polite">
          <div className="animate-pulse text-xl">Loading projects...</div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="flex items-center justify-center md:min-h-screen py-16"
      id="projects"
    >
      <section
        className="flex grow flex-col gap-8 md:mx-40"
        aria-labelledby="projects-heading"
      >
        <div className="flex flex-col items-center justify-center gap-8 p-8 md:p-12 rounded-3xl transition lg:shadow-2xl lg:hover:shadow-emerald-900/50 dark:lg:hover:shadow-indigo-400/50 hover:scale-[1.02] duration-300 w-full">
          <h2
            id="projects-heading"
            className="text-3xl lg:text-4xl xl:text-6xl bg-gradient-to-r from-emerald-700 via-teal-600 to-amber-700 dark:from-rose-400 dark:via-pink-400 dark:to-indigo-400 bg-clip-text text-transparent font-semibold"
          >
            Projects
          </h2>

          <ul
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full list-none"
            role="list"
          >
            {repos.map((repo, index) => (
              <li
                key={repo.id}
                className="group flex flex-col gap-4 p-6 rounded-2xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-amber-900/20 dark:border-slate-700/50 hover:shadow-xl hover:shadow-emerald-900/30 dark:hover:shadow-indigo-400/30 transition-all duration-300 hover:scale-105 hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-emerald-800 dark:text-indigo-300 group-hover:text-emerald-600 dark:group-hover:text-indigo-400 transition-colors">
                      {repo.name}
                    </h3>
                  </div>
                  <div
                    className="flex gap-3 text-sm text-stone-700 dark:text-slate-400"
                    aria-label="Repository statistics"
                  >
                    {repo.stargazers_count > 0 && (
                      <span
                        className="flex items-center gap-1"
                        aria-label={`${repo.stargazers_count} stars`}
                      >
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span aria-hidden="true">{repo.stargazers_count}</span>
                      </span>
                    )}
                    {repo.forks_count > 0 && (
                      <span
                        className="flex items-center gap-1"
                        aria-label={`${repo.forks_count} forks`}
                      >
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span aria-hidden="true">{repo.forks_count}</span>
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-sm text-stone-700 dark:text-slate-300 flex-1">
                  {repo.description || "No description available"}
                </p>

                <div className="flex flex-wrap gap-2">
                  {repo.language && (
                    <span className="flex items-center gap-1.5 text-xs px-2 py-1 rounded-full bg-amber-900/10 dark:bg-slate-700/50">
                      <span
                        className={`w-2 h-2 rounded-full ${getLanguageColor(
                          repo.language
                        )}`}
                      />
                      {repo.language}
                    </span>
                  )}
                  {repo.topics.slice(0, 3).map((topic) => (
                    <span
                      key={topic}
                      className="text-xs px-2 py-1 rounded-full bg-emerald-900/10 dark:bg-indigo-900/30 text-emerald-800 dark:text-indigo-300"
                    >
                      {topic}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-2">
                  <Link
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-rose-500 dark:to-indigo-500 text-white font-medium hover:shadow-lg hover:scale-105 transition-all duration-200"
                    aria-label={`View source code for ${repo.name} on GitHub (opens in new tab)`}
                  >
                    View Code
                  </Link>
                  {repo.homepage && (
                    <Link
                      href={repo.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-4 py-2 rounded-lg border-2 border-emerald-600 dark:border-indigo-400 text-emerald-700 dark:text-indigo-300 font-medium hover:bg-emerald-600 dark:hover:bg-indigo-500 hover:text-white dark:hover:text-white hover:scale-105 transition-all duration-200"
                      aria-label={`View live demo of ${repo.name} (opens in new tab)`}
                    >
                      Live Demo
                    </Link>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <Link
            href="https://github.com/alderon07"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 px-8 py-3 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-rose-500 dark:to-indigo-500 text-white font-medium hover:shadow-lg hover:scale-105 transition-all duration-200"
            aria-label="View all projects on GitHub (opens in new tab)"
          >
            View All Projects on GitHub →
          </Link>
        </div>
      </section>
    </div>
  );
}

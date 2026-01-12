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

  // Custom tech stack for each project
  const projectTechStack: { [key: string]: string[] } = {
    "my-website": ["React", "TypeScript", "Next.js", "Tailwind-CSS"],
    "link-it": ["TypeScript", "Next.js", "Tailwind-CSS", "React"],
    godoit: ["Go"],
    kv: ["Go"],
    "cocktail-app": ["React", "TypeScript", "Tailwind-CSS"],
  };

  useEffect(() => {
    async function fetchRepos() {
      try {
        const headers: HeadersInit = {
          Accept: "application/vnd.github.v3+json",
        };

        const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
        if (token) {
          headers["Authorization"] = `Bearer ${token}`;
        }

        const response = await fetch(
          "https://api.github.com/users/alderon07/repos?sort=updated&per_page=100",
          {
            headers,
            next: { revalidate: 3600 },
          }
        );

        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`);
        }

        const data: Repository[] = await response.json();
        const pinned = data.filter((repo) => priorityRepos.includes(repo.name));
        const sorted = pinned.sort((a, b) => {
          const aIndex = priorityRepos.indexOf(a.name);
          const bIndex = priorityRepos.indexOf(b.name);
          return aIndex - bIndex;
        });

        setRepos(sorted);
      } catch (error) {
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
      TypeScript: "text-cyber-cyan",
      JavaScript: "text-yellow-400",
      Go: "text-cyber-cyan",
      Python: "text-cyber-lime",
      Java: "text-cyber-pink",
      Perl: "text-purple-400",
    };
    return colors[language] || "text-cyber-text";
  };

  if (loading) {
    return (
      <div
        className="flex items-center justify-center min-h-screen py-16 px-4"
        id="projects"
      >
        <div className="text-center" role="status" aria-live="polite">
          <div className="flex flex-col items-center gap-4">
            {/* Loading spinner */}
            <div className="w-16 h-16 border-4 border-cyber-cyan/30 border-t-cyber-cyan rounded-full animate-spin" />
            <span className="text-xl font-mono text-cyber-cyan animate-pulse">
              Loading projects...
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="flex items-center justify-center min-h-screen py-16 px-4"
      id="projects"
    >
      <section
        className="flex flex-col gap-8 max-w-6xl w-full"
        aria-labelledby="projects-heading"
      >
        {/* Section Header */}
        <div className="flex items-center gap-4">
          <h2
            id="projects-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold gradient-text"
          >
            PROJECTS
          </h2>
          <div className="flex-1 h-[2px] bg-gradient-to-r from-cyber-cyan to-transparent" />
        </div>

        {/* Projects Grid */}
        <ul
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 list-none"
          role="list"
        >
          {repos.map((repo, index) => (
            <li
              key={repo.id}
              className="group relative glass-card rounded-xl overflow-hidden transition-all duration-500 animate-scale-in card-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Animated border on hover */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 rounded-xl border-2 border-cyber-cyan animate-border-glow" />
              </div>

              <div className="relative p-6 flex flex-col gap-4 h-full">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-heading font-bold text-cyber-cyan group-hover:text-cyber-lime transition-colors duration-300">
                      {repo.name}
                    </h3>
                    {repo.language && (
                      <span className={`text-xs font-mono uppercase tracking-wider ${getLanguageColor(repo.language)}`}>
                        {repo.language}
                      </span>
                    )}
                  </div>
                  
                  {/* Stats */}
                  <div
                    className="flex gap-3 text-sm text-cyber-text/60"
                    aria-label="Repository statistics"
                  >
                    {repo.stargazers_count > 0 && (
                      <span
                        className="flex items-center gap-1 hover:text-cyber-lime transition-colors"
                        aria-label={`${repo.stargazers_count} stars`}
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span>{repo.stargazers_count}</span>
                      </span>
                    )}
                    {repo.forks_count > 0 && (
                      <span
                        className="flex items-center gap-1 hover:text-cyber-pink transition-colors"
                        aria-label={`${repo.forks_count} forks`}
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                          <path fillRule="evenodd" d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>{repo.forks_count}</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-cyber-text/80 flex-1 leading-relaxed">
                  {repo.description || "No description available"}
                </p>

                {/* Tech Stack - Achievement badges */}
                {projectTechStack[repo.name] && (
                  <div className="flex flex-wrap gap-2">
                    {projectTechStack[repo.name].map((tech) => (
                      <span
                        key={tech}
                        className="achievement-badge text-[10px] hover:scale-105 transition-transform"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {/* GitHub Topics fallback */}
                {!projectTechStack[repo.name] && repo.topics.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {repo.topics.slice(0, 3).map((topic) => (
                      <span
                        key={topic}
                        className="text-xs px-2 py-1 rounded bg-cyber-surface text-cyber-text/60 font-mono"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-3 mt-2">
                  <Link
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neon-button flex-1 text-center text-sm py-2 rounded-lg"
                    aria-label={`View source code for ${repo.name} on GitHub`}
                  >
                    View Code
                  </Link>
                  {repo.homepage && (
                    <Link
                      href={repo.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="neon-button neon-button-pink flex-1 text-center text-sm py-2 rounded-lg"
                      aria-label={`View live demo of ${repo.name}`}
                    >
                      Live Demo
                    </Link>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* View All Button */}
        <div className="flex justify-center mt-8">
          <Link
            href="https://github.com/alderon07"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 font-heading font-bold uppercase tracking-wider text-cyber-text transition-all duration-300"
            aria-label="View all projects on GitHub"
          >
            {/* Button background */}
            <span className="absolute inset-0 bg-gradient-to-r from-cyber-cyan via-cyber-pink to-cyber-lime rounded-lg opacity-20 group-hover:opacity-40 transition-opacity" />
            <span className="absolute inset-0 border-2 border-cyber-cyan rounded-lg group-hover:border-cyber-pink transition-colors" />
            
            {/* Button text */}
            <span className="relative flex items-center gap-2">
              View All Projects
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}

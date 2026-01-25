import React from "react";
import dynamic from "next/dynamic";
import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import Footer from "./components/footer/Footer";
import { getSiteUrl } from "./site";

// Dynamic imports for below-fold sections to reduce initial bundle size
const About = dynamic(() => import("./components/about/About"));
const Skills = dynamic(() => import("./components/skills/Skills"));
const Work = dynamic(() => import("./components/work/Work"));
const Projects = dynamic(() => import("./components/projects/Projects"));

export default function Home() {
  const siteUrl = getSiteUrl();
  const sameAs = [
    "https://github.com/alderon07",
    process.env.NEXT_PUBLIC_LINKEDIN_URL,
  ].filter(Boolean);

  // JSON-LD structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Naqi",
    url: siteUrl,
    image: `${siteUrl}/me-square.jpg`,
    jobTitle: "Remote Software Developer",
    worksFor: {
      "@type": "Organization",
      name: "Haley Marketing",
    },
    sameAs,
    knowsAbout: [
      "TypeScript",
      "JavaScript",
      "Go",
      "React",
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "MongoDB",
      "Docker",
      "Perl",
      "GCP",
      "Jira",
      "Git",
      "GitHub",
      "CI/CD",
      "Full Stack Development",
      "Backend Development",
      "Web Development",
      "MySQL",
      "jQuery",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "Python",
      "Linux",
      "C",
    ],
    areaServed: [
      "Remote",
      "United States",
      "North Carolina",
      "New York",
      "Seattle",
    ],
    description:
      "Remote software developer specializing in full-stack applications with TypeScript, Go, Next.js, and React.",
  };

  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="flex flex-col font-mono min-h-screen bg-cyber-black">
        <Navbar />
        <main id="main-content" className="flex-1">
          <Intro />
          <About />
          <Skills />
          <Work />
          <Projects />
        </main>
        <Footer />
      </div>
    </>
  );
}

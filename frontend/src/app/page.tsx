import React from "react";
import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Work from "./components/work/Work";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";

export default function Home() {
  // JSON-LD structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Naqi Haider",
    url: "https://naqihaider.vercel.app",
    image: "https://naqihaider.vercel.app/me.jpg",
    jobTitle: "Remote Software Developer",
    worksFor: {
      "@type": "Organization",
      name: "Haley Marketing",
    },
    sameAs: [
      "https://github.com/alderon07",
      "https://www.linkedin.com/in/naqi-haider7/",
    ],
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
    areaServed: ["Remote", "United States", "North Carolina", "New York", "Seattle"],
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

      <div className="flex flex-col gap-4 font-mono">
        <Navbar />
        <Intro />
        <About />
        <Skills />
        <Work />
        <Projects />
        <Footer />
      </div>
    </>
  );
}

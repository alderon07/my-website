import React from "react";
import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Work from "./components/work/Work";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 font-mono">
      <Navbar />
      <Intro />
      <About />
      <Skills />
      <Work />
      <Projects />
      <Footer />
    </div>
  );
}


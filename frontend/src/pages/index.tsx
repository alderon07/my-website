import React from "react";
import Intro from "../components/intro/Intro";
import Work from "../components/work/Work";
import About from "../components/about/About";

export default function Home() {
  return (
    <main className="py-4">
      <Intro></Intro>
      <About></About>
      <Work></Work>
    </main>
  );
}

import React from "react";
import Intro from "../components/intro/Intro";
import Work from "../components/work/Work";
import About from "../components/about/About";
import Navbar from "../components/navbar/Navbar";

export default function Home() {
  return (
      <div className="flex flex-col gap-4 font-normal font-mono">
        <Navbar></Navbar>
        <Intro></Intro>
        <About></About>
        <Work></Work>
      </div>
  );
}

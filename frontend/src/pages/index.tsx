import React from "react";
import Head from "next/head";
import Intro from "../components/intro/Intro";
import Work from "../components/work/Work";
import About from "../components/about/About";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 font-mono">
      <Head>
        <title>Naqi Haider</title>
      </Head>
      <Navbar></Navbar>
      <Intro></Intro>
      <About></About>
      <Work></Work>
      <Footer></Footer>
    </div> 
  );
}

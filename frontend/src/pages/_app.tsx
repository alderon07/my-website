import "../../styles/globals.css";
import React from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { Rubik } from "@next/font/google";
import Navbar from "../components/navbar/Navbar";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <main className={`${rubik.variable} font-rubik`}>
        <div className={`px-4 container h-screen mx-auto font-light font-mono bg-slate-100 text-stone-700 dark:bg-slate-900 dark:text-slate-300`}>
          <Navbar>
            <Component {...pageProps} />
          </Navbar>
        </div>
      </main>
    </ThemeProvider>
  );
}

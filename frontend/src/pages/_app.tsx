import React from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { Rubik, Nabla } from "@next/font/google";
import "../styles/globals.css";

const rubik = Rubik({
  variable: "--rubik-font",
  subsets: ["latin"],
});

const nabla = Nabla({
  variable: "--nabla-font",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <main
        className={`${rubik.variable} ${nabla.variable} font-rubik`}
      >
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}

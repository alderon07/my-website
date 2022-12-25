import React from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { Rubik } from "@next/font/google";
import "../../styles/globals.css";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <main className={`${rubik.variable} font-rubik`}>
              <Component className="scollbar" {...pageProps} />
      </main>
    </ThemeProvider>
  );
}

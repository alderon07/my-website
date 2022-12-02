import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { Roboto_Mono } from "@next/font/google";
import Navbar from "../components/navbar/Navbar";

const nunito = Roboto_Mono({
  variable: "--font-robotoMono",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <main className={`${nunito.variable} font-robotoMono`}>
        <div className="container h-screen mx-auto font-light font-mono bg-slate-100 text-stone-700 dark:bg-slate-900 dark:text-slate-300">
          <Navbar>
            <Component {...pageProps} />
          </Navbar>
        </div>
      </main>
    </ThemeProvider>
  );
}

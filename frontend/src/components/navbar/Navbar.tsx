import React from "react";
import type { ReactNode } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import Link from "next/link";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

type LayoutProps = { children: ReactNode };

export default function Navbar({ children }: LayoutProps) {
  const { theme, setTheme } = useTheme();
  const style =
    "ease-in-out delay-100 duration-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all";

  return (
    <div>
      <nav className="flex justify-between items-center text-md lowercase h-24 rounded container">
        <span>
          <Link href="/">NAQI</Link>
        </span>
        <span>
          <ul className="flex list-none gap-4 items-center">
            <li className={`${style} hover:scale-105`}>
              <Link href="/projects">Projects</Link>
            </li>
            {/*TODO: Make this into a component */}
            <li id="github" className={`${style} hover:scale-110`}>
              <Link href="https://github.com/alderon07" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 stroke-current stoke-2"
                >
                  <title>Github</title>
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </Link>
            </li>
            <li id='instagram' className={`${style} hover:scale-110`}>
              <Link href="https://www.instagram.com/sadasspanda" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-4 w-4 stroke-current stroke-2"
                >
                  <title>Instagram</title>
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </Link>
            </li>
            <li className={`${style} hover:scale-110 place-content-center`}>
              <button
                className="pt-1" 
                onClick={() => {
                  const mode = theme === "light" ? "dark" : "light";
                  setTheme(mode);
                }}
              >
                <span className="hidden dark:inline">
                  <SunIcon className="h-4 w-4 stroke-current" />
                </span>
                <span className="dark:hidden">
                  <MoonIcon className="h-4 w-4 stroke-current" />
                </span>
              </button>
            </li>
          </ul>
        </span>
      </nav>

      {children}
    </div>
  );
}

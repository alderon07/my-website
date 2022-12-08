import React from "react";
import type { ReactNode } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import Socials from "../socials/Socials";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

type LayoutProps = { children: ReactNode };

export default function Navbar({ children }: LayoutProps) {
  const { theme, setTheme } = useTheme();

  const style =
    "ease-in-out delay-100 duration-300 hover:text-amber-500 dark:hover:text-sky-300 transition-all";

  return (
    <div>
      <nav className="flex justify-between items-center text-lg lowercase h-24 rounded container">
        <span>
          <Link href="/">NAQI</Link>
        </span>
        <span>
          <ul className="flex list-none gap-4 items-center">
            <li className={`${style} hover:scale-105 hidden`}>
              <Link href="/projects">Projects</Link>
            </li>

            <Socials style={style}></Socials>
            
            <li className={`${style} hover:scale-110`}>
              <button
                className="pt-1" 
                onClick={() => {
                  const mode = theme === "light" ? "dark" : "light";
                  setTheme(mode);
                }}
              >
                <span className="hidden dark:inline">
                  <SunIcon className="h-5 w-5 stroke-current" />
                </span>
                <span className="dark:hidden">
                  <MoonIcon className="h-5 w-5 stroke-current" />
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
import { React } from "react";
import type { ReactNode } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import Link from "next/link";

type LayoutProps = { children: ReactNode };

export default function Navbar({ children }: LayoutProps) {
  const { theme, setTheme } = useTheme();
  const style =
    "ease-in-out delay-100 duration-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all";

  return (
    <div>
      <nav className="flex justify-between self-center text-md lowercase h-24 px-4 rounded container">
        <span className="self-center">
          <Link href="/">icon</Link>
        </span>
        <ul className="flex justify-center items-center list-none gap-4">
          {/* <li className={`${style} hover:scale-105`}>
          <a href="">About</a>
        </li> */}
          <li className={`${style} hover:scale-105`}>
            <Link href="/projects">Projects</Link>
          </li>
          <li className={`${style} hover:scale-110`}>
            <button
              onClick={() => {
                const mode = theme === "light" ? "dark" : "light";
                setTheme(mode);
              }}
            >
              <span className="hidden dark:inline">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-4 h-4 stroke-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                  />
                </svg>
              </span>
              <span className="dark:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-4 h-4 stroke-2"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </button>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
}

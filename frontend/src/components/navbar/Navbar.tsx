import React from "react";
// import type { ReactNode } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";
import Socials from "../socials/Socials";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

// type LayoutProps = { children: ReactNode };

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  const style =
    "ease-in-out delay-100 duration-300 hover:text-emerald-700 dark:hover:text-rose-300 transition-all";

  return (
    <div>
      <nav className="flex h-20 items-center justify-between text-lg lowercase">
        <div>
          <Link href="/">
            <Image
              className={`h-12 w-12 md:h-16 md:w-16 ${style} hover:scale-105`}
              width={50}
              height={50}
              src="logo.svg"
              alt="logo"
            >
            </Image>
          </Link>
        </div>
        <div>
          <ul className="flex list-none items-center gap-4">
            <li className={`${style} hidden hover:scale-105`}>
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
        </div>
      </nav>
    </div>
  );
}

"use client";

import React from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";
import Socials from "../socials/Socials";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  const style =
    "ease-in-out delay-100 duration-300 hover:text-emerald-700 dark:hover:text-rose-300 transition-all";

  return (
    <div className="sticky top-0 z-50 backdrop-blur-md bg-amber-800/10 dark:bg-slate-900/80 -mx-8 px-8 border-b border-amber-900/20 dark:border-slate-700/50">
      <nav className="flex h-20 items-center justify-between text-lg lowercase">
        <div>
          <Link href="/">
            <Image
              className={`h-12 w-12 md:h-16 md:w-16 ${style} hover:scale-105`}
              width={50}
              height={50}
              src="/logo.svg"
              alt="logo"
            />
          </Link>
        </div>
        <div>
          <ul className="flex list-none items-center gap-4">
            <Socials style={style} />

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


"use client";

import Link from "next/link";
import Image from "next/image";
import Socials from "../socials/Socials";
import { CameraIcon } from "@heroicons/react/24/solid";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 backdrop-blur-md bg-cyber-black/80 border-b-2 border-cyber-cyan/30 shadow-[0_4px_30px_rgba(0,240,255,0.15)]">
      <nav
        className="flex h-20 items-center justify-between text-lg px-6 md:px-8 max-w-7xl mx-auto"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <div>
          <Link 
            href="/" 
            aria-label="Home"
            className="group block"
          >
            <Image
              className="h-14 w-14 md:h-16 md:w-16 transition-all duration-300 
                drop-shadow-[0_0_6px_rgba(0,240,255,0.4)]
                [filter:brightness(1.2)_saturate(1.1)]
                group-hover:scale-110 
                group-hover:drop-shadow-[0_0_15px_rgba(0,240,255,0.8)]
                group-hover:[filter:brightness(1.2)_saturate(1.3)]"
              width={56}
              height={56}
              src="/logo.svg"
              alt="Naqi logo"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <div>
          <ul className="flex list-none items-center gap-4 md:gap-6 font-mono uppercase tracking-wider text-sm">
            <li>
              <Link
                href="/photography"
                className="group flex items-center gap-2 text-cyber-text hover:text-cyber-cyan transition-all duration-300 neon-underline py-2"
                aria-label="View photography portfolio"
              >
                <CameraIcon className="h-5 w-5 transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(0,240,255,0.8)]" aria-hidden="true" />
                <span className="hidden md:inline">Photography</span>
              </Link>
            </li>

            <Socials />

          </ul>
        </div>
      </nav>
    </div>
  );
}

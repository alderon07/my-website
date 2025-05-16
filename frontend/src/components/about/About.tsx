import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <div className="flex items-center justify-center md:min-h-screen">
      <section className="flex grow flex-col gap-4 md:mx-40 md:py-16 lg:gap-8">
        
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="flex flex-col transition justify-center items-center rounded-3xl gap-4 lg:pb-16 lg:pt-8 lg:px-8 lg:w-2/3 lg:shadow-2xl lg:hover:shadow-emerald-900/50 dark:lg:hover:shadow-indigo-400/50 ">
            <h2 className="dark:text-rose-300 self-center py-2 text-3xl lg:text-4xl xl:text-6xl">About</h2>
            <div className="max-h-sm max-w-sm rounded-3xl bg-gradient-to-bl  from-teal-900 via-yellow-600 to-green-800 dark:bg-gradient-to-br dark:from-blue-900 dark:to-indigo-200 md:rounded-full">
              <Image
                className="rounded-3xl object-cover mix-blend-overlay md:rounded-full"
                src="/me.jpg"
                alt="Naqi"
                quality={100}
                width={400}
                height={400}
                object-fit="contain"
              ></Image>
            </div>
            <p className="max-w-lg text-justify lg:text-lg xl:text-xl">
              Hey, I'm Naqi 👋 — a software developer who finds joy in both clean code and chaotic team fights on Summoner’s Rift 🎮. <br/> <br/>
              By day, I build full-stack applications with modern tools like TypeScript, Go, and Next.js. By night, I'm jamming on my 🎸 guitar, belting out karaoke 🎤 hits, or diving into the world of 📸 photography. <br/> <br/>
              When I’m not coding or taking photos, I’m probably geeking out over 🍿 pop culture, catching up on the latest 🎥 anime, or getting lost in 📕 manga.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

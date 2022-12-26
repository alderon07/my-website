import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <div className="flex items-center justify-center md:min-h-screen">
      <section className="flex grow flex-col gap-4 md:mx-40 md:py-16 lg:gap-8">
        <h2 className="self-center text-3xl lg:text-4xl xl:text-5xl">About</h2>

        <div className="flex flex-col items-center justify-center gap-8">
          <div className="max-h-sm max-w-sm rounded-3xl bg-gradient-to-br from-yellow-900 to-amber-300 dark:bg-gradient-to-br dark:from-blue-900 dark:to-indigo-200 md:rounded-full">
            <Image
              className="rounded-3xl object-cover mix-blend-overlay hover:mix-blend-normal md:rounded-full"
              src="/me.jpg"
              alt="Naqi"
              quality={100}
              width={350}
              height={350}
              object-fit="contain"
            ></Image>
          </div>

          <div className="rounded-xl lg:p-8 lg:shadow-lg lg:hover:shadow-indigo-400/50 ">
            <p className="max-w-lg text-justify lg:text-lg">
              Some of the things I love are videos games,
            </p>
            <div>
              <h6>Technologies I have worked with</h6>
              <ul>
                <li>Typescript</li>
                <li>React</li>
                <li>Perl</li>
                <li>NextJS</li>
                <li>Javascript</li>
                <li>Angular</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

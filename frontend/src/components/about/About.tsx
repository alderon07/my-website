import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <div className="flex items-center justify-center md:min-h-screen">
      <section className="flex grow flex-col gap-4 md:mx-40 md:py-16 lg:gap-8">
        <h2 className="self-center text-3xl lg:text-4xl xl:text-6xl">About</h2>

        <div className="flex flex-col items-center justify-center gap-8">
          <div className="max-h-sm max-w-sm rounded-3xl bg-gradient-to-bl  from-teal-900 via-yellow-600 to-green-800 dark:bg-gradient-to-br dark:from-blue-900 dark:to-indigo-200 md:rounded-full">
            <Image
              className="rounded-3xl object-cover mix-blend-overlay hover:mix-blend-normal md:rounded-full"
              src="/me.jpg"
              alt="Naqi"
              quality={100}
              width={320}
              height={320}
              object-fit="contain"
            ></Image>
          </div>

          <div className="flex flex-col transition justify-center items-center rounded-xl gap-4 lg:p-8 lg:shadow-lg lg:hover:shadow-rose-500 dark:lg:hover:shadow-indigo-400/50 ">
            <p className="max-w-lg text-justify lg:text-lg xl:text-xl">
              Some of the things I love are videos games, making pixel art, and
              the general comfort of my living room.
            </p>
            <div>
              <h6 className="lg:text-base xl:text-lg">
                Technologies I have worked with:
              </h6>
              <ul className="flex marker:text-emerald-700 dark:marker:text-rose-300 list-disc list-inside">
                <div className="grow float-left">
                  <li>Typescript</li>
                  <li>Javascript</li>
                  <li>Perl</li>
                  <li>Python</li>
                </div>
                <div className="grow float-right">
                  <li>NextJS</li>
                  <li>React</li>
                  <li>Angular</li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

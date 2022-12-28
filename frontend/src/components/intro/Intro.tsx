import React from "react";

export default function Intro() {
  return (
    <div className="flex items-center justify-center md:min-h-screen">
      <section className="flex grow flex-col items-start justify-center lg:mx-40 lg:pb-16">
        <div className="flex flex-col gap-4 self-center">
          <div className="flex flex-col gap-2">
            <h5 className="text-lg font-medium lg:text-xl xl:text-2xl">
              Hello, my name is
            </h5>
            <h1
              className={`text-5xl dark:text-blue-200 font-semibold transition delay-100 duration-200 ease-in-out hover:scale-105 lg:text-6xl xl:text-8xl`}
            >
              Naqi Haider.
            </h1>
            <h2 className="text-3xl lg:text-4xl xl:text-6xl">
              I build things.
            </h2>
          </div>
          <div>
            <p className="max-w-lg text-teal-800 dark:text-rose-300 text-justify lg:text-lg">
              I'm a Software Engineer who loves making web apps.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

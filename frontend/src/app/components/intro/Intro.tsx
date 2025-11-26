import React from "react";

export default function Intro() {
  return (
    <div className="flex items-center justify-center md:min-h-screen">
      <section className="flex grow flex-col items-center justify-center md:mx-48 md:py-16 animate-fade-in">
        <div className="flex flex-col gap-6 p-12 md:p-16 lg:p-20 rounded-3xl transition lg:shadow-2xl lg:hover:shadow-emerald-900/50 dark:lg:hover:shadow-indigo-400/50 hover:scale-[1.02] duration-300 w-full lg:w-2/3">
          <div className="flex flex-col gap-2">
            <h5 className="text-lg font-medium lg:text-xl xl:text-2xl animate-slide-up">
              Hello, my name is
            </h5>
            <h1
              className="text-5xl font-semibold transition delay-100 duration-200 ease-in-out hover:scale-105 lg:text-6xl xl:text-8xl bg-gradient-to-r from-emerald-700 via-teal-600 to-amber-700 dark:from-rose-400 dark:via-pink-400 dark:to-indigo-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]"
            >
              Naqi Haider.
            </h1>
            <h2 className="text-3xl lg:text-4xl xl:text-6xl animate-slide-up">
              I build dope things.
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
}


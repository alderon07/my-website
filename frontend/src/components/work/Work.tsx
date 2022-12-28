import React from "react";
import Link from "next/link";

export default function Work() {
  return (
    <div className="mb-4 flex items-center justify-center md:min-h-screen">
      <section className="flex flex-col grow gap-4 justify-center items-center md:mx-40 md:py-16 lg:gap-8">
        
        <div className="">
          <h2 className="text-3xl lg:text-4xl xl:text-6xl">
            My Experience
          </h2>
        </div>

        <div className="flex flex-col md:justify-center md:items-start rounded-xl transition lg:p-8 lg:shadow-xl lg:hover:shadow-indigo-400/50">
          <h5 className="lg:text-xl">
            Software Engineer
            <span className="text-sky-200">
              &nbsp; @ &nbsp;
              <Link
                class="group text-sky-300 transition-all duration-100 ease-in-out visited:text-pink-300"
                href="https://www.haleymarketing.com"
                target="_blank"
              >
                <span class="bg-gradient-to-r from-amber-300 via-red-500 to-indigo-600 bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out group-hover:bg-[length:100%_2px] lg:text-xl">
                  Haley Marketing
                </span>
              </Link>
            </span>
          </h5>
          <ul className="list-inside list-disc marker:text-rose-400 dark:marker:text-rose-300">
            <li>Worked on the backend</li>
            <li>jQuery</li>
            <li>Wordpress</li>
            <li>Angular</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

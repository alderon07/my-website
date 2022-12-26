import React from "react";
import Link from "next/link";

export default function Work() {
  return (
    <div className="mb-4 flex items-center justify-center md:min-h-screen">
      <section className="flex grow flex-col items-center justify-center gap-4 md:mx-40 md:py-16 lg:gap-8">
        <h2 className="self-center text-3xl lg:text-4xl xl:text-5xl">
          My Experience
        </h2>

        <div className="flex flex-col rounded-xl transition lg:p-8 lg:shadow-xl lg:hover:shadow-indigo-900/25">
          <h5 className="lg:text-xl">
            Software Engineer
            <span className="text-sky-300">
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
          <ul className="list-inside list-disc self-start font-medium text-rust marker:text-sky-300">
            <li>blah</li>
            <li>do</li>
            <li>no</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

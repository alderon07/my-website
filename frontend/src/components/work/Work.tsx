import React from "react";
import Link from "next/link";

export default function Work() {
  return (
    <div className="flex justify-center items-center md:min-h-screen">
      <section className="flex flex-col grow md:py-16 md:mx-40 gap-8 justify-center items-center">
        <h2 className="text-4xl self-center md:text-5xl lg:text-6xl">
          My Experience.
        </h2>

        <div className="flex flex-col p-8 rounded-xl justify-start shadow-xl shadow-indigo-900/50">
          <h5 className="text-xl">
            Software Engineer
            <span className="text-sky-300">
              &nbsp; @ &nbsp;
              <a
                class="group text-sky-300 transition-all duration-100 ease-in-out visited:text-pink-300"
                href="#"
              >
                <span class="bg-left-bottom bg-gradient-to-r from-amber-300 via-red-500 to-indigo-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                  Haley Marketing
                </span>
              </a>
            </span>
          </h5>
          <ul className="list-disc list-inside">
            <li>blah</li>
            <li>do</li>
            <li>no</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

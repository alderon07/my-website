import React from "react";
import Link from "next/link";

export default function Work() {
  return (
    <div className="mb-4 flex items-center justify-center md:min-h-screen">
      <section className="flex flex-col grow gap-4 justify-center items-center md:mx-40 md:py-16 lg:gap-4">
        <div className="">
          <h2 className="text-3xl lg:text-4xl xl:text-6xl">My Experience</h2>
        </div>

        <div className="flex flex-col gap-2 md:justify-center md:items-center rounded-xl transition lg:p-8 lg:shadow-xl lg:hover:shadow-indigo-400/50 max-w-2xl">
          <h5 className="flex justify-items-center text-lg dark:text-rose-300 lg:text-2xl">
            Software Engineer
            <span className="text-green-900 dark:text-sky-300">
              &nbsp; <span className="font-bold">@</span> &nbsp;
              <Link
                class="group font-medium dark:text-sky-300 transition-all duration-100 ease-in-out visited:text-amber-500 dark:visited:text-indigo-300"
                href="https://www.haleymarketing.com"
                target="_blank"
              >
                <span className="bg-gradient-to-r from-teal-600 via-red-500 to-indigo-600  dark:from-amber-300 dark:via-red-500 dark:to-indigo-600 bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out group-hover:bg-[length:100%_2px]">
                  Haley Marketing
                </span>
              </Link>
            </span>
          </h5>

          <ul className="flex flex-col pl-4 gap-2 xl:text-lg list-outside list-disc marker:text-emerald-700 dark:marker:text-rose-300">
            <li>
              Utilized jQuery, Perl to maintain and update legacy software,
              including writing scripts and updating APIs
            </li>
            <li>
              Contributed to the development of Netsocial, a social application
              built with Angular
            </li>
            <li>Maintained WordPress plugins for various clients</li>
            <li>
              Performed general software maintenance tasks, such as upgrading
              dependencies and ensuring system stability
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

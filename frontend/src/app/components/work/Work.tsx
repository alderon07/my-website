import React from "react";
import Link from "next/link";

export default function Work() {
  return (
    <div className="mb-4 flex items-center justify-center md:min-h-screen lg:w-full" id="experience">
      <section className="flex flex-col grow gap-4 justify-center items-center md:mx-40 md:py-16 lg:gap-4">
        <div className="flex flex-col gap-4 md:justify-center items-center rounded-3xl transition lg:pt-8 lg:pb-16 lg:px-32 lg:shadow-2xl lg:w-2/3 lg:hover:shadow-emerald-900/50 dark:lg:hover:shadow-indigo-400/50 hover:scale-[1.02] duration-300">
          <h2 className="self-center py-2 text-3xl lg:text-4xl xl:text-6xl bg-gradient-to-r from-emerald-700 via-teal-600 to-amber-700 dark:from-rose-400 dark:via-pink-400 dark:to-indigo-400 bg-clip-text text-transparent font-semibold">
            My Experience
          </h2>

          <h5 className="flex justify-items-center lg:text-2xl md:text-xl">
            <span className="text-green-900 dark:text-indigo-300">
              Software Engineer
            </span>
            <span className="text-green-900 dark:text-sky-300">
              &nbsp; <span className="font-bold">@</span> &nbsp;
              <Link
                className="group font-medium dark:text-sky-300 transition-all duration-100 ease-in-out visited:text-amber-500 dark:visited:text-indigo-300"
                href="https://www.haleymarketing.com"
                target="_blank"
              >
                <span className="bg-gradient-to-r from-teal-600 via-red-500 to-indigo-600 dark:from-amber-300 dark:via-red-500 dark:to-indigo-600 bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out group-hover:bg-[length:100%_2px]">
                  Haley Marketing
                </span>
              </Link>
            </span>
          </h5>

          <ul className="flex flex-col pl-4 gap-4 lg:text-lg xl:text-xl list-outside list-disc marker:text-emerald-700 dark:marker:text-rose-300">
            <li className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
              Engineered backend integrations for ATS platforms and third-party
              services (e.g., Indeed, ZipRecruiter, Bullhorn), supporting 20+
              systems, 1M+ job listings and candidates.
            </li>
            <li className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
              Leveraged Cursor to automate and scale ATS integration
              development, reducing manual effort and improving turnaround time.
            </li>
            <li className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
              Improved CI/CD deployment speed by 40% by replacing Docker-based
              Bitbucket runners with lightweight Linux shell runners, resulting
              in faster commit-to-deploy cycles and a smoother developer
              experience.
            </li>
            <li className="animate-slide-up" style={{ animationDelay: "0.4s" }}>
              Optimized SQL queries and caching strategies, improving system
              performance by 15%.
            </li>
            <li className="animate-slide-up" style={{ animationDelay: "0.5s" }}>
              Revamped frontend user flows using AngularJS and jQuery,
              increasing engagement through a more intuitive UX.
            </li>
            <li className="animate-slide-up" style={{ animationDelay: "0.6s" }}>
              Developed RESTful APIs in Perl, Go, and TypeScript to enable
              seamless frontend-backend communication.
            </li>
            <li className="animate-slide-up" style={{ animationDelay: "0.7s" }}>
              Led code reviews and contributed to Agile ceremonies, enhancing
              team velocity and code quality.
            </li>
            <li className="animate-slide-up" style={{ animationDelay: "0.8s" }}>
              Participated in retrospectives that improved internal workflow and
              reduced deployment time.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}


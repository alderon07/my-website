import Image from "next/image";

export default function About() {
  return (
    <div
      className="flex items-center justify-center md:min-h-screen w-full"
      id="about"
    >
      <section
        className="flex grow flex-col gap-4 md:mx-40 md:py-16 lg:gap-8 w-full"
        aria-labelledby="about-heading"
      >
        <div className="flex flex-col items-center justify-center gap-8 w-full px-4 md:px-0">
          <div className="flex flex-col transition justify-center items-center rounded-3xl gap-4 w-full lg:pb-16 lg:pt-8 lg:px-8 lg:w-2/3 lg:shadow-2xl lg:hover:shadow-emerald-900/50 dark:lg:hover:shadow-indigo-400/50 hover:scale-[1.02] duration-300">
            <h2
              id="about-heading"
              className="self-center py-2 text-3xl lg:text-4xl xl:text-6xl bg-gradient-to-r from-emerald-700 via-teal-600 to-amber-700 dark:from-rose-400 dark:via-pink-400 dark:to-indigo-400 bg-clip-text text-transparent font-semibold w-full text-center"
            >
              About
            </h2>
            {/* Profile Picture - Only visible on mobile (below lg) */}
            <div className="lg:hidden w-full max-w-sm rounded-3xl bg-gradient-to-bl from-teal-900 via-yellow-600 to-green-800 dark:bg-gradient-to-br dark:from-blue-900 dark:to-indigo-200 animate-gradient bg-[length:200%_200%] p-1">
              <Image
                className="rounded-3xl object-cover mix-blend-overlay w-full h-auto"
                src="/me-square.jpg"
                alt="Portrait of Naqi, software developer"
                quality={100}
                width={400}
                height={400}
              />
            </div>
            <p className="w-full max-w-lg text-justify lg:text-lg xl:text-xl px-4 md:px-0">
              Hey, I&apos;m Naqi 👋 — a software developer who finds joy in both
              clean code and chaotic team fights on Summoner&apos;s Rift 🎮.
              Yes, I am a League of Legends player. Addicted since 2012. <br />
              <br />
              By day, I build full-stack applications with modern tools like
              TypeScript, Go, and Next.js. By night, I&apos;m jamming on my 🎸
              guitar, belting out karaoke hits, or using my camera to take
              photos of things I find interesting. 📸
              <br />
              <br />
              When I&apos;m not coding or taking photos, I&apos;m probably
              geeking out over pop culture, catching up on the latest 🎥 anime,
              or 📕 manga.
              <br />
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

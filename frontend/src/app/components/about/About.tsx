import Image from "next/image";

export default function About() {
  return (
    <div
      className="flex items-center justify-center min-h-screen w-full px-4 py-16"
      id="about"
    >
      <section
        className="flex grow flex-col gap-8 max-w-4xl w-full"
        aria-labelledby="about-heading"
      >
        {/* Section Header */}
        <div className="flex items-center gap-4">
          <h2
            id="about-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold gradient-text"
          >
            ABOUT
          </h2>
          <div className="flex-1 h-[2px] bg-gradient-to-r from-cyber-cyan to-transparent" />
        </div>

        {/* Content Card with viewfinder corners */}
        <div className="relative glass-card pixel-shadow-cyan hover-glow rounded-2xl p-8 md:p-12 transition-all duration-500 group">
          {/* Viewfinder corners - photography element */}
          <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-cyber-cyan transition-all duration-300 group-hover:w-12 group-hover:h-12 group-hover:border-cyber-pink" />
          <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-cyber-cyan transition-all duration-300 group-hover:w-12 group-hover:h-12 group-hover:border-cyber-pink" />
          <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-cyber-pink transition-all duration-300 group-hover:w-12 group-hover:h-12 group-hover:border-cyber-cyan" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-cyber-pink transition-all duration-300 group-hover:w-12 group-hover:h-12 group-hover:border-cyber-cyan" />

          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {/* Profile Picture - Mobile only */}
            <div className="lg:hidden w-full max-w-sm">
              <div className="relative group/img">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyber-cyan via-cyber-pink to-cyber-lime rounded-2xl blur opacity-50 group-hover/img:opacity-75 transition-opacity" />
                <div className="relative p-1 rounded-2xl bg-gradient-to-r from-cyber-cyan to-cyber-pink">
                  <Image
                    className="rounded-2xl object-cover w-full h-auto bg-cyber-black"
                    src="/me-square.jpg"
                    alt="Portrait of Naqi, software developer"
                    quality={100}
                    width={400}
                    height={400}
                  />
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="flex-1 space-y-6">
              <p className="text-lg md:text-xl leading-relaxed text-cyber-text">
                Hey, I&apos;m <span className="text-cyber-cyan font-bold neon-text-cyan">Naqi</span> 👋 — a software developer who finds joy in both
                clean code and chaotic team fights on Summoner&apos;s Rift 🎮.
              </p>
              
              <p className="text-lg md:text-xl leading-relaxed text-cyber-text">
                Yes, I am a <span className="text-cyber-pink">League of Legends</span> player. Addicted since 2012.
              </p>

              <p className="text-lg md:text-xl leading-relaxed text-cyber-text">
                By day, I build full-stack applications with modern tools like
                <span className="text-cyber-lime"> TypeScript</span>,{" "}
                <span className="text-cyber-cyan">Go</span>, and{" "}
                <span className="text-cyber-pink">Next.js</span>. By night, I&apos;m jamming on my 🎸
                guitar, belting out karaoke hits, or using my camera to capture
                moments that catch my eye 📸
              </p>

              <p className="text-lg md:text-xl leading-relaxed text-cyber-text">
                When I&apos;m not coding or taking photos, I&apos;m probably
                geeking out over pop culture, catching up on the latest anime 🎥,
                or diving into manga 📕.
              </p>

              {/* Interests tags */}
              <div className="flex flex-wrap gap-3 pt-4">
                {["Gaming", "Photography", "Music", "Anime", "Coding"].map((tag, index) => (
                  <span 
                    key={tag}
                    className="achievement-badge hover:bg-cyber-cyan/20 transition-all duration-300 cursor-default"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import Link from "next/link";

export default function Work() {
  const experiences = [
    {
      completed: true,
      text: "Engineered backend integrations for ATS platforms and third-party services (e.g., Indeed, ZipRecruiter, Bullhorn), supporting 20+ systems, 1M+ job listings and candidates.",
    },
    {
      completed: true,
      text: "Leveraged Cursor to automate and scale ATS integration development, reducing manual effort and improving turnaround time.",
    },
    {
      completed: true,
      text: "Improved CI/CD deployment speed by 40% by replacing Docker-based Bitbucket runners with lightweight Linux shell runners.",
    },
    {
      completed: true,
      text: "Optimized SQL queries and caching strategies, improving system performance by 15%.",
    },
    {
      completed: true,
      text: "Revamped frontend user flows using AngularJS and jQuery, increasing engagement through a more intuitive UX.",
    },
    {
      completed: true,
      text: "Developed RESTful APIs in Perl, Go, and TypeScript to enable seamless frontend-backend communication.",
    },
    {
      completed: false,
      text: "Led code reviews and contributed to Agile ceremonies, enhancing team velocity and code quality.",
    },
    {
      completed: false,
      text: "Participated in retrospectives that improved internal workflow and reduced deployment time.",
    },
  ];

  return (
    <div
      className="flex items-center justify-center min-h-screen w-full px-4 py-16"
      id="experience"
    >
      <section
        className="flex flex-col gap-8 max-w-4xl w-full"
        aria-labelledby="experience-heading"
      >
        {/* Section Header */}
        <div className="flex items-center gap-4">
          <h2
            id="experience-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold gradient-text"
          >
            EXPERIENCE
          </h2>
          <div className="flex-1 h-[2px] bg-gradient-to-r from-cyber-lime to-transparent" />
        </div>

        {/* Experience Card */}
        <div className="relative glass-card pixel-shadow-pink hover-glow rounded-2xl p-8 md:p-12 transition-all duration-500">
          {/* Timeline line - positioned to align with quest bullets */}
          <div className="absolute left-[2.25rem] md:left-[3.25rem] top-44 md:top-40 bottom-28 w-[2px] bg-gradient-to-b from-cyber-cyan via-cyber-pink to-cyber-lime opacity-50" />

          {/* Company Header - Primary heading, no indent */}
          <div className="mb-6">
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-cyber-cyan">
                Software Engineer
              </h3>
              <span className="text-cyber-pink text-2xl">@</span>
              <Link
                href="https://www.haleymarketing.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group text-2xl md:text-3xl font-heading font-bold text-cyber-text hover:text-cyber-lime transition-all duration-300"
                aria-label="Haley Marketing (opens in new tab)"
              >
                <span className="relative">
                  Haley Marketing
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-cyber-cyan to-cyber-pink group-hover:w-full transition-all duration-300" />
                </span>
              </Link>
            </div>
          </div>

          {/* Sub heading - Active Quests - aligned with timeline */}
          <div className="mb-4 flex items-center gap-2 text-cyber-text/60 font-mono text-sm uppercase tracking-wider">
            <span className="text-cyber-lime">◆</span>
            <span>Active Quests</span>
            <span className="text-cyber-cyan">
              ({experiences.filter((e) => e.completed).length}/
              {experiences.length} completed)
            </span>
          </div>

          {/* Quest Objectives - indented from timeline */}
          <ul className="space-y-4 ml-4 md:ml-6 pl-4 border-l-0">
            {experiences.map((exp, index) => (
              <li
                key={index}
                className={`quest-bullet ${
                  exp.completed ? "completed" : ""
                } text-base md:text-lg text-cyber-text/90 leading-relaxed animate-slide-up transition-all duration-300 hover:text-cyber-text hover:translate-x-2`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {exp.text}
              </li>
            ))}
          </ul>

          {/* XP Reward indicator - aligned with quest items */}
          <div className="mt-8 pt-6 border-t border-cyber-cyan/20 ml-4 md:ml-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 text-sm font-mono">
              <span className="text-cyber-text/60 uppercase tracking-wider">
                Quest Rewards
              </span>
              <div className="flex flex-wrap items-center gap-3 md:gap-4">
                <span className="text-cyber-lime">+5000 XP</span>
                <span className="text-cyber-pink">+3 Skill Points</span>
                <span className="text-cyber-cyan">★ Achievement Unlocked</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

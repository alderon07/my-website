"use client";

import React from "react";
import Image from "next/image";

interface Skill {
  name: string;
  category: "Frontend" | "Backend" | "Database" | "Tools & Cloud";
  iconUrl: string;
}

export default function Skills() {
  const skills: Skill[] = [
    // Frontend
    {
      name: "JavaScript",
      category: "Frontend",
      iconUrl: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg",
    },
    {
      name: "TypeScript",
      category: "Frontend",
      iconUrl: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg",
    },
    {
      name: "React",
      category: "Frontend",
      iconUrl: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg",
    },
    {
      name: "Next.js",
      category: "Frontend",
      iconUrl: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored.svg",
    },
    {
      name: "HTML5",
      category: "Frontend",
      iconUrl: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg",
    },
    {
      name: "CSS3",
      category: "Frontend",
      iconUrl: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg",
    },
    {
      name: "Tailwind CSS",
      category: "Frontend",
      iconUrl: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg",
    },
    {
      name: "jQuery",
      category: "Frontend",
      iconUrl: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/jquery-colored.svg",
    },
    // Backend
    {
      name: "Node.js",
      category: "Backend",
      iconUrl: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg",
    },
    {
      name: "Go",
      category: "Backend",
      iconUrl: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/go-colored.svg",
    },
    {
      name: "Perl",
      category: "Backend",
      iconUrl: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/perl-colored.svg",
    },
    // Database
    {
      name: "PostgreSQL",
      category: "Database",
      iconUrl: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/postgresql-colored.svg",
    },
    {
      name: "MongoDB",
      category: "Database",
      iconUrl: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg",
    },
    {
      name: "MySQL",
      category: "Database",
      iconUrl: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mysql-colored.svg",
    },
    // Tools & Cloud
    {
      name: "Docker",
      category: "Tools & Cloud",
      iconUrl: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/docker-colored.svg",
    },
    {
      name: "Git",
      category: "Tools & Cloud",
      iconUrl: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/git-colored.svg",
    },
    {
      name: "GCP",
      category: "Tools & Cloud",
      iconUrl: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/googlecloud-colored.svg",
    },
    {
      name: "Jira",
      category: "Tools & Cloud",
      iconUrl: "https://cdn.worldvectorlogo.com/logos/jira-1.svg",
    },
    {
      name: "Cursor",
      category: "Tools & Cloud",
      iconUrl: "/cursor.png",
    },
  ];

  const categories = [
    { name: "Frontend", color: "from-blue-400 to-cyan-400 dark:from-blue-500 dark:to-cyan-500" },
    { name: "Backend", color: "from-green-400 to-emerald-400 dark:from-green-500 dark:to-emerald-500" },
    { name: "Database", color: "from-purple-400 to-pink-400 dark:from-purple-500 dark:to-pink-500" },
    { name: "Tools & Cloud", color: "from-orange-400 to-red-400 dark:from-orange-500 dark:to-red-500" },
  ];

  const groupedSkills = categories.map((category) => ({
    ...category,
    skills: skills.filter((skill) => skill.category === category.name),
  }));

  return (
    <div
      id="skills"
      className="flex flex-col items-center justify-center py-16 animate-fade-in"
    >
      <div className="flex flex-col transition justify-center items-center rounded-3xl gap-8 p-8 md:p-12 lg:w-2/3 lg:shadow-2xl lg:hover:shadow-emerald-900/50 dark:lg:hover:shadow-indigo-400/50 hover:scale-[1.02] duration-300 w-full">
        <h2 className="w-full text-center py-2 text-3xl lg:text-4xl xl:text-6xl bg-gradient-to-r from-emerald-700 via-teal-600 to-amber-700 dark:from-rose-400 dark:via-pink-400 dark:to-indigo-400 bg-clip-text text-transparent font-semibold">
          Skills & Technologies
        </h2>

        <div className="w-full space-y-12">
          {groupedSkills.map((category) => (
            <div key={category.name} className="space-y-4">
              <h3 className={`text-xl lg:text-2xl font-semibold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.name}
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 md:gap-6">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group flex flex-col items-center gap-2 p-4 rounded-xl bg-white/50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-700 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  >
                    <div className="w-12 h-12 md:w-16 md:h-16 relative">
                      <Image
                        src={skill.iconUrl}
                        alt={skill.name}
                        width={64}
                        height={64}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-xs md:text-sm font-medium text-center group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-emerald-600 group-hover:to-teal-600 dark:group-hover:from-rose-400 dark:group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

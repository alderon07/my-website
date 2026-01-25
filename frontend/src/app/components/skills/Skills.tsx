"use client";

import React from "react";
import Image from "next/image";
import { skills, skillCategories } from "@/app/data/skills";

export default function Skills() {
  const groupedSkills = skillCategories.map((category) => ({
    ...category,
    skills: skills.filter((skill) => skill.category === category.name),
  }));

  return (
    <div
      id="skills"
      className="flex flex-col items-center justify-center py-16 px-4 min-h-screen"
    >
      <section
        className="flex flex-col gap-8 max-w-5xl w-full"
        aria-labelledby="skills-heading"
      >
        {/* Section Header */}
        <div className="flex items-center gap-4">
          <h2
            id="skills-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold gradient-text"
          >
            SKILLS
          </h2>
          <div className="flex-1 h-[2px] bg-gradient-to-r from-cyber-pink to-transparent" />
        </div>

        {/* Skills Grid */}
        <div className="space-y-12">
          {groupedSkills.map((category, categoryIndex) => (
            <div 
              key={category.name} 
              className="space-y-4 animate-slide-up"
              style={{ animationDelay: `${categoryIndex * 0.15}s` }}
            >
              {/* Category Header with XP Bar */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <h3 className={`text-xl md:text-2xl font-heading font-bold text-${category.color}`}>
                    {category.name}
                  </h3>
                  <span className="text-sm font-mono text-cyber-text/60">
                    LVL {Math.floor(parseInt(category.xpWidth) / 10)}
                  </span>
                </div>
                {/* XP Bar - gaming element */}
                <div className="relative h-2 bg-cyber-surface rounded-full overflow-hidden">
                  <div 
                    className={`absolute top-0 left-0 h-full bg-gradient-to-r from-${category.color} to-${category.color}/50 rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: category.xpWidth }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                </div>
              </div>

              {/* Skills List */}
              <ul
                className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-4 list-none"
                role="list"
              >
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skill.name}
                    className="group flex flex-col items-center gap-2 p-4 rounded-xl bg-cyber-surface/50 border border-cyber-cyan/10 hover:border-cyber-cyan/50 transition-all duration-300 hover:scale-110 card-lift cursor-default animate-scale-in"
                    style={{ animationDelay: `${(categoryIndex * 0.15) + (skillIndex * 0.05)}s` }}
                  >
                    <div
                      className="w-12 h-12 md:w-14 md:h-14 relative transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(0,240,255,0.6)]"
                      aria-hidden="true"
                    >
                      <Image
                        src={skill.iconUrl}
                        alt=""
                        width={64}
                        height={64}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-xs md:text-sm font-mono text-center text-cyber-text/80 group-hover:text-cyber-cyan transition-all duration-300">
                      {skill.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

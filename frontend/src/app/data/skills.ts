import type { ComponentType, SVGProps } from "react";
import {
  ClaudeAI,
  CSSNew,
  CursorLight,
  DigitalOcean,
  Docker,
  Git,
  GoLight,
  GoogleCloud,
  HTML5,
  JQueryLight,
  JavaScript,
  MongoDBLight,
  MySQLLight,
  Nextjs,
  Nodejs,
  PostgreSQL,
  ReactLight,
  TailwindCSS,
  TypeScript,
} from "@ridemountainpig/svgl-react";

export type SkillIcon = ComponentType<SVGProps<SVGSVGElement>>;

export interface Skill {
  name: string;
  category: "Frontend" | "Backend" | "Database" | "Tools & Cloud";
  icon?: SkillIcon;
  iconUrl?: string;
}

export interface SkillCategory {
  name: "Frontend" | "Backend" | "Database" | "Tools & Cloud";
  color: string;
  xpWidth: string;
}

export const skills: Skill[] = [
  // Frontend
  {
    name: "JavaScript",
    category: "Frontend",
    icon: JavaScript,
  },
  {
    name: "TypeScript",
    category: "Frontend",
    icon: TypeScript,
  },
  {
    name: "React",
    category: "Frontend",
    icon: ReactLight,
  },
  {
    name: "Next.js",
    category: "Frontend",
    icon: Nextjs,
  },
  {
    name: "HTML5",
    category: "Frontend",
    icon: HTML5,
  },
  {
    name: "CSS3",
    category: "Frontend",
    icon: CSSNew,
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    icon: TailwindCSS,
  },
  {
    name: "jQuery",
    category: "Frontend",
    icon: JQueryLight,
  },
  // Backend
  {
    name: "Node.js",
    category: "Backend",
    icon: Nodejs,
  },
  {
    name: "Go",
    category: "Backend",
    icon: GoLight,
  },
  {
    name: "Perl",
    category: "Backend",
    iconUrl: "/icons/skills/perl-colored.svg",
  },
  {
    name: "Ruby on Rails",
    category: "Backend",
    iconUrl: "https://cdn.simpleicons.org/rubyonrails/CC0000",
  },
  // Database
  {
    name: "PostgreSQL",
    category: "Database",
    icon: PostgreSQL,
  },
  {
    name: "MongoDB",
    category: "Database",
    icon: MongoDBLight,
  },
  {
    name: "MySQL",
    category: "Database",
    icon: MySQLLight,
  },
  // Tools & Cloud
  {
    name: "Docker",
    category: "Tools & Cloud",
    icon: Docker,
  },
  {
    name: "Git",
    category: "Tools & Cloud",
    icon: Git,
  },
  {
    name: "GCP",
    category: "Tools & Cloud",
    icon: GoogleCloud,
  },
  {
    name: "DigitalOcean",
    category: "Tools & Cloud",
    icon: DigitalOcean,
  },
  {
    name: "Hatchbox",
    category: "Tools & Cloud",
    iconUrl: "https://hatchbox.io/apple-touch-icon.png",
  },
  {
    name: "Jira",
    category: "Tools & Cloud",
    iconUrl: "https://cdn.simpleicons.org/jira/0052CC",
  },
  {
    name: "Cursor",
    category: "Tools & Cloud",
    icon: CursorLight,
  },
  {
    name: "Claude Code",
    category: "Tools & Cloud",
    icon: ClaudeAI,
  },
];

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    color: "cyber-cyan",
    xpWidth: "95%",
  },
  {
    name: "Backend",
    color: "cyber-pink",
    xpWidth: "88%",
  },
  {
    name: "Database",
    color: "cyber-lime",
    xpWidth: "82%",
  },
  {
    name: "Tools & Cloud",
    color: "cyber-cyan",
    xpWidth: "90%",
  },
];

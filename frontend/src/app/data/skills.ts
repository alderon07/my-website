export interface Skill {
  name: string;
  category: "Frontend" | "Backend" | "Database" | "Tools & Cloud";
  iconUrl: string;
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
    iconUrl: "/icons/skills/javascript-colored.svg",
  },
  {
    name: "TypeScript",
    category: "Frontend",
    iconUrl: "/icons/skills/typescript-colored.svg",
  },
  {
    name: "React",
    category: "Frontend",
    iconUrl: "/icons/skills/react-colored.svg",
  },
  {
    name: "Next.js",
    category: "Frontend",
    iconUrl: "/icons/skills/nextjs-colored.svg",
  },
  {
    name: "HTML5",
    category: "Frontend",
    iconUrl: "/icons/skills/html5-colored.svg",
  },
  {
    name: "CSS3",
    category: "Frontend",
    iconUrl: "/icons/skills/css3-colored.svg",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    iconUrl: "/icons/skills/tailwindcss-colored.svg",
  },
  {
    name: "jQuery",
    category: "Frontend",
    iconUrl: "/icons/skills/jquery-colored.svg",
  },
  // Backend
  {
    name: "Node.js",
    category: "Backend",
    iconUrl: "/icons/skills/nodejs-colored.svg",
  },
  {
    name: "Go",
    category: "Backend",
    iconUrl: "/icons/skills/go-colored.svg",
  },
  {
    name: "Perl",
    category: "Backend",
    iconUrl: "/icons/skills/perl-colored.svg",
  },
  // Database
  {
    name: "PostgreSQL",
    category: "Database",
    iconUrl: "/icons/skills/postgresql-colored.svg",
  },
  {
    name: "MongoDB",
    category: "Database",
    iconUrl: "/icons/skills/mongodb-colored.svg",
  },
  {
    name: "MySQL",
    category: "Database",
    iconUrl: "/icons/skills/mysql-colored.svg",
  },
  // Tools & Cloud
  {
    name: "Docker",
    category: "Tools & Cloud",
    iconUrl: "/icons/skills/docker-colored.svg",
  },
  {
    name: "Git",
    category: "Tools & Cloud",
    iconUrl: "/icons/skills/git-colored.svg",
  },
  {
    name: "GCP",
    category: "Tools & Cloud",
    iconUrl: "/icons/skills/googlecloud-colored.svg",
  },
  {
    name: "Jira",
    category: "Tools & Cloud",
    iconUrl: "/jira.svg",
  },
  {
    name: "Cursor",
    category: "Tools & Cloud",
    iconUrl: "/cursor.png",
  },
  {
    name: "Claude Code",
    category: "Tools & Cloud",
    iconUrl: "/claude-code.png",
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

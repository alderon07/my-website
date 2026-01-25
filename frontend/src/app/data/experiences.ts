export interface Experience {
  completed: boolean;
  text: string;
}

export const experiences: Experience[] = [
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
    completed: true,
    text: "Led code reviews and contributed to Agile ceremonies, enhancing team velocity and code quality.",
  },
  {
    completed: true,
    text: "Participated in retrospectives that improved internal workflow and reduced deployment time.",
  },
];

export const currentJob = {
  title: "Software Engineer",
  company: "Haley Marketing",
  companyUrl: "https://www.haleymarketing.com",
} as const;

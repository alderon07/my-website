export interface Experience {
  completed: boolean;
  text: string;
}

export const experiences: Experience[] = [
  {
    completed: true,
    text: "Own Career Portal, the client-facing platform that connects job boards like Indeed, Monster, Talroo, and ZipRecruiter to clients' applicant tracking systems through the ATS Connect API. Build and maintain job creation, application intake, and candidate data flow. Built the PCRecruiter connector end to end and remain its sole active author. It handles authentication, candidates, work history, education, applications, resume files, and notes. Extended the same mapping layer to 14 ATS platforms, including Bullhorn, Avionte Bold, TempWorks, RecruiterFlow, and TargetRecruit.",
  },
  {
    completed: true,
    text: "Built Align, a Rails and React reporting platform that combines data from more than seven business systems, including billing, Zoom, Zendesk, and SharePoint. Added API caching to reduce repeated work when reports load. Used Align to correct 57% of client meetings assigned to the wrong accounts and identify about $278K in already-contracted subsidiary billing missing from leadership's monthly recurring revenue reports, bringing reported MRR from $893,739 to $1,172,340. Raised meeting sentiment coverage from 40% to 100%, increasing the rate of valid escalations detected from 0.15% to 4.2%.",
  },
  {
    completed: true,
    text: "Designed AI-assisted engineering workflows with Cursor, custom skills, and MCP integrations to automate routine tasks.",
  },
  {
    completed: true,
    text: "Led production incident response. Restored 181 job boards in about 12 hours after a DNS failure broke database connectivity by rerouting reads to a serverless origin without a schema change. Fixed an Avionte webhook defect that caused 51% of job update events to fail.",
  },
  {
    completed: true,
    text: "Replaced Docker-based Bitbucket runners with Linux shell runners, cutting deployment time by about 40%.",
  },
];

export const currentJob = {
  title: "Full Stack Engineer",
  company: "Haley Marketing",
  companyUrl: "https://www.haleymarketing.com",
} as const;

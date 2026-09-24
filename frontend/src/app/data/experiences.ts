export interface Experience {
  completed: boolean;
  text: string;
}

export const experiences: Experience[] = [
  {
    completed: true,
    text: "Owned Career Portal development, the client-facing job platform linking job board integrations (Indeed, Monster, Talroo, ZipRecruiter, and more) to ATS Connect; build and maintain job creation, application intake, and candidate data flow.",
  },
  {
    completed: true,
    text: "Maintain the PCRecruiter connector as its sole active author, built end to end for authentication, candidates, work history, education, applications, resume files, and notes. Extended the same mapping layer to 14 ATS platforms, including Bullhorn, Avionte Bold, TempWorks, RecruiterFlow, and TargetRecruit.",
  },
  {
    completed: true,
    text: "Led incident response on two production failures: restored 181 job boards returning 503/504 errors in about 12 hours after a DNS failure broke database connectivity, rerouting reads to a serverless origin with no schema change; and fixed an Avionte webhook defect that failed 51% of job update events, confirming recovery via live replay.",
  },
  {
    completed: true,
    text: "Built Align, a Rails and React reporting platform that combines data from more than 7 business systems, including billing, Zoom, Zendesk, and SharePoint. Added cached APIs to reduce repeated work when loading reports.",
  },
  {
    completed: true,
    text: "Audited Align's client-meeting data, corrected 57% of meetings that were mis-assigned to the wrong accounts, and surfaced about $278K in already-contracted subsidiary billing missing from leadership's MRR reporting (visibility rose from $893,739 to $1,172,340). Raised meeting-sentiment coverage from 40% to 100%, increasing valid-escalation detection from 0.15% to 4.2%.",
  },
  {
    completed: true,
    text: "Added safeguards to the application pipeline after recurring production failures: Indeed and Monster get an immediate confirmation before slower work runs, bot traffic is throttled at 20 requests/minute and 200/hour, slow requests are logged without storing full payloads, and automated health checks run every 5 minutes.",
  },
  {
    completed: true,
    text: "Replaced Docker-based Bitbucket runners with Linux shell runners, cutting deployment time by about 40%.",
  },
];

export const currentJob = {
  title: "Software Engineer",
  company: "Haley Marketing",
  companyUrl: "https://www.haleymarketing.com",
} as const;

import Link from "next/link";

type Style = { style: string };

export default function Socials({ style }: Style) {
  const linkedinUrl = process.env.NEXT_PUBLIC_LINKEDIN_URL;

  return (
    <>
      <li id="github" className={`${style} hover:scale-110`}>
        <Link
          href="https://github.com/alderon07"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Naqi's GitHub profile (opens in new tab)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="stoke-2 h-5 w-5 stroke-current"
            aria-hidden="true"
          >
            <title>Github</title>
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </Link>
      </li>
      {linkedinUrl ? (
        <li id="linkedin" className={`${style} hover:scale-110`}>
          <Link
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Naqi's LinkedIn profile (opens in new tab)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <title>LinkedIn</title>
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </Link>
        </li>
      ) : null}
    </>
  );
}

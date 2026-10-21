import React from "react";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
});

export default function LinksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // The name heading selects its own font based on COLRv1 support.
  return <div className={spaceGrotesk.className}>{children}</div>;
}


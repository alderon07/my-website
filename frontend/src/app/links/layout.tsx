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
  // Apply a more distinctive font to the links page only.
  // Your Nabla name mark still uses `font-nabla` on the h1 and will override this.
  return <div className={spaceGrotesk.className}>{children}</div>;
}


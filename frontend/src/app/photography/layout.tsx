import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photography",
  description: "A collection of moments captured through my lens. Explore my photography portfolio featuring landscapes, portraits, and creative shots.",
  openGraph: {
    title: "Photography | Naqi Haider",
    description: "A collection of moments captured through my lens.",
    images: [
      {
        url: "/photography/DSCF3789.jpg",
        width: 1200,
        height: 800,
        alt: "Photography by Naqi Haider",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Photography | Naqi Haider",
    description: "A collection of moments captured through my lens.",
    images: ["/photography/DSCF3789.jpg"],
  },
};

export default function PhotographyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


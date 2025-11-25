import React from "react";
import type { Metadata } from "next";
import { Rubik, Nabla } from "next/font/google";
import { ThemeProvider } from "./components/ThemeProvider";
import "./globals.css";

const rubik = Rubik({
  variable: "--rubik-font",
  subsets: ["latin"],
  display: "swap",
});

const nabla = Nabla({
  variable: "--nabla-font",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Naqi Haider - Software Developer",
  description: "Software Developer passionate about building full-stack applications with TypeScript, Go, and Next.js",
  keywords: ["Software Developer", "Full Stack", "TypeScript", "Go", "Next.js", "React"],
  authors: [{ name: "Naqi Haider" }],
  openGraph: {
    title: "Naqi Haider - Software Developer",
    description: "Software Developer passionate about building full-stack applications",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${rubik.variable} ${nabla.variable} font-rubik antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}


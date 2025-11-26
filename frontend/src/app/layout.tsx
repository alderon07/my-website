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
  metadataBase: new URL('https://naqihaider.vercel.app'),
  title: {
    default: "Naqi Haider - Software Developer & Photographer",
    template: "%s | Naqi Haider"
  },
  description: "Software developer specializing in full-stack applications with TypeScript, Go, Next.js, and React. Building modern web experiences with a passion for clean code and photography.",
  keywords: [
    "Naqi Haider",
    "Software Developer",
    "Full Stack Developer",
    "TypeScript",
    "JavaScript",
    "Go",
    "Golang",
    "Next.js",
    "React",
    "Node.js",
    "PostgreSQL",
    "MongoDB",
    "Web Development",
    "Frontend Developer",
    "Backend Developer",
    "Portfolio",
    "Photographer"
  ],
  authors: [{ name: "Naqi Haider", url: "https://naqihaider.vercel.app" }],
  creator: "Naqi Haider",
  publisher: "Naqi Haider",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://naqihaider.vercel.app",
    siteName: "Naqi Haider Portfolio",
    title: "Naqi Haider - Software Developer & Photographer",
    description: "Software developer specializing in full-stack applications with TypeScript, Go, Next.js, and React. Building modern web experiences with a passion for clean code and photography.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Naqi Haider - Software Developer",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Naqi Haider - Software Developer & Photographer",
    description: "Software developer specializing in full-stack applications with TypeScript, Go, Next.js, and React.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when you get them
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#059669" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${rubik.variable} ${nabla.variable} font-rubik antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}


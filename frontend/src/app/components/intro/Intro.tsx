"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Intro() {
  const [displayText, setDisplayText] = useState("");
  const fullText = "I build dope things.";
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setIsTypingComplete(true);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden">
      {/* Floating geometric shapes - video game aesthetic */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Triangle */}
        <div className="floating-shape absolute top-20 left-10 w-16 h-16 border-2 border-cyber-cyan rotate-45" style={{ animationDelay: '0s' }} />
        {/* Circle */}
        <div className="floating-shape absolute top-40 right-20 w-12 h-12 border-2 border-cyber-pink rounded-full" style={{ animationDelay: '-2s' }} />
        {/* Square */}
        <div className="floating-shape absolute bottom-40 left-20 w-10 h-10 border-2 border-cyber-lime" style={{ animationDelay: '-4s' }} />
        {/* Cross */}
        <div className="floating-shape absolute bottom-20 right-10 text-4xl text-cyber-cyan opacity-20" style={{ animationDelay: '-1s' }}>+</div>
        {/* Diamond */}
        <div className="floating-shape absolute top-1/3 left-1/4 w-8 h-8 border-2 border-cyber-pink rotate-45" style={{ animationDelay: '-3s' }} />
        {/* Small circles */}
        <div className="floating-shape absolute top-1/2 right-1/4 w-4 h-4 bg-cyber-lime/20 rounded-full" style={{ animationDelay: '-5s' }} />
      </div>

      <section
        className="flex grow flex-col items-center justify-center px-4 md:px-8 py-16 animate-fade-in relative z-10"
        aria-labelledby="intro-heading"
      >
        <div className="flex flex-col justify-center items-center gap-8 px-8 py-10 md:px-16 md:py-14 lg:px-20 lg:py-16 rounded-2xl glass-card pixel-shadow-cyan hover-glow transition-all duration-500 max-w-4xl w-full">
          
          {/* Text Content */}
          <div className="flex flex-col gap-4 items-center text-center">
            <p className="text-lg font-mono uppercase tracking-[0.3em] text-cyber-text/80 animate-slide-up md:text-xl">
              Hello, my name is
            </p>
            
            {/* Glitch Name */}
            <h1
              id="intro-heading"
              className="glitch-text text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-heading font-bold tracking-wider"
              data-text="NAQI"
            >
              <span className="gradient-text">NAQI</span>
            </h1>

            {/* Profile Picture with rotating neon border */}
            <div className="w-full max-w-xs md:max-w-sm py-6 flex justify-center items-center">
              <div className="relative group">
                {/* Rotating glow ring */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyber-cyan via-cyber-pink to-cyber-lime rounded-3xl blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-500 animate-gradient bg-[length:200%_200%]" />
                
                {/* Inner container */}
                <div className="relative p-1 rounded-3xl bg-gradient-to-r from-cyber-cyan via-cyber-pink to-cyber-lime animate-gradient bg-[length:200%_200%]">
                  <Image
                    className="rounded-3xl object-cover w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 relative z-10 bg-cyber-black"
                    src="/me-square.jpg"
                    alt="Portrait of Naqi, software developer"
                    quality={100}
                    width={300}
                    height={300}
                    priority
                  />
                </div>

                {/* Corner decorations - gaming HUD style */}
                <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-cyber-cyan" />
                <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-cyber-cyan" />
                <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-cyber-pink" />
                <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-cyber-pink" />
              </div>
            </div>

            {/* Typing Animation Tagline */}
            <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-mono text-cyber-text animate-slide-up">
              <span className="text-cyber-cyan">&gt;</span>{" "}
              <span>{displayText}</span>
              <span className={`${isTypingComplete ? 'animate-typing-cursor' : ''} text-cyber-pink`}>_</span>
            </p>
          </div>

          {/* Scroll indicator */}
          <div className="mt-8 animate-float">
            <div className="flex flex-col items-center gap-2 text-cyber-text/50">
              <span className="text-xs uppercase tracking-widest">Scroll</span>
              <svg 
                className="w-6 h-6 animate-bounce text-cyber-cyan" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

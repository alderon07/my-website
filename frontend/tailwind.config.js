/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/app/**/*.{ts,tsx,js,jsx}",
    "./src/components/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Cyberpunk color palette
        cyber: {
          black: "#0a0a0f",
          surface: "#12121a",
          cyan: "#00f0ff",
          pink: "#ff00aa",
          lime: "#b8ff00",
          text: "#e0e0ff",
          "cyan-dim": "#00a0aa",
          "pink-dim": "#aa0077",
        },
      },
      fontFamily: {
        heading: ["var(--orbitron-font)", ...fontFamily.sans],
        mono: ["var(--jetbrains-font)", ...fontFamily.mono],
        nabla: ["var(--nabla-font)", ...fontFamily.mono],
      },
      animation: {
        'gradient': 'gradient 8s ease infinite',
        'fade-in': 'fadeIn 0.8s ease-in forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'glitch': 'glitch 0.3s ease-in-out infinite',
        'glitch-skew': 'glitchSkew 1s ease-in-out infinite',
        'neon-pulse': 'neonPulse 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'border-glow': 'borderGlow 3s linear infinite',
        'typing-cursor': 'typingCursor 1s step-end infinite',
        'rotate-glow': 'rotateGlow 4s linear infinite',
        'scanline': 'scanline 8s linear infinite',
        'text-shimmer': 'textShimmer 3s ease-in-out infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          from: { opacity: '0', transform: 'scale(0.9)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        glitchSkew: {
          '0%, 100%': { transform: 'skew(0deg)' },
          '20%': { transform: 'skew(-2deg)' },
          '40%': { transform: 'skew(2deg)' },
          '60%': { transform: 'skew(-1deg)' },
          '80%': { transform: 'skew(1deg)' },
        },
        neonPulse: {
          '0%, 100%': { 
            boxShadow: '0 0 5px currentColor, 0 0 10px currentColor, 0 0 20px currentColor',
            opacity: '1'
          },
          '50%': { 
            boxShadow: '0 0 10px currentColor, 0 0 20px currentColor, 0 0 40px currentColor',
            opacity: '0.8'
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        borderGlow: {
          '0%, 100%': { 
            borderColor: '#00f0ff',
            boxShadow: '0 0 10px #00f0ff, inset 0 0 10px rgba(0, 240, 255, 0.1)'
          },
          '50%': { 
            borderColor: '#ff00aa',
            boxShadow: '0 0 10px #ff00aa, inset 0 0 10px rgba(255, 0, 170, 0.1)'
          },
        },
        typingCursor: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        rotateGlow: {
          '0%': { 
            background: 'conic-gradient(from 0deg, #00f0ff, #ff00aa, #b8ff00, #00f0ff)'
          },
          '100%': { 
            background: 'conic-gradient(from 360deg, #00f0ff, #ff00aa, #b8ff00, #00f0ff)'
          },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        textShimmer: {
          '0%, 100%': { 
            backgroundPosition: '0% 50%'
          },
          '50%': { 
            backgroundPosition: '100% 50%'
          },
        },
      },
      boxShadow: {
        'pixel-cyan': '4px 4px 0 #00f0ff',
        'pixel-pink': '4px 4px 0 #ff00aa',
        'pixel-lime': '4px 4px 0 #b8ff00',
        'glow-cyan': '0 0 20px rgba(0, 240, 255, 0.5)',
        'glow-pink': '0 0 20px rgba(255, 0, 170, 0.5)',
        'glow-lime': '0 0 20px rgba(184, 255, 0, 0.5)',
      },
    },
  },
  plugins: [],
};

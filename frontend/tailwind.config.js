/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{ts,tsx,js,jsx}",
    "./src/components/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        rust: "#aba293",
      },
      fontFamily: {
        mono: ["var(--rubik-font)", ...fontFamily.mono],
        nabla: ["var(--nabla-font)", ...fontFamily.mono],
      },
    },
  },
  plugins: [],
};

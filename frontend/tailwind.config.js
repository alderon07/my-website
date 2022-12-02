/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{ts,tsx,js,jsx}",
    "./src/components/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['var(--font-robotoMono)', ...fontFamily.mono],
      },
    },
  },
  plugins: [],
}

import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      container: {
        center: true,
        padding: "1rem",
      },
      colors: {
        alpha: '#FF7251',
      },
      fontFamily: {
        alpha: ['var(--font-manrope)'],
        beta: ['var(--font-play-fair)'],
        inter: ['var(--font-inter)'],
      },
      backgroundImage: {
        'info-pattern': "url('/img/info-bg-strip.webp')",
      }
    },
  },
  darkMode: "class",
  plugins: [
    require('@tailwindcss/forms'),
    nextui(),
  ],
};

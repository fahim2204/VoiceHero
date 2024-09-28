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
        alpha: {
          DEFAULT: '#ff7251',
          '50': '#fff4f1',
          '100': '#ffe7e1',
          '200': '#ffd2c7',
          '300': '#ffb2a0',
          '400': '#ff7251',
          '500': '#f85f3b',
          '600': '#e5431d',
          '700': '#c13514',
          '800': '#a02f14',
          '900': '#842c18',
          '950': '#481307',
        },
        beta: {
          DEFAULT: '#fbf3dd',
          '50': '#fbf3dd',
          '100': '#f8edcd',
          '200': '#f1d996',
          '300': '#eac05f',
          '400': '#e4aa3b',
          '500': '#dc8c24',
          '600': '#c36a1c',
          '700': '#a24c1b',
          '800': '#843c1c',
          '900': '#6d321a',
          '950': '#3e190a',
        },
        gamma: "#FFECF1",
        delta: {
          DEFAULT: "#9b2948",
          100: "#ebd4da",
          200: "#d7a9b6",
          300: "#c37f91",
          400: "#af546d",
          500: "#9b2948",
          600: "#7c213a",
          700: "#5d192b",
          800: "#3e101d",
          900: "#1f080e"
        },
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
    nextui({
      themes: {
        light: {
          colors: {
            primary: {
              foreground: "#FFFFFF",
              DEFAULT: "#ff7251",
            },
            secondary: {
              foreground: "#000000",
              DEFAULT: "#f4f4f5",
            },
          },
        },
        dark: {
          colors: {
            primary: {
              foreground: "#FFFFFF",
              DEFAULT: "#ff7251",
            },
            secondary: {
              foreground: "#000000",
              DEFAULT: "#f4f4f5",
            },
          },
        },
      },
    }),
  ],
};

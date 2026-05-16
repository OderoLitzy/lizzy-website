import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          primary: "#0f766e",
          light: "#14b8a6",
          dark: "#0d5c57",
        },
        amber: {
          accent: "#d97706",
          light: "#f59e0b",
        },
        stone: {
          bg: "#fafaf9",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;

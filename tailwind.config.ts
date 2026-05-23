import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./hooks/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          section: "#f0fdfa",
          hero: "#fffbeb",
          footer: "#1c1917",
        },
        text: {
          body: "#44403c",
        },
        teal: {
          primary: "#0f766e",
          light: "#14b8a6",
          dark: "#0d5c57",
        },
        amber: {
          accent: "#b45309",
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
      fontSize: {
        "editorial-sm": ["clamp(3rem,6vw,5rem)", { lineHeight: "1.05" }],
        "editorial-md": ["clamp(4rem,8vw,6.5rem)", { lineHeight: "1" }],
        "editorial-lg": ["clamp(5rem,10vw,8rem)", { lineHeight: "0.95" }],
        "editorial-xl": ["clamp(5.5rem,12vw,8rem)", { lineHeight: "0.9" }],
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        fadeSlideUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeSlideIn: {
          from: { opacity: "0", transform: "translateX(-20px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideInRight: {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(0)" },
        },
      },
      animation: {
        "marquee": "marquee 25s linear infinite",
        "fade-slide-up": "fadeSlideUp 0.6s ease-out both",
        "fade-slide-in": "fadeSlideIn 0.4s ease-out both",
        "fade-in-up": "fadeInUp 0.5s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;

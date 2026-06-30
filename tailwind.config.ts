import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#222222",
        navy: "#222222", // Replacing Navy with Dark Gray for consistency
        steel: "#7B7B7B", // Medium gray
        ivory: "#F8F8F8", // Off-white
        mist: "#F8F8F8",
        pearl: "#ffffff",
        haitiBlue: "#1e3a8a", // Keep if used for flags
        haitiRed: "#991b1b", // Keep if used for flags
        gold: "#A8872A", // Keep as accent
        goldLight: "#C4A44A",
      },
      boxShadow: {
        soft: "0 10px 40px -10px rgba(2, 6, 23, 0.08)",
        strong: "0 20px 40px -10px rgba(2, 6, 23, 0.15)",
        premium: "0 25px 50px -12px rgba(168, 135, 42, 0.15), 0 0 20px rgba(13, 21, 38, 0.05)",
      },
      backgroundImage: {
        "hero-light":
          "radial-gradient(circle at top right, rgba(168, 135, 42, 0.08), transparent 50%), linear-gradient(to bottom right, #FFFFFF, #F7F5F0)",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
      }
    },
  },
  plugins: [],
};

export default config;

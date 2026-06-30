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
        // ── Palette officielle ──────────────────────────
        primary:   "#222222",  // Textes principaux, fonds sombres
        secondary: "#7B7B7B",  // Textes secondaires, sous-titres
        tertiary:  "#F8F8F8",  // Fonds de sections claires
        // Accent or diplomatique
        gold:      "#A8872A",
        goldLight: "#C4A44A",
        // ── Aliases (compatibilité code existant) ────────
        ink:   "#222222",
        navy:  "#222222",
        steel: "#7B7B7B",
        ivory: "#F8F8F8",
        mist:  "#F8F8F8",
        pearl: "#FFFFFF",
      },
      boxShadow: {
        soft:    "0 10px 40px -10px rgba(34, 34, 34, 0.08)",
        strong:  "0 20px 40px -10px rgba(34, 34, 34, 0.15)",
        premium: "0 25px 50px -12px rgba(168, 135, 42, 0.12), 0 0 20px rgba(34, 34, 34, 0.05)",
      },
      backgroundImage: {
        "hero-light":
          "radial-gradient(circle at top right, rgba(168, 135, 42, 0.06), transparent 50%), linear-gradient(to bottom right, #FFFFFF, #F8F8F8)",
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

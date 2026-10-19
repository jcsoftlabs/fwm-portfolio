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
        // ── Site public (thème clair en relief) ──────────
        paper:   "#ECF0F3",  // Fond général
        heading: "#3C3E41",  // Titres
        body:    "#4F535A",  // Texte courant
        muted:   "#7E848C",  // Texte secondaire
        line:    "#DCE1E4",  // Séparateurs
        // Accent rouge (une seule valeur à changer pour une autre couleur)
        accent:     "#FF014F",
        accentDark: "#D10041",
        // ── Palette officielle ──────────────────────────
        primary:   "#222222",
        secondary: "#7B7B7B",
        tertiary:  "#F8F8F8",
        gold:      "#A8872A",
        goldLight: "#C4A44A",
        // ── Aliases (compatibilité admin) ────────────────
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
        neu:     "5px 5px 15px #D1D9E6, -5px -5px 15px #FFFFFF",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
      },
      animation: {
        blink: "blink 1s step-end infinite",
      },
    },
  },
  plugins: [],
};

export default config;

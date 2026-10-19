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
        gold:      "#C9A24B",
        goldLight: "#F1D58A",
        goldDeep:  "#8A6A1F",
        // ── Site public (thème nuit) ─────────────────────
        night:     "#07070A",
        onyx:      "#0E0E13",
        graphite:  "#17171F",
        // ── Aliases (compatibilité code existant / admin) ─
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
        glow:    "0 0 0 1px rgba(201, 162, 75, 0.25), 0 20px 60px -15px rgba(201, 162, 75, 0.45)",
        "glow-lg": "0 0 80px -10px rgba(201, 162, 75, 0.55)",
      },
      backgroundImage: {
        "hero-light":
          "radial-gradient(circle at top right, rgba(168, 135, 42, 0.06), transparent 50%), linear-gradient(to bottom right, #FFFFFF, #F8F8F8)",
        "gold-metal":
          "linear-gradient(110deg, #8A6A1F 0%, #F1D58A 25%, #C9A24B 45%, #FFF1C1 55%, #C9A24B 70%, #8A6A1F 100%)",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
        "4xl": "2rem",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "200% center" },
          "100%": { backgroundPosition: "-200% center" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        aurora: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(8%, -6%) scale(1.15)" },
          "66%": { transform: "translate(-6%, 6%) scale(0.92)" },
        },
        spin: {
          to: { transform: "rotate(360deg)" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.4", transform: "scale(0.7)" },
        },
        "scroll-hint": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(200%)" },
        },
      },
      animation: {
        shimmer: "shimmer 6s linear infinite",
        marquee: "marquee 40s linear infinite",
        float: "float 7s ease-in-out infinite",
        aurora: "aurora 18s ease-in-out infinite",
        "spin-slow": "spin 18s linear infinite",
        "spin-slower": "spin 40s linear infinite",
        "pulse-dot": "pulse-dot 2s ease-in-out infinite",
        "scroll-hint": "scroll-hint 2s cubic-bezier(0.65, 0, 0.35, 1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;

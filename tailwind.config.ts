import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        nebula: {
          bg: "#060810",
          surface: "#0d1117",
          card: "#111827",
          blue: "#3b82f6",
          purple: "#a78bfa",
          text: "#f1f5f9",
          muted: "#94a3b8",
          border: "rgba(255,255,255,0.07)"
        }
      },
      boxShadow: {
        glow: "0 0 42px rgba(59,130,246,0.32)"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-syne)", "sans-serif"],
        contact: ["var(--font-barlow)", "sans-serif"]
      },
      backgroundImage: {
        "nebula-gradient": "linear-gradient(135deg, #3b82f6 0%, #a78bfa 100%)"
      }
    }
  },
  plugins: []
};

export default config;

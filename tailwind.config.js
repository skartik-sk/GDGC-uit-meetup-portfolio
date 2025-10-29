import { PRIMARY_COLOR } from "./src/config/theme.js";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary color imported from theme.js - change it there!
        primary: PRIMARY_COLOR,
        "background-light": "#f9f9f9",
        "background-dark": "#0f1823",
        charcoal: "#2D2D2D",
        "charcoal-dark": "#E9E9E9",
        "neutral-light": "#E9E9E9",
        "neutral-dark": "#3a3a3a",
        "molten-teal": PRIMARY_COLOR,
        "accent-cyan": "#12B8D3",
        "accent-green": "#23C552",
      },
      fontFamily: {
        display: ["Inter", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
        full: "9999px",
      },
      boxShadow: {
        molten:
          "0 10px 15px -3px rgba(9, 58, 62, 0.2), 0 4px 6px -4px rgba(9, 58, 62, 0.1)",
        subtle: "0 4px 12px 0 rgba(0, 0, 0, 0.05)",
        lifted:
          "0 10px 20px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      },
      animation: {
        pulse: "pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "molten-blob-1": "molten-blob-1 20s infinite ease-in-out",
        "molten-blob-2": "molten-blob-2 22s infinite ease-in-out",
      },
      keyframes: {
        pulse: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "0.8" },
        },
        "molten-blob-1": {
          "0%, 100%": {
            transform: "translate(0px, 0px) scale(1)",
            filter: "blur(20px)",
          },
          "25%": {
            transform: "translate(150px, -50px) scale(1.1)",
            filter: "blur(22px)",
          },
          "50%": {
            transform: "translate(50px, 50px) scale(0.9)",
            filter: "blur(25px)",
          },
          "75%": {
            transform: "translate(-100px, 20px) scale(1.05)",
            filter: "blur(18px)",
          },
        },
        "molten-blob-2": {
          "0%, 100%": {
            transform: "translate(0px, 0px) scale(1)",
            filter: "blur(18px)",
          },
          "25%": {
            transform: "translate(-80px, 60px) scale(0.95)",
            filter: "blur(24px)",
          },
          "50%": {
            transform: "translate(100px, -20px) scale(1.1)",
            filter: "blur(20px)",
          },
          "75%": {
            transform: "translate(20px, -70px) scale(0.9)",
            filter: "blur(26px)",
          },
        },
      },
    },
  },
  plugins: [],
};

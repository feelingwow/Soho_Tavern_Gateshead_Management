/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  // tailwind.config.js (only showing theme.extend part)
  theme: {
    extend: {
      colors: {
        burgundy: "#581C24",
        gold: "#D4AF37",
        cream: "#FDF6EC",
        dark: "#2E2E2E",
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 0px rgba(212,175,55,0.0)" },
          "50%": { boxShadow: "0 10px 30px rgba(212,175,55,0.12)" },
          "100%": { boxShadow: "0 0 0px rgba(212,175,55,0.0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.6s ease-out",
        float: "float 4s ease-in-out infinite",
        glow: "glow 2.6s ease-in-out infinite",
      },
    },
  },

  plugins: [],
};

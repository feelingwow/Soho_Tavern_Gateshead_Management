/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
   theme: {
    extend: {
      colors: {
        burgundy: "#581C24",
        cream: "#FDF6EC",
        gold: "#D4AF37",
      },
    },
  },
  plugins: [],
};

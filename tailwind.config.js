/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      animation: {
        fade: "fade 1.2s ease-in-out",
      },
      keyframes: {
        fade: {
          "0%": { opacity: 0 },
          "20%": { opacity: 1 },
          "80%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};

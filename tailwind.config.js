/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "Secondary-Navbar": "#1E2640",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        medium: "0.9375rem",
        small: "0.8125rem",
      },
    },
  },
  plugins: [],
};

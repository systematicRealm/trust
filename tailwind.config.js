/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        "10v": "10vh",
        "20v": "20vh",
        "30v": "30vh",
        "40v": "40vh",
        "50v": "50vh",
        "60v": "60vh",
        "70v": "70vh",
        "80v": "80vh",
        "90v": "90vh",
        "100v": "100vh",
        "200v": "200vh",
      },
      colors: {
        "theme-yellow": "#fca518",
        "theme-red": "#BC4141",
        "transparent-black": "rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};

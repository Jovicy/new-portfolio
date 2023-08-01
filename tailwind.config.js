/** @type {import('tailwindcss').Config} */
/*eslint-env node*/
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#1c1c1c",
        secondary: "#aaa6c3",
        tertiary: "#282a2d",
        "black-100": "#17181b",
        "black-200": "#1c1c1c",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/src/assets/hero-image.jpg')",
      },
    },
  },
  plugins: [],
};
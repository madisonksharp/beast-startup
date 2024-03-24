/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      blue: "#93c5fd",
      purple: "#c4b5fd",
      pink: "#fbcfe8",
      orange: "#fed7aa",
      green: "#a7f3d0",
      yellow: "#fef9c3",
      "gray-dark": "#273444",
      gray: "#d4d4d4",
      "gray-light": "#d3dce6",
      white: "#f8fafc",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {},
  },
  plugins: [],
};

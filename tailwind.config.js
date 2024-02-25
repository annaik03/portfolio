/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "red-gray": "#ebe7e7",
        "light-navy": "#002a4a",
      },
    },
    fontFamily: {
      jost: ["Jost", "san-selif"],
    },
  },
  plugins: [],
};

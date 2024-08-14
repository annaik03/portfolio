const {
  iconsPlugin,
  getIconCollections,
} = require("@egoist/tailwindcss-icons");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "red-gray": "#ebe7e7",
        "light-navy": "#002a4a",
        orange: "#F2A346",
        silver: "#c0c0c0",
      },
    },
    fontFamily: {
      jost: ["Jost", "san-selif"],
      notosans: ["Noto Sans Japanese", "san-selif"],
    },
  },
  plugins: [
    iconsPlugin({
      collections: getIconCollections(["grommet-icons", "mi"]),
    }),
  ],
};

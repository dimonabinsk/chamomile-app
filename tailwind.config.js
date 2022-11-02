/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      "bk-bt": [ "Futura Bk BT", "sans-serif" ],
      "bk-rt": ["Futura Bk RT", "sans-serif"],
      "md-bt": ["Futura Md BT", "sans-serif"],
      "miama": ["Miama Nueva", "serif"]
    },
    colors: {
      "white-300":"#f7f7f7",
      "main-black": "#0f172a",
      "main-black-body": "#252850",
      "graphite": "#1c1c1c",
      "gray-900":"#777777",
      "gray-600": "#c4c4c4",
      "gray-300": "#e5e5e5",
      "gray-100": "#f7f7f7",
      "green-900": "#4E7440",
      "green-600": "#608951",
      "green-300" : "#79a668",
      "green-100": "#00cc00",
      "gold":"#ffd700",
      "sun": "#ff8c00",
    },
    
    extend: {
      screens: {
        "3xl": "1600px",
        "4xl": "1900px",
      },
      
    },
  },
  plugins: [],
});

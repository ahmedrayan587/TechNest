const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", ...fontFamily.sans], // Set Roboto as the default sans-serif font
      },
    },
  },
  plugins: [],
};
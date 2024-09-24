const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", flowbite.content()],
  theme: {
    extend: {
      screens: {
        xxs: "425px",
        xs: "320px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        tech: "540px",
        xl: "1200px",
        "2xl": "1536px",
        "3xl": "1700px",
      },
      fontFamily: {
        playfair: ['"Playfair Display"', "serif"],
        raleway: ['"Raleway"', "sans-serif"],
      },
      spacing: {
        5: "20px", // Equivalent to the grid-gap: 20px;
      },
      letterSpacing: {
        wide: "1px",
        wider: "2px",
      },
      wordSpacing: {
        wide: "1px",
      },
      colors: {
        "gray-800": "#222",
        "gray-600": "#444",
        "gray-300": "#ccc",
        "gray-50": "#f8f8f8",
      },
    },
  },
  plugins: [
    // ...
    flowbite.plugin(),
    require("daisyui"),
  ],
};

// const flowbite = require("flowbite-react/tailwind");

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     // ...
//     flowbite.content(),
//   ],
//   plugins: [
//     // ...
//     flowbite.plugin(),
//   ],
// };

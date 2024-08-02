const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    flowbite.content(),

  ],
  theme: {
    extend: {   
      screens: {
      xxs: "425px",
      xs: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      tech: "540px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl":"1700px",
    },
  },
  },
  plugins: [
        // ...
        flowbite.plugin(),
      ],
}


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
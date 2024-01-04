/* eslint-disable no-undef */
const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
    //   colors: {
    //     'azure-radiance': {
    //       '50': '#edf8ff',
    //       '100': '#d7edff',
    //       '200': '#b9e1ff',
    //       '300': '#88d0ff',
    //       '400': '#50b5ff',
    //       '500': '#2893ff',
    //       '600': '#1677ff',
    //       '700': '#0a5ceb',
    //       '800': '#0f4abe',
    //       '900': '#134295',
    //       '950': '#112a5a',
    //   },
      
    // },
    },
  },
  plugins: [],
});

const whitelist = ["bg-white", "bg-black", "text-black", "text-white"];
const whitelistPatterns = [/^mt/, /^mb/, /^pt/, /^pb/, /^w/];
const { screens } = require('tailwindcss/defaultTheme');

module.exports = {
  purge:  { 
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    options: {
      safelist: whitelist.concat(whitelistPatterns),
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      mxl: {'max': '1279px'},
      mlg: {'max': '1023px'},
      mmd: {'max': '767px'},
      msm: {'max': '667px'},

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',

    },

    extend:{
      margin:{
        '1p' : "10%",
        '2p' : "20%",
        '3p' : "30%",
        '4p' : "40%",
        '5p' : "50%",
        '6p' : "60%",
        '7p' : "70%",
        '8p' : "80%",
        '9p' : "90%",
        '-1p' : "-10%",
        '-2p' : "-20%",
        '-3p' : "-30%",
        '-4p' : "-40%",
        '-5p' : "-50%",
        '-6p' : "-60%",
        '-7p' : "-70%",
        '-8p' : "-80%",
        '-9p' : "-90%",
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
  important: true, // for mobile breakpoints ** MAY BREAK STUFF
}

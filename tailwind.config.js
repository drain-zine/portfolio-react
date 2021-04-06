const whitelist = ["bg-white", "bg-black", "text-black", "text-white"];
const whitelistPatterns = [/^mt/, /^mb/, /^pt/, /^pb/];

module.exports = {
  purge:  { 
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    options: {
      safelist: whitelist.concat(whitelistPatterns),
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

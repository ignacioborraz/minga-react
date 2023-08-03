/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
    },
    backgroundImage: {
      mangas: "url('/img/mangas.png')"
    }
  },
  variants: {},
  plugins: [],
};

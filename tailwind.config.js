/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins",
        rancho: "Rancho"
      }
    },
  },

  plugins: [require('daisyui')],
  daisyui: {
    themes: ["light","dim"],
  },
}
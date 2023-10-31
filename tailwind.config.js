/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {    
      colors: {
      'verde': "#219653"
    },
    screens: {
      'sc': '330px'
    }
  },

  },
  plugins: [],
}

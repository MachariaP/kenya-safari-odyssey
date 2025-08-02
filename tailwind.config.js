/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'safari-sand': '#F5E9D4', // Warm, sandy background
        'safari-green': '#3A5F3F', // Deep, natural green
        'safari-brown': '#8B4513', // Rich, earthy brown
        'safari-accent': '#DAA520', // Golden accent for highlights
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

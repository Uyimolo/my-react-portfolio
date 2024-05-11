/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
        Lobster: ['Lobster Two', 'Poppins', 'san-serif'],
      },
      colors: {
        'hero-bg': '#1E2125',
        'hero-text': '#E9DFCE',
      },
    },
  },
  plugins: [],
};

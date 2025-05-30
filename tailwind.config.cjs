/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'mi-azul': '#1E40AF',
        'mi-verde': '#10B981',
      },
      boxShadow: {
        'menu-shadow': '4px 0 10px rgba(0, 0, 0, 0.1)',
        'rojo-lg': '0 4px 6px rgba(255, 0, 0, 0.5)',
      },
      animation: {
        fadeInDown: 'fadeInDown 1s ease forwards',
      },
      keyframes: {
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},

    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },

    colors: {
      primary:{
        100:'#e56333',
        500:'#7d4235',
      },
      black: '#000',
      white: '#fff',
      gray: {
        100: '#f7fafc',
        50:'#ffff',
        // ...
        900: '#1a202c',
        10:'#596392'
      },
      purple: {
        '700': '#6B46C1'
      }
    },

  },
  plugins: [],
}
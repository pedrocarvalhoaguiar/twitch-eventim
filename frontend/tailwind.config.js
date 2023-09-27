/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'gray': colors.gray,
      'blue': colors.blue,
      'red': colors.rose,
      'pink': colors.fuchsia,
      'green': colors.green,
      'malibu': {
        '50': '#edf1ff',
        '100': '#dee4ff',
        '200': '#c4ccff',
        '300': '#a1aaff',
        '400': '#8789fe',
        '500': '#655cf8',
        '600': '#553eed',
        '700': '#4931d1',
        '800': '#3c2aa9',
        '900': '#342a85',
        '950': '#20194d',
    },
    
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}


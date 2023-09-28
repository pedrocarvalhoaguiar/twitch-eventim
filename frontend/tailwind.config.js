/** @type {import('tailwindcss').Config} */
import defaultColors from 'tailwindcss/colors'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    colors: {
      ...defaultColors,
      'gray': defaultColors.gray,
      'blue': defaultColors.blue,
      'red': defaultColors.rose,
      'pink': defaultColors.fuchsia,
      'green': defaultColors.green,
      'white': defaultColors.white,
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
  plugins: [require("tw-elements/dist/plugin.cjs")],
}


const colors = require('tailwindcss/colors');

const config = {
  content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/tw-elements/dist/js/**/*.js'],

  theme: {


  },
  variants: {
    extend: { typography: ['dark'], translate: ['group-hover'] }
  },


  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('daisyui')
  ],
  daisyui: {
    themes: [
      'light',
      'dracula'
    ],

  },
};

module.exports = config;

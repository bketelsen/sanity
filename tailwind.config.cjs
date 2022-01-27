const colors = require('tailwindcss/colors');

const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      fontFamily: {
        'open-sans': 'Open Sans, sans-serif',
        'source-sans-pro': 'Source Sans pro, sans-serif'
      },
      lineHeight: {
        14: '3rem'
      },
      colors: {
        "light": {
          "0": "#FFFFFF",
          "100": "#E9F1FD",
          "200": "#D3E3FA",
          "300": "#BCD5F8",
          "400": "#A6C7F5",
          "500": "#90B9F3",
          "600": "#7AABF0",
          "700": "#649DEE",
          "800": "#4D8FEB",
          "900": "#3781E9",
          "1000": "#2173E6"
        },
        "dark": {
          "0": "#2173E6",
          "100": "#1E68CF",
          "200": "#1A5CB8",
          "300": "#1751A1",
          "400": "#14458A",
          "500": "#113A73",
          "600": "#0D2E5C",
          "700": "#0A2245",
          "800": "#07172E",
          "900": "#030B17",
          "1000": "#000000"
        },
        "mix": {
          "0": "#D3E3FA",
          "100": "#A6C7F5",
          "200": "#7AABF0",
          "300": "#4D8FEB",
          "400": "#2173E6",
          "500": "#1A5CB8",
          "600": "#14458A",
          "700": "#0D2E5C",
          "800": "#07172E"
        },
        gray: {
          '50': '#f9fafb',
          '100': '#f0f1f3',
          '200': '#d9dbdf',
          '300': '#b7bbc2',
          '400': '#8f959f',
          '500': '#6e7582',
          '600': '#555e6e',
          '700': '#3e4859',
          '800': '#283242',
          '900': '#131f30',
        },
        cerise: {
          '50': '#fff6f6',
          '100': '#ffefef',
          '200': '#f9d3d3',
          '300': '#eaa6a6',
          '400': '#e56d6d',
          '500': '#d93c3e',
          '600': '#bd0e0f',
          '700': '#930705',
          '800': '#680605',
          '900': '#470201',
        },
        orange: {
          '50': '#fff8f1',
          '100': '#fbecdf',
          '200': '#f6d7bf',
          '300': '#e5ad8b',
          '400': '#d67a4a',
          '500': '#c4540b',
          '600': '#9c4303',
          '700': '#713707',
          '800': '#4a2702',
          '900': '#2c1b01',
        },
        lemon: {
          '50': '#fdfdea',
          '100': '#fdf6be',
          '200': '#f5e27b',
          '300': '#d9bd2f',
          '400': '#b6930d',
          '500': '#967100',
          '600': '#805501',
          '700': '#643e02',
          '800': '#422a00',
          '900': '#271a00',
        },
        green: {
          '50': '#f3faf7',
          '100': '#daf5eb',
          '200': '#b6e5d3',
          '300': '#85c8ac',
          '400': '#3ca773',
          '500': '#108835',
          '600': '#016d00',
          '700': '#005301',
          '800': '#003906',
          '900': '#072408',
        },
        leaf: {
          '50': '#edfafa',
          '100': '#d5f5f6',
          '200': '#aae7ea',
          '300': '#69c8ce',
          '400': '#13a2ad',
          '500': '#0d828d',
          '600': '#056874',
          '700': '#06505c',
          '800': '#043744',
          '900': '#01222f',
        },
        azure: {
          '50': '#f4faff',
          '100': '#e2f0ff',
          '200': '#c4defe',
          '300': '#95bbee',
          '400': '#5e95e4',
          '500': '#2173e6',
          '600': '#1358cc',
          '700': '#1242a2',
          '800': '#1a2e6c',
          '900': '#161d38',
        },
        blue: {
          '50': '#f5f8ff',
          '100': '#e5edff',
          '200': '#ccdafc',
          '300': '#a5b8e9',
          '400': '#7c91e1',
          '500': '#5c69e9',
          '600': '#4a46e1',
          '700': '#3a31b9',
          '800': '#282284',
          '900': '#191452',
        },
        indigo: {
          '50': '#faf9ff',
          '100': '#f1effe',
          '200': '#dcd7fc',
          '300': '#bcb2f2',
          '400': '#9e86e5',
          '500': '#895ddb',
          '600': '#8335c8',
          '700': '#6620a9',
          '800': '#48147b',
          '900': '#2f0d4d',
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            pre: {
              maxWidth: '100vw',
              borderRadius: 0
            },
            'pre code': {
              'word-break': 'normal'
            },
            'pre code::after': {
              content: 'none'
            },
            code: {
              'word-break': 'break-word'
            },
            a: {
              'word-break': 'break-word',
              textDecoration: 'none',
              color: theme('colors.mix.500'),
              '&:hover': {
                color: theme('colors.mix.600')
              },
              '&:visited': {
                color: theme('colors.mix.800')
              }
            }
          }
        },
        dark: {
          css: {
            color: theme('colors.gray.200'),
            strong: {
              color: theme('colors.gray.100')
            },
            blockquote: {
              color: theme('colors.gray.200'),
              backgroundColor: theme('colors.gray.800'),
              paddingTop: theme('spacing.4'),
              paddingBottom: theme('spacing.4'),
              borderTopRightRadius: theme('borderRadius.md'),
              borderBottomRightRadius: theme('borderRadius.md'),
              '> p': {
                margin: 0
              }
            },
            h1: {
              color: theme('colors.gray.100')
            },
            h2: {
              color: theme('colors.gray.100')
            },
            h3: {
              color: theme('colors.gray.100')
            },
            h4: {
              color: theme('colors.gray.100')
            },
            h5: {
              color: theme('colors.gray.100')
            },
            h6: {
              color: theme('colors.gray.100')
            },
            a: {
              color: theme('colors.indigo.500'),
              '&:hover': {
                color: theme('colors.indigo.600')
              },
              '&:visited': {
                color: theme('colors.indigo.700')
              }
            },
            code: {
              color: theme('colors.gray.200')
            },
            hr: {
              borderColor: theme('colors.gray.800')
            }
          }
        }
      })
    }
  },
  variants: {
    extend: { typography: ['dark'], translate: ['group-hover'] }
  },


  plugins: [require('@tailwindcss/typography')],
};

module.exports = config;

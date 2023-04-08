/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

const {blue} = require('./src/colors/blue.ts');
const {primary} = require('./src/colors/primary.ts');
const {red} = require('./src/colors/red.ts');
const {green} = require('./src/colors/green.ts');
const {teal} = require("./src/colors/teal.ts");
const {orange} = require('./src/colors/orange.ts');
const {grey} = require('./src/colors/grey.ts');
const {purple} = require('./src/colors/purple.ts');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@pezeshk-book/ui-kit/**/*"
  ],
  theme: {
    colors: {
      'transparent': 'transparent',
      'white': '#FFFFFF',
      'black': '#121212',
      'grey': grey,
      'primary': {
        ...primary,
        light: primary["300"],
        DEFAULT: primary["500"],
        dark: primary["700"],
      },
      'secondary': {
        ...purple,
        light: purple["300"],
        DEFAULT: purple["500"],
        dark: purple["700"],
      },
      'tertiary': {
        ...teal,
        light: teal["300"],
        DEFAULT: teal["500"],
        dark: teal["700"],
      },
      'info': {
        ...blue,
        light: blue["300"],
        DEFAULT: blue["500"],
        dark: blue["700"],
      },
      'success': {
        ...green,
        light: green["300"],
        DEFAULT: green["500"],
        dark: green["700"],
      },
      'warning': {
        ...orange,
        light: orange["300"],
        DEFAULT: orange["500"],
        dark: orange["700"],
      },
      'danger': {
        ...red,
        light: red["300"],
        DEFAULT: red["500"],
        dark: red["700"],
      },
      'control': {
        ...grey,
        light: grey["300"],
        DEFAULT: grey["500"],
        dark: grey["700"],
      },
      'purple': {
        ...purple,
        light: purple["300"],
        DEFAULT: purple["500"],
        dark: purple["700"],
      },
    },
    screens: {
      'sm': '640px',
      'md': '1024px',
      'at-xs': {'max': '639px'},
      'at-sm': {'min': '640px', 'max': '1023px'},
      'at-md': {'min': '1024px', 'max': '1199px'},
      'at-lg': '1200px',
      'lt-md': {'max': '1023px'},
      'lt-lg': {'max': '1199px'},
      'bw-xs-lg': {'min': '640px', 'max': '1199px'},
      'gt-xs': {'min': '640px'},
      'gt-sm': {'min': '1024px'},
    },
    fontSize: {
      'm-xxxs': '0.5rem',
      'm-xxs': '0.5rem',
      'm-xs': '0.625rem',
      'm-sm': '0.75rem',
      'm-base': '0.875rem',
      'm-lg': '0.9375rem',
      'm-xl': '1rem',
      'm-xxl': '1.125rem',
      'm-xxxl': '1.375rem',
      'm-4xl': '1.625rem',
      'm-5xl': '1.75rem',

      't-xxxs': '0.5rem',
      't-xxs': '0.625rem',
      't-xs': '0.75rem',
      't-sm': '0.875rem',
      't-base': '1rem',
      't-lg': '1.125rem',
      't-xl': '1.25rem',
      't-xxl': '1.5rem',
      't-xxxl': '2rem',
      't-4xl': '2.5rem',
      't-5xl': '3rem',

      'd-xxxs': '0.5rem',
      'd-xxs': '0.625rem',
      'd-xs': '0.75rem',
      'd-sm': '0.875rem',
      'd-base': '1rem',
      'd-lg': '1.25rem',
      'd-xl': '1.5rem',
      'd-xxl': '2rem',
      'd-xxxl': '2.5rem',
      'd-4xl': '4.5rem',
      'd-5xl': '6rem',
    },
    fontFamily: {
      'family-regular': 'fontRegular',
      'family-medium': 'fontMedium',
      'family-bold': 'fontBold',
      'family-light': 'fontLight',
    },
    lineHeight: {
      'm-xs': '1rem',
      'm-sm': '1.25rem',
      'm-base': '1.5rem',
      'm-lg': '1.75rem',
      'm-xl': '1.875rem',
      'm-xxl': '2rem',

      't-xs': '1.25rem',
      't-sm': '1.5rem',
      't-base': '1.75rem',
      't-lg': '2rem',
      't-xl': '2.25rem',
      't-xxl': '2.5rem',

      'd-xs': '1.75rem',
      'd-sm': '2rem',
      'd-base': '2.25rem',
      'd-lg': '2.5rem',
      'd-xl': '3rem',
      'd-xxl': '3.5rem',
    },
    minWidth: {
      '0.5': '0.125rem',
      '1': '0.25rem',
      '1.5': '0.375rem',
      '2': '0.5rem',
      '2.5': '0.625rem',
      '3': '0.75rem',
      '3.5': '0.875rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '7': '1.75rem',
      '8': '2rem',
      '9': '2.25rem',
      '10': '2.5rem',
      '11': '2.75rem',
      '12': '3rem',
      '14': '3.5rem',
      '16': '4rem',
      '20': '5rem',
      '24': '6rem',
      '28': '7rem',
      '32': '8rem',
      '36': '9rem',
      '40': '10rem',
      '44': '11rem',
      '48': '12rem',
      '52': '13rem',
      '56': '14rem',
      '60': '15rem',
      '64': '16rem',
      '72': '18rem',
      '80': '20rem',
      '96': '24rem',
    },
    minHeight: {
      '0.5': '0.125rem',
      '1': '0.25rem',
      '1.5': '0.375rem',
      '2': '0.5rem',
      '2.5': '0.625rem',
      '3': '0.75rem',
      '3.5': '0.875rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '7': '1.75rem',
      '8': '2rem',
      '9': '2.25rem',
      '10': '2.5rem',
      '11': '2.75rem',
      '12': '3rem',
      '14': '3.5rem',
      '16': '4rem',
      '20': '5rem',
      '24': '6rem',
      '28': '7rem',
      '32': '8rem',
      '36': '9rem',
      '40': '10rem',
      '44': '11rem',
      '48': '12rem',
      '52': '13rem',
      '56': '14rem',
      '60': '15rem',
      '64': '16rem',
      '72': '18rem',
      '80': '20rem',
      '96': '24rem',
    },
    extend: {},
  },
  plugins: [
    plugin(function ({addComponents}) {
      addComponents({
        '.btn-huge': {
          height: '56px',
          '@media (min-width: 640px)': {
            height: '56px',
          },
          '@media (min-width: 1024px)': {
            height: '64px',
          }
        },
        '.btn-large': {
          height: '48px',
          '@media (min-width: 640px)': {
            height: '48px',
          },
          '@media (min-width: 1024px)': {
            height: '56px',
          }
        },
        '.btn-medium': {
          height: '40px',
          '@media (min-width: 640px)': {
            height: '40px',
          },
          '@media (min-width: 1024px)': {
            height: '48px',
          }
        },
        '.btn-small': {
          height: '32px',
          '@media (min-width: 640px)': {
            height: '32px',
          },
          '@media (min-width: 1024px)': {
            height: '40px',
          }
        },
        '.btn-tiny': {
          height: '24px',
          '@media (min-width: 640px)': {
            height: '24px',
          },
          '@media (min-width: 1024px)': {
            height: '32px',
          }
        },
        '.btn-shape-huge': {
          maxWidth: '56px',
          minWidth: '56px',
          padding: '0 !important',
          '@media (min-width: 640px)': {
            maxWidth: '56px',
            minWidth: '56px',
          },
          '@media (min-width: 1024px)': {
            maxWidth: '64px',
            minWidth: '64px',
          }
        },
        '.btn-shape-large': {
          maxWidth: '48px',
          minWidth: '48px',
          padding: '0 !important',
          '@media (min-width: 640px)': {
            maxWidth: '48px',
            minWidth: '48px',
          },
          '@media (min-width: 1024px)': {
            maxWidth: '56px',
            minWidth: '56px',
          }
        },
        '.btn-shape-medium': {
          maxWidth: '40px',
          minWidth: '40px',
          padding: '0 !important',
          '@media (min-width: 640px)': {
            maxWidth: '40px',
            minWidth: '40px',
          },
          '@media (min-width: 1024px)': {
            maxWidth: '48px',
            minWidth: '48px',
          }
        },
        '.btn-shape-small': {
          maxWidth: '32px',
          minWidth: '32px',
          padding: '0 !important',
          '@media (min-width: 640px)': {
            maxWidth: '32px',
            minWidth: '32px',
          },
          '@media (min-width: 1024px)': {
            maxWidth: '40px',
            minWidth: '40px',
          }
        },
        '.btn-shape-tiny': {
          maxWidth: '24px',
          minWidth: '24px',
          padding: '0 !important',
          '@media (min-width: 640px)': {
            maxWidth: '24px',
            minWidth: '24px',
          },
          '@media (min-width: 1024px)': {
            maxWidth: '32px',
            minWidth: '32px',
          }
        }
      })
    })
  ],
}

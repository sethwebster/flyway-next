const pxValues = {
  '0px': '0px',
  '5px': '5px',
  '10px': '10px',
  '15px': '15px',
  '25px': '25px',
  '50px': '50px',
  '75px': '75px',
  '100px': '100px',
  '150px': '150px',
  '200px': '200px',
  '250px': '250px',
  '300px': '300px',
  '350px': '350px',
  '400px': '400px',
  '450px': '450px',
  '500px': '500px',
}

const percentValues = {
  '1/16': '6.25%',
  '1/8': '12.5%',
  '1/4': '25%',
  '1/2': '50%',
  '3/4': '75%',
}

module.exports = {
  purge: ['./src/**/*.html', './src/**/*.tsx', './src/**/*.jsx'],
  theme: {
    extend: {
      borderRadius: { xl: '1rem', xlg: '1.5rem' },
      fontSize: { xxs: '0.5rem' },
      height: {
        ...percentValues,
        ...pxValues,
      },
      width: {
        ...percentValues,
        ...pxValues,
      },
      minHeight: {
        ...percentValues,
        ...pxValues,
      },
      maxHeight: {
        ...percentValues,
        ...pxValues,
      },
      minWidth: {
        ...percentValues,
        ...pxValues,
      },
      margin: {
        ...percentValues,
        ...pxValues,
      },
      zIndex: {
        '-10': '-10',
        '-20': '-20',
      },
      colors: {
        themeblack: '#121726',
        themegreen: '#69BF41',
        themedarkblue: '#1A3540',
        themeblue: {
          '100': '#b2e4f7',
          '200': '#80d2f2',
          '300': '#4dbfe8',
          '400': '#23afde',
          '500': '#009cda',
          '600': '#0699c2',
          '700': '#028db0',
          '800': '#0081a1',
          '900': '#00758f',
        },
        themegrey: '#D8D8D8',
        themelightgrey: '#E9EAEB',
        unavailable: '#718096',
        themewhite: '#F2F3F5',
        gutterBg: '#FBFBFB',
        goodCondition: '#C7DB22',
        warning: '#D0011B',
      },
      fontFamily: {
        base: ['Roboto', 'sans-serif'],
      },
      opacity: {
        '95': '0.95',
      },
    },
  },
  variants: {},
  plugins: [],
}

const colors = require("tailwindcss/colors")

module.exports = {
  // purge: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // "primary", "secondary", "neutral", "success", "warning", "error", "infos"
        primary: {
          moins: colors.lightBlue[400],
          DEFAULT: colors.blue[500],
          plus: colors.indigo[600],
        },
        secondary: {
          moins: colors.fuchsia[500],
          DEFAULT: colors.purple[500],
          plus: colors.violet[500],
        },
        neutral: {
          moins: colors.gray[300],
          DEFAULT: colors.gray[400],
          plus: colors.trueGray[600],
        },
        success: {
          moins: colors.lime[400],
          DEFAULT: colors.green[500],
          plus: colors.emerald[600],
        },
        warning: {
          moins: colors.yellow[400],
          DEFAULT: colors.amber[500],
          plus: colors.amber[600],
        },
        error: {
          moins: colors.red[300],
          DEFAULT: colors.red[500],
          plus: colors.red[600],
        },
        infos: {
          moins: colors.teal[400],
          DEFAULT: colors.cyan[500],
          plus: colors.lightBlue[600],
        },
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '4px',
        sm: '1rem',
        md: '2rem',
        lg: '3rem',
        xl: '4rem',
        '2xl': '5rem',
        '3xl': '6rem',
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

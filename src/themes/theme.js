import { createTheme } from '@material-ui/core/styles'

// Text on white background
export const textColor = 'rgba(33, 33, 33, 0.82)'

// On white, equivalent to 'rgba(33, 33, 33, 0.56)'
export const lighterTextColor = '#838383'

// On white, equivalent to 'rgba(33, 33, 33, 0.22)'
export const lightestTextColor = '#cecece'

// Shading

// On white, equivalent to #838383
export const lightShadingColor = 'rgba(128, 128, 128, 0.40)'

// On white, equivalent to #ededed
export const lighterShadingColor = 'rgba(128, 128, 128, 0.14)'

// On white, equivalent to #fafafa
export const lightestShadingColor = 'rgba(128, 128, 128, 0.04)'
export const lightestShadingColorNoOpacity = '#fafafa'

// Theme
export const primaryMainColor = '#9d4ba3'
export const primaryContrastTextColor = '#fff'
export const secondaryMainColor = '#4a90e2'
export const secondaryContrastTextColor = '#fff'
export const baseFontSize = 16

const theme = createTheme({
  palette: {
    background: {
      // This value changes the HTML background color:
      // https://material-ui.com/api/css-baseline/
      default: '#fff',
    },
    primary: {
      // light: will be calculated from palette.primary.main,
      main: primaryMainColor,
      // dark: will be calculated from palette.primary.main,
      contrastText: primaryContrastTextColor,
    },
    secondary: {
      // light: will be calculated from palette.primary.main,
      main: secondaryMainColor,
      // dark: will be calculated from palette.primary.main,
      contrastText: secondaryContrastTextColor,
    },
  },
  shape: {
    borderRadius: 2,
  },
  typography: {
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    fontSize: baseFontSize,
    useNextVariants: true,
  },
  overrides: {
    MuiButton: {
      // Name of the styleSheet
      root: {
        fontWeight: '500',
      },
    },
    MuiDivider: {
      root: {
        backgroundColor: lighterShadingColor,
      },
    },
  },
})

export default theme

export const tabForTeamSeasTheme = createTheme({
  palette: {
    background: {
      // This value changes the HTML background color:
      // https://material-ui.com/api/css-baseline/
      default: '#FBF3E9',
    },
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#5094FB',
      // dark: will be calculated from palette.primary.main,
      contrastText: primaryContrastTextColor,
    },
    secondary: {
      // light: will be calculated from palette.primary.main,
      main: '#29BEBA',
      // dark: will be calculated from palette.primary.main,
      contrastText: secondaryContrastTextColor,
    },
  },
  shape: {
    borderRadius: 2,
  },
  typography: {
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif,',
    fontSize: baseFontSize,
    useNextVariants: true,

    h1: {
      fontWeight: 900,
      color: '#5094FB',
      fontFamily: 'Poppins',
      fontStyle: 'normal',
      lineHeight: 1,
      fontSize: '5rem',
    },
  },
  overrides: {
    MuiButton: {
      // Name of the styleSheet
      root: {
        fontWeight: '800',
        fontFamily: 'Poppins',
      },
      contained: {
        borderRadius: 24,
      },
    },
    MuiDivider: {
      root: {
        backgroundColor: lighterShadingColor,
      },
    },
  },
})

export const createCauseTheme = ({ primary, secondary, primaryContrast }) =>
  createTheme({
    palette: {
      background: {
        default: '#FBF3E9',
      },
      primary: {
        main: primary,
        contrastText: primaryContrast,
      },
      secondary: {
        main: secondary,
        contrastText: secondaryContrastTextColor,
      },
    },
    shape: {
      borderRadius: 2,
    },
    typography: {
      fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif,',
      fontSize: baseFontSize,
      useNextVariants: true,

      h1: {
        fontWeight: 900,
        color: '#5094FB',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        lineHeight: 1,
        fontSize: '5rem',
      },
    },
    overrides: {
      MuiButton: {
        root: {
          fontWeight: '800',
          fontFamily: 'Poppins',
        },
        contained: {
          borderRadius: 24,
        },
      },
      MuiDivider: {
        root: {
          backgroundColor: lighterShadingColor,
        },
      },
    },
  })

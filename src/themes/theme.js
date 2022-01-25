import { createTheme } from '@mui/material/styles'

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

// TODO: fix theming of divider
const theme = createTheme({
  body: {
    padding: '0px',
  },
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
    text: {
      secondary: '#fff',
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
    subtitle2: {
      fontWeight: 700,
    },
    subtitle3: {
      fontWeight: 500,
      fontFamily: 'Poppins',
      fontStyle: 'normal',
      lineHeight: 1,
      color: '#2E282A',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: '500',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
        },
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
    text: {
      secondary: '#fff',
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
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
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
    h2: {
      fontWeight: 900,
      color: '#5094FB',
      fontFamily: 'Poppins',
      fontStyle: 'normal',
      lineHeight: 1,
      fontSize: '4rem',
    },
    subtitle1: {
      fontWeight: 300,
    },
    subtitle2: {
      fontWeight: 700,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: '800',
          fontFamily: 'Poppins',
        },
        contained: {
          borderRadius: 24,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
        },
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
      text: {
        secondary: '#fff',
      },
    },
    shape: {
      borderRadius: 2,
    },
    typography: {
      fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
      fontSize: baseFontSize,
      useNextVariants: true,

      h1: {
        fontWeight: 900,
        color: primary,
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        lineHeight: 1.15,
        fontSize: '5rem',
      },
      h2: {
        fontWeight: 900,
        color: primary,
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        lineHeight: 1,
        fontSize: '4rem',
      },
      h3: {
        fontWeight: 800,
        color: primary,
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        lineHeight: 1,
        fontSize: '2.5rem',
      },
      subtitle1: {
        fontWeight: 300,
        color: '#2E282A',
        lineHeight: 1.33,
      },
      subtitle2: {
        fontWeight: 700,
      },
      caption: {
        fontWeight: 500,
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontSize: '1rem',
        lineHeight: 1.43,
        color: '#2E282A',
      },
      body1: {
        fontWeight: 400,
        fontSize: '1.05rem',
        fontFamily: 'Poppins',
        lineHeight: 1.3,
        color: '#2E282A',
      },
      body2: {
        fontWeight: 300,
        fontSize: '1rem',
        lineHeight: 1.11,
        color: '#2E282A',
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            fontWeight: '800',
            fontFamily: 'Poppins',
          },
          contained: {
            borderRadius: 24,
          },
        },
      },
      MuiDivider: {
        styleOverrides: {
          root: {
            backgroundColor: 'transparent',
          },
        },
      },
    },
  })

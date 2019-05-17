import { createMuiTheme } from 'material-ui/styles'

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

const theme = createMuiTheme({
  palette: {
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
  typography: {
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    fontSize: baseFontSize,
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

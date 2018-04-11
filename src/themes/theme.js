import { createMuiTheme } from 'material-ui/styles'

// Text on white background
export const textColor = 'rgba(33, 33, 33, 1)'
export const lighterTextColor = 'rgba(33, 33, 33, 0.56)'
export const lightestTextColor = 'rgba(33, 33, 33, 0.22)'

// Shading
export const lightShadingColor = 'rgba(128, 128, 128, 0.06)'

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
})

export default theme

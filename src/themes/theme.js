import { createMuiTheme } from 'material-ui/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#9d4ba3',
      // dark: will be calculated from palette.primary.main,
      contrastText: '#fff',
    },
    secondary: {
      // light: will be calculated from palette.primary.main,
      main: '#4a90e2',
      // dark: will be calculated from palette.primary.main,
      contrastText: '#fff',
    },
  },
  typography: {
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    fontSize: 14,
  },
})

export default theme

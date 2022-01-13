import { ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles'
import { createCauseTheme } from 'src/themes/theme'
import CssBaseline from '@material-ui/core/CssBaseline'
import catsData from 'src/data/causes/cats.json'
import seasData from 'src/data/causes/seas.json'
import blackEquityData from 'src/data/causes/blackEquity.json'

const seasTheme = createCauseTheme(seasData.data.styles.colors)
const catsTheme = createCauseTheme(catsData.data.styles.colors)
const blackEquityTheme = createCauseTheme(blackEquityData.data.styles.colors)
export const mobile = (template) => (props, loaders) =>
  <div style={{ width: 414 }}>{template(props, loaders)}</div>
export const seas = (template) => (props, loaders) =>
  (
    <ThemeProvider theme={responsiveFontSizes(seasTheme)}>
      <CssBaseline>{template(props, loaders)}</CssBaseline>
    </ThemeProvider>
  )
export const cats = (template) => (props, loaders) =>
  (
    <ThemeProvider theme={responsiveFontSizes(catsTheme)}>
      <CssBaseline>{template(props, loaders)}</CssBaseline>
    </ThemeProvider>
  )
export const blackEquity = (template) => (props, loaders) =>
  (
    <ThemeProvider theme={responsiveFontSizes(blackEquityTheme)}>
      <CssBaseline>{template(props, loaders)}</CssBaseline>
    </ThemeProvider>
  )

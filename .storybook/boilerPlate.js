import { StyledEngineProvider, ThemeProvider, responsiveFontSizes } from '@mui/material/styles'
import { action } from '@storybook/addon-actions'
import { createCauseTheme } from 'src/themes/theme'
import CssBaseline from '@mui/material/CssBaseline'
import catsData from 'src/data/causes/cats.json'
import seasData from 'src/data/causes/seas.json'

const seasTheme = createCauseTheme(seasData.data.styles.colors)
const catsTheme = createCauseTheme(catsData.data.styles.colors)

export const mobile = (template) => (props, loaders) =>
  template(props, loaders)


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

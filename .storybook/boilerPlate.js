import { StyledEngineProvider, ThemeProvider, responsiveFontSizes } from '@mui/material/styles'
import { action } from '@storybook/addon-actions'
import { createCauseTheme } from 'src/themes/theme'
import { withGlobals } from '@luigiminardim/storybook-addon-globals-controls'
import CssBaseline from '@material-ui/core/CssBaseline'
import catsData from 'src/data/causes/cats.json'
import seasData from 'src/data/causes/seas.json'

const seasTheme = createCauseTheme(seasData.data.styles.colors)
const catsTheme = createCauseTheme(catsData.data.styles.colors)
export const mobile = (template) => (props, loaders) =>
  <div style={{ width: 414 }}>{template(props, loaders)}</div>
export const seas = (template) => (props, loaders) =>
  (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={responsiveFontSizes(seasTheme)}>
        <CssBaseline>{template(props, loaders)}</CssBaseline>
      </ThemeProvider>
    </StyledEngineProvider>
  )
export const cats = (template) => (props, loaders) =>
  (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={responsiveFontSizes(catsTheme)}>
        <CssBaseline>{template(props, loaders)}</CssBaseline>
      </ThemeProvider>
    </StyledEngineProvider>
  )

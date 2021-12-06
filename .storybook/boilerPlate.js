import { ThemeProvider } from '@material-ui/core/styles'
import { action } from '@storybook/addon-actions'
import catsTheme, { tabForTeamSeasTheme } from 'src/themes/theme'
import { withGlobals } from '@luigiminardim/storybook-addon-globals-controls'
import CssBaseline from '@material-ui/core/CssBaseline'

export const mobile = (template) => (props) =>
  <div style={{ width: 428 }}>{template(props)}</div>
export const seas = (template) => (props) =>
  (
    <ThemeProvider theme={tabForTeamSeasTheme}>
      <CssBaseline>{template(props)}</CssBaseline>
    </ThemeProvider>
  )
export const cats = (template) => (props) =>
  (
    <ThemeProvider theme={catsTheme}>
      <CssBaseline>{template(props)}</CssBaseline>
    </ThemeProvider>
  )

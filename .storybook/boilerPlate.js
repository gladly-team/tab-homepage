import { StyledEngineProvider, ThemeProvider, responsiveFontSizes } from '@mui/material/styles'
import { action } from '@storybook/addon-actions'
import { createCauseTheme } from 'src/themes/theme'
import CssBaseline from '@mui/material/CssBaseline'
import getCauseDataFromName from 'src/utils/storybookHelpers/getCauseDataFromName'
import catsData from 'src/data/causes/cats.json'
import seasData from 'src/data/causes/seas.json'
import treesData from 'src/data/causes/trees.json'

export const wrapInTheme = (cause = 'cats') => (template) => (props, loaders) => {
  const causeData = getCauseDataFromName(cause)
  const causeTheme = createCauseTheme(seasData.data.styles.colors)
  return (
    <ThemeProvider theme={responsiveFontSizes(causeTheme)}>
      <CssBaseline>{template(props, loaders)}</CssBaseline>
    </ThemeProvider>
  )
}

export const SMALL_MOBILE_WIDTH_PX = 320
export const LARGE_MOBILE_WIDTH_PX = 414
export const TABLET_WIDTH_PX = 834
export const DESKTOP_WIDTH_PX = 1400
export const WIDE_MONITOR_WIDTH_PX = 1800 // Chromatic max is 1800px

export const defaultChromaticViewports = [LARGE_MOBILE_WIDTH_PX, DESKTOP_WIDTH_PX]

/* Legacy: use wrapInTheme instead. */
const seasTheme = createCauseTheme(seasData.data.styles.colors)
const catsTheme = createCauseTheme(catsData.data.styles.colors)
const treesTheme = createCauseTheme(treesData.data.styles.colors)

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

export const trees = (template) => (props, loaders) =>
  (
    <ThemeProvider theme={responsiveFontSizes(treesTheme)}>
      <CssBaseline>{template(props, loaders)}</CssBaseline>
    </ThemeProvider>
  )
/* End: legacy */

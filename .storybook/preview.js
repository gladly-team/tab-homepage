import { StyledEngineProvider, ThemeProvider, responsiveFontSizes } from '@mui/material/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { action } from '@storybook/addon-actions'
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'
import catsTheme, { tabForTeamSeasTheme } from 'src/themes/theme'
import { withGlobals } from '@luigiminardim/storybook-addon-globals-controls'

const customViewports = {
  monitor: {
    name: 'Wide Monitor',
    type: 'desktop',
    styles: {
      width: '1800px', // Chromatic max is 1800px
      height: '850px',
    },
  },
}

export const parameters = {
  layout: 'fullscreen',
  viewport: {
    viewports: {
      ...MINIMAL_VIEWPORTS,
      ...customViewports,
    },
  },
}
export const globalTypes = {
  vertical: {
    name: 'Vertical',
    description: 'the vertical experience you want',
    defaultValue: 'seas',
    options: ['seas', 'cats'],
    control: { type: 'radio' },
  },
}
// Gatsby's Link overrides:
// Gatsby Link calls the `enqueue` & `hovering` methods on the global variable ___loader.
// This global object isn't set in storybook context, requiring you to override it to empty functions (no-op),
// so Gatsby Link doesn't throw errors.
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
}
// This global variable prevents the "__BASE_PATH__ is not defined" error inside Storybook.
global.__BASE_PATH__ = '/'
// Navigating through a gatsby app using gatsby-link or any other gatsby component will use the `___navigate` method.
// In Storybook, it makes more sense to log an action than doing an actual navigate. Check out the actions addon docs for more info: https://storybook.js.org/docs/react/essentials/actions
window.___navigate = (pathname) => {
  action('NavigateTo:')(pathname)
}

// global theming
export const decorators = [
  withGlobals((Story, { vertical }) => {
    let theme
    switch (vertical) {
      case 'seas':
        theme = tabForTeamSeasTheme
        break
      case 'cats':
        theme = catsTheme
        break
      default:
        theme = tabForTeamSeasTheme
        break
    }
    return (
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={responsiveFontSizes(theme)}>
          <CssBaseline>
            <style>
              @import
              url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;800;900&display=swap');
            </style>
            <Story />
          </CssBaseline>
        </ThemeProvider>
      </StyledEngineProvider>
    )
  }),
]

import { StyledEngineProvider, ThemeProvider, responsiveFontSizes } from '@mui/material/styles'

// https://mui.com/guides/migration-v4/#storybook-emotion-with-v5
import { ThemeProvider as Emotion10ThemeProvider } from 'emotion-theming';

import CssBaseline from '@mui/material/CssBaseline'
import { action } from '@storybook/addon-actions'
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'
import defaultTheme from 'src/themes/theme'

import '@fontsource/poppins/300.css'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/800.css'
import '@fontsource/poppins/900.css'

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

const withThemeProvider = (Story, context) => {
  return (
    <Emotion10ThemeProvider theme={defaultTheme}>
        <ThemeProvider theme={responsiveFontSizes(defaultTheme, { factor: 3.4 })}>
        <CssBaseline />
        <Story {...context} />
      </ThemeProvider>
    </Emotion10ThemeProvider>
  );
};

// global theming
export const decorators = [
  withThemeProvider
]

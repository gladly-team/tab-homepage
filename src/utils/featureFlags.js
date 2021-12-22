// When changing, update text in UnsupportedBrowserDialog.js
export const safariEnabled = () => true
/* globals process */
export const showDownloadPage = () =>
  process.env.GATSBY_SHOW_TEAMSEAS_INSTALL === 'true'

export const generateCausePages = () =>
  process.env.GATSBY_GENERATE_CAUSE_PAGES === 'true'

export const isChromaticEnv = () =>
  process.env.STORYBOOK_CHROMATIC_ENV === 'true'

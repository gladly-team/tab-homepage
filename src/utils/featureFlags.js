// When changing, update text in UnsupportedBrowserDialog.js
export const safariEnabled = () => true
/* globals process */
export const showDownloadPage = () =>
  process.env.GATSBY_SHOW_TEAMSEAS_INSTALL === 'true'

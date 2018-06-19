/* globals exports */
/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// https://github.com/gatsbyjs/gatsby/issues/3314#issuecomment-353648634
import 'babel-polyfill'

// https://github.com/gatsbyjs/gatsby/issues/2177#issuecomment-382280801
exports.onClientEntry = () => {
  // Don't need to do anything here, but if you don't
  // export something, the import won't work.
}

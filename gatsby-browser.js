/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// These need to be added to Storybook views, too.
import '@fontsource/poppins/300.css'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/800.css'
import '@fontsource/poppins/900.css'

// https://github.com/gatsbyjs/gatsby/issues/2177#issuecomment-382280801
export const onClientEntry = () => {
  // Don't need to do anything here, but if you don't
  // export something, the import won't work.
}

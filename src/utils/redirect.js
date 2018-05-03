/**
 * Set window.location to the value of "url". Helpful to make
 * components more testable. This is for external URLs only. For
 * internal redirects, use gatsby-link
 * @param {string} url - The URL
 * @return {undefined}
 */
export default url => {
  window.location = url
}

/* globals exports */

/**
 * Return window.location. Useful to make components more testable.
 * @return {object} window.location
 */
const getLocation = () => {
  return window.location
}

/**
 * Return the value of a URL parameter
 * @param {string} paramName - The URL parameter key
 * @return {string|null} The value of the URL parameter
 */
const getUrlParameterValue = paramName => {
  const urlStr = exports.getLocation().href
  const url = new window.URL(urlStr)
  return url.searchParams.get(paramName)
}

// To make this module more testable by mocking
// the exports.getLocation function.
// https://github.com/facebook/jest/issues/936#issuecomment-214939935
exports.getLocation = getLocation
exports.getUrlParameterValue = getUrlParameterValue

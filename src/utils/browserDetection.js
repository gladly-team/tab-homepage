import Bowser from 'bowser'

/**
 * Return an object with a subset of browser detection methods from
 * bowser: https://www.npmjs.com/package/bowser
 * @return {Object} browserInfo
 * @return {Function<Boolean>} browserInfo.isChrome - Returns true if
 *   the client is a Chrome browser
 * @return {Function<Boolean>} browserInfo.isEdge - Returns true if
 *   the client is an Edge browser
 * @return {Function<Boolean>} browserInfo.isFirefox - Returns true if
 *   the client is a Firefox browser
 * @return {Function<Boolean>} browserInfo.isMObile - Returns true if
 *   the client is a mobile device
 */
const getBrowserInfo = () => {
  if (!window || !window.navigator.userAgent) {
    throw new Error(
      'The user agent must be defined to determine the browser info.'
    )
  }
  const browser = Bowser.getParser(window.navigator.userAgent)
  return {
    isChrome: () => {
      return browser.isBrowser('Chrome') || browser.isBrowser('Chromium')
    },
    isEdge: () => {
      return browser.isBrowser('Microsoft Edge')
    },
    isFirefox: () => {
      return browser.isBrowser('Firefox')
    },
    isMobile: () => {
      // https://github.com/lancedikson/bowser/blob/master/src/constants.js#L86
      return browser.getPlatformType() === 'mobile'
    },
  }
}

export default getBrowserInfo

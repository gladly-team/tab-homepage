import Bowser from 'bowser'

// https://github.com/lancedikson/bowser/blob/master/src/constants.js
const getBrowserInfo = () => {
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

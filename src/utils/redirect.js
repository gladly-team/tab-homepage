import {
  CHROME_BROWSER,
  EDGE_BROWSER,
  FIREFOX_BROWSER,
  SAFARI_BROWSER,
  UNSUPPORTED_BROWSER,
} from 'src/utils/constants'
import {
  chromeExtensionURL,
  homeURL,
  edgeExtensionURL,
  catsURL,
  safariExtensionURL,

  // firefoxExtensionURL,
} from 'src/utils/navigation'
import getBrowserInfo from 'src/utils/browserDetection'
import { safariEnabled } from 'src/utils/featureFlags'

/**
 * Set window.location to the value of "url". Helpful to make
 * components more testable. This is for external URLs only. For
 * internal redirects, use Gatsby's Link component.
 * @param {string} url - The URL
 * @return {undefined}
 */
const redirect = (url) => {
  window.location = url
}
export default redirect
export const detectBrowser = () => {
  let browserInfo
  try {
    browserInfo = getBrowserInfo()
  } catch (e) {
    return UNSUPPORTED_BROWSER
  }

  let browser
  if (browserInfo.isChrome()) {
    browser = CHROME_BROWSER
  } else if (browserInfo.isFirefox()) {
    browser = FIREFOX_BROWSER
  } else if (browserInfo.isEdge()) {
    browser = EDGE_BROWSER
  } else if (browserInfo.isSafari() && browserInfo.isMobile()) {
    browser = SAFARI_BROWSER
  } else {
    browser = UNSUPPORTED_BROWSER
  }
  return browser
}
export const directToAppExtension = (cats = false) => {
  const browser = detectBrowser()
  let redirectUrl = ''
  switch (browser) {
    case CHROME_BROWSER:
      redirectUrl = chromeExtensionURL
      break
    case EDGE_BROWSER:
      redirectUrl = edgeExtensionURL
      break
    case SAFARI_BROWSER:
      redirectUrl = safariEnabled()
        ? safariExtensionURL
        : cats
        ? catsURL
        : homeURL
      break

    // Firefox is temporarily not supported :(
    // case FIREFOX_BROWSER:
    //   redirectUrl = firefoxExtensionURL
    //   break
    default:
      redirectUrl = cats ? catsURL : homeURL
      break
  }
  return redirectUrl
}

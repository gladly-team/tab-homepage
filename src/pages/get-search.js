import React from 'react'
import PropTypes from 'prop-types'
import detectBrowser from 'browser-detect'
import qs from 'qs'
import {
  CHROME_BROWSER,
  FIREFOX_BROWSER,
  UNSUPPORTED_BROWSER,
} from 'src/utils/constants'
import {
  homeURL,
  searchChromeExtensionPage,
  searchFirefoxExtensionPage,
} from 'src/utils/navigation'
import redirect from 'src/utils/redirect'
import localStorageMgr from 'src/utils/local-storage'
import { SEARCH_STORAGE_REFERRAL_DATA_REFERRING_CHANNEL } from 'src/utils/constants'

// We put this page on tab.gladly.io for convenience so we can
// use the same local storage to store the referrer as we do
// during sign-up.
class GetSearchExtensionRedirectPage extends React.Component {
  componentDidMount() {
    try {
      // If there is a referrer, save it to local storage.
      const { location: { search = '' } = {} } = this.props
      const queryParams = qs.parse(search, { ignoreQueryPrefix: true })
      const referrerId =
        queryParams.r && !isNaN(parseInt(queryParams.r, 10))
          ? parseInt(queryParams.r, 10)
          : null
      if (referrerId) {
        localStorageMgr.setItem(
          SEARCH_STORAGE_REFERRAL_DATA_REFERRING_CHANNEL,
          referrerId
        )
      }

      // Based on the browser, go to the appropriate extension page.
      const browser = this.detectBrowser()
      switch (browser) {
        case CHROME_BROWSER:
          redirect(searchChromeExtensionPage)
          break
        case FIREFOX_BROWSER:
          redirect(searchFirefoxExtensionPage)
          break
        default:
          redirect(homeURL)
          break
      }
    } catch (e) {
      console.error(e)
      redirect(homeURL)
    }
  }

  detectBrowser() {
    const browserInfo = detectBrowser()
    var browser = 'other'
    switch (browserInfo.name) {
      case 'chrome':
        browser = CHROME_BROWSER
        break
      case 'chromium':
        browser = CHROME_BROWSER
        break
      case 'crios':
        browser = CHROME_BROWSER
        break
      case 'firefox':
        browser = FIREFOX_BROWSER
        break
      default:
        browser = UNSUPPORTED_BROWSER
        break
    }
    return browser
  }

  render() {
    return null
  }
}

GetSearchExtensionRedirectPage.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
  }).isRequired,
}

GetSearchExtensionRedirectPage.defaultProps = {}

export default GetSearchExtensionRedirectPage

import React from 'react'
import PropTypes from 'prop-types'
import qs from 'qs'
import {
  CHROME_BROWSER,
  EDGE_BROWSER,
  FIREFOX_BROWSER,
  UNSUPPORTED_BROWSER,
} from 'src/utils/constants'
import {
  chromeExtensionURL,
  homeURL,
  edgeExtensionURL,
  firefoxExtensionURL,
} from 'src/utils/navigation'
import redirect from 'src/utils/redirect'
import localStorageMgr from 'src/utils/local-storage'
import { STORAGE_REFERRAL_DATA_REFERRING_CHANNEL } from 'src/utils/constants'
import getBrowserInfo from 'src/utils/browserDetection'

class GetExtensionRedirectPage extends React.Component {
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
          STORAGE_REFERRAL_DATA_REFERRING_CHANNEL,
          referrerId
        )
      }

      // Based on the browser, go to the appropriate extension page.
      const browser = this.detectBrowser()
      switch (browser) {
        case CHROME_BROWSER:
          redirect(chromeExtensionURL)
          break
        case EDGE_BROWSER:
          redirect(edgeExtensionURL)
          break
        case FIREFOX_BROWSER:
          redirect(firefoxExtensionURL)
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
    } else {
      browser = UNSUPPORTED_BROWSER
    }
    return browser
  }

  render() {
    return null
  }
}

GetExtensionRedirectPage.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
  }).isRequired,
}

GetExtensionRedirectPage.defaultProps = {}

export default GetExtensionRedirectPage

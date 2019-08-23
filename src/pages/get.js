import React from 'react'
import PropTypes from 'prop-types'
import detectBrowser from 'browser-detect'
import {
  CHROME_BROWSER,
  FIREFOX_BROWSER,
  UNSUPPORTED_BROWSER,
} from 'src/utils/constants'
import {
  chromeExtensionURL,
  homeURL,
  firefoxExtensionURL,
} from 'src/utils/navigation'
import redirect from 'src/utils/redirect'

class GetExtensionRedirectPage extends React.Component {
  componentDidMount() {
    // TODO: store referral parameter
    // const { location } = this.props
    // console.log(location)

    this.detectBrowser(({ browser }) => {
      switch (browser) {
        case CHROME_BROWSER:
          redirect(chromeExtensionURL)
          break
        case FIREFOX_BROWSER:
          redirect(firefoxExtensionURL)
          break
        default:
          redirect(homeURL)
          break
      }
    })
  }

  detectBrowser(callback = () => {}) {
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
    callback({ browser })
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

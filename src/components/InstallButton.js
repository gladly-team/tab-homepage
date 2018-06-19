import React from 'react'
import PropTypes from 'prop-types'
import Button from 'material-ui/Button'
import detectBrowser from 'browser-detect'
import {
  CHROME_BROWSER,
  FIREFOX_BROWSER,
  UNSUPPORTED_BROWSER,
  CHROME_WEB_STORE_HREF,
  CHROME_WEB_STORE_VERIFIED_DOMAIN,
} from 'utils/constants'
import { chromeExtensionURL, firefoxExtensionURL } from 'utils/navigation'
import redirect from 'utils/redirect'
import { getLocation } from 'utils/location'
import { downloadButtonClick } from 'utils/analytics/logEvent'

// For Chrome inline installation, requires the page to have a
// <link> elem pointing to the Chrome Web Store page:
// https://developer.chrome.com/webstore/inline_installation
class InstallButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // One of: 'chrome', 'firefox', or 'other'
      browser: UNSUPPORTED_BROWSER,
      mobile: false,
      // true when we are done detecting the browser and OS
      // in a client environment
      clientReady: false,
    }
  }

  componentDidMount() {
    // Client-specific code must run after mounting because this
    // is a static site:
    // https://reactjs.org/docs/react-dom.html#hydrate
    this.detectBrowser(() => {
      this.setState({ clientReady: true })
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
      case 'firefox':
        browser = FIREFOX_BROWSER
        break
      default:
        browser = UNSUPPORTED_BROWSER
        break
    }
    const mobile = browserInfo.mobile ? true : false
    this.setState(
      {
        browser: browser,
        mobile: mobile,
      },
      callback
    )
  }

  installFirefoxExtension() {
    redirect(firefoxExtensionURL)
  }

  // If inline install fails, redirect the user to the Chrome Web Store.
  installChromeExtensionFallback() {
    redirect(chromeExtensionURL)
  }

  // Whether we'll be able to use inline installation for the
  // Chrome extension. To do so, we need to be on the domain or
  // subdomain of the domain verified with Google.
  chromeCanInlineInstall() {
    const windowLocation = getLocation()
    return windowLocation.hostname.endsWith(CHROME_WEB_STORE_VERIFIED_DOMAIN)
  }

  chromeInstallSuccess() {
    const { onChromeInstallSuccess } = this.props
    onChromeInstallSuccess()
  }

  chromeInstallFailure(failureDetail) {
    const { onChromeInstallCanceled } = this.props
    // If install failed because the user canceled, show a page with
    // additional information. If it failed for another reason, send
    // the user the Chrome Web Store.
    // The value of failureDetail will likely be:
    //   - "User cancelled install" if the user clicked cancel
    //   - "Installs can only be initiated by one of the Chrome Web Store
    //     item's verified sites." if the site can't do inline install
    // Google says we "should not rely on specific strings" here, but
    // we'll rely on it. In the worst case, we'll send the user to the
    // Web Store, which is acceptable.
    // https://developer.chrome.com/webstore/inline_installation#triggering
    if (failureDetail === 'User cancelled install') {
      onChromeInstallCanceled()
    } else {
      this.installChromeExtensionFallback()
    }
  }

  installChromeExtension() {
    const { onChromeInstallBegin } = this.props
    if (!this.chromeCanInlineInstall()) {
      this.installChromeExtensionFallback()
      return
    }
    onChromeInstallBegin()
    try {
      // eslint-disable-next-line no-undef
      chrome.webstore.install(
        CHROME_WEB_STORE_HREF,
        this.chromeInstallSuccess.bind(this),
        this.chromeInstallFailure.bind(this)
      )
    } catch (e) {
      this.installChromeExtensionFallback()
    }
  }

  async onClick() {
    const { onUnsupportedBrowserInstallClick } = this.props

    // Log the analytics event for a download click. Wait
    // for it to finish before continuing because we may
    // redirect away from the page.
    await downloadButtonClick()

    if (this.state.mobile) {
      console.info(
        'Cannot add Tab for a Cause extension: this is a mobile device'
      )
      onUnsupportedBrowserInstallClick()
    } else {
      switch (this.state.browser) {
        case CHROME_BROWSER:
          this.installChromeExtension()
          break
        case FIREFOX_BROWSER:
          this.installFirefoxExtension()
          break
        default:
          console.info(
            'Cannot add Tab for a Cause extension: this browser is not supported'
          )
          onUnsupportedBrowserInstallClick()
          break
      }
    }
  }

  getButtonText() {
    // Customize text to browser and device
    if (this.state.mobile) {
      return 'Get it Now'
    } else {
      switch (this.state.browser) {
        case CHROME_BROWSER:
          return 'Add to Chrome'
        case FIREFOX_BROWSER:
          return 'Add to Firefox'
        default:
          return 'Get it Now'
      }
    }
  }

  render() {
    const buttonText = this.getButtonText()
    return (
      <Button
        variant="raised"
        color="primary"
        onClick={this.onClick.bind(this)}
        size="large"
        style={{
          minWidth: 200,
        }}
      >
        {buttonText}
      </Button>
    )
  }
}

InstallButton.propTypes = {
  onChromeInstallBegin: PropTypes.func,
  onChromeInstallCanceled: PropTypes.func,
  onChromeInstallSuccess: PropTypes.func,
  onUnsupportedBrowserInstallClick: PropTypes.func,
}

InstallButton.defaultProps = {
  onChromeInstallBegin: () => {},
  onChromeInstallCanceled: () => {},
  onChromeInstallSuccess: () => {},
  onUnsupportedBrowserInstallClick: () => {},
}

export default InstallButton

import React from 'react'
import PropTypes from 'prop-types'
import Button from '@mui/material/Button'
import {
  CHROME_BROWSER,
  EDGE_BROWSER,
  FIREFOX_BROWSER,
  SAFARI_BROWSER,
  UNSUPPORTED_BROWSER,
} from 'src/utils/constants'
import {
  chromeExtensionURL,
  edgeExtensionURL,

  // firefoxExtensionURL,
  safariExtensionURL,
} from 'src/utils/navigation'
import redirect from 'src/utils/redirect'
import { downloadButtonClick } from 'src/utils/analytics/logEvent'
import getBrowserInfo from 'src/utils/browserDetection'
import { safariEnabled } from 'src/utils/featureFlags'

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
    const browserInfo = getBrowserInfo()
    let browser
    if (browserInfo.isChrome()) {
      browser = CHROME_BROWSER
    } else if (browserInfo.isFirefox()) {
      browser = FIREFOX_BROWSER
    } else if (browserInfo.isEdge()) {
      browser = EDGE_BROWSER
    } else if (browserInfo.isSafari()) {
      browser = SAFARI_BROWSER
    } else {
      browser = UNSUPPORTED_BROWSER
    }
    const mobile = browserInfo.isMobile()
    this.setState(
      {
        browser,
        mobile,
      },
      callback
    )
  }

  async onClick() {
    const { onBeforeInstall, onUnsupportedBrowserInstallClick } = this.props

    // Log the analytics event for a download click. Wait
    // for it to finish before continuing because we may
    // redirect away from the page.
    await downloadButtonClick()

    if (onBeforeInstall) {
      const response = onBeforeInstall()
      await Promise.resolve(response)
    }

    switch (this.state.browser) {
      case CHROME_BROWSER:
        redirect(chromeExtensionURL)
        break
      case EDGE_BROWSER:
        redirect(edgeExtensionURL)
        break
      case SAFARI_BROWSER:
        if (safariEnabled() && !this.state.mobile) {
          redirect(safariExtensionURL)
        } else {
          console.info(
            'Cannot add Tab for a Cause extension: this browser is not supported'
          )
          onUnsupportedBrowserInstallClick()
        }
        break
      case FIREFOX_BROWSER:
        console.info(
          'Cannot add Tab for a Cause extension: this browser is not supported'
        )
        onUnsupportedBrowserInstallClick()
        break
      default:
        console.info(
          'Cannot add Tab for a Cause extension: this browser is not supported'
        )
        onUnsupportedBrowserInstallClick()
        break
    }
  }

  getButtonText() {
    // Customize text to browser and device
    if (this.state.mobile) {
      return 'Get it Now'
    }
    switch (this.state.browser) {
      case CHROME_BROWSER:
        return 'Add to Chrome'
      case EDGE_BROWSER:
        return 'Add to Edge'
      case FIREFOX_BROWSER:
        return 'Get it Now'
      case SAFARI_BROWSER:
        return safariEnabled() ? 'Add to Safari' : 'Get it Now'
      default:
        return 'Get it Now'
    }
  }

  render() {
    const {
      onBeforeInstall, // eslint-disable-line no-unused-vars
      onUnsupportedBrowserInstallClick, // eslint-disable-line no-unused-vars
      style,
      ...otherProps
    } = this.props
    const buttonText = this.getButtonText()
    return (
      <Button
        variant="contained"
        color="primary"
        size="large"
        style={{
          minWidth: 200,
          ...style,
        }}
        {...otherProps}
        onClick={this.onClick.bind(this)}
      >
        {buttonText}
      </Button>
    )
  }
}

InstallButton.propTypes = {
  onBeforeInstall: PropTypes.func,
  onUnsupportedBrowserInstallClick: PropTypes.func,
  style: PropTypes.object,
}

InstallButton.defaultProps = {
  onBeforeInstall: null,
  onUnsupportedBrowserInstallClick: () => {},
  style: {},
}

export default InstallButton

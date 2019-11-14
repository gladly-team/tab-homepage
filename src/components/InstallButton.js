import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import detectBrowser from 'browser-detect'
import {
  CHROME_BROWSER,
  FIREFOX_BROWSER,
  UNSUPPORTED_BROWSER,
} from 'src/utils/constants'
import { chromeExtensionURL, firefoxExtensionURL } from 'src/utils/navigation'
import redirect from 'src/utils/redirect'
import { downloadButtonClick } from 'src/utils/analytics/logEvent'

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

  installChromeExtension() {
    redirect(chromeExtensionURL)
  }

  async onClick() {
    const { onUnsupportedBrowserInstallClick } = this.props

    // Log the analytics event for a download click. Wait
    // for it to finish before continuing because we may
    // redirect away from the page.
    await downloadButtonClick()

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
    const {
      onUnsupportedBrowserInstallClick, // eslint-disable-line no-unused-vars
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
  onUnsupportedBrowserInstallClick: PropTypes.func,
}

InstallButton.defaultProps = {
  onUnsupportedBrowserInstallClick: () => {},
}

export default InstallButton

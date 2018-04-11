import React from 'react'
import Button from 'material-ui/Button'
import detectBrowser from 'browser-detect'

class InstallButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // One of: 'chrome', 'firefox', or 'other'
      browser: 'other',
      mobile: false,
    }
  }

  componentWillMount() {
    this.detectBrowser()
  }

  detectBrowser() {
    const browserInfo = detectBrowser()
    var browser = 'other'
    switch (browserInfo.name) {
      case 'chrome':
        browser = 'chrome'
        break
      case 'chromium':
        browser = 'chrome'
        break
      case 'firefox':
        browser = 'firefox'
        break
      default:
        break
    }
    const mobile = browserInfo.mobile ? true : false
    this.setState({
      browser: browser,
      mobile: mobile,
    })
  }

  onClick() {
    console.log('Button clicked')
  }

  getButtonText() {
    // Customize text to browser and device
    if (this.state.mobile) {
      return 'Get it Now'
    } else {
      switch (this.state.browser) {
        case 'chrome':
          return 'Add to Chrome'
        case 'firefox':
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
      >
        {buttonText}
      </Button>
    )
  }
}

export default InstallButton

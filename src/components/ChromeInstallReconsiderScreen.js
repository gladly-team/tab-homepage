import React from 'react'
import PropTypes from 'prop-types'
import Header from 'components/Header'
import TextPageContent from 'components/TextPageContent'
import TextPageHeader from 'components/TextPageHeader'
// import { primaryMainColor, textColor } from 'themes/theme'

class ChromeInstallReconsiderScreen extends React.Component {
  close() {
    const { onCloseClick } = this.props
    onCloseClick()
  }

  render() {
    return (
      <div
        style={{
          background: '#fff',
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        }}
      >
        <Header />
        <TextPageContent>
          <TextPageHeader>Unsure about getting Tab for a Cause?</TextPageHeader>
          <div>TODO: info goes here!</div>
          <div onClick={this.close.bind(this)}>Click me to close</div>
        </TextPageContent>
      </div>
    )
  }
}

ChromeInstallReconsiderScreen.propTypes = {
  onCloseClick: PropTypes.func,
}

ChromeInstallReconsiderScreen.defaultProps = {
  onCloseClick: () => {},
}

export default ChromeInstallReconsiderScreen

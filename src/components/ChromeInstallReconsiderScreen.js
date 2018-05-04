import React from 'react'
import Header from 'components/Header'
import TextPageContent from 'components/TextPageContent'
import TextPageHeader from 'components/TextPageHeader'
// import { primaryMainColor, textColor } from 'themes/theme'

class ChromeInstallReconsiderScreen extends React.Component {
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
        </TextPageContent>
      </div>
    )
  }
}

export default ChromeInstallReconsiderScreen

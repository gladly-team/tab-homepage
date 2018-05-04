import React from 'react'
import ArrowTopRight from 'mdi-material-ui/ArrowTopRight'
import Header from 'components/Header'
import { primaryMainColor, textColor } from 'themes/theme'

class ChromeInstallInProgressScreen extends React.Component {
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
        <div
          style={{
            position: 'absolute',
            top: 260,
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'baseline' }}>
            <h1 style={{ fontSize: 23 }}>
              Click{' '}
              <span style={{ color: primaryMainColor }}>"Add extension"</span>
            </h1>
            <ArrowTopRight
              style={{ width: 30, height: 30, color: textColor }}
            />
          </div>
          <p>
            We only use the extension to make your new tab charitable and
            beautiful.
          </p>
        </div>
      </div>
    )
  }
}

export default ChromeInstallInProgressScreen

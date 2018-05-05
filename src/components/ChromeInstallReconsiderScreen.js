import React from 'react'
import PropTypes from 'prop-types'
import Header from 'components/Header'
import InstallButton from 'components/InstallButton'
import Section from 'components/Section'
import Review from 'components/Review'
import reviewImgChaseR from 'img/reviews/chase_r.png'

// TODO: tests
// FIXME: Canceling install breaks the second time. Pass down install button
// as prop?
class ChromeInstallReconsiderScreen extends React.Component {
  close() {
    const { onCloseClick } = this.props
    onCloseClick()
  }

  restartInstallClick() {
    this.props.onRestartInstall()
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
        <Header onHeaderLogoClick={this.close.bind(this)} />
        <Section style={{ justifyContent: 'center' }}>
          <div style={{ flex: 1, maxWidth: 500, minWidth: 300 }}>
            <Review
              name="Chase Rosen"
              imgUrl={reviewImgChaseR}
              starCount={5}
              minHeight={'auto'}
              style={{ minHeight: 'auto', margin: 10 }}
            >
              It's wonderful. Unobtrusive, useful, well designed, easy to
              navigate, and actually pretty fun! There is no reason to not have
              this extension. It has not affected performance and is never an
              inconvenience.
            </Review>
          </div>
          <div
            style={{
              flex: 1,
              paddingLeft: 40,
              paddingRight: 40,
              maxWidth: 500,
              minWidth: 300,
            }}
          >
            <h1>Not sure yet?</h1>
            <p>A few things to make you more sure:</p>
            <ul>
              <li>It's completely free (we raise money through ads)</li>
              <li>The extension code is open-sourced on Github</li>
              <li>
                We've been working with our charity partners for over 5 years
                now
              </li>
            </ul>
            <p>As one user put it, "There is no reason to not have this".</p>
            <InstallButton
              onChromeInstallBegin={this.restartInstallClick.bind(this)}
            />
          </div>
        </Section>
      </div>
    )
  }
}

ChromeInstallReconsiderScreen.propTypes = {
  onCloseClick: PropTypes.func,
  onRestartInstall: PropTypes.func,
}

ChromeInstallReconsiderScreen.defaultProps = {
  onCloseClick: () => {},
  onRestartInstall: () => {},
}

export default ChromeInstallReconsiderScreen

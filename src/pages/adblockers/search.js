import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import TextPageContent from 'src/components/TextPageContent'
import TextPageHeader from 'src/components/TextPageHeader'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import {
  secondaryMainColor,
  secondaryContrastTextColor,
} from 'src/themes/theme'
import Layout from 'src/components/Layout'

const adblockers = [
  {
    name: 'AdBlock Plus',
    code: 'adblock-plus',
    instructionsElem: (
      <div>
        <ul>
          <li>
            Click the AdBlock Plus icon (a stop sign with "ABP") on the top
            right of your browser
          </li>
          <li>Click the blue switch next to "Block ads on tab.gladly.io"</li>
        </ul>
      </div>
    ),
  },
  {
    name: 'uBlock',
    code: 'ublock',
    instructionsElem: (
      <div>
        <ul>
          <li>
            Click on the uBlock Origin icon (maroon shield) on the top right of
            your browser
          </li>
          <li>Click the "power" button</li>
        </ul>
      </div>
    ),
  },
  {
    name: 'Adblock',
    code: 'adblock',
    instructionsElem: (
      <div>
        <h3>Chrome</h3>
        <ul>
          <li>
            Click on the Adblock icon (a stop sign with a hand in it) on the top
            right corner of your browser
          </li>
          <li>Click "Don't run on pages on this domain"</li>
          <li>Click "Exclude"</li>
        </ul>

        <h3>Firefox</h3>
        <ul>
          <li>
            Click on the Adblock icon (a stop sign with a hand in it) on the top
            right corner of your browser
          </li>
          <li>Click "Don't run on pages on this site"</li>
          <li>Click "Exclude"</li>
        </ul>
      </div>
    ),
  },
  {
    name: 'Ghostery',
    code: 'ghostery',
    instructionsElem: (
      <div>
        <ul>
          <li>
            Click on the Ghostery icon (a ghost) on the top right of your
            browser
          </li>
          <li>Click "Trust Site"</li>
        </ul>
      </div>
    ),
  },
]

class AdblockersPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedAdblockerCode: null,
    }
  }

  changeSelectedAdblocker(adblockerCode) {
    this.setState({
      selectedAdblockerCode: adblockerCode,
    })
  }

  render() {
    const { location } = this.props
    const openGraphTitle = 'Whitelisting Your Adblocker'
    const openGraphDescription =
      'Learn how to whitelist your adblocker to raise money for charity with every browser tab you open.'

    // Get the instructions element for the selected adblocker.
    var instructions = null
    const selectedAdblockerCode = this.state.selectedAdblockerCode
    if (selectedAdblockerCode) {
      const adblockerInfo = adblockers.find(
        ab => ab.code === selectedAdblockerCode
      )
      if (adblockerInfo) {
        if (!adblockerInfo.instructionsElem) {
          throw new Error(
            `Adblocker ${adblockerInfo.name} is missing whitelist instructions.`
          )
        }
        instructions = adblockerInfo.instructionsElem
      }
    }
    return (
      <Layout brand={'search'} location={location}>
        <TextPageContent>
          <Helmet title={'Whitelisting Your Adblocker'}>
            <meta property="og:title" content={openGraphTitle} />
            <meta property="og:description" content={openGraphDescription} />
            <meta name="twitter:title" content={openGraphTitle} />
            <meta name="twitter:description" content={openGraphDescription} />
          </Helmet>
          <TextPageHeader>Whitelisting Your Adblocker</TextPageHeader>
          <Paper style={{ padding: 20 }}>
            <p>
              Search for a Cause uses ads to raise money for charity. If you
              have an ad blocker, you will likely need to whitelist Search for a
              Cause to allow ads to show.
            </p>
            <p style={{ marginBottom: 0 }}>
              <span style={{ fontWeight: 'bold' }}>Having trouble?</span> Please
              email us at contact@gladly.io
            </p>
          </Paper>
          <div style={{ marginTop: 30, marginBottom: 30 }}>
            <h2>What ad blocker do you use?</h2>
            {adblockers.map(adblocker => {
              const selected = selectedAdblockerCode === adblocker.code
              return (
                <Button
                  key={adblocker.code}
                  variant="text"
                  color="secondary"
                  onClick={this.changeSelectedAdblocker.bind(
                    this,
                    adblocker.code
                  )}
                  style={Object.assign(
                    {
                      marginLeft: 8,
                      marginRight: 8,
                      color: selected
                        ? secondaryContrastTextColor
                        : secondaryMainColor,
                    },
                    selected && {
                      background: secondaryMainColor,
                    }
                  )}
                >
                  {adblocker.name}
                </Button>
              )
            })}
          </div>
          <div
            data-test-id={'adblocker-instructions-container'}
            style={{ marginTop: 30, marginBottom: 30 }}
          >
            {instructions}
          </div>
        </TextPageContent>
      </Layout>
    )
  }
}

AdblockersPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
}

AdblockersPage.displayName = 'AdblockersPageSearch'

export default AdblockersPage

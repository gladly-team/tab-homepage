import React from 'react'
import Helmet from 'react-helmet'
import TextPageContent from 'components/TextPageContent'
import TextPageHeader from 'components/TextPageHeader'
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'
import { secondaryMainColor, secondaryContrastTextColor } from 'themes/theme'

const adblockers = [
  {
    name: 'AdBlock Plus',
    code: 'adblock-plus',
    instructionsElem: (
      <div>
        <h3>Chrome</h3>
        <ul>
          <li>
            <b>
              On <em>this</em> page (not a new tab)
            </b>, click on the AdBlock Plus icon (stop sign) on the top right of
            your browser
          </li>
          <li>
            Click "Enabled on this site" until you see "Disabled on this site"
          </li>
        </ul>

        <h3>Firefox</h3>
        <ul>
          <li>
            <b>
              On <em>this</em> page (not a new tab)
            </b>, click the AdBlock Plus icon (stop sign) on the top right of
            your browser
          </li>
          <li>Click "Disable on tab.gladly.io"</li>
        </ul>
      </div>
    ),
  },
  {
    name: 'uBlock',
    code: 'ublock',
    instructionsElem: (
      <div>
        <h3>Chrome</h3>
        <ul>
          <li>
            <b>
              On a new tab (<em>not</em> this page)
            </b>, click on the uBlock Origin icon (red shield) on the top right
            of your browser
          </li>
          <li>Click the "power" button</li>
        </ul>

        <h3>Firefox</h3>
        <ul>
          <li>
            <b>
              On a new tab (<em>not</em> this page)
            </b>, click on the uBlock Origin icon (red shield) on the top right
            of your browser
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
            <b>
              On <em>this</em> page (not a new tab)
            </b>, click on the Adblock icon (a hand) on the top right corner of
            your browser
          </li>
          <li>Click "Don't run on pages on this domain"</li>
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
        <h3>Chrome</h3>
        <Paper
          style={{
            padding: 20,
            marginBottom: 20,
            color: '#a94442',
            background: '#f2dede',
          }}
        >
          A bug in Ghostery makes it impossible to whitelist Tab for a Cause on
          Chrome. We're talking with Ghostery to resolve this.
        </Paper>
        <p>
          In the meantime, you can switch ad blockers (<a href="https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm?hl=en">
            uBlock Origin
          </a>{' '}
          is a good open-source option) or disable Ghostery altogether.
        </p>

        <h3>Firefox</h3>
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
            Tab for a Cause uses ads to raise money for charity. If you have an
            ad blocker, you will likely need to whitelist Tab for a Cause to
            allow ads to show.
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
                variant="flat"
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
    )
  }
}

export default AdblockersPage

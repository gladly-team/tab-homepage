import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Divider from '@mui/material/Divider'
import { lightestTextColor } from 'src/themes/theme'
import TextPageContent from 'src/components/TextPageContent'
import TextPageHeader from 'src/components/TextPageHeader'
import Layout from 'src/components/Layout'
import InstallButton from 'src/components/InstallButton'
import redirect from 'src/utils/redirect'
import { homeURL } from 'src/utils/navigation'
import localStorageMgr from 'src/utils/local-storage'
import { STORAGE_NEW_USER_IS_TAB_V4_BETA } from 'src/utils/constants'

function TryTabV4BetaPage(props) {
  const { location } = props
  const openGraphTitle = 'Try Tab V4 Beta'
  const openGraphDescription =
    'Test out the latest, in-progress version of Tab for a Cause.'
  return (
    <Layout brand="tab" location={location}>
      <TextPageContent>
        <Helmet title={openGraphTitle}>
          <meta property="og:title" content={openGraphTitle} />
          <meta property="og:description" content={openGraphDescription} />
          <meta name="twitter:title" content={openGraphTitle} />
          <meta name="twitter:description" content={openGraphDescription} />
        </Helmet>
        <TextPageHeader> Try the Tab V4 Beta</TextPageHeader>
        <div style={{ paddingTop: 8 }}>
          <div
            style={{
              marginBottom: 40,
            }}
          >
            <p>
              We're working on a new version of Tab for a Cause! It's still
              unstable, so it may be buggy, but you can try it out here:
            </p>
            <InstallButton
              size="medium"
              onBeforeInstall={() => {
                localStorageMgr.setItem(STORAGE_NEW_USER_IS_TAB_V4_BETA, 'true')
              }}
              onUnsupportedBrowserInstallClick={() => {
                redirect(homeURL)
              }}
            />
            <Divider
              style={{ backgroundColor: lightestTextColor, marginTop: 30 }}
            />
          </div>
        </div>
      </TextPageContent>
    </Layout>
  )
}

TryTabV4BetaPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
}

TryTabV4BetaPage.displayName = 'TryTabV4BetaPage'

export default TryTabV4BetaPage

import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Layout from 'src/components/Layout'
import InstallButton from 'src/components/InstallButton'
import redirect from 'src/utils/redirect'
import { homeURL } from 'src/utils/navigation'

const MillionPage = (props) => {
  const { location } = props

  // TODO
  const openGraphTitle = 'Million raised'
  const openGraphDescription = 'We raised a million!'

  return (
    <Layout brand={'tab'} location={location}>
      <Helmet title={openGraphTitle}>
        <meta property="og:title" content={openGraphTitle} />
        <meta property="og:description" content={openGraphDescription} />
        <meta name="twitter:title" content={openGraphTitle} />
        <meta name="twitter:description" content={openGraphDescription} />
      </Helmet>
      <p>hi</p>
      <div>
        <InstallButton
          size={'medium'}
          onUnsupportedBrowserInstallClick={() => {
            redirect(homeURL)
          }}
        />
      </div>
    </Layout>
  )
}

MillionPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
}

MillionPage.displayName = 'MillionPage'

export default MillionPage

import React from 'react'
import PropTypes from 'prop-types'
import { showDownloadPage } from '../utils/featureFlags'
import SeasPageWithTheme from '../components/TeamSeas.Install'
import SeasPageComingSoonWithTheme from '../components/TeamSeas.ComingSoon'

function Seas({ pageContext, location }) {
  return showDownloadPage() ? (
    <SeasPageWithTheme pageContext={pageContext} location={location} />
  ) : (
    <SeasPageComingSoonWithTheme
      pageContext={pageContext}
      location={location}
    />
  )
}

Seas.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
  pageContext: PropTypes.shape({
    referrer: PropTypes.shape({
      id: PropTypes.number,
    }),
  }),
}

export default Seas

import React from 'react'
import PropTypes from 'prop-types'
import SeasPageWithTheme from '../../components/TeamSeas.Install'

const TestSeas = ({ pageContext, location }) => (
  <SeasPageWithTheme pageContext={pageContext} location={location} />
)

TestSeas.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
  pageContext: PropTypes.shape({
    referrer: PropTypes.shape({
      id: PropTypes.number,
    }),
  }),
}

export default TestSeas

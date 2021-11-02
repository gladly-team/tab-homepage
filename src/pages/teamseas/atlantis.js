import React from 'react'
import PropTypes from 'prop-types'
import SeasPageWithTheme from '../../components/TeamSeas.Install'

const TestSeas = ({ pageContext, location }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
    }}
  >
    <div
      style={{
        flex: '1 0 auto',
      }}
    >
      <SeasPageWithTheme pageContext={pageContext} location={location} />
    </div>
  </div>
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

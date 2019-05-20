import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Helmet from 'react-helmet'
import Link from 'components/Link'
import { homeURL } from 'utils/navigation'
import { withTheme } from '@material-ui/core/styles'
import styles from './404.module.css'
import Layout from 'components/Layout'

// We're running into one of these problems or a related
// problem:
// "404 page component not mounted"
//   https://github.com/gatsbyjs/gatsby/issues/2223
// "404 page renders only html"
//   https://github.com/gatsbyjs/gatsby/issues/2878
//
// It looks like Gatsby routing might mount the 404
// component before the parent index.js layout:
// https://github.com/gatsbyjs/gatsby/issues/2223#issuecomment-383410514
// This breaks material-ui components that expect the
// MUI theme to exist at the root of the tree.
// To work around this, we check if the MUI theme exists
// before rendering.
class NotFoundPage extends React.Component {
  render() {
    if (!this.props.theme.palette) {
      return null
    }
    const { location } = this.props
    const openGraphTitle = 'Oops! No page here.'
    const openGraphDescription = 'This page seems to be missing.'
    return (
      <Layout location={location}>
        <div
          style={{
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Helmet title={'Missing page'}>
            <meta property="og:title" content={openGraphTitle} />
            <meta property="og:description" content={openGraphDescription} />
            <meta name="twitter:title" content={openGraphTitle} />
            <meta name="twitter:description" content={openGraphDescription} />
          </Helmet>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              maxWidth: 440,
              padding: 20,
            }}
          >
            <h1>Oops! Nothing here.</h1>
            <p style={{ marginBottom: 0, padding: '0px 20px' }}>
              Sorry about that! You probably weren't looking for cake, but have
              some cake anyway <span className={styles['cake-emoji']} />
            </p>
            <Link to={homeURL} style={{ margin: 18 }}>
              <Button variant="raised" color="primary" size="large">
                Head back home
              </Button>
            </Link>
          </div>
        </div>
      </Layout>
    )
  }
}

NotFoundPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  theme: PropTypes.shape({
    palette: PropTypes.object,
  }).isRequired,
}

NotFoundPage.defaultProps = {
  theme: {},
}

export default withTheme()(NotFoundPage)

import React from 'react'
import PropTypes from 'prop-types'
import Button from '@mui/material/Button'
import Helmet from 'react-helmet'
import Link from 'src/components/Link'
import { homeURL } from 'src/utils/navigation'
import { withTheme } from '@mui/styles'
import * as styles from './404.module.css'
import Layout from 'src/components/Layout'

class NotFoundPage extends React.Component {
  render() {
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
              some cake anyway <span className={styles.cakeEmoji} />
            </p>
            <Link to={homeURL} style={{ margin: 18 }}>
              <Button variant="contained" color="primary" size="large">
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

export default withTheme(NotFoundPage)

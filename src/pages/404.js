import React from 'react'
import PropTypes from 'prop-types'
import Button from 'material-ui/Button'
import Link from 'components/Link'
import { homeURL } from 'utils/navigation'
import { withTheme } from 'material-ui/styles'
import styles from './404.module.css'

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
    return (
      <div
        style={{
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
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
    )
  }
}

NotFoundPage.propTypes = {
  theme: PropTypes.shape({
    palette: PropTypes.object,
  }).isRequired,
}

NotFoundPage.defaultProps = {
  theme: {},
}

export default withTheme()(NotFoundPage)

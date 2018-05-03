/* globals graphql */
// Eventually will have eslint rules for Gatsby:
// https://github.com/gatsbyjs/gatsby/issues/2446
// Currently using linting recommendations from eslint,
// Prettier, and React:
// https://prettier.io/docs/en/eslint.html#why-not-both

import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from 'components/Header'
import Footer from 'components/Footer'

import { MuiThemeProvider } from 'material-ui/styles'
import theme from '../themes/theme'
import Favicon from 'img/logo32x32.png'

import { CHROME_WEB_STORE_HREF } from 'utils/constants'

// Note that layouts will be deprecated in Gatsby V2:
// https://github.com/gatsbyjs/gatsby/issues/3830

// Use flexbox to make sure the footer sticks to the bottom of the page:
// https://css-tricks.com/couple-takes-sticky-footer/#article-header-id-3
class Layout extends React.Component {
  render() {
    const { data, location } = this.props
    const absoluteUrl = `https://${data.site.siteMetadata.domain}${
      location.pathname
    }`
    return (
      <MuiThemeProvider theme={theme} sheetsManager={new Map()}>
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
            <Helmet
              titleTemplate={`%s - ${data.site.siteMetadata.title}`}
              defaultTitle={data.site.siteMetadata.title}
            >
              <meta
                name="description"
                content={data.site.siteMetadata.descriptionLong}
              />
              <meta name="keywords" content={data.site.siteMetadata.keywords} />
              <link rel="canonical" href={absoluteUrl} />
              <link rel="chrome-webstore-item" href={CHROME_WEB_STORE_HREF} />
              <link rel="icon" href={Favicon} />
              <meta property="og:url" content={absoluteUrl} />
              <meta
                property="og:title"
                content={data.site.siteMetadata.metaTagCallToAction}
              />
              <meta
                property="og:description"
                content={data.site.siteMetadata.descriptionShort}
              />
              <meta
                property="og:image"
                content={data.site.siteMetadata.metaTagImage}
              />
              <meta
                name="twitter:title"
                content={data.site.siteMetadata.metaTagCallToAction}
              />
              <meta name="twitter:card" content="summary_large_image" />
              <meta
                name="twitter:description"
                content={data.site.siteMetadata.descriptionShort}
              />
              <meta
                name="twitter:site"
                content={data.site.siteMetadata.twitterHandle}
              />
              <meta
                name="twitter:creator"
                content={data.site.siteMetadata.twitterHandle}
              />
              <meta
                name="twitter:image:src"
                content={data.site.siteMetadata.metaTagImage}
              />
              <meta
                name="twitter:domain"
                content={data.site.siteMetadata.domain}
              />
            </Helmet>

            <Header siteTitle={data.site.siteMetadata.title} />
            <div
              style={{
                paddingTop: 0,
              }}
            >
              {this.props.children()}
            </div>
          </div>
          <Footer style={{ flexShrink: 0 }} />
        </div>
      </MuiThemeProvider>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.func,
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        domain: PropTypes.string.isRequired,
        descriptionLong: PropTypes.string.isRequired,
        descriptionShort: PropTypes.string.isRequired,
        keywords: PropTypes.string.isRequired,
        metaTagCallToAction: PropTypes.string.isRequired,
        metaTagImage: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        twitterHandle: PropTypes.string.isRequired,
      }),
    }),
  }),
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        domain
        descriptionLong
        descriptionShort
        keywords
        metaTagCallToAction
        metaTagImage
        title
        twitterHandle
      }
    }
  }
`

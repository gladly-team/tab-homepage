// Eventually will have eslint rules for Gatsby:
// https://github.com/gatsbyjs/gatsby/issues/2446
// Currently using linting recommendations from eslint,
// Prettier, and React:
// https://prettier.io/docs/en/eslint.html#why-not-both

import React from 'react'
import PropTypes from 'prop-types'

import Header from 'src/components/Header'
import Footer from 'src/components/Footer'
import HeadTags from 'src/components/HeadTags'

import { ThemeProvider, StyledEngineProvider } from '@mui/styles';
import defaultTheme from 'src/themes/theme'
import { getAbsoluteURL } from 'src/utils/navigation'

// Use flexbox to make sure the footer sticks to the bottom of the page:
// https://css-tricks.com/couple-takes-sticky-footer/#article-header-id-3
export const Layout = (props) => {
  const { brand, children, location } = props
  const absoluteUrl = getAbsoluteURL(location.pathname)
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={defaultTheme}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            background: '#fff',
          }}
        >
          <div
            style={{
              flex: '1 0 auto',
            }}
          >
            <HeadTags pageURL={absoluteUrl} />
            <Header brand={brand} />
            <div
              style={{
                paddingTop: 0,
              }}
            >
              {children}
            </div>
          </div>
          <Footer style={{ flexShrink: 0 }} />
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

Layout.propTypes = {
  brand: PropTypes.oneOf(['tab', 'search', 'all']).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
}

Layout.defaultProps = {
  brand: 'tab',
}

Layout.displayName = 'Layout'

export default Layout

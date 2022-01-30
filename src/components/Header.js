import React from 'react'
import PropTypes from 'prop-types'
import Link from 'src/components/Link'
import logoWithText from 'src/img/logo-with-text.svg'
import searchLogoWithText from 'src/img/search-logo-with-text.svg'
import { homeURL, searchHomeURL } from 'src/utils/navigation'

function Header(props) {
  const { brand } = props
  return (
    <div
      style={{
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 40,
        paddingRight: 40,
      }}
    >
      <div
        data-test-id="logo-container"
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
      >
        {brand === 'tab' || brand === 'all' ? (
          <Link to={homeURL}>
            <img
              data-test-id="tab-logo-with-text"
              src={logoWithText}
              style={{ height: 40 }}
            />
          </Link>
        ) : null}
        {brand === 'all' ? (
          <h3 style={{ margin: '0px 12px 8px 12px' }}>+</h3>
        ) : null}
        {brand === 'search' || brand === 'all' ? (
          <Link to={searchHomeURL}>
            <img
              data-test-id="search-logo-with-text"
              src={searchLogoWithText}
              style={{ height: 40 }}
            />
          </Link>
        ) : null}
      </div>
    </div>
  )
}

Header.propTypes = {
  brand: PropTypes.oneOf(['tab', 'search', 'all']).isRequired,
}

Header.defaultProps = {
  brand: 'tab',
}

export default Header

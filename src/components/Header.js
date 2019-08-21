import React from 'react'
// import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import logoWithText from 'src/img/logo-with-text.svg'
import { homeURL } from 'src/utils/navigation'

const Header = () => {
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
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
        }}
      >
        <Link to={homeURL}>
          <img src={logoWithText} style={{ height: 40 }} />
        </Link>
      </div>
    </div>
  )
}

Header.propTypes = {}
Header.defaultProps = {}

export default Header

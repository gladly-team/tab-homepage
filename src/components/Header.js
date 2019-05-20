import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import logoWithText from 'src/img/logo-with-text.svg'

class Header extends React.Component {
  headerLogoClick(e) {
    if (this.props.onHeaderLogoClick) {
      e.preventDefault()
      this.props.onHeaderLogoClick()
    }
  }

  render() {
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
          <Link to="/" onClick={this.headerLogoClick.bind(this)}>
            <img src={logoWithText} style={{ height: 40 }} />
          </Link>
        </div>
      </div>
    )
  }
}

Header.propTypes = {
  onHeaderLogoClick: PropTypes.func,
}

export default Header

import React from 'react'
import Link from 'gatsby-link'

import logoWithText from '../img/logo-with-text.svg'

const Header = () => (
  <div
    style={{
      paddingTop: 20,
      paddingBottom: 20,
      paddingLeft: 40,
      paddingRight: 40,
    }}
  >
    <Link to="/">
      <img src={logoWithText} style={{ height: 40 }} />
    </Link>
  </div>
)

export default Header

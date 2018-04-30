import React from 'react'
import Link from 'gatsby-link'
import MediaQuery from 'react-responsive'
import { skinnyScreenWidth } from 'utils/layout'

import logo from 'img/logo.svg'
import logoWithText from 'img/logo-with-text.svg'

const Header = () => (
  <div
    style={{
      paddingTop: 20,
      paddingBottom: 20,
      paddingLeft: 40,
      paddingRight: 40,
    }}
  >
    <MediaQuery maxWidth={skinnyScreenWidth}>
      {matches => {
        if (matches) {
          return (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Link to="/">
                <img src={logo} style={{ height: 43 }} />
              </Link>
            </div>
          )
        } else {
          return (
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-start',
              }}
            >
              <Link to="/">
                <img src={logoWithText} style={{ height: 40 }} />
              </Link>
            </div>
          )
        }
      }}
    </MediaQuery>
  </div>
)

export default Header

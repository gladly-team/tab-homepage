import React from 'react'
import Link from 'gatsby-link'
import Divider from 'material-ui/Divider'
import PropTypes from 'prop-types'

import logoGrey from 'img/logo-grey.svg'
import {
  lightestShadingColor,
  lighterTextColor,
  lightestTextColor,
} from 'themes/theme'

class FooterLink extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hover: false,
    }
  }

  onHover() {
    this.setState({
      hover: true,
    })
  }

  onHoverEnd() {
    this.setState({
      hover: false,
    })
  }

  render() {
    const footerLinkStyle = {
      color: this.state.hover ? lighterTextColor : lightestTextColor,
      fontSize: 12,
      margin: 20,
    }
    return (
      <Link
        to="/"
        style={footerLinkStyle}
        onMouseOver={this.onHover.bind(this)}
        onMouseLeave={this.onHoverEnd.bind(this)}
      >
        {this.props.children}
      </Link>
    )
  }
}

FooterLink.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  to: PropTypes.string.isRequired,
}

class Footer extends React.Component {
  render() {
    const { style } = this.props
    return (
      <div
        style={Object.assign(
          {},
          {
            background: lightestShadingColor,
            paddingTop: 1,
            paddingBottom: 20,
            paddingLeft: 40,
            paddingRight: 40,
          },
          style
        )}
      >
        <Divider style={{ width: '100%', marginBottom: 20 }} />
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            flexWrap: 'nowrap',
            alignItems: 'center',
          }}
        >
          <Link to="/">
            <img src={logoGrey} style={{ height: 43 }} />
          </Link>
          <div
            style={{
              marginLeft: 30,
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'flex-start',
            }}
          >
            <FooterLink to="/">Help</FooterLink>
            <FooterLink to="/">Financials</FooterLink>
            <FooterLink to="/">Terms</FooterLink>
            <FooterLink to="/">Privacy</FooterLink>
            <FooterLink to="/">Team</FooterLink>
          </div>
        </div>
      </div>
    )
  }
}

Footer.propTypes = {
  style: PropTypes.object,
}

Footer.defaultProps = {
  style: {},
}

export default Footer

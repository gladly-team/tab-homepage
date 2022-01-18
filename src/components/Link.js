import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import PropTypes from 'prop-types'

// To handle both internal and external links
// https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-link#for-internal-links-only
// https://github.com/gatsbyjs/gatsby/issues/3546
class Link extends React.Component {
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
    const { children, to, style, hoverStyle, ...otherProps } = this.props

    const linkStyle = Object.assign(
      // we already set textDecoration to none in typography.js but this is
      // for storybook which does not use the gatsby typography plugin
      { textDecoration: 'none' },
      style,
      this.state.hover ? hoverStyle : null
    )

    // This assumes that any internal link (intended for Gatsby) starts
    // with exactly one slash, and that anything else is external.
    const internal = /^\/(?!\/)/.test(to)

    // Use Gatsby's Link for internal links, and <a> for others
    if (internal) {
      return (
        <GatsbyLink
          to={to}
          style={linkStyle}
          onMouseEnter={this.onHover.bind(this)}
          onMouseLeave={this.onHoverEnd.bind(this)}
          {...otherProps}
        >
          {children}
        </GatsbyLink>
      )
    }
    return (
      <a
        href={to}
        style={linkStyle}
        onMouseEnter={this.onHover.bind(this)}
        onMouseLeave={this.onHoverEnd.bind(this)}
        {...otherProps}
      >
        {children}
      </a>
    )
  }
}

Link.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  hoverStyle: PropTypes.object,
  style: PropTypes.object,
  to: PropTypes.string.isRequired,
}

Link.defaultProps = {
  hoverStyle: {},
  style: {},
}

export default Link

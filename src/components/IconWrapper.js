import React from 'react'
import PropTypes from 'prop-types'

// Changes icon styles on hover.
class IconWrapper extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hover: false,
    }
  }

  render() {
    const { hoverStyle, style } = this.props
    const iconStyle = this.state.hover ? { ...style, ...hoverStyle } : style
    return (
      <div
        onMouseEnter={() => this.setState({ hover: true })}
        onMouseLeave={() => this.setState({ hover: false })}
      >
        {React.cloneElement(this.props.children, { style: iconStyle })}
      </div>
    )
  }
}

IconWrapper.propTypes = {
  children: PropTypes.element.isRequired,
  hoverStyle: PropTypes.object,
  style: PropTypes.object,
}

IconWrapper.defaultProps = {
  hoverStyle: {},
  style: {},
}

export default IconWrapper

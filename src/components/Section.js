import React from 'react'
import PropTypes from 'prop-types'

import { lightestShadingColor } from 'themes/theme'

class Section extends React.Component {
  render() {
    const { background, style, wrap } = this.props
    return (
      <div
        style={Object.assign(
          {},
          {
            background: background === 'light' ? '#fff' : lightestShadingColor,
            width: '100%',
            maxWidth: 1600,
            margin: '0px auto',
            paddingTop: 40,
            paddingBottom: 40,
            display: 'flex',
            alignContent: 'center',
            justifyContent: wrap === 'normal' ? 'flex-end' : 'flex-start',
            flexWrap: wrap === 'normal' ? 'wrap' : 'wrap-reverse',
          },
          style
        )}
      >
        {this.props.children}
      </div>
    )
  }
}

Section.propTypes = {
  background: PropTypes.oneOf(['light', 'dark']),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  style: PropTypes.object,
  wrap: PropTypes.oneOf(['normal', 'reverse']),
}

Section.defaultProps = {
  background: 'light',
  style: {},
  wrap: 'normal',
}

export default Section

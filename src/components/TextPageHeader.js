import React from 'react'
import PropTypes from 'prop-types'
import Divider from '@material-ui/core/Divider'
import { lightestTextColor } from 'themes/theme'

class TextPageHeader extends React.Component {
  render() {
    const { style } = this.props
    return (
      <div
        style={Object.assign(
          {},
          {
            margin: 0,
          },
          style
        )}
      >
        <h1 style={{ marginBottom: 10 }}>{this.props.children}</h1>
        <Divider
          style={{ backgroundColor: lightestTextColor, marginBottom: 20 }}
        />
      </div>
    )
  }
}

TextPageHeader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  style: PropTypes.object,
}

TextPageHeader.defaultProps = {
  style: {},
}

export default TextPageHeader

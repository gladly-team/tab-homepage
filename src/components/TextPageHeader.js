import React from 'react'
import PropTypes from 'prop-types'
import Divider from '@mui/material/Divider'
import { lightestTextColor } from 'src/themes/theme'

class TextPageHeader extends React.Component {
  render() {
    const { style } = this.props
    return (
      <div
        style={{
          margin: 0,
          ...style,
        }}
      >
        <h1 style={{ marginBottom: 10 }}>{this.props.children}</h1>
        <Divider style={{ marginBottom: 20 }} />
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

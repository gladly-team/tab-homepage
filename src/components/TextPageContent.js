import React from 'react'
import PropTypes from 'prop-types'

class TextPageContent extends React.Component {
  render() {
    const { style } = this.props
    return (
      <div
        style={Object.assign(
          {},
          {
            maxWidth: 760,
            width: '100%',
            margin: '0px auto',
            padding: 20,
            textAlign: 'left',
          },
          style
        )}
      >
        {this.props.children}
      </div>
    )
  }
}

TextPageContent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  style: PropTypes.object,
}

TextPageContent.defaultProps = {
  style: {},
}

export default TextPageContent

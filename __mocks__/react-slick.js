/* eslint-env jest */
import React from 'react'
import PropTypes from 'prop-types'

const Slider = props => {
  return <span>{props.children}</span>
}

Slider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

export default Slider

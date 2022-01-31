import React from 'react'
import PropTypes from 'prop-types'

const Wave = ({ color }) => (
  <svg
    style={{ display: 'block' }}
    height="100%"
    width="100%"
    viewBox="0 0 1440 300"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1288.37 0C806.807 -5.37958e-05 679.618 165.644 518.461 222.192C390.083 267.238 310.881 282.949 190.98 291.927C162.468 294.062 0 295.822 0 295.822V300H1440V23.7135C1392.38 10.9019 1339.67 5.73012e-06 1288.37 0Z"
      fill={color}
    />
  </svg>
)

Wave.propTypes = {
  color: PropTypes.string.isRequired,
}

export default Wave

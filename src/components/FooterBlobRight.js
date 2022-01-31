import React from 'react'
import PropTypes from 'prop-types'

const FooterBlobRight = ({ color, style }) => (
  <svg
    style={style}
    width="482"
    height="570"
    viewBox="0 0 482 570"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21.5105 386.622C-62.3451 238.921 119.978 79.7062 221.621 18.5612C237.831 8.40613 270.458 -7.64376 378.851 4.2676C487.244 16.179 507.494 490.251 449.128 545.043C390.763 599.836 126.33 571.248 21.5105 386.622Z"
      fill={color}
    />
  </svg>
)
FooterBlobRight.propTypes = {
  color: PropTypes.string.isRequired,
  style: PropTypes.object,
}
export default FooterBlobRight

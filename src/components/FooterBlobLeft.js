import React from 'react'
import PropTypes from 'prop-types'
const FooterBlobLeft = ({ color, innerClassName }) => (
  <svg
    className={innerClassName}
    width="661"
    height="647"
    viewBox="0 0 661 647"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M275.74 49.75C217.613 108.83 141.936 148.217 111.363 160.526C-88.7476 271.301 24.4106 564.321 119.701 615.54C214.992 666.758 442.499 667.95 597.347 521.44C752.195 374.93 579.48 215.318 527.07 97.3955C474.66 -20.527 348.4 -24.1004 275.74 49.75Z"
      fill={color}
    />
  </svg>
)
FooterBlobLeft.propTypes = {
  color: PropTypes.string.isRequired,
  innerClassName: PropTypes.string.isRequired,
}
export default FooterBlobLeft

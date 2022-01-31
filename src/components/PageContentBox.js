import React from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'

const PageContentBox = ({ children, sx }) => (
  <Box sx={{ maxWidth: 1440, width: '100%', m: '0 auto', ...sx }}>
    {children}
  </Box>
)

PageContentBox.displayName = 'PageContentBox'

PageContentBox.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  sx: PropTypes.object,
}
PageContentBox.defaultProps = {
  sx: {},
}

export default PageContentBox

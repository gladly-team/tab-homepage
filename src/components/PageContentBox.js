import React from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'

const PageContentBox = ({ children }) => (
  <Box sx={{ maxWidth: 1440 }}>{children}</Box>
)

PageContentBox.displayName = 'PageContentBox'

PageContentBox.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

export default PageContentBox

import React from 'react'
import { styled } from '@mui/material/styles'
import PropTypes from 'prop-types'
import Popover from '@mui/material/Popover'
import { primaryMainColor } from 'src/themes/theme'

const PREFIX = 'InfoPopover'

const classes = {
  paper: `${PREFIX}-paper`,
}

const StyledPopover = styled(Popover)({
  [`& .${classes.paper}`]: {
    borderRadius: 5,
    border: `1px solid${primaryMainColor}`,
    boxShadow: '0 3px 5px 2px rgba(128, 128, 128,.7)',
    maxWidth: '50%',
  },
})

const InfoPopover = (props) => {
  const { anchorEl, children, onClose, open, ...otherProps } = props

  return (
    <StyledPopover
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
      transformOrigin={{ horizontal: 'left', vertical: 'top' }}
      {...otherProps}
      classes={{
        paper: classes.paper,
      }}
    >
      <div style={{ margin: '15px' }}>{children}</div>
    </StyledPopover>
  )
}
InfoPopover.displayName = 'InfoPopover'
InfoPopover.propTypes = {
  anchorEl: PropTypes.any,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  onClose: PropTypes.func,
  open: PropTypes.bool,
}

InfoPopover.defaultProps = {
  open: false,
  anchorEl: null,
  onClose: () => {},
}
export default InfoPopover

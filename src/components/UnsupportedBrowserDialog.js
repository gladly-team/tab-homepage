import React from 'react'
import { styled } from '@mui/material/styles'
import PropTypes from 'prop-types'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

const PREFIX = 'UnsupportedBrowserDialog'

const classes = {
  dialogTitleText: `${PREFIX}-dialogTitleText`,
}

const StyledDialog = styled(Dialog)({
  [`& .${classes.dialogTitleText}`]: {
    color: 'rgba(33, 33, 33, 0.82)', // same as h1 text color from theme
  },
})

class UnsupportedBrowserDialog extends React.Component {
  render() {
    const { onClose, ...other } = this.props

    return (
      <StyledDialog {...other}>
        <DialogTitle>
          <Typography variant="h6" className={classes.dialogTitleText}>
            This browser isn't supported
          </Typography>
        </DialogTitle>
        <DialogContent>
          Tab for a Cause is for Chrome, Safari, and Edge browsers on desktop
          computers. Please switch browsers to get a better new tab page!
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Ok
          </Button>
        </DialogActions>
      </StyledDialog>
    )
  }
}

UnsupportedBrowserDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default UnsupportedBrowserDialog

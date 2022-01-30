import React from 'react'
import PropTypes from 'prop-types'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

class UnsupportedBrowserDialog extends React.Component {
  render() {
    const { onClose, ...other } = this.props

    return (
      <Dialog {...other}>
        <DialogTitle>This browser isn't supported</DialogTitle>
        <DialogContent>
          Tab for a Cause is for Chrome, Safari, and Edge browsers on desktop
          computers. Please switch browsers to get a better new tab page!
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
}

UnsupportedBrowserDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
}

export default UnsupportedBrowserDialog

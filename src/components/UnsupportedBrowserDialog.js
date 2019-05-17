import React from 'react'
import PropTypes from 'prop-types'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Button from '@material-ui/core/Button'

class UnsupportedBrowserDialog extends React.Component {
  render() {
    const { onClose, ...other } = this.props

    return (
      <Dialog {...other}>
        <DialogTitle>This browser isn't supported</DialogTitle>
        <DialogContent>
          Tab for a Cause is for Chrome and Firefox browsers on desktop
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

import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@mui/styles'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

const styles = {
  dialogTitleText: {
    color: 'rgba(33, 33, 33, 0.82)', // same as h1 text color from theme
  },
}

class UnsupportedBrowserDialog extends React.Component {
  render() {
    const { onClose, classes, ...other } = this.props

    return (
      <Dialog {...other}>
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
      </Dialog>
    );
  }
}

UnsupportedBrowserDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default withStyles(styles)(UnsupportedBrowserDialog)

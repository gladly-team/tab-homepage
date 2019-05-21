import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

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
        <DialogTitle disableTypography>
          <Typography variant="h6" className={classes.dialogTitleText}>
            This browser isn't supported
          </Typography>
        </DialogTitle>
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
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default withStyles(styles)(UnsupportedBrowserDialog)

import React from 'react'
import PropTypes from 'prop-types'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import AppleIcon from '@mui/icons-material/Apple'
import AndroidIcon from '@mui/icons-material/Android'
import { buildMobileAppRedirectURL } from 'src/utils/navigation'
import { getUrlParameterValue } from 'src/utils/location'
import localStorageMgr from 'src/utils/local-storage'
import { STORAGE_NEW_USER_CAUSE_ID } from 'src/utils/constants'

const StoreButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
  padding: theme.spacing(1, 2),
  textTransform: 'none',
  borderRadius: theme.spacing(1),
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  minWidth: 180,
  '&.MuiButton-containedPrimary': {
    backgroundColor: '#000000',
    color: '#ffffff',
    '&:hover': {
      backgroundColor: '#333333',
    },
  },
  '&.MuiButton-containedSecondary': {
    backgroundColor: '#5c6bc0',
    color: '#ffffff',
    '&:hover': {
      backgroundColor: '#7986cb',
    },
  },
}))

class UnsupportedBrowserDialog extends React.Component {
  constructor(props) {
    super(props)
    this.handleMobileAppClick = this.handleMobileAppClick.bind(this)
  }

  handleMobileAppClick() {
    // Get query parameters
    let r = getUrlParameterValue('r') || ''
    const u = getUrlParameterValue('u') || ''
    const m = getUrlParameterValue('m') || ''

    // Check if we're on a vanity URL page by looking for referrer in page context
    // If pageContext exists and has a referrer, use that referrer ID
    if (
      !r &&
      this.props.pageContext &&
      this.props.pageContext.referrer &&
      this.props.pageContext.referrer.id
    ) {
      r = this.props.pageContext.referrer.id
    }

    // Get causeId from localStorage if it exists
    const causeId = localStorageMgr.getItem(STORAGE_NEW_USER_CAUSE_ID) || ''

    // Build and redirect to mobile app URL with campaign parameters including causeId
    const redirectUrl = buildMobileAppRedirectURL(r, u, m, causeId)
    window.location.href = redirectUrl
  }

  render() {
    const { onClose, ...other } = this.props

    return (
      <Dialog {...other}>
        <DialogTitle>This browser isn't supported</DialogTitle>
        <DialogContent>
          <Typography variant="body1" paragraph>
            Tab for a Cause is for Chrome, Safari, and Edge browsers on desktop
            computers. Please switch browsers to get a better new tab page!
          </Typography>

          <Typography variant="body1" paragraph>
            Or try our mobile app, <strong>App for a Cause</strong>, available
            on iOS and Android:
          </Typography>

          <Box display="flex" justifyContent="center" flexWrap="wrap" mt={2}>
            <StoreButton
              variant="contained"
              color="primary"
              onClick={this.handleMobileAppClick}
              startIcon={<AppleIcon />}
            >
              App Store
            </StoreButton>

            <StoreButton
              variant="contained"
              color="secondary"
              onClick={this.handleMobileAppClick}
              startIcon={<AndroidIcon />}
            >
              Google Play
            </StoreButton>
          </Box>
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
  pageContext: PropTypes.shape({
    referrer: PropTypes.shape({
      id: PropTypes.number,
    }),
  }),
}

export default UnsupportedBrowserDialog

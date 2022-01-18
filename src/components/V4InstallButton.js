import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import InstallButton from 'src/components/InstallButton'
import localStorageMgr from 'src/utils/local-storage'
import UnsupportedBrowserDialog from 'src/components/UnsupportedBrowserDialog'
import {
  STORAGE_NEW_USER_IS_TAB_V4_BETA,
  STORAGE_NEW_USER_CAUSE_ID,
} from 'src/utils/constants'

const useStyles = makeStyles((theme) => ({
  buttonStyles: {
    maxWidth: theme.spacing(30),
    marginTop: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      maxWidth: 'unset',
      width: '85%',
    },
  },
  buttonStylesFullWidth: {
    maxWidth: theme.spacing(30),
    marginTop: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      maxWidth: 'unset',
      width: '100%',
    },
  },
}))

const V4InstallButton = ({ causeId, fullWidth }) => {
  const [showUnsupportedBrowserMessage, setShowUnsupportedBrowserMessage] =
    useState(false)
  const cx = useStyles()
  return (
    <>
      <UnsupportedBrowserDialog
        open={showUnsupportedBrowserMessage}
        onClose={() => {
          setShowUnsupportedBrowserMessage(false)
        }}
      />
      <InstallButton
        className={fullWidth ? cx.buttonStylesFullWidth : cx.buttonStyles}
        color="secondary"
        size="medium"
        onBeforeInstall={() => {
          localStorageMgr.setItem(STORAGE_NEW_USER_IS_TAB_V4_BETA, 'true')
          localStorageMgr.setItem(STORAGE_NEW_USER_CAUSE_ID, causeId)
        }}
        onUnsupportedBrowserInstallClick={() => {
          setShowUnsupportedBrowserMessage(true)
        }}
      />
    </>
  )
}

V4InstallButton.propTypes = {
  causeId: PropTypes.string,
  fullWidth: PropTypes.bool,
}
V4InstallButton.defaultProps = {
  fullWidth: false,
}
export default V4InstallButton
